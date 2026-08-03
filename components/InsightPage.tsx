import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, ChevronRight, RefreshCw, X } from 'lucide-react';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export interface Post {
  id: string;
  no: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  author: string;
  content: string[];
  rawText?: string;
  docUrl?: string;
  status?: string;
  thumbnail?: string | null;
  images?: string[];
}

// 기본 설정된 구글 시트 ID
const DEFAULT_SHEET_ID = "1fp4ozWNdS2VjY8Mkq5fKCBl7T-DtGHXdCoTmoFDc5Dg";

export const InsightPage: React.FC = () => {
  const [sheetId] = useState<string>(() => {
    return localStorage.getItem('INSIGHT_SHEET_ID') || DEFAULT_SHEET_ID;
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingContent, setIsLoadingContent] = useState<boolean>(false);
  const [gdocMarkdownMap, setGdocMarkdownMap] = useState<Record<string, string>>({});
  const [gdocErrorMap, setGdocErrorMap] = useState<Record<string, string>>({});
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // 구글 시트 데이터 연동
  const fetchSheetData = async (targetSheetId: string) => {
    if (!targetSheetId.trim()) {
      setPosts([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const url = `https://docs.google.com/spreadsheets/d/${targetSheetId.trim()}/gviz/tq?tqx=out:json`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('구글 시트 응답 오류');

      const text = await res.text();
      const jsonStart = text.indexOf('{');
      const jsonEnd = text.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
        const json = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
        const rows = json.table.rows || [];
        const fetchedPosts: Post[] = [];

        const getCellVal = (cell: any): string => {
          if (!cell) return '';
          if (cell.f != null && String(cell.f).trim() !== '') return String(cell.f).trim();
          if (cell.v != null) {
            const raw = String(cell.v).trim();
            if (raw.startsWith('Date(')) {
              const match = raw.match(/Date\((\d+),\s*(\d+),\s*(\d+)\)/);
              if (match) {
                return `${match[1]}. ${Number(match[2]) + 1}. ${match[3]}`;
              }
            }
            return raw;
          }
          return '';
        };

        const extractUrlFromCell = (cell: any): string => {
          if (!cell) return '';
          const f = cell.f ? String(cell.f) : '';
          const v = cell.v ? String(cell.v) : '';
          const combined = `${f} ${v}`;

          const match = combined.match(/https?:\/\/[^\s"'<>\(\)]+/);
          if (match) {
            let url = match[0];
            url = url.replace(/["'\)\>\,\.]*$/, '');
            return url;
          }
          return '';
        };

        const colMap = { no: -1, title: -1, date: -1, category: -1, summary: -1, author: -1, content: -1, docUrl: -1, status: -1 };
        let headerRowIndex = -1;

        for (let r = 0; r < Math.min(rows.length, 5); r++) {
          const cells = rows[r]?.c || [];
          let foundCount = 0;
          for (let c = 0; c < cells.length; c++) {
            const txt = getCellVal(cells[c]).toLowerCase();
            if (!txt) continue;

            if (colMap.no === -1 && (txt.includes('번호') || txt === 'no' || txt.includes('순번'))) { colMap.no = c; foundCount++; }
            else if (colMap.title === -1 && (txt.includes('제목') || txt.includes('title'))) { colMap.title = c; headerRowIndex = r; foundCount++; }
            else if (colMap.date === -1 && (txt.includes('작성일') || txt.includes('날짜') || txt.includes('date'))) { colMap.date = c; foundCount++; }
            else if (colMap.category === -1 && (txt.includes('카테고리') || txt.includes('분류') || txt.includes('category'))) { colMap.category = c; foundCount++; }
            else if (colMap.summary === -1 && (txt.includes('요약') || txt.includes('summary'))) { colMap.summary = c; foundCount++; }
            else if (colMap.author === -1 && (txt.includes('작성자') || txt.includes('author'))) { colMap.author = c; foundCount++; }
            else if (colMap.docUrl === -1 && (txt.includes('구글문서') || txt.includes('문서') || txt.includes('doc') || txt.includes('링크') || txt.includes('url') || txt.includes('g열'))) { colMap.docUrl = c; foundCount++; }
            else if (colMap.content === -1 && (txt.includes('본문') || txt.includes('내용') || txt.includes('content'))) { colMap.content = c; foundCount++; }
            else if (colMap.status === -1 && (txt.includes('상태') || txt.includes('status'))) { colMap.status = c; foundCount++; }
          }
          if (headerRowIndex !== -1 || foundCount >= 2) {
            if (headerRowIndex === -1) headerRowIndex = r;
            break;
          }
        }

        let startOffset = 0;
        if (rows.length > 0) {
          const sampleCells = rows[headerRowIndex >= 0 ? headerRowIndex + 1 : 0]?.c || [];
          if (!getCellVal(sampleCells[0]) && getCellVal(sampleCells[2])) startOffset = 2;
        }

        if (colMap.no === -1) colMap.no = startOffset + 0;
        if (colMap.title === -1) colMap.title = startOffset + 1;
        if (colMap.date === -1) colMap.date = startOffset + 2;
        if (colMap.category === -1) colMap.category = startOffset + 3;
        if (colMap.summary === -1) colMap.summary = startOffset + 4;
        if (colMap.author === -1) colMap.author = startOffset + 5;
        if (colMap.content === -1) colMap.content = startOffset + 6;
        if (colMap.status === -1) colMap.status = startOffset + 7;

        rows.forEach((row: any, idx: number) => {
          if (headerRowIndex !== -1 && idx <= headerRowIndex) return;
          const c = row.c || [];

          const title = getCellVal(c[colMap.title]);
          const noVal = getCellVal(c[colMap.no]);
          const date = getCellVal(c[colMap.date]);
          const category = getCellVal(c[colMap.category]) || '일반';
          const summary = getCellVal(c[colMap.summary]);
          const author = getCellVal(c[colMap.author]) || '아이피디아';
          const rawContent = getCellVal(c[colMap.content]);
          const status = getCellVal(c[colMap.status]) || '게시';

          if (!title || title === '제목' || title === 'Title' || status === '비공개' || status === '숨김' || status === 'N') return;

          const no = noVal ? (noVal.toUpperCase().startsWith('NO') ? noVal : `NO. ${noVal}`) : `NO. ${rows.length - idx}`;
          let docUrl = '';
          
          if (colMap.docUrl !== -1 && c[colMap.docUrl]) {
            docUrl = extractUrlFromCell(c[colMap.docUrl]);
          }
          if (!docUrl && c[startOffset + 6]) {
            docUrl = extractUrlFromCell(c[startOffset + 6]);
          }
          if (!docUrl && c[6]) {
            docUrl = extractUrlFromCell(c[6]);
          }
          if (!docUrl && c[colMap.content]) {
            docUrl = extractUrlFromCell(c[colMap.content]);
          }
          if (!docUrl) {
            for (let cellIdx = 0; cellIdx < c.length; cellIdx++) {
              const foundUrl = extractUrlFromCell(c[cellIdx]);
              if (foundUrl) {
                docUrl = foundUrl;
                break;
              }
            }
          }

          const content = rawContent && !docUrl
            ? rawContent.split('\n').map(p => p.trim()).filter(Boolean)
            : (summary ? [summary] : [title]);

          fetchedPosts.push({
            id: `sheet-${idx}`,
            no,
            title,
            date: date || new Date().toLocaleDateString('ko-KR'),
            category,
            summary: summary || (content[0] ? content[0].substring(0, 100) : title),
            author,
            content,
            rawText: rawContent,
            docUrl,
            status
          });
        });

        if (fetchedPosts.length > 0) {
          setPosts(fetchedPosts);
          setLastUpdated(new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }));
        } else {
          setPosts([]);
        }
      }
    } catch (err) {
      console.warn('Google Sheets fetch notice:', err);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 초기 로드 시 구글 시트 데이터 로드
  useEffect(() => {
    fetchSheetData(sheetId);
  }, [sheetId]);

  // Google Doc Content 로드
  const fetchGDocContent = async (postId: string, docUrl: string) => {
    if (gdocMarkdownMap[postId]) return;

    setIsLoadingContent(true);
    setGdocErrorMap(prev => ({ ...prev, [postId]: '' }));

    try {
      const res = await fetch('/api/gdoc/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docUrl }),
      });
      const data = await res.json();
      if (data.success && data.markdown) {
        setGdocMarkdownMap(prev => ({ ...prev, [postId]: data.markdown }));
      } else if (data.error) {
        setGdocErrorMap(prev => ({ ...prev, [postId]: data.error }));
      }
    } catch (err) {
      console.warn('Error fetching Google Doc content:', err);
      setGdocErrorMap(prev => ({
        ...prev,
        [postId]: '구글 문서를 불러오는 중 문제가 발생했습니다. 구글 문서의 공유 권한이 "링크가 있는 모든 사용자에게 공개" 상태인지 확인해주세요.'
      }));
    } finally {
      setIsLoadingContent(false);
    }
  };

  const handleOpenPost = (id: string) => {
    setSelectedPostId(id);
    const target = posts.find(p => p.id === id);
    if (target?.docUrl && (target.docUrl.includes('docs.google.com') || target.docUrl.startsWith('http')) && !gdocMarkdownMap[id]) {
      fetchGDocContent(id, target.docUrl);
    }
  };

  const handleCloseDetail = () => setSelectedPostId(null);

  const selectedPost = useMemo(
    () => posts.find(p => p.id === selectedPostId) ?? null,
    [posts, selectedPostId]
  );

  const categories = useMemo(() => {
    const set = new Set(posts.map(p => p.category));
    return ['전체', ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === '전체') return posts;
    return posts.filter(p => p.category === selectedCategory);
  }, [posts, selectedCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [selectedPostId, selectedCategory]);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] selection:bg-[#FF5A00] selection:text-white">
      <Header scrolled={true} />

      <main className="pt-24 md:pt-40 pb-20 md:pb-32">
        {/* Top Header Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          {!selectedPost && (
            <div className="text-center mb-12 md:mb-16 relative">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-6xl font-black text-[#1F2F6E] mb-6 md:mb-8 tracking-tighter leading-tight"
              >
                IPEDIA <span className="text-[#FF5A00]">INSIGHT</span>
              </motion.h2>

              {/* Category Filter Pills */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto pt-2 pb-2 no-scrollbar max-w-full">
                {categories.map(cat => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#FF5A00] text-white shadow-md'
                          : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/80'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {selectedPost ? (
            /* Detailed Post View */
            <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto shadow-xl relative">
              <button
                type="button"
                onClick={handleCloseDetail}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                title="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-between mb-4 pr-10">
                <span className="text-[#FF5A00] font-bold text-sm tracking-wider">{selectedPost.no}</span>
                <span className="text-slate-500 text-xs font-medium">{selectedPost.date}</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-slate-900 leading-snug tracking-tight mb-4">
                {selectedPost.title}
              </h2>

              <div className="text-xs text-slate-500 mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
                <span>작성: {selectedPost.author}</span>
                <span className="text-[#FF5A00] bg-[#FF5A00]/10 px-2.5 py-0.5 rounded-full font-semibold">
                  {selectedPost.category}
                </span>
              </div>

              {/* Content area: Clean Native Article View */}
              <div className="space-y-6 text-sm md:text-base text-slate-800 leading-relaxed min-h-[150px]">
                {/* Image Gallery / Thumbnail if present */}
                {selectedPost.thumbnail && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 max-h-[380px] w-full bg-slate-50 mb-6">
                    <img
                      src={selectedPost.thumbnail}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                      onError={e => (e.currentTarget.style.display = 'none')}
                    />
                  </div>
                )}

                {/* Google Doc Dynamic Markdown Content */}
                {selectedPost.docUrl && gdocMarkdownMap[selectedPost.id] ? (
                  <div className="prose max-w-none text-slate-900 space-y-4 leading-relaxed">
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        table: ({ node, ...props }) => (
                          <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 bg-white shadow-sm">
                            <table className="w-full text-left text-sm text-slate-800 border-collapse" {...props} />
                          </div>
                        ),
                        thead: ({ node, ...props }) => <thead className="bg-slate-100 text-slate-900 font-semibold text-xs uppercase border-b border-slate-200" {...props} />,
                        th: ({ node, ...props }) => <th className="px-4 py-3 font-semibold text-[#FF5A00] border-r border-slate-200 last:border-r-0" {...props} />,
                        td: ({ node, ...props }) => <td className="px-4 py-3 border-b border-slate-200 border-r border-slate-200 last:border-r-0 text-slate-800" {...props} />,
                        tr: ({ node, ...props }) => <tr className="hover:bg-slate-50 transition-colors" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                        b: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                        em: ({ node, ...props }) => <em className="italic text-slate-800" {...props} />,
                        i: ({ node, ...props }) => <em className="italic text-slate-800" {...props} />,
                        u: ({ node, ...props }) => <u className="underline text-slate-900 decoration-[#FF5A00]/80 decoration-2 underline-offset-2" {...props} />,
                        del: ({ node, ...props }) => <del className="line-through text-slate-400" {...props} />,
                        p: ({ node, ...props }) => <p className="mb-3 leading-relaxed text-slate-800" {...props} />,
                        span: ({ node, ...props }) => <span {...props} />,
                        blockquote: ({ node, ...props }) => (
                          <blockquote className="border-l-4 border-[#FF5A00] pl-4 py-2 my-4 bg-[#FF5A00]/5 rounded-r-lg italic text-slate-700 font-medium" {...props} />
                        ),
                        img: ({ node, ...props }) => (
                          <img className="rounded-xl border border-slate-200 shadow-md my-4 max-h-[450px] w-auto mx-auto object-contain" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                          <a className="text-[#FF5A00] underline hover:text-[#D44800] transition-colors font-medium" target="_blank" rel="noopener noreferrer" {...props} />
                        ),
                        h1: ({ node, ...props }) => <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-3 border-b border-slate-200 pb-2" {...props} />,
                        h2: ({ node, ...props }) => <h2 className="text-lg md:text-xl font-bold text-slate-900 mt-5 mb-2" {...props} />,
                        h3: ({ node, ...props }) => <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-4 mb-2" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1 my-3 text-slate-800" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-1 my-3 text-slate-800" {...props} />,
                      }}
                    >
                      {gdocMarkdownMap[selectedPost.id]}
                    </Markdown>
                  </div>
                ) : isLoadingContent ? (
                  <div className="text-center py-12 text-slate-500">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#FF5A00]" />
                    <p className="text-xs">상세 콘텐츠를 불러오는 중입니다...</p>
                  </div>
                ) : gdocErrorMap[selectedPost.id] ? (
                  <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm my-4 shadow-sm">
                    <p className="font-bold mb-1.5 text-base text-amber-950 flex items-center gap-2">
                      ⚠️ 구글 문서 연동 안내
                    </p>
                    <p className="leading-relaxed text-xs md:text-sm text-amber-800 mb-3">
                      {gdocErrorMap[selectedPost.id]}
                    </p>
                    {selectedPost.docUrl && (
                      <a
                        href={selectedPost.docUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5A00] hover:underline"
                      >
                        구글 문서 원본 직접 열기 <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedPost.content && selectedPost.content.length > 0 ? (
                      selectedPost.content.map((paragraph, idx) => (
                        <div key={idx} className="text-slate-800 leading-relaxed text-sm md:text-base font-normal">
                          <Markdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                              table: ({ node, ...props }) => (
                                <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 bg-white shadow-sm">
                                  <table className="w-full text-left text-sm text-slate-800 border-collapse" {...props} />
                                </div>
                              ),
                              thead: ({ node, ...props }) => <thead className="bg-slate-100 text-slate-900 font-semibold text-xs uppercase border-b border-slate-200" {...props} />,
                              th: ({ node, ...props }) => <th className="px-4 py-3 font-semibold text-[#FF5A00] border-r border-slate-200 last:border-r-0" {...props} />,
                              td: ({ node, ...props }) => <td className="px-4 py-3 border-b border-slate-200 border-r border-slate-200 last:border-r-0 text-slate-800" {...props} />,
                              tr: ({ node, ...props }) => <tr className="hover:bg-slate-50 transition-colors" {...props} />,
                              strong: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                              b: ({ node, ...props }) => <strong className="font-bold text-slate-900" {...props} />,
                              em: ({ node, ...props }) => <em className="italic text-slate-800" {...props} />,
                              i: ({ node, ...props }) => <em className="italic text-slate-800" {...props} />,
                              u: ({ node, ...props }) => <u className="underline text-slate-900 decoration-[#FF5A00]/80 decoration-2 underline-offset-2" {...props} />,
                              del: ({ node, ...props }) => <del className="line-through text-slate-400" {...props} />,
                              p: ({ node, ...props }) => <p className="mb-3 leading-relaxed text-slate-800" {...props} />,
                              span: ({ node, ...props }) => <span {...props} />,
                              blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-[#FF5A00] pl-4 py-2 my-4 bg-[#FF5A00]/5 rounded-r-lg italic text-slate-700 font-medium" {...props} />
                              ),
                              img: ({ node, ...props }) => (
                                <img className="rounded-xl border border-slate-200 shadow-md my-4 max-h-[450px] w-auto mx-auto object-contain" {...props} />
                              ),
                              a: ({ node, ...props }) => (
                                <a className="text-[#FF5A00] underline hover:text-[#D44800] transition-colors font-medium" target="_blank" rel="noopener noreferrer" {...props} />
                              ),
                              h1: ({ node, ...props }) => <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-6 mb-3 border-b border-slate-200 pb-2" {...props} />,
                              h2: ({ node, ...props }) => <h2 className="text-lg md:text-xl font-bold text-slate-900 mt-5 mb-2" {...props} />,
                              h3: ({ node, ...props }) => <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-4 mb-2" {...props} />,
                              ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1 my-3 text-slate-800" {...props} />,
                              ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-1 my-3 text-slate-800" {...props} />,
                            }}
                          >
                            {paragraph}
                          </Markdown>
                        </div>
                      ))
                    ) : (
                      <p className="text-slate-600">{selectedPost.summary}</p>
                    )}
                  </div>
                )}

                {/* Article Images (if available) */}
                {selectedPost.images && selectedPost.images.length > 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {selectedPost.images.slice(1, 5).map((imgUrl, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-slate-200 bg-slate-50 h-48">
                        <img
                          src={imgUrl}
                          alt={`첨부 이미지 ${idx + 1}`}
                          className="w-full h-full object-cover"
                          onError={e => (e.currentTarget.style.display = 'none')}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCloseDetail}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-600 hover:text-[#FF5A00] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  목록으로 돌아가기
                </button>
              </div>
            </div>
          ) : (
            /* Card Grid with White background */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <div
                  key={post.id}
                  onClick={() => handleOpenPost(post.id)}
                  className="relative bg-white text-slate-900 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FF5A00] hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer group shadow-sm text-left min-h-[260px] overflow-hidden"
                >
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3.5px] bg-[#FF5A00] rounded-r-full z-10" />

                  {/* Thumbnail Image if available */}
                  {post.thumbnail && (
                    <div className="w-full h-36 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={e => (e.currentTarget.style.display = 'none')}
                      />
                    </div>
                  )}

                  <div className="pl-1">
                    {/* Top Row: Issue No + Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#FF5A00] font-bold text-xs tracking-wider">
                        {post.no}
                      </span>
                      <span className="text-slate-500 text-xs font-medium">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-900 text-lg font-bold leading-snug tracking-tight mb-3 group-hover:text-[#FF5A00] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pl-1 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-600">{post.category}</span>
                    <span className="text-[#FF5A00] font-medium group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      자세히 보기 <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const ThoughtsPage = InsightPage;
export const PricingPage = InsightPage;
