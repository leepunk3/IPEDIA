import { Request, Response } from 'express';

function getGoogleDocFetchTargets(docUrl: string): string[] {
  if (!docUrl || typeof docUrl !== 'string') return [];
  const cleanUrl = docUrl.trim();
  const urls: string[] = [];

  // 1. Published web link: /d/e/2PACX-xxxx/pub or /d/e/2PACX-xxxx
  const pubMatch = cleanUrl.match(/\/d\/e\/([a-zA-Z0-9-_]+)/);
  if (pubMatch && pubMatch[1]) {
    const pubId = pubMatch[1];
    urls.push(`https://docs.google.com/document/d/e/${pubId}/pub`);
    urls.push(`https://docs.google.com/document/d/e/${pubId}/pub?embedded=true`);
    urls.push(`https://docs.google.com/document/d/e/${pubId}/mobilebasic`);
  }

  // 2. Standard document link: /d/1234567890abcdef/edit or /d/1234567890abcdef
  const docMatch = cleanUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (docMatch && docMatch[1] && docMatch[1] !== 'e') {
    const docId = docMatch[1];
    urls.push(`https://docs.google.com/document/d/${docId}/export?format=html`);
    urls.push(`https://docs.google.com/document/d/${docId}/mobilebasic`);
    urls.push(`https://docs.google.com/document/d/${docId}/pub`);
    urls.push(`https://docs.google.com/document/d/${docId}/pub?embedded=true`);
    urls.push(`https://docs.google.com/document/d/${docId}/export?format=txt`);
  }

  // 3. Direct URL if cleanUrl is already a full http link not matched above
  if (urls.length === 0 && cleanUrl.startsWith('http')) {
    urls.push(cleanUrl);
  }

  return urls;
}

function isLoginOrErrorHtml(content: string): boolean {
  if (!content || content.trim().length < 10) return true;
  const lower = content.toLowerCase();

  return (
    lower.includes('accounts.google.com') ||
    lower.includes('servicelogin') ||
    lower.includes('gaia_loginform') ||
    lower.includes('sign in - google accounts') ||
    lower.includes('google 계정') ||
    (lower.includes('로그인') && lower.includes('google')) ||
    lower.includes('access denied') ||
    lower.includes('permission denied') ||
    lower.includes('you need access') ||
    lower.includes('권한이 필요합니다')
  );
}

export async function handleGdocContent(req: Request, res: Response) {
  try {
    const { docUrl } = req.body || {};
    if (!docUrl || typeof docUrl !== 'string') {
      return res.status(400).json({ error: 'docUrl이 필요합니다.' });
    }

    const targets = getGoogleDocFetchTargets(docUrl);
    if (targets.length === 0) {
      return res.status(400).json({ error: '올바른 구글 문서 URL이 아닙니다.' });
    }

    let fetchedContent = '';
    let successfullyFetched = false;

    for (const targetUrl of targets) {
      try {
        const response = await fetch(targetUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
          },
        });

        if (!response.ok) continue;

        const text = await response.text();
        if (!isLoginOrErrorHtml(text)) {
          fetchedContent = text;
          successfullyFetched = true;
          break;
        }
      } catch (err) {
        console.warn(`Failed to fetch target ${targetUrl}:`, err);
      }
    }

    if (!successfullyFetched || !fetchedContent) {
      return res.status(403).json({
        error: '구글 문서의 내용에 접근할 수 없습니다. 구글 문서 우측 상단 [공유] 버튼을 눌러 "링크가 있는 모든 사용자에게 공개(뷰어)"로 설정되어 있는지 확인해 주세요.'
      });
    }

    // Check if fetched content is plain text rather than HTML
    if (!fetchedContent.includes('<p') && !fetchedContent.includes('<span') && !fetchedContent.includes('<div') && !fetchedContent.includes('<body')) {
      const paragraphs = fetchedContent.split('\n').map(p => p.trim()).filter(Boolean);
      return res.json({
        success: true,
        markdown: fetchedContent,
        paragraphs,
        images: []
      });
    }

    // 1. Clean Google Doc link redirects (google.com/url?q=...)
    let cleanedHtml = fetchedContent.replace(/https?:\/\/www\.google\.com\/url\?q=([^&"']+)[^"']*/g, (m, p1) => {
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
      textAlign?: string;
      lineHeight?: string;
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
          } else if (k === 'text-align') {
            rule.textAlign = v;
          } else if (k === 'line-height') {
            rule.lineHeight = v;
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

    // Helper to compute inline style string from tag attributes
    const processTagWithStyles = (tagName: string, attrs: string, content: string): string => {
      if (!content.trim() && tagName === 'span') return content;

      let isBold = false;
      let isItalic = false;
      let isUnderline = false;
      let isStrikethrough = false;
      let color = '';
      let bgColor = '';
      let fontSize = '';
      let fontWeight = '';
      let fontFamily = '';
      let textAlign = '';

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
            if (rule.textAlign && !textAlign) textAlign = rule.textAlign;
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

        const taM = styleStr.match(/text-align:\s*([^;]+)/i);
        if (taM && !textAlign) textAlign = taM[1].trim();
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
      if (textAlign) styles.push(`text-align: ${textAlign}`);

      const styleString = styles.length > 0 ? ` style="${styles.join('; ')}"` : '';

      return `<${tagName}${styleString}>${resContent}</${tagName}>`;
    };

    // 3. Process span, p, h1-h6 tags to preserve styling
    bodyContent = bodyContent.replace(/<span([^>]*)>([\s\S]*?)<\/span>/gi, (m, attrs, content) =>
      processTagWithStyles('span', attrs, content)
    );

    bodyContent = bodyContent.replace(/<p([^>]*)>([\s\S]*?)<\/p>/gi, (m, attrs, content) =>
      processTagWithStyles('p', attrs, content) + '\n\n'
    );

    bodyContent = bodyContent.replace(/<(h[1-6])([^>]*)>([\s\S]*?)<\/\1>/gi, (m, hTag, attrs, content) =>
      processTagWithStyles(hTag, attrs, content) + '\n\n'
    );

    // Extract images list
    const imgMatches = Array.from(bodyContent.matchAll(/<img[^>]+src=["']([^"']+)["']/gi));
    const images = imgMatches.map((m: any) => m[1]).filter(Boolean);

    // 4. Final document formatting
    let formattedDoc = rawStyleBlock + '\n' + bodyContent.replace(/<br\s*\/?>/gi, '<br />\n');

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
}
