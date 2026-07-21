import React from 'react';
import { Header } from '../Header';
import { 
  Users, 
  Lightbulb, 
  Search, 
  FileText, 
  ShieldAlert, 
  Zap, 
  BriefcaseBusiness,
  Play,
  Clock,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#FF4E00] selection:text-white bg-[#f9f8f6]">
      <Header scrolled={true} />
      
      {/* Hero Section */}
      <section className="bg-[#162a63] pt-16 pb-14 md:pt-24 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-8 text-white uppercase tracking-tighter break-keep leading-[1.1] drop-shadow-2xl">
              <br />연구실에<br />
              <span className="text-[#FF4E00]">전담 특허팀</span>을 세우세요
            </h1>
            <div className="text-base md:text-xl lg:text-xl font-black text-white/90 break-keep leading-tight border-l-4 md:border-l-8 border-[#FF4E00] pl-4 md:pl-8 py-2 md:py-4 bg-white/5">
              IPEDIA는 사내 변리사 프로그램으로<br/>기업의 IP팀이 되어 드립니다.
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-[110px] bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="font-heading text-[13px] font-bold tracking-[0.22em] text-[#FF4E00] uppercase mb-4">
            CHALLENGES
          </div>

          <h2 className="text-[clamp(26px,4vw,40px)] font-black leading-[1.4] tracking-[-0.01em] text-[#162A63] break-keep mb-12">
            스타트업의 지재권 관리, <br />
            이런 한계에 부딪히진 않으셨나요?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: <ShieldAlert className="w-6 h-6 text-[#FF4E00]" />,
                title: "대표나 개발자가 특허 행정까지 도맡는 비효율",
                desc: "전담 인력이 없어 대표자나 시니어 개발자가 서류 검토와 마감 처리에 많은 시간을 빼앗겨 본업에 집중하기 어렵습니다."
              },
              {
                icon: <Users className="w-6 h-6 text-[#FF4E00]" />,
                title: "외부 특허 사무소와의 지치는 커뮤니케이션",
                desc: "우리 회사의 특허 가치를 완전히 이해하지 못한 외부 변리사에게 매번 신기술을 장황하게 설명하고 과외하는 과정에서 피로도가 쌓입니다."
              },
              {
                icon: <Zap className="w-6 h-6 text-[#FF4E00]" />,
                title: "기술 로드맵과 엇박자 나는 특허 출원",
                desc: "연구 개발의 방향은 계속해서 바뀌는데, 과거에 신청해 둔 특허들과 일치하지 않아 결과적으로 핵심 비즈니스가 제대로 보호받지 못합니다."
              },
              {
                icon: <BriefcaseBusiness className="w-6 h-6 text-[#FF4E00]" />,
                title: "체계적인 특허 포트폴리오 관리 부재",
                desc: "단편적인 특허 등록에만 만족하여 우회 회피나 패밀리 확장 설계가 부족하고, 결과적으로 투자자(VC) 실사(IP DD) 과정에서 낮은 평가를 받습니다."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5 items-start">
                <div className="p-3 bg-orange-50 rounded-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#162A63] mb-2 break-keep">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed break-keep font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-[120px] bg-white text-center relative overflow-hidden">
        <div className="max-w-[840px] mx-auto px-7 relative z-10">
          <div className="space-y-6 text-lg md:text-xl text-[#4B5563] leading-relaxed break-keep font-medium">
            <p>
              CEO는 회사를 성장시키고 CTO는 기술을 개발합니다.<br />
              하지만, <span className="text-[#162A63] font-black underline decoration-[#FF4E00]/30 decoration-4 underline-offset-4">지적재산권을 전담하는 사람은 없습니다.</span>
            </p>
            <p className="text-gray-400 text-base md:text-lg">
              그래서, 특허는 개발이 끝난 뒤에 만들어집니다.<br />
              기술이 완성되고, 제품이 출시되고, 비슷한 경쟁 제품이 등장한 뒤에야<br />
              서류가 움직이기 시작합니다.
            </p>
          </div>

          <div className="my-10 flex justify-center items-center gap-3">
            <div className="h-[1px] w-8 bg-gray-200"></div>
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#FF4E00] uppercase">IPEDIA THINKS DIFFERENT</span>
            <div className="h-[1px] w-8 bg-gray-200"></div>
          </div>

          <p className="text-[18px] md:text-[20px] font-bold text-[#162A63]">
            IPEDIA는 다르게 생각합니다.
          </p>

          <p className="mt-4 text-[clamp(28px,4.5vw,42px)] font-black leading-[1.35] tracking-[-0.015em] text-[#1A1A1A] break-keep">
            변리사가 <em className="not-italic text-[#FF4E00] relative inline-block">
              회의실
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#FF4E00]/15 -z-10"></span>
            </em>에 들어갑니다.
          </p>
        </div>
      </section>

      {/* IP Design Section */}
      <section id="design" className="py-[110px] bg-white scroll-mt-20">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="font-heading text-[13px] font-bold tracking-[0.22em] text-[#FF4E00] uppercase mb-4">
            IP DESIGN
          </div>

          <h2 className="text-[clamp(26px,4vw,40px)] font-black leading-[1.4] tracking-[-0.01em] text-[#162A63] break-keep">
            IPEDIA와 함께하는
            <br />
            스타트업의 IP 설계
          </h2>

          <p className="mt-[18px] text-[16.5px] text-[#6B7280] max-w-[600px] leading-relaxed break-keep">
            사내 변리사 프로그램이 실제로 작동하는 방식입니다.
            특허는 서류에서 시작되지 않습니다. 회의실에서 시작됩니다.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: '01',
                title: '개발이 시작됩니다.',
                description: '신규 기능을 설계하고, 제품의 방향을 결정하는 개발회의가 시작됩니다.',
              },
              {
                step: '02',
                title: '전속 특허팀이 함께합니다.',
                description: 'IPEDIA의 변리사가 개발회의에 참석합니다. 사내 특허팀처럼 기술을 이해하고 질문하며 핵심을 골라냅니다.',
              },
              {
                step: '03',
                title: '사업 모델이 발명으로 정리됩니다.',
                description: '사업 모델을 구조화합니다. 핵심 차별점을 정의하고, 요소 기술을 체계화합니다.',
              },
              {
                step: '04',
                title: '특허를 설계합니다.',
                description: '제품 하나가 아닌 비즈니스 전체를 보호할 수 있도록, 핵심 권리 범위를 설계합니다.',
              },
              {
                step: '05',
                title: '빠르게 출원합니다.',
                description: '개발 과정에서 신속하게 명세서를 작성하고 출원합니다. 기술의 핵심이 정의된 직후 권리화를 시작합니다.',
              },
              {
                step: '06',
                title: '최적의 우선심사를 고민합니다.',
                description: '투자, 지원사업, 기술평가 등 중요 일정을 앞두고 특허가 신속하게 등록되도록 우선심사를 활용합니다.',
              },
              {
                step: '07',
                title: '등록특허가 기업의 재산이 됩니다.',
                description: '등록특허는 단순한 인증이 아닙니다. 투자자에게는 기술력의 근거가 되고, 고객에게는 신뢰가 되며, 경쟁사에게는 진입장벽이 됩니다.',
                hasStamp: true
              },
              {
                step: '08',
                title: '특허가 포트폴리오로 성장합니다.',
                description: '대표 특허를 중심으로 분할출원, 개량발명, 후속 기술을 지속적으로 확장합니다. 회사의 성장과 함께 IP도 함께 성장합니다.',
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF4E00]/5 rounded-bl-3xl -mr-3 -mt-3 transition-all group-hover:scale-110"></div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-[#162A63]/20">{item.step}</span>
                  <h3 className="text-lg md:text-xl font-bold text-[#162A63] tracking-tight">{item.title}</h3>
                </div>
                <p className="text-gray-500 font-medium text-sm leading-relaxed break-keep flex-grow relative z-10">
                  {item.description}
                </p>
                {item.hasStamp && (
                  <div className="absolute right-4 bottom-4 w-16 h-16 rounded-full border-4 border-double border-[#FF4E00]/60 flex items-center justify-center rotate-12 pointer-events-none select-none z-20 bg-white/40 backdrop-blur-[1px]">
                    <span className="text-[14px] font-black text-[#FF4E00] tracking-wider">등록</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-[110px] bg-[#F9FAFB] border-t border-gray-100">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="font-heading text-[13px] font-bold tracking-[0.22em] text-[#FF4E00] uppercase mb-4">
            EXPECTED OUTCOMES
          </div>

          <h2 className="text-[clamp(26px,4vw,40px)] font-black leading-[1.4] tracking-[-0.01em] text-[#162A63] break-keep mb-12">
            변리사 내재화로 <br />
            변화하는 기업 지적재산
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "비즈니스에 최적화된 고품질 포트폴리오",
                desc: "실제 매출 모델과 100% 동기화된 권리 범위를 선점하여 우회 시도를 장벽 처리하고 강력한 독점권을 확보합니다."
              },
              {
                title: "특허 관련 부가 리소스 감소",
                desc: "대표 및 개발부에서 서류 작성이나 소통에 시간을 투입할 필요 없이, 사내 변리사팀이 작동하듯 원스톱 행정 및 등록 지원을 완성합니다."
              },
              {
                title: "VC 실사 및 EXIT 준비",
                desc: "시드 단계부터 후기 라운드 투자 유치 시까지, 그리고 EXIT 시점에 기업 가치를 완벽하게 지켜드립니다."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:border-[#FF4E00] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#162A63] text-white flex items-center justify-center font-black text-sm mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#162A63] mb-4 break-keep">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed break-keep flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-white py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-extrabold text-[#162a63] break-keep leading-tight">
            <span className="text-[#FF4E00]">IPEDIA의 전담 특허팀</span>으로 IP를 시스템화하세요.
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
