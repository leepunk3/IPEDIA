import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowLeft, FileText, Home, ChevronRight, ChevronDown } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  imageUrl?: string;
}

const POSTS: Post[] = [
  {
    id: 'p1',
    title: '특허 출원, 아이디어만 있어도 시작할 수 있을까요',
    date: '2026. 6. 2.',
    category: '특허',
    summary: '많은 분들이 시제품이 완성돼야 출원할 수 있다고 오해합니다. 실제로는 그렇지 않습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    content: [
      '상담을 하다 보면 "아직 시제품도 안 만들었는데 출원이 가능한가요"라는 질문을 자주 받습니다. 결론부터 말씀드리면, 특허 출원은 아이디어가 구체적인 기술적 사상으로 정리되어 있으면 충분히 가능합니다. 실물 제품이나 시제품의 존재 여부는 출원 요건이 아닙니다.',
      '중요한 것은 그 아이디어가 "어떻게 구현되는지"를 명세서에 논리적으로 설명할 수 있는가입니다. 구조, 원리, 작동 방식이 명확하게 서술될 수 있다면 시제품 없이도 출원서 작성이 가능합니다.',
      '다만 청구범위를 너무 넓게 잡으면 심사 과정에서 거절이유가 나올 가능성이 높아지고, 너무 좁게 잡으면 권리 범위가 협소해져 실효성이 떨어집니다. 이 균형을 잡는 것이 변리사의 역할이라고 생각합니다.',
      '아이디어 단계에서 상담을 먼저 받아보시는 것을 권해드립니다. 출원 시점을 앞당길수록 선출원주의 원칙상 유리한 위치를 선점할 수 있습니다.'
    ]
  },
  {
    id: 'p2',
    title: '상표 출원 전에 반드시 확인해야 할 것',
    date: '2026. 5. 18.',
    category: '상표',
    summary: '브랜드를 정하고 바로 출원하기 전, 선행상표 조사가 왜 필수인지 설명합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a3121691a79?auto=format&fit=crop&w=800&q=80',
    content: [
      '상표는 브랜드 이름을 정한 뒤 가장 먼저 출원해야 한다고 생각하기 쉽지만, 그 전에 반드시 거쳐야 할 단계가 있습니다. 바로 선행상표 조사입니다.',
      '이미 등록되어 있거나 출원 중인 유사 상표가 있다면, 아무리 브랜드가 마음에 들어도 등록이 거절될 가능성이 높습니다. 조사를 생략하고 출원부터 진행하면, 관납료와 시간을 들이고도 결과를 얻지 못하는 경우가 발생합니다.',
      '조사 단계에서는 동일·유사 명칭뿐 아니라 지정상품 분류(류)까지 함께 검토합니다. 같은 이름이라도 지정상품이 다르면 등록이 가능한 경우도 있고, 반대로 이름이 조금 달라도 유사 판단을 받는 경우도 있기 때문입니다.',
      '브랜드를 정하는 단계에서부터 변리사와 함께 후보군을 조사해보시는 것이 시간과 비용을 아끼는 가장 확실한 방법입니다.'
    ]
  },
  {
    id: 'p3',
    title: '디자인권과 특허, 둘 다 필요한 경우',
    date: '2026. 4. 27.',
    category: '디자인',
    summary: '외관과 기능을 동시에 보호해야 하는 제품이라면 두 가지 권리를 함께 고려해야 합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    content: [
      '제품을 개발하다 보면 "이건 디자인권으로 보호해야 하나, 특허로 보호해야 하나"라는 질문을 종종 받습니다. 답은 대부분 "둘 다"입니다.',
      '특허는 기술적 사상, 즉 기능과 작동 원리를 보호합니다. 반면 디자인권은 물품의 외관, 형상과 모양을 보호합니다. 같은 제품이라도 보호하는 대상이 다르기 때문에 하나만 등록해서는 완전한 보호가 되지 않는 경우가 많습니다.',
      '예를 들어 새로운 구조의 용기를 개발했다면, 그 구조의 작동 원리는 특허로, 독특한 외관 디자인은 디자인권으로 각각 출원하는 것이 일반적입니다. 경쟁사가 기능은 다르게 구현하면서 외관만 베끼는 경우를 막으려면 디자인권이 필요하고, 외관은 다르게 하면서 핵심 기술만 가져가는 경우를 막으려면 특허가 필요합니다.',
      '두 권리를 함께 검토하면 비용이 늘어난다고 생각하실 수 있지만, 실제로는 침해 대응 범위를 넓히는 효율적인 투자에 가깝습니다.'
    ]
  },
  {
    id: 'p4',
    title: '거절이유통지서를 받았다고 낙담하지 마세요',
    date: '2026. 3. 11.',
    category: '특허',
    summary: '거절이유통지는 심사의 정상적인 한 단계입니다. 대응 전략이 결과를 좌우합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    content: [
      '출원 후 거절이유통지서를 받으면 많은 분들이 "떨어진 건가요"라고 걱정하며 연락을 주십니다. 하지만 거절이유통지는 최종 거절이 아니라, 심사관이 등록 전 검토 의견을 제시하는 절차입니다.',
      '실제로 상당수의 특허가 한 차례 이상의 거절이유통지를 거친 뒤 등록됩니다. 중요한 것은 통지 내용을 정확히 분석하고, 의견서와 보정서를 통해 청구범위를 적절히 조정하는 대응 전략입니다.',
      '거절이유는 크게 신규성 부족, 진보성 부족, 기재불비 등으로 나뉘는데, 각각 대응 방식이 다릅니다. 예를 들어 진보성 문제라면 선행기술과의 차이를 명확히 부각하는 의견서가 핵심이고, 기재불비라면 명세서 표현을 정교하게 다듬는 보정이 우선입니다.',
      '통지서를 받으셨다면 우선 지정된 대응기한부터 확인하시고, 가능한 빨리 변리사와 상담해 대응 방향을 정하시는 것을 권해드립니다.'
    ]
  },
  {
    id: 'p5',
    title: '상표 등록 후에도 관리가 필요한 이유',
    date: '2026. 2. 20.',
    category: '상표',
    summary: '등록만으로 끝나지 않습니다. 존속기간과 사용 여부 관리가 권리 유지의 핵심입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    content: [
      '상표는 등록되었다고 해서 영구히 유지되는 권리가 아닙니다. 10년의 존속기간이 있고, 갱신을 하지 않으면 권리가 소멸됩니다.',
      '또한 등록 후 3년 이상 정당한 이유 없이 사용하지 않으면 제3자가 불사용취소심판을 청구할 수 있습니다. 이 경우 실제 사용 증거를 제출하지 못하면 등록이 취소될 수 있습니다.',
      '따라서 등록 이후에도 사용 증거(포장, 광고, 거래명세서 등)를 꾸준히 보관하고, 갱신 시기를 놓치지 않도록 관리하는 것이 중요합니다.'
    ]
  },
  {
    id: 'p6',
    title: '디자인 출원 시 도면이 등록 가능성을 좌우합니다',
    date: '2026. 1. 30.',
    category: '디자인',
    summary: '같은 제품이라도 도면 표현 방식에 따라 심사 결과가 달라질 수 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    content: [
      '디자인 출원에서 명세서보다 더 중요한 것이 도면입니다. 심사관은 도면에 표현된 형상과 모양을 기준으로 신규성과 창작성을 판단합니다.',
      '도면이 불명확하거나 여러 각도를 충분히 표현하지 못하면, 실제로는 창작성이 있는 디자인이라도 심사 단계에서 불리하게 작용할 수 있습니다.',
      '정면도, 배면도, 좌우측면도, 평면도, 저면도를 비롯해 필요한 경우 사용상태도까지 꼼꼼히 준비하는 것이 등록 가능성을 높이는 실질적인 방법입니다.'
    ]
  }
];

const CATEGORY_ORDER = ['특허', '상표', '디자인'];

type ViewState =
  | { mode: 'home' }
  | { mode: 'category'; category: string };

export const InsightPage: React.FC = () => {
  const [view, setView] = useState<ViewState>({ mode: 'home' });
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = useMemo(
    () => POSTS.find(p => p.id === selectedPostId) ?? null,
    [selectedPostId]
  );

  const categories = useMemo(() => {
    const present = Array.from(new Set(POSTS.map(p => p.category)));
    return CATEGORY_ORDER.filter(c => present.includes(c)).concat(
      present.filter(c => !CATEGORY_ORDER.includes(c))
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view, selectedPostId]);

  const handleOpenPost = (id: string) => setSelectedPostId(id);
  const handleCloseDetail = () => setSelectedPostId(null);
  const handleOpenCategory = (category: string) => {
    setSelectedPostId(null);
    if (category === '전체') {
      setView({ mode: 'home' });
    } else {
      setView({ mode: 'category', category });
    }
  };
  const handleBackToHome = () => {
    setSelectedPostId(null);
    setView({ mode: 'home' });
  };

  const renderCard = (post: Post) => (
    <button
      key={post.id}
      type="button"
      onClick={() => handleOpenPost(post.id)}
      className="text-left flex flex-col h-full group cursor-pointer"
    >
      <div className="rounded-lg overflow-hidden mb-4 aspect-[16/10] bg-slate-100 relative">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-[#162a63] flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
            <FileText className="w-9 h-9 text-white/90" strokeWidth={1.25} />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-base font-bold text-[#162a63] leading-snug mb-1 line-clamp-2 group-hover:text-[#2847D0] transition-colors">
          {post.title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
          {post.summary}
        </p>
        <div className="flex-1" />
        <div className="text-xs text-slate-400 font-medium mt-4 pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="font-bold text-[#2847D0] bg-[#EDF0FC] px-2 py-0.5 rounded text-[10px]">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>
      </div>
    </button>
  );

  const heroTitle = selectedPost ? null : view.mode === 'category' ? view.category : 'IP 인사이트';

  return (
    <div className="min-h-screen bg-white flex flex-col text-[#162a63] font-sans antialiased">
      <Header scrolled={true} />

      <main className="flex-1">
        {/* ── 네이비 히어로 밴드 ── */}
        <div className="w-full bg-[#162a63] pt-28 pb-14 md:pt-36 md:pb-20 px-4 text-center">
          {selectedPost ? (
            <>
              <span className="inline-block text-[11px] font-bold text-white/70 tracking-widest uppercase mb-3">
                {selectedPost.category}
              </span>
              <h1 className="text-white font-bold text-2xl md:text-4xl tracking-tight leading-snug max-w-3xl mx-auto">
                {selectedPost.title}
              </h1>
              <div className="mt-4 text-sm font-bold text-white">IP 인사이트</div>
              <div className="text-xs text-white/50 mt-1">{selectedPost.date}</div>
            </>
          ) : (
            <h1 className="text-white font-bold text-3xl md:text-4xl tracking-tight">{heroTitle}</h1>
          )}
        </div>

        {/* ── 브레드크럼 바 ── */}
        <div className="w-full border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="flex items-center hover:text-[#2847D0] transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <button
              type="button"
              onClick={handleBackToHome}
              className={`flex items-center gap-1 ${view.mode === 'home' && !selectedPost ? 'text-[#162a63] font-bold' : 'hover:text-[#2847D0]'}`}
            >
              IP 인사이트
              {view.mode === 'home' && !selectedPost && <ChevronDown className="w-3 h-3" />}
            </button>
            {view.mode === 'category' && (
              <>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <button
                  type="button"
                  onClick={() => handleOpenCategory(view.category)}
                  className={!selectedPost ? 'text-[#162a63] font-bold' : 'hover:text-[#2847D0]'}
                >
                  {view.category}
                </button>
              </>
            )}
            {selectedPost && (
              <>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[#162a63] font-bold truncate max-w-[240px]">{selectedPost.title}</span>
              </>
            )}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
          {/* ── 카테고리 필터 탭 ── */}
          {!selectedPost && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-100 no-scrollbar">
              <button
                type="button"
                onClick={() => handleOpenCategory('전체')}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  view.mode === 'home'
                    ? 'bg-[#162a63] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                전체보기
              </button>
              {CATEGORY_ORDER.map(cat => {
                const isActive = view.mode === 'category' && view.category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleOpenCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#162a63] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}

          {/* ── 홈 모드: 카테고리별 섹션 ── */}
          {!selectedPost && view.mode === 'home' && (
            <div className="space-y-16 animate-fade-in">
              {categories.map(category => {
                const items = POSTS.filter(p => p.category === category).slice(0, 3);
                if (items.length === 0) return null;

                return (
                  <section key={category}>
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                      <h2 className="text-xl md:text-2xl font-bold text-[#162a63] tracking-tight">
                        {category}
                      </h2>
                      <button
                        type="button"
                        onClick={() => handleOpenCategory(category)}
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#2847D0] hover:text-[#162a63] transition-colors cursor-pointer"
                      >
                        전체보기 ({POSTS.filter(p => p.category === category).length})
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {items.map(renderCard)}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* ── 카테고리 전체 목록 모드 ── */}
          {!selectedPost && view.mode === 'category' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <button
                  type="button"
                  onClick={handleBackToHome}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-slate-500 hover:text-[#2847D0] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  전체 카테고리로 돌아가기
                </button>
                <span className="text-xs font-bold text-[#2847D0] bg-[#EDF0FC] px-3 py-1 rounded-full">
                  총 {POSTS.filter(p => p.category === view.category).length}개의 글
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {POSTS.filter(p => p.category === view.category).map(renderCard)}
              </div>
            </div>
          )}

          {/* ── 상세 모드 ── */}
          {selectedPost && (
            <div key="detail" className="animate-fade-in">
              <div className="max-w-2xl mx-auto">
                {selectedPost.imageUrl && (
                  <div className="mb-8 rounded-2xl overflow-hidden aspect-[16/9] shadow-md border border-slate-100">
                    <img
                      src={selectedPost.imageUrl}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="space-y-5">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx} className="text-sm md:text-[15px] text-slate-700 leading-[1.9]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-8 mt-10 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={handleCloseDetail}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#162a63] hover:text-[#2847D0] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    목록으로 돌아가기
                  </button>
                </div>
              </div>
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
