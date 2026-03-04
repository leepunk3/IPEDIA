import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="reveal">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1F2F6E] mb-6 md:mb-8 leading-tight">
              <span className="text-[#FF5A00]">IPEDIA</span>의 지향점은<br />
              저희를 신뢰해주신 고객께<br />
              더 많은 도움을 드리는 것입니다.
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                IPEDIA는 한 번의 출원으로 끝나는 관계가 아니라, <br />
                기업의 성장 과정 전체를 함께하는 동반자가 되고자 합니다.<br />
                깊이 있게 이해하고 성장 과정에 함께하겠습니다.
              </p>
              <p className="text-[#1F2F6E] font-bold">
                IPEDIA는 만족스러운 IP 서비스를 제공하기 위해<br />
                수임 사건을 제한하고 있습니다. <br />
                소수의 고객에게 저희의 역량을 집중하겠습니다.
              </p>
            </div>
          </div>
          
          <div className="reveal flex justify-center lg:justify-end" style={{ transitionDelay: '0.2s' }}>
             <img 
               src="/image01.png" 
               alt="IPEDIA Vision" 
               className="w-full max-w-md mx-auto object-contain"
             />
          </div>
        </div>
      </div>
    </section>
  );
};
