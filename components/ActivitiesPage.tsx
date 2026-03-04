import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { motion } from 'motion/react';

const serviceCategories = [
  {
    id: '01',
    title: '출원 서비스',
    items: [
      {
        name: '특허/실용신안 출원 및 등록',
        description: '국내 및 해외 특허 및 실용신안의 전략적 출원을 통해 기술 자산을 보호하고 강력한 독점 권리를 확보합니다. 엔지니어와 같은 언어로 기술을 이해하고 아이디어 단계부터 강력한 IP를 설계합니다.'
      },
      {
        name: '상표/디자인 출원 및 등록',
        description: '브랜드의 정체성과 디자인의 독창성을 보호하기 위한 최적의 등록 전략과 관리 솔루션을 제공합니다. 제품 로드맵과 사업의 흐름 속에서 권리의 방향을 정합니다.'
      }
    ]
  },
  {
    id: '02',
    title: 'IP 컨설팅 서비스',
    items: [
      {
        name: '특허 발굴',
        description: '비즈니스 곳곳에 숨어 있는 기술 아이디어를 찾아내어 권리화합니다. 개발 단계마다 기술의 핵심을 분석하고, 특허 가능성이 높은 요소를 선별·체계화합니다. 이를 바탕으로 특허 장벽을 구축하여 경쟁사가 쉽게 침투할 수 없는 기술 방어선을 만듭니다.'
      },
      {
        name: '로드맵 설계',
        description: '기업의 방향성과 성장 전략을 읽어내고, 비즈니스 모델-시장 확장-투자 흐름을 종합적으로 분석합니다. 핵심 기술부터 부가 기술까지 중요도에 따라 구분하고, 각 기술이 제품과 서비스로 구현되는 과정을 체계적으로 정리합니다. 기업의 성장과 권리 확보를 위한 중장기 IP 로드맵을 완성합니다.'
      },
      {
        name: '침해 예측 및 대응',
        description: `경쟁사와 충돌할 수 있는 지점들을 예측하고 침해 가능성, 회피 설계, 방어적 출원 전략을 제시합니다. 기술 변화와 시장 상황에 맞춰 IP 전략을 유연하게 조정하여 사업 리스크를 최소화합니다.`
      }
    ]
  },
  {
    id: '03',
    title: '정부 과제 지원 서비스',
    items: [
      {
        name: '창업지원과제, R&D 지원과제의 사업계획서 작성',
        description: '디딤돌, IP 나래, TIPS, 수출 바우처 등 각종 정부지원사업의 선정 확률을 높이기 위해 기술력과 사업성을 구조적으로 연결한 사업계획서 작성을 지원합니다.'
      },
      {
        name: '고객 특화의 IP 과제 알림 지원',
        description: '기업의 기술 분야와 성장 단계에 맞는 정부지원 과제를 상시 분석하고, 고객사에 최적화된 사업을 선별해 안내합니다.'
      }
    ]
  }
];

export const ActivitiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFDFD] selection:bg-[#FF5A00] selection:text-white">
      <Header scrolled={true} />
      <main className="pt-24 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="text-center mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-[#1F2F6E]/5 text-[#1F2F6E] text-xs font-black tracking-[0.2em] rounded-full mb-4 md:mb-6 uppercase"
            >
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-black text-[#1F2F6E] mb-8 md:mb-10 tracking-tighter leading-tight"
            >
              IPEDIA의 <span className="text-[#FF5A00]">주요 업무</span>
            </motion.h2>
          </div>

          <div className="space-y-8 md:space-y-12">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group/card bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/80 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#FF5A00] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 relative z-10">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <span className="w-8 h-[2px] bg-[#FF5A00]" />
                      <div className="text-[#FF5A00] text-xs md:text-sm font-black tracking-widest uppercase">
                        Service {category.id}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-[#1F2F6E] tracking-tighter break-keep leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  <div className="md:w-2/3 grid grid-cols-1 gap-y-8 md:gap-y-12">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="group flex gap-4 md:gap-8">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#FF5A00]/5 flex items-center justify-center text-lg md:text-xl font-black text-[#FF5A00] group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-300">
                          {itemIdx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-black text-[#1F2F6E] mb-2 md:mb-4 group-hover:text-[#FF5A00] transition-colors duration-300 flex items-center gap-2">
                            {item.name}
                          </h4>
                          <p className="text-gray-500 font-medium text-sm md:text-[1.05rem] leading-relaxed break-keep whitespace-pre-line">
                            {item.description.split('<br />').map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i < item.description.split('<br />').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
