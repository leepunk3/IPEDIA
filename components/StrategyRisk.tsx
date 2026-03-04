import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StrategyRisk: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-[#FF5A00]" />,
      image: "https://picsum.photos/seed/exit_strategy_typography/800/600",
      title: 'EXIT을 고려한 IP 설계',
      description: '리소스가 제한된 스타트업 환경에서 EXIT을 고려한 기술 장벽을 설계합니다. 기업 가치를 높이기 위한 특허를 고민합니다.',
      link: '/ip-exit-program'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF5A00]" />,
      image: "https://picsum.photos/seed/business_meeting_discussion/800/600",
      title: '특허 확장 프로그램',
      description: '하나의 마스터 출원으로 특허 포트폴리오를 스마트하게 확장합니다',
      link: '/ip-extension-program'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FF5A00]" />,
      image: "https://picsum.photos/seed/government_funding_paperwork/800/600",
      title: '팁스 특허 설계',
      description: '팁스 선정 기업의 IP를 진단하고 팁스 결과물로서 IP를 설계합니다',
      link: '/tips-ip-strategy'
    }
  ];

  return (
    <section id="we-provide" className="py-16 md:py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold-heavy text-[#1F2F6E] mb-4 md:mb-6">
            We provide
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <Link to={feature.link} key={idx} className="block group">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 reveal overflow-hidden hover:shadow-md transition-shadow duration-300 h-full" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="h-24 md:h-48 overflow-hidden relative">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <div className="p-5 md:p-8">
                  <div className="mb-4 md:mb-6 inline-flex p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1F2F6E] mb-3 md:mb-4 group-hover:text-[#FF5A00] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
