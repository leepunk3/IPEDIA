import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Google Doc Content Parser API Endpoint
app.post('/api/gdoc/content', async (req, res) => {
  try {
    const { docUrl } = req.body;
    if (!docUrl || typeof docUrl !== 'string') {
      return res.status(400).json({ error: 'docUrl이 필요합니다.' });
    }

    const match = docUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const docId = match ? match[1] : docUrl;

    if (!docId) {
      return res.status(400).json({ error: '올바른 구글 문서 URL이 아닙니다.' });
    }

    const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=html`;
    const response = await fetch(exportUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      // Fallback to text export
      const txtUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;
      const txtRes = await fetch(txtUrl);
      if (!txtRes.ok) {
        throw new Error('구글 문서를 불러올 수 없습니다. 구글 문서의 공유 권한을 "링크가 있는 모든 사용자에게 공개"로 설정해 주세요.');
      }
      const text = await txtRes.text();
      const paragraphs = text.split('\n').map(p => p.trim()).filter(Boolean);
      return res.json({ success: true, markdown: text, paragraphs });
    }

    const html = await response.text();

    // 1. Clean Google Doc link redirects (google.com/url?q=...)
    let cleanedHtml = html.replace(/https?:\/\/www\.google\.com\/url\?q=([^&"']+)[^"']*/g, (m, p1) => {
      try {
        return decodeURIComponent(p1);
      } catch {
        return p1;
      }
    });

    // 2. Parse CSS classes inside <style>
    interface CssRule {
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      strikethrough?: boolean;
      color?: string;
      bgColor?: string;
      fontSize?: string;
      fontWeight?: string;
      fontFamily?: string;
    }

    const styleMap = new Map<string, CssRule>();
    const styleMatch = cleanedHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const rawStyleBlock = styleMatch ? styleMatch[0] : '';

    if (styleMatch) {
      const cssText = styleMatch[1];
      const ruleRegex = /\.([a-zA-Z0-9_-]+)\s*\{([^}]+)\}/g;
      let rMatch: RegExpExecArray | null;
      while ((rMatch = ruleRegex.exec(cssText)) !== null) {
        const className = rMatch[1];
        const decls = rMatch[2].split(';');
        const rule: CssRule = {};

        for (const decl of decls) {
          const parts = decl.split(':');
          if (parts.length < 2) continue;
          const k = parts[0].trim().toLowerCase();
          const v = parts.slice(1).join(':').trim();
          const vLower = v.toLowerCase();

          if (k === 'font-weight') {
            rule.fontWeight = v;
            if (vLower === '700' || vLower === 'bold' || vLower === '800' || vLower === '900') {
              rule.bold = true;
            }
          } else if (k === 'font-size') {
            rule.fontSize = v;
          } else if (k === 'font-style' && (vLower === 'italic' || vLower === 'oblique')) {
            rule.italic = true;
          } else if (k === 'text-decoration') {
            if (vLower.includes('underline')) rule.underline = true;
            if (vLower.includes('line-through')) rule.strikethrough = true;
          } else if (k === 'color' && vLower !== '#000000' && vLower !== '#000' && vLower !== 'rgb(0,0,0)' && vLower !== 'inherit') {
            rule.color = v;
          } else if (k === 'background-color' && vLower !== '#ffffff' && vLower !== '#fff' && vLower !== 'transparent' && vLower !== 'rgb(255,255,255)') {
            rule.bgColor = v;
          } else if (k === 'font-family') {
            rule.fontFamily = v;
          }
        }

        if (Object.keys(rule).length > 0) {
          styleMap.set(className, rule);
        }
      }
    }

    // Extract body content
    const bodyMatch = cleanedHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : cleanedHtml;

    // 3. Process <span> tags with classes and inline styles
    bodyContent = bodyContent.replace(/<span([^>]*)>([\s\S]*?)<\/span>/gi, (match, attrs, content) => {
      if (!content.trim()) return content;

      let isBold = false;
      let isItalic = false;
      let isUnderline = false;
      let isStrikethrough = false;
      let color = '';
      let bgColor = '';
      let fontSize = '';
      let fontWeight = '';
      let fontFamily = '';

      // Check class attribute
      const classMatch = attrs.match(/class=["']([^"']+)["']/i);
      if (classMatch) {
        const classes = classMatch[1].split(/\s+/);
        for (const cls of classes) {
          const rule = styleMap.get(cls);
          if (rule) {
            if (rule.bold) isBold = true;
            if (rule.italic) isItalic = true;
            if (rule.underline) isUnderline = true;
            if (rule.strikethrough) isStrikethrough = true;
            if (rule.color && !color) color = rule.color;
            if (rule.bgColor && !bgColor) bgColor = rule.bgColor;
            if (rule.fontSize && !fontSize) fontSize = rule.fontSize;
            if (rule.fontWeight && !fontWeight) fontWeight = rule.fontWeight;
            if (rule.fontFamily && !fontFamily) fontFamily = rule.fontFamily;
          }
        }
      }

      // Check inline style attribute
      const styleAttrMatch = attrs.match(/style=["']([^"']+)["']/i);
      if (styleAttrMatch) {
        const styleStr = styleAttrMatch[1];
        if (/font-weight:\s*(?:700|bold|800|900)/i.test(styleStr)) isBold = true;
        if (/font-style:\s*(?:italic|oblique)/i.test(styleStr)) isItalic = true;
        if (/text-decoration:[^;]*underline/i.test(styleStr)) isUnderline = true;
        if (/text-decoration:[^;]*line-through/i.test(styleStr)) isStrikethrough = true;
        
        const fsM = styleStr.match(/font-size:\s*([^;]+)/i);
        if (fsM && !fontSize) fontSize = fsM[1].trim();

        const fwM = styleStr.match(/font-weight:\s*([^;]+)/i);
        if (fwM && !fontWeight) fontWeight = fwM[1].trim();

        const colM = styleStr.match(/color:\s*([^;]+)/i);
        if (colM && !color) color = colM[1].trim();

        const bgM = styleStr.match(/background-color:\s*([^;]+)/i);
        if (bgM && !bgColor) bgColor = bgM[1].trim();
      }

      let resContent = content;
      if (isBold) resContent = `<strong>${resContent}</strong>`;
      if (isItalic) resContent = `<em>${resContent}</em>`;
      if (isUnderline) resContent = `<u>${resContent}</u>`;
      if (isStrikethrough) resContent = `<del>${resContent}</del>`;

      const styles: string[] = [];
      if (fontSize) styles.push(`font-size: ${fontSize}`);
      if (fontWeight) styles.push(`font-weight: ${fontWeight}`);
      if (color) styles.push(`color: ${color}`);
      if (bgColor) styles.push(`background-color: ${bgColor}`);
      if (fontFamily) styles.push(`font-family: ${fontFamily}`);

      if (styles.length > 0) {
        resContent = `<span style="${styles.join('; ')}">${resContent}</span>`;
      }

      return resContent;
    });

    // Extract images list
    const imgMatches = Array.from(bodyContent.matchAll(/<img[^>]+src=["']([^"']+)["']/gi));
    const images = imgMatches.map((m: any) => m[1]).filter(Boolean);

    // 4. Ensure headers, paragraphs, lists, tables, links, images stay valid HTML/Markdown
    let formattedDoc = rawStyleBlock + '\n' + bodyContent
      .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '<p>$1</p>\n\n')
      .replace(/<br\s*\/?>/gi, '<br />\n');

    res.json({
      success: true,
      markdown: formattedDoc,
      paragraphs: formattedDoc.split('\n\n').filter(p => p.trim().length > 0),
      images,
    });
  } catch (error: any) {
    console.error('Google Doc fetch error:', error);
    res.status(500).json({ error: error.message || '구글 문서 연동 중 오류가 발생했습니다.' });
  }
});

// Vite middleware & Production static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
