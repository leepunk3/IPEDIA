import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Phase 1: The Meeting & Strategic Pillars */}
        <div>
          <div className="reveal mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-bold-heavy text-[#1F2F6E] mb-6 md:mb-8 leading-[1.1]">
              WHEN STARTUP <br /> MEETS <span className="text-[#FF5A00]">IPEDIA.</span>
            </h2>
            <div className="max-w-4xl">
              <p className="text-[#1F2F6E] font-bold text-xl md:text-3xl leading-tight mb-4 md:mb-6">
                IPEDIA의 컨설팅 경험과 전략 노하우를 경험하세요
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium mb-6 md:mb-8 max-w-2xl">
                <span className="text-[#FF5A00] font-bold">IPEDIA</span>는 특허 서류만 만드는 곳이 아닙니다.<br /> 
                고객의 사업을 이해하고, 경쟁사를 막을 수 있는 특허를 설계합니다.
              </p>
              <div className="h-1.5 w-16 md:w-20 bg-[#FF5A00]"></div>
            </div>
          </div>

          {/* Core Strategic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 reveal mb-16 md:mb-24" style={{ transitionDelay: '0.3s' }}>
            <div className="group relative bg-[#F9FAFB] p-6 md:p-10 rounded-sm border-t-4 border-[#1F2F6E] hover:border-[#FF5A00] transition-all duration-500">
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-6xl font-bold-heavy text-[#1F2F6E]/5 group-hover:text-[#FF5A00]/10 transition-colors">01</span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2F6E] mb-4 md:mb-6 leading-tight group-hover:text-[#FF5A00] transition-colors">
                  대기업 IP <br />컨설팅 경험
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  글로벌 테크 기업의 핵심 IP를 설계해온 경험을 스타트업의 성장 전략에 접목합니다. 거인의 시야로 시장을 설계합니다.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#F9FAFB] p-6 md:p-10 rounded-sm border-t-4 border-[#1F2F6E] hover:border-[#FF5A00] transition-all duration-500">
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-6xl font-bold-heavy text-[#1F2F6E]/5 group-hover:text-[#FF5A00]/10 transition-colors">02</span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2F6E] mb-4 md:mb-6 leading-tight group-hover:text-[#FF5A00] transition-colors">
                  성장 단계 기반 <br />특허 전략 설계
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  사업의 성장 단계에 따라 필요한 권리를 설계합니다. 제품 출시, 확장, 투자 유치까지 각 단계에 대응하는 IP 구조입니다.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#F9FAFB] p-6 md:p-10 rounded-sm border-t-4 border-[#1F2F6E] hover:border-[#FF5A00] transition-all duration-500">
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-6xl font-bold-heavy text-[#1F2F6E]/5 group-hover:text-[#FF5A00]/10 transition-colors">03</span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2F6E] mb-4 md:mb-6 leading-tight group-hover:text-[#FF5A00] transition-colors">
                  스타트업 맞춤 <br />IP 전략 제시
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  리소스가 제한된 스타트업 환경에서 EXIT을 고려한 기술 장벽을 설계합니다. 기업의 가치를 높일 수 있는 지적재산을 만듭니다.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-bold-heavy text-[#1F2F6E] mb-6 md:mb-8 leading-[1.1]">
              WHEN <span className="text-[#FF5A00]">IPEDIA</span> <br /> MEETS STARTUP.
            </h2>
            <div className="max-w-4xl">
              <p className="text-[#1F2F6E] font-bold text-xl md:text-3xl leading-tight mb-4 md:mb-6">
                사내 변리사 프로그램을 경험하세요
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium mb-6 md:mb-8 max-w-2xl">
                <span className="text-[#FF5A00] font-bold">IPEDIA</span>는 변리사가 사내 개발 회의에 참석하여<br /> 
                기업의 IP를 함께 설계하고 구축합니다.
              </p>
              <div className="h-1.5 w-16 md:w-20 bg-[#FF5A00]"></div>
            </div>
          </div>

          {/* Inhouse IP counsel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="group relative bg-[#F9FAFB] p-6 md:p-10 rounded-sm border-t-4 border-[#1F2F6E] hover:border-[#FF5A00] transition-all duration-500">
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-6xl font-bold-heavy text-[#1F2F6E]/5 group-hover:text-[#FF5A00]/10 transition-colors">01</span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2F6E] mb-4 md:mb-6 leading-tight group-hover:text-[#FF5A00] transition-colors">
                  개발 방향에 대한 <br />전문가 의견 제시
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  기술 개발 단계에서 특허 관점의 리스크와 기회를 동시에 검토합니다. <br />
                  차별화 포인트를 강화하고, 경쟁사가 따라오기 어려운 방향을 제안합니다.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#F9FAFB] p-6 md:p-10 rounded-sm border-t-4 border-[#1F2F6E] hover:border-[#FF5A00] transition-all duration-500">
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-6xl font-bold-heavy text-[#1F2F6E]/5 group-hover:text-[#FF5A00]/10 transition-colors">02</span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2F6E] mb-4 md:mb-6 leading-tight group-hover:text-[#FF5A00] transition-colors">
                  특허성에 대한  <br />현장 판단
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  회의 중 도출되는 아이디어의 신규성·진보성을 즉시 검토합니다. <br />
                  출원 가능성과 권리 범위를 예측해 전략적 판단을 지원합니다.
                </p>
              </div>
            </div>

            <div className="group relative bg-[#F9FAFB] p-6 md:p-10 rounded-sm border-t-4 border-[#1F2F6E] hover:border-[#FF5A00] transition-all duration-500">
              <span className="absolute top-4 right-6 md:top-6 md:right-8 text-4xl md:text-6xl font-bold-heavy text-[#1F2F6E]/5 group-hover:text-[#FF5A00]/10 transition-colors">03</span>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F2F6E] mb-4 md:mb-6 leading-tight group-hover:text-[#FF5A00] transition-colors">
                  요소 기술 발굴 및 <br />특허화 설계
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  핵심 기술을 분해하고 권리화 가능한 요소 기술을 선별합니다.<br />
                  후속 출원까지 고려한 입체적 특허 구조를 설계합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};