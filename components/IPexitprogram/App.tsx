
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
              <br />출구전략에서 기업가치<br />
              <span className="text-[#FF4E00]">특허로 보호</span>하세요
            </h1>
            <div className="text-base md:text-xl lg:text-xl font-black text-white/90 break-keep leading-tight border-l-4 md:border-l-8 border-[#FF4E00] pl-4 md:pl-8 py-2 md:py-4 bg-white/5">
              스타트업에게 특허가 필요한 현실적인 이유는<br/>특허로 회사 가치를 높일 수 있기 때문입니다.
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Section 1: The Opportunity (Patents as EXIT Leverage) */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#162a63] mb-8 uppercase tracking-tighter leading-none">
                특허가 많으면<br/>
                <span className="text-[#FF4E00]">EXIT 가능성이 올라갑니다</span>
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-[#162a63] break-keep leading-snug">
                탄탄한 특허 포트폴리오는 기업의 기술력을 증명하고,<br/>
                독점적인 시장 지위를 보장합니다.
              </p>
            </div>

            <div className="bg-[#162a63] p-4 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-20 bg-[#FF4E00]/10 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-150"></div>
              <h4 className="text-lg md:text-2xl font-heading font-extrabold text-[#FF4E00] mb-6 relative z-10">EXIT 가능성<br/>2.0 ~ 6.0배 ↑</h4>
              <ul className="space-y-1 md:space-y-3 font-bold text-white/80 relative z-10 text-xs md:text-lg">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#FF4E00] rounded-full"></div>
                  특허 & 상표 출원 선행 시 2.0 배 ↑
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#FF4E00] rounded-full"></div>
                  20건 이상 출원 시 6.0배 ↑
                </li>
              </ul>
              <div className="mt-3 md:mt-8 text-white/40 text-[10px] md:text-sm font-bold relative z-10 uppercase tracking-widest">
                KDI & 국가지식재산위원회
              </div>
            </div>   
          </div>
        </div>
      </section>

      {/* Section 2: The Trap (Quantity vs Quality) */}
      <section className="bg-[#f9f8f6] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-[#162a63] mb-8 uppercase tracking-tighter leading-none">
                그렇지만, 특허가 많아도<br/>
                <span className="text-[#FF4E00]">평가 가격은 높아지지 않습니다</span>
              </h2>
              <p className="text-base md:text-xl text-[#162a63] break-keep leading-snug font-bold">
                엑싯 실사에서는 특허의 품질,  <br/>
                즉, 특허가 핵심 기술을 탄탄하게 보호하는가를 봅니다.              
              </p>
            </div>

            {/* 02. 엑싯 실사에서 묻는 질문: */}
            <div className="bg-white p-6 md:p-10 shadow-xl relative overflow-hidden group rounded-xl max-w-5xl lg:max-w-7xl mx-auto">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#162a63]/5 -mr-12 -mt-12 rounded-full transition-transform group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="mb-6 md:mb-10">
                  <h4 className="text-base md:text-2xl font-heading text-[#162a63] mb-6 uppercase">엑싯 실사에서 묻는 질문</h4>
                  <div className="space-y-4">
                    {[
                      "회사의 핵심 기술은 경쟁사의 모방으로부터 보호되고 있습니까?",
                      "매출을 만드는 제품과 핵심 기술은 서로 매칭되어 있습니까?",
                      "경쟁사가 유사 기술을 개발해서 쉽게 대체할 수 있지 않습니까?",
                      "기술 구조는 회사의 중장기 사업 로드맵과 일치합니까?"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 bg-[#FF4E00] shrink-0"></div>
                        <span className="text-[#162a63] text-sm md:text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution (Quality over Quantity) */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#162a63] mb-8 uppercase tracking-tighter leading-none">
              그래서 특허를 <span className="text-[#FF4E00]">잘 만들어야 합니다</span>
            </h2>
            <div className="space-y-6 text-base md:text-xl text-[#162a63] font-medium leading-relaxed break-keep">
              <p>
                EXIT 실사는 특허의 개수를 묻지 않습니다.<br/>
                핵심 기술이 정말 보호되고 있는지를 묻습니다.
              </p>
              <p className="font-bold text-lg md:text-2xl">
                기업에게 필요한 것은 특허 개수가 아니라<br/>
                <span className="text-[#FF4E00]">잘 설계된 핵심 특허입니다.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Insight (IP as a Deal Variable) */}
      <section className="bg-[#162a63] py-12 md:py-16 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-center">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-extrabold uppercase tracking-tighter leading-tight">
              특허가 많으면 <span className="text-[#FF4E00]">EXIT 가능성</span>이 높아지지만 <br/>
              고품질의 특허가 있어야 <span className="text-[#FF4E00]">회사 가치</span>가 올라갑니다.
            </h2>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF4E00]/5 skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Section 5: The Solution (Strategy Design) */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-extrabold text-[#162a63] break-keep uppercase mb-6">              
              저희는 특허의 <span className="text-[#FF4E00]">경제적 쓰임새</span>을 고민합니다.
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1: Questions */}
            <div className="mb-12 md:mb-24">
              <div className="mb-8 md:mb-12 border-b-2 border-[#162a63] pb-4 inline-block">
                <h3 className="text-lg md:text-2xl font-heading font-extrabold text-[#162a63] uppercase tracking-widest">01. 저희는 고민합니다</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  >사업의 핵심 기술을<br/>등록 받아낼 수 있을까?</>,
                  <>제품이나 서비스를 지키려면<br/>몇 개의 핵심 특허가 필요할까?</>,
                  <>빠르게 등록받을 수 있는 방법이<br/>있는가?</>
                ].map((q, i) => (
                  <div key={i} className="bg-gray-50 p-4 md:p-6 border-2 border-[#162a63]/20 h-full flex flex-col relative overflow-hidden rounded-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4E00]/10 rounded-bl-full -mr-3 -mt-3"></div>
                    <h4 className="text-base md:text-lg font-bold text-[#162a63] break-keep leading-snug relative z-10">{q}</h4>
                  </div>
                ))}
              </div>
            </div>
          
            {/* Step 3: Tech Tree */}
            <div className="mb-12 md:mb-24">
              <div className="mb-8 md:mb-12 border-b-2 border-[#162a63] pb-4 inline-block">
                <h3 className="text-lg md:text-2xl font-heading font-extrabold text-[#162a63] uppercase tracking-widest">02. 기술 트리를 조망하고 세부 요소 기술을 정의합니다</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {title: '고객의 기술 분야에 대한 기술 분해도 시각화', desc: '기술 분야 → 상위 기술 영역 → 핵심 기술군의 계층도를 구성' },
                  {title: '고객사에게 필요한 상위 기술 영역을 선정', desc: '고객사 회의를 통해 필수 기술 영역을 선정' },
                  {title: '세부 요소기술 정의 후 특허 출원 논의', desc: '세부 요소 기술을 기반으로 중장기 R&D 로드맵과 특허 전략을 연계하여 설계' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-4 md:p-6 border-2 border-[#162a63]/20 h-full flex flex-col relative overflow-hidden rounded-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4E00]/10 rounded-bl-full -mr-3 -mt-3"></div>
                    <h4 className="text-base md:text-lg font-bold text-[#162a63] mb-2 leading-tight relative z-10">{item.title}</h4>
                    <p className="text-gray-600 font-medium text-xs md:text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          
            {/* Step 3: Design */}
            <div className="mb-12 md:mb-24">
              <div className="mb-8 md:mb-12 border-b-2 border-[#162a63] pb-4 inline-block">
                <h3 className="text-lg md:text-2xl font-heading font-extrabold text-[#162a63] uppercase tracking-widest">03. 다음을 체크합니다</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {title: '제품/서비스와 특허의 1:1 매핑', desc: '비즈니스 아이템과 청구항이 매칭되는지 체크' },
                  {title: '초기 특허와 최종 아이템의 매칭', desc: '초기 특허가 최종 아이템에 매칭되는지 체크 후 업데이트' },
                  {title: '요소기술의 특허 출원 상태', desc: '비즈니스 요소 기술들이 특허화되어 있는지 체크' }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-4 md:p-6 border-2 border-[#162a63]/20 h-full flex flex-col relative overflow-hidden rounded-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4E00]/10 rounded-bl-full -mr-3 -mt-3"></div>
                    <h4 className="text-base md:text-lg font-bold text-[#162a63] mb-2 leading-tight relative z-10">{item.title}</h4>
                    <p className="text-gray-600 font-medium text-xs md:text-sm leading-relaxed relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Results */}
            <div>
              <div className="mb-8 md:mb-12 border-b-2 border-[#162a63] pb-4 inline-block">
                <h3 className="text-lg md:text-2xl font-heading font-extrabold text-[#162a63] uppercase tracking-widest">04. 결과물을 제공해드립니다</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  <>비즈니스 핵심을 보호하는 <br/>지배적 특허</>,
                  <>지배적 특허의 공백을 보완하는 <br/>요소 기술 특허</>,
                  <>실사(Due Diligence)에서 <br/>인정받는 IP 포트폴리오</>
                ].map((text, i) => (
                  <div key={i} className="bg-gray-50 p-4 md:p-6 border-2 border-[#162a63]/20 h-full flex flex-col relative overflow-hidden rounded-xl">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4E00]/10 rounded-bl-full -mr-3 -mt-3"></div>
                    <h4 className="text-base md:text-lg font-bold text-[#162a63] break-keep leading-snug relative z-10">{text}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-extrabold text-[#162a63] break-keep leading-tight">
            <span className="text-[#FF4E00]">EXIT</span>을 고려하고 있다면<br/>
            <span className="text-[#FF4E00]">IPEDIA</span>와 특허를 설계하세요.
          </h2>
        </div>
      </section>

      {/* Footer */}
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
