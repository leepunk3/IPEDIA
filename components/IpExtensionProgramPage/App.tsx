
import React from 'react';
import { Header } from '../Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#FF4E00] selection:text-white">
      <Header scrolled={true} />

      {/* Hero Section */}
      <section className="bg-[#162a63] pt-16 pb-14 md:pt-24 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-8 text-white uppercase tracking-tighter break-keep leading-[1.1] drop-shadow-2xl">
              <br />특허 확장 프로그램
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-black text-white/90 break-keep leading-tight border-l-4 md:border-l-8 border-[#FF4E00] pl-4 md:pl-8 py-2 md:py-4 bg-white/5">
              하나의 마스터 출원으로 등록 특허수를 늘립니다.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Reality Section */}
      <section id="reality" className="section-white py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#162a63] break-keep uppercase leading-none">
              많은 스타트업이 특허를 진행하지만<br/>
              <span className="text-[#FF4E00]">전략을 갖고 있지 않습니다.</span>
            </h2>
          </div>
          <div className="space-y-6 md:space-y-10">
            <div className="grid gap-4 max-w-3xl mx-auto">
              {[
                "회의에서 나온 아이디어가 건별로 출원됩니다.",
                "제품과 직접 연결되지 않은 기술도 특허로 쌓입니다.",
                "등록 가능성이 낮은 아이디어도 검증 없이 출원됩니다.",
                "특허가 거절된 이후에야 보완할 아이디어를 찾기 시작합니다.",
                "결국, 서로 연결되지 않은 특허들이 흩어져 남습니다."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 bg-gray-50 py-3 px-4 md:py-4 md:px-8 border-l-4 md:border-l-8 border-[#162a63] group hover:border-[#FF4E00] transition-colors text-left">
                  <span className="text-xl md:text-3xl font-heading text-[#162a63]/10 group-hover:text-[#FF4E00]/20 transition-colors">0{i + 1}</span>
                  <span className="text-sm md:text-base lg:text-lg text-gray-700 break-keep">{text}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 md:pt-8 text-center border-t border-gray-100 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-black text-[#162a63] leading-relaxed break-keep">
                그 결과, 겉으로는 특허가 많은 회사처럼 보이지만,<br className="hidden md:block" /> 
                실제로는 <span className="text-[#FF4E00]">특허들 간에 질서가 없습니다.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="section-sand py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#162a63] break-keep uppercase leading-none">
              전략없는 특허진행의 <span className="text-[#FF4E00]">문제</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { num: '01', t: '등록 가능성 불확실', d: '출원기술 중 어떤 아이템이 등록될지 불확실합니다.' },
              { num: '02', t: '자사 특허 간의 간섭', d: '핵심기술은 없고 변두리 기술만 등록되는 상황이 발생합니다.' },
              { num: '03', t: '연쇄 거절 발생', d: '유사 아이템을 개별 출원하면 같은 선행기술에 의해 도미노식 거절이 발생합니다.' },
              { num: '04', t: '투자 매력도 하락', d: '포트폴리오의 일관성이 없어 기술적 방어력을 증명하지 못합니다.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 md:p-10 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-[#FF4E00] transition-all text-left">
                <div>
                  <div className="font-heading text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-gray-100 group-hover:text-[#FF4E00]/10 transition-colors">{item.num}</div>
                  <h4 className="text-base md:text-lg font-heading font-bold mb-2 md:mb-4 text-[#162a63] break-keep uppercase">{item.t}</h4>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-bold break-keep">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section id="definition" className="bg-white py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#162a63] rounded-[24px] md:rounded-[40px] p-6 md:p-10 lg:p-16 shadow-2xl overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white break-keep uppercase leading-tight">특허 확장이란?</h2>
              </div>
              <div className="md:w-2/3 space-y-6 md:space-y-12">
                <div className="relative pl-6 md:pl-12 border-l-4 border-[#FF4E00]">
                  <p className="text-base md:text-lg lg:text-xl font-black text-white/90 leading-snug break-keep">
                    특허 확장 프로그램은,<br />
                    <span className="text-[#FF4E00]">핵심 기술과 요소 기술을 담아 마스터 출원</span>을 진행한 후,<br />
                    등록 가능한 기술을 멀티 분할하여,<br />
                    <span className="text-[#FF4E00]">등록 특허를 늘리는 서비스</span>입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="section-sand py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#162a63] break-keep uppercase leading-none">
              특허 확장 프로그램의 <span className="text-[#FF4E00]">4가지 이점</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white p-4 md:p-10 border border-gray-100 group hover:border-[#FF4E00] transition-all">
              <h4 className="text-base md:text-lg lg:text-xl font-heading font-bold mb-4 md:mb-6 text-[#162a63] break-keep leading-tight">
                핵심 기술과 요소 기술의 특허 가능성을 동시에 진단합니다
              </h4>
              <p className="text-sm text-gray-500 font-bold leading-relaxed break-keep">
                핵심 기술의 약점을 분석하고, 특허성이 있는 요소 기술을 체계적으로 선별합니다. 그 결과, 등록 가능성을 높이고 특허 확보를 안정적으로 진행할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-4 md:p-10 border border-gray-100 group hover:border-[#FF4E00] transition-all">
              <h4 className="text-base md:text-lg lg:text-xl font-heading font-bold mb-4 md:mb-6 text-[#162a63] break-keep leading-tight">
                등록 특허 수를 안정적으로 확장합니다
              </h4>
              <p className="text-sm text-gray-500 font-bold leading-relaxed break-keep">
                등록 가능성이 높은 영역은 여러 특허로 세분화하여 방어력을 강화하고, 등록 리스크가 있는 영역은 보완 설계 후 후속 출원으로 연결합니다.
              </p>
            </div>
            <div className="bg-white p-4 md:p-10 border border-gray-100 group hover:border-[#FF4E00] transition-all">
              <h4 className="text-base md:text-lg lg:text-xl font-heading font-bold mb-4 md:mb-6 text-[#162a63] break-keep leading-tight">
                사업을 관통하는 특허 설계도가 선명해집니다
              </h4>
              <p className="text-sm text-gray-500 font-bold leading-relaxed break-keep">
                핵심 기술과 요소 기술을 구조적으로 결합해 입체적인 IP 설계도를 확보합니다. 기술 로드맵에 기반해 일관된 방향으로 특허 자산을 축적할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-4 md:p-10 border border-gray-100 group hover:border-[#FF4E00] transition-all">
              <h4 className="text-base md:text-lg lg:text-xl font-heading font-bold mb-4 md:mb-6 text-[#162a63] break-keep leading-tight">
                포트폴리오에 스토리가 생깁니다
              </h4>
              <p className="text-sm text-gray-500 font-bold leading-relaxed break-keep">
                비즈니스의 각 섹션마다 특허 장벽이 설계됩니다. 이 장벽들이 서로 연결되며 기업 전체를 보호하는 구조를 완성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="section-white py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-[#162a63] break-keep uppercase leading-none">
              특허 확장을 위한 <span className="text-[#FF4E00]">프로세스</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: '킥오프 상담', desc: '특허 확장이 가능한지 판단' },
              { step: '02', title: '발명 상담 N회', desc: '핵심 기술 정의 & 요소 기술 발굴' },
              { step: '03', title: '마스터출원', desc: '통합적 권리 범위 설계' },
              { step: '04', title: '심사청구', desc: '우선심사신청을 통한 속도 확보' },
              { step: '05', title: '심사 결과 수령', desc: '특허청의 의견 분석' },
              { step: '06', title: '특허 가능성 확인', desc: '등록 가능한 기술 포인트 확정' },
              { step: '07', title: '분할출원', desc: '전략적 기술 분리' },
              { step: '08', title: '등록 특허 확장', desc: '멀티 레이어 포트폴리오 완성' }
            ].map((item, i) => (
              <div key={i} className="relative p-4 md:p-8 bg-gray-50 border-l-4 border-[#162a63] group hover:bg-[#162a63] transition-all">
                <span className="text-sm md:text-[16px] font-black text-[#FF4E00] mb-2 block uppercase tracking-widest">Step {item.step}</span>
                <h4 className="text-base md:text-lg font-heading font-bold text-[#162a63] mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-sm md:text-base text-gray-500 font-bold group-hover:text-white/70 transition-colors break-keep">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section id="comparison" className="section-sand py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold uppercase mb-4 text-[#162a63] break-keep italic">
              특허 확장은 결과적으로 <br className="md:hidden" />
              <span className="text-[#FF4E00]">비용 경제적입니다.</span>
            </h2>
            <p className="text-base md:text-lg font-bold text-gray-500 mt-6 max-w-4xl mx-auto break-keep leading-relaxed">
              최초의 마스터 출원은 일반 출원보다 고비용이지만, 출원 확장은 비용이 낮은 분할출원을 이용하므로, <br />
              결과적으로 총 비용이 낮아집니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* General Filing Section */}
            <div className="bg-white px-4 py-8 md:px-12 md:py-[55px] border border-gray-200 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-gray-400 mb-10 md:mb-16">일반 출원 방식</h3>
                <div className="flex gap-2 md:gap-4 mb-10 md:mb-20 items-end px-2 md:px-4 relative h-[280px] md:h-[340px]">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center flex-1">
                      <div className="flex flex-col-reverse w-full rounded-sm overflow-hidden shadow-inner font-black text-[8px] md:text-[9px] uppercase tracking-tighter">
                        {/* Filing Pillar (10 units) */}
                        <div className="h-[80px] md:h-[100px] bg-[#f0f1f3] w-full border-b border-white/50 flex items-center justify-center text-[#162a63]/40 text-xs md:text-sm cost-comparison-text">
                          출원(10)
                        </div>
                        {/* Exam Pillar (2 units) */}
                        <div className="h-[15px] md:h-[20px] bg-[#64748b] w-full border-b border-white/50 flex items-center justify-center text-white/70 text-xs md:text-sm cost-comparison-text">
                          심사(2)
                        </div>
                        {/* Registration Pillar (10 units) */}
                        <div className="h-[80px] md:h-[100px] bg-[#f0f1f3] w-full border-b border-white/50 flex items-center justify-center text-[#162a63]/40 text-xs md:text-sm cost-comparison-text">
                          등록(10)
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 h-[50px] md:h-[60px] flex flex-col items-center justify-start">
                        <span className="text-xs md:text-sm font-black text-gray-400 text-center break-keep uppercase">출원 {i}</span>
                        <span className="text-[10px] md:text-xs font-bold text-gray-300">22 BRICKS</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-10 bg-gray-50 flex justify-between items-center border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest text-gray-400">총 비용</span>
                  <span className="text-sm md:text-base font-bold text-gray-400">출원 4건 기준</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl md:text-4xl font-heading text-gray-300">88 BRICKS</span>
                  <div className="text-xs md:text-sm font-black text-transparent uppercase mt-2 select-none">-18% 리소스 절감</div>
                </div>
              </div>
            </div>

            {/* Expansion Program Section */}
            <div className="bg-white p-6 md:p-12 border-[4px] md:border-[8px] border-[#162a63] flex flex-col justify-between relative shadow-2xl">
              <div className="absolute top-0 right-0 bg-[#162a63] text-white font-black px-4 py-2 md:px-8 md:py-3 uppercase text-xs md:text-sm tracking-widest">RECOMMENDED</div>
              <div>
                <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-[#162a63] mb-10 md:mb-16">특허 확장 프로그램</h3>
                <div className="flex items-end gap-3 md:gap-6 mb-10 md:mb-20 px-2 md:px-4 relative h-[280px] md:h-[340px]">
                  {/* Master Filing Pillar */}
                  <div className="flex flex-col items-center flex-1 relative">
                    <div className="flex flex-col-reverse w-full rounded-sm overflow-hidden shadow-inner font-black text-[8px] md:text-[9px] uppercase tracking-tighter">
                      {/* Master Filing Pillar (15 units) */}
                      <div className="h-[120px] md:h-[150px] bg-[#ffd7c8] w-full border-b border-white/50 flex items-center justify-center text-[#FF4E00] text-xs md:text-sm cost-comparison-text">
                        출원(15)
                      </div>
                      {/* Exam Pillar (2 units) */}
                      <div className="h-[15px] md:h-[20px] bg-[#64748b] w-full border-b border-white/50 flex items-center justify-center text-white/70 text-xs md:text-sm cost-comparison-text">
                        심사(2)
                      </div>
                      {/* Registration Pillar (10 units) */}
                      <div className="h-[80px] md:h-[100px] bg-[#f0f1f3] w-full border-b border-white/50 flex items-center justify-center text-[#162a63]/40 text-xs md:text-sm cost-comparison-text">
                        등록(10)
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6 h-[50px] md:h-[60px] flex flex-col items-center justify-start">
                      <span className="text-sm md:text-base font-black text-[#162a63] text-center break-keep uppercase">마스터 출원</span>
                      <span className="text-xs md:text-sm font-bold text-[#FF4E00]">27 BRICKS</span>
                    </div>
                  </div>
                  
                  {/* Divided Pillars */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center flex-1 relative group">
                      <div className="flex flex-col-reverse w-full rounded-sm overflow-hidden shadow-inner font-black text-[8px] md:text-[9px] uppercase tracking-tighter">
                        {/* Divided Filing Pillar (3 units) */}
                        <div className="h-[24px] md:h-[30px] bg-[#FF4E00] w-full border-b border-white/50 flex items-center justify-center text-white cost-comparison-text text-xs md:text-sm">
                          출원(3)
                        </div>
                        {/* Exam Pillar (2 units) */}
                        <div className="h-[15px] md:h-[20px] bg-[#64748b] w-full border-b border-white/50 flex items-center justify-center text-white/70 text-xs md:text-sm cost-comparison-text">
                          심사(2)
                        </div>
                        {/* Registration Pillar (10 units) */}
                        <div className="h-[80px] md:h-[100px] bg-[#f0f1f3] w-full border-b border-white/50 flex items-center justify-center text-[#162a63]/40 text-xs md:text-sm cost-comparison-text">
                          등록(10)
                        </div>
                      </div>
                      <div className="mt-4 md:mt-6 h-[50px] md:h-[60px] flex flex-col items-center justify-start">
                        <span className="text-xs md:text-sm font-black text-gray-500 text-center break-keep uppercase">분할 {i}</span>
                        <span className="text-[10px] md:text-xs font-bold text-gray-400">15 BRICKS</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-10 bg-[#162a63] text-white flex justify-between items-center border-t border-[#162a63]">
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest opacity-70">총 비용</span>
                  <span className="text-sm md:text-base font-bold opacity-50">출원 4건 기준</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl md:text-4xl font-heading">72 BRICKS</span>
                  <div className="text-xs md:text-sm font-black text-[#FF4E00] uppercase mt-2">-18% 리소스 절감</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-white pt-8 pb-12 md:pt-10 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-extrabold text-[#162a63] break-keep leading-tight">
            특허 확장 프로그램으로 <br className="md:hidden" /><br />
            <span className="text-[#FF4E00]">특허수를 경제적으로</span> 늘리세요
          </h2>
        </div>
      </section>

      {/* Brand Redesigned Footer */}
      <footer className="bg-[#162a63] py-6 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-2 md:mb-4 text-xl md:text-2x">
            <div className="w-[0.8em] h-[0.8em] bg-[#FF4E00] flex-shrink-0"></div>
            <div className="font-bold-heavy tracking-tighter">IPEDIA.</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-12">
            <p className="text-white/60 font-bold leading-snug break-keep text-sm md:text-base max-w-md">
              고객의 지식재산이 미래를 지탱하는 확실한 힘이 되도록<br/>IPEDIA는 최선을 다하고 있습니다.
            </p>
            <div className="flex flex-col items-start md:items-end shrink-0">
              <div className="flex flex-col gap-0.5 md:gap-2 items-start md:items-end">
                <a href="mailto:kjlee@ipedia.kr" className="text-sm md:text-base font-black hover:text-[#FF4E00] text-white/60 transition-colors">kjlee@ipedia.kr</a>
                <span className="text-sm md:text-base text-white/60 font-black">02-6920-8882</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;