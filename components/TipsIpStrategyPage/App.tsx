
import React from 'react';
import { Header } from '../Header';

export const TipsIpStrategyPage: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#FF4E00] selection:text-white">
      <Header scrolled={true} />

            {/* Hero Section */}
      <section className="bg-[#162a63] pt-16 pb-14 md:pt-24 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-10 text-white uppercase tracking-tighter break-keep leading-[0.9]">
              <br className="hidden md:block" />
              팁스 평가에서 인정받는<br/>
              <span className="text-[#FF4E00]">지적재산 설계</span>
            </h1>
            <p className="text-base md:text-xl lg:text-xl font-black text-white/90 break-keep leading-tight border-l-4 md:border-l-8 border-[#FF4E00] pl-4 md:pl-8 py-2 md:py-4 bg-white/5">
              IPEDIA의 단계별 IP 로드맵을 통해<span className="text-white"> TIPS 성과를 증명</span>하세요.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-1/2 h-full bg-gradient-to-l from-[#FF4E00]/10 to-transparent pointer-events-none skew-x-12 transform origin-bottom-right opacity-30"></div>
      </section>

      {/* TIPS Evaluation Core Section */}
      <section className="bg-white py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#162a63] mb-4 tracking-tighter uppercase">TIPS 평가의 핵심</h2>
            <p className="text-sm md:text-base text-gray-400 font-bold max-w-xl mx-auto break-keep leading-relaxed">성과 입증과 사업화 가능성은 합격을 결정짓는 두 축입니다.</p>
          </div>

          <div className="relative mb-10 md:mb-20">
            {/* Desktop Plus Connector */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-gray-100 shadow-lg rounded-full items-center justify-center z-10">
              <span className="text-3xl font-black text-[#FF4E00]">+</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-xl transition-shadow relative">
                <h3 className="text-lg md:text-xl font-black text-[#162a63] mb-5 uppercase">과제 성과 입증</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 text-gray-500 font-bold text-sm md:text-base leading-relaxed">
                    <span className="text-[#3b82f6] shrink-0">•</span>
                    특허 명세서는 개발 기술의 공인 설명서 역할을 합니다.
                  </li>
                  <li className="flex gap-4 text-gray-500 font-bold text-sm md:text-base leading-relaxed">
                    <span className="text-[#3b82f6] shrink-0">•</span>
                    내부 보고서보다 공신력이 있는 기술 인증서로 기능합니다.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-xl transition-shadow relative">
                <h3 className="text-lg md:text-xl font-black text-[#162a63] mb-5 uppercase">사업화 가능성</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 text-gray-500 font-bold text-sm md:text-base leading-relaxed">
                    <span className="text-[#162a63] shrink-0">•</span>
                    투자자는 기업의 기술 보호 여부를 최우선으로 검토합니다.
                  </li>
                  <li className="flex gap-4 text-gray-500 font-bold text-sm md:text-base leading-relaxed">
                    <span className="text-[#162a63] shrink-0">•</span>
                    IP는 사업의 지속성과 확장을 위한 최소한의 안전장치입니다.
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Mobile Plus Connector */}
            <div className="flex md:hidden justify-center my-6">
               <div className="w-10 h-10 bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center">
                 <span className="text-xl font-black text-[#FF4E00]">+</span>
               </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-50">
            <p className="text-lg md:text-xl lg:text-3xl font-black text-[#162a63] tracking-tighter leading-tight">
              특허가 없으면 <span className="text-gray-400">주장</span>일 뿐입니다. <br/>
              특허가 있으면 <span className="text-[#FF4E00]">입증</span>이 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS IP Stats Section */}
      <section className="bg-white py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#162a63] rounded-[24px] md:rounded-[40px] p-6 md:p-10 lg:p-16 text-center relative shadow-2xl overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-black text-white/40 mb-8 md:mb-12 tracking-tighter uppercase leading-tight">팁스 선정 기업 평균 IP 보유 건수</h2>
              <div className="mb-8 md:mb-12">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FF4E00] leading-none">8.5</span>
                <span className="text-2xl lg:text-4xl font-black text-white ml-3">건</span>
              </div>
              <div className="text-white/60 font-bold text-sm md:text-base lg:text-xl break-keep max-w-3xl mx-auto leading-relaxed">
                팁스 선정 기업은 과제 내에 평균 <span className="text-white font-black">8~9건</span>의 지식재산을 확보하였습니다 <br/>
                <span className="text-xs md:text-sm opacity-60">(한국엔젤투자협회 『연간 성과 보고서』)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP Risk Section */}
      <section className="bg-[#f9f8f6] py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#162a63] tracking-tighter uppercase">부실 설계 리스크</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { 
                t: '성과 입증의 한계', 
                p: '핵심 기술이 충분히 반영되지 않은 채 형식적으로 출원이 진행되면, 특허 건수는 늘어날 수 있지만 기술력을 입증할 근거는 약해집니다. 과제의 성과를 설명해야 하는 시점에, 특허가 전략적 결과물이 아닌 단순한 기록으로 남게 됩니다.' 
              },
              { 
                t: '평가 설득력 저하', 
                p: '과제와 직접적으로 연결되지 않은 아이디어형 출원이나 건수 중심의 출원 전략은 평가 단계에서 설득력을 잃게 됩니다. 특허가 존재하더라도, 그것이 사업과 어떻게 연결되는지 설명되지 않으면 평가위원에게 성과로 인정받기 어렵습니다.' 
              },
              { 
                t: '사업 확장 제약', 
                p: '특정 구현에만 묶인 좁은 권리 범위는 향후 사업 확장에 제약이 될 수 있습니다. 후속 출원이나 전략적 분할이 어려운 구조라면, 특허가 기업의 성장을 보호하기보다 오히려 방향을 제한하는 요소로 작용할 수 있습니다.' 
              },
              { 
                t: '투자 리스크로 전환', 
                p: '우회 기술에 대한 대비가 부족하거나 IP 구조가 체계적이지 않다면, 투자자 관점에서 해당 특허는 경쟁 장벽이 아니라 잠재적 리스크로 해석될 수 있습니다. 초기 설계 단계에서의 판단이 기업의 신뢰도와 직결될 수 있습니다.' 
              }
            ].map((risk, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 border border-gray-200 flex flex-col h-full hover:border-[#FF4E00] transition-colors group shadow-sm">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="text-[#FF4E00] font-black text-lg md:text-xl">0{idx + 1}.</span>
                  <h4 className="text-lg md:text-xl font-black text-[#162a63] uppercase tracking-tight">{risk.t}</h4>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-500 font-bold text-sm md:text-base leading-relaxed break-keep">
                    {risk.p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Growth Evidence Section */}
      <section className="bg-white py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#162a63] tracking-tighter uppercase">IP는 기업의 성장을 견인합니다</h2>
            <p className="text-sm md:text-lg text-gray-400 font-bold mt-4">지표가 증명하는 지적재산권의 사업적 가치</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1: Revenue */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-8 xl:p-10 shadow-xl border-2 border-gray-100 flex flex-col h-full hover:border-[#FF4E00]/20 transition-all pt-10 md:pt-12">
              <h4 className="text-lg md:text-xl font-black text-[#162a63] mb-4 md:mb-6 uppercase tracking-tight">매출 증대 효과</h4>
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-black text-[#FF4E00] leading-none">27.3</span>
                <span className="text-base md:text-xl font-black text-[#162a63]/30 ml-2">% ↑</span>
              </div>
              <p className="text-sm md:text-base font-bold text-gray-500 leading-relaxed break-keep">
                국내외 특허 보유 스타트업은 그렇지 않은 스타트업 대비 매출 증가율이 <span className="text-[#162a63] font-black px-1">27.3%로 높습니다.</span>
              </p>
            </div>

            {/* Card 2: Fundraising */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-8 xl:p-10 shadow-xl border-2 border-gray-100 flex flex-col h-full hover:border-[#FF4E00]/20 transition-all pt-10 md:pt-12">
              <h4 className="text-lg md:text-xl font-black text-[#162a63] mb-4 md:mb-6 uppercase tracking-tight">자금 조달 향상</h4>
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-black text-[#FF4E00] leading-none">1.7~6.3</span>
                <span className="text-base md:text-xl font-black text-[#162a63]/30 ml-2">배 ↑</span>
              </div>
              <p className="text-sm md:text-base font-bold text-gray-500 leading-relaxed break-keep mb-6">
                특히 후기 단계에서 특허·상표 동시 출원 시 조달 가능성이 <span className="text-[#162a63] font-black px-1">최대 6배까지 증가합니다.</span>
              </p>
              <div className="bg-[#f9f8f6] rounded-2xl p-4 md:p-6 space-y-3 md:space-y-4 border border-gray-100 w-full">
                <div className="flex justify-between text-xs font-black border-b border-gray-200 pb-2"><span className="text-[#162a63]/40 tracking-widest uppercase">시드단계</span><span className="text-[#162a63]">1.7배</span></div>
                <div className="flex justify-between text-xs font-black border-b border-gray-200 pb-2"><span className="text-[#162a63]/40 tracking-widest uppercase">초기(A~B)</span><span className="text-[#162a63]">3.1배</span></div>
                <div className="flex justify-between text-xs font-black"><span className="text-[#162a63]/40 tracking-widest uppercase">후기(C 이상)</span><span className="text-[#FF4E00]">6.3배</span></div>
              </div>
            </div>

            {/* Card 3: Investment */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-8 xl:p-10 shadow-xl border-2 border-gray-100 flex flex-col h-full hover:border-[#FF4E00]/20 transition-all pt-10 md:pt-12">
              <h4 className="text-lg md:text-xl font-black text-[#162a63] mb-4 md:mb-6 uppercase tracking-tight">투자 유치 확률</h4>
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-black text-[#FF4E00] leading-none">2.8~17</span>
                <span className="text-base md:text-xl font-black text-[#162a63]/30 ml-2">배 ↑</span>
              </div>
              <p className="text-sm md:text-base font-bold text-gray-500 leading-relaxed break-keep mb-6">
                <span className="text-[#162a63] font-black">특허 보유 기업 투자 유치 성공률이</span> 미보유 기업 대비 2.8배 높습니다.
              </p>
              <div className="bg-[#f9f8f6] rounded-2xl p-4 md:p-6 space-y-3 md:space-y-4 border border-gray-100 w-full">
                <div className="flex justify-between text-xs font-black border-b border-gray-200 pb-2"><span className="text-[#162a63]/40 uppercase">특허 보유시</span><span className="text-[#162a63]">2.8배</span></div>
                <div className="flex justify-between text-xs font-black border-b border-gray-200 pb-2"><span className="text-[#162a63]/40 uppercase">특허 상표 동시 보유 시</span><span className="text-[#162a63]">10.0배</span></div>
                <div className="flex justify-between text-xs font-black"><span className="text-[#162a63]/40 uppercase">20건 이상 출원시</span><span className="text-[#FF4E00]">17.1배</span></div>
              </div>
            </div>

            {/* Card 4: Exit */}
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-8 xl:p-10 shadow-xl border-2 border-gray-100 flex flex-col h-full hover:border-[#FF4E00]/20 transition-all pt-10 md:pt-12">
              <h4 className="text-lg md:text-xl font-black text-[#162a63] mb-4 md:mb-6 uppercase tracking-tight">EXIT 가능성</h4>
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-black text-[#FF4E00] leading-none">2.0~5.9</span>
                <span className="text-base md:text-xl font-black text-[#162a63]/30 ml-2">배 ↑</span>
              </div>
              <p className="text-sm md:text-base font-bold text-gray-500 leading-relaxed break-keep mb-6">
                특허 상표 출원 시 투자금 회수 가능성이 <span className="text-[#162a63] font-black px-1">2배 이상 증가합니다.</span>
              </p>
              <div className="bg-[#f9f8f6] rounded-2xl p-4 md:p-6 space-y-3 md:space-y-4 border border-gray-100 w-full">
                <div className="flex justify-between text-xs font-black border-b border-gray-200 pb-2"><span className="text-[#162a63]/40 uppercase">특허 상표 출원 선행 시</span><span className="text-[#162a63]">2.0배 ↑</span></div>
                <div className="flex justify-between text-xs font-black"><span className="text-[#162a63]/40 uppercase">20건 이상 출원 시</span><span className="text-[#FF4E00]">5.9배 ↑</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Roadmap Section */}
      <section className="bg-white py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#FF4E00] tracking-tight mb-4 uppercase">IPEDIA의 단계별 IP 로드맵</h2>
            <p className="text-sm md:text-base text-gray-400 font-bold max-w-xl mx-auto break-keep">R&D 마일스톤에 맞춘 정밀한 설계가 필요합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                t: 'TIPS 초기 (0~6M)',
                d: ['핵심 원천 기술 정의 및 조기 출원', '넓은 권리 범위 우선권 확보', '분할 출원 고려 기본 구조 설계'],
                stats: [['임시출원', '1건'], ['상표출원', '2건']],
                accent: 'bg-[#162a63]'
              },
              {
                t: 'TIPS 중기 (6~18M)',
                d: ['요소기술 발굴 및 고도화 출원', '회피 설계 및 방어 장벽 강화', '투자 IR용 IP 자산 구조화'],
                stats: [['정규출원', '1건'], ['후속출원', '3~5건']],
                accent: 'bg-[#3b82f6]'
              },
              {
                t: 'TIPS 종료 및 평가',
                d: ['IP 포트폴리오 체제적 완성', '후속 정부과제 대응력 극대화', '핵심 IP의 전략적 자산화 완료'],
                stats: [['특허 등록', '4~5건'], ['상표등록', '2건']],
                accent: 'bg-[#FF4E00]'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className={`w-8 h-1 mb-6 md:mb-10 ${step.accent}`}></div>
                <h3 className="text-lg md:text-xl font-black text-[#162a63] mb-6 md:mb-8 uppercase tracking-tight leading-tight">{step.t}</h3>
                <div className="space-y-3 md:space-y-4 flex-grow mb-8 md:mb-12">
                  {step.d.map((desc, i) => (
                    <div key={i} className="flex gap-3 items-start font-bold text-gray-500 text-sm md:text-base leading-tight break-keep">
                      <span className="text-[#3b82f6]">•</span> {desc}
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pt-6 border-t border-gray-50">
                  {step.stats.map((st, i) => (
                    <div key={i} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg">
                      <span className="text-sm md:text-base font-black text-[#162a63] uppercase tracking-wider">{st[0]}</span>
                      <span className="text-sm md:text-base font-black text-[#3b82f6]">{st[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkpoint Section */}
      <section className="bg-[#f9f8f6] py-12 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#162a63] tracking-tighter mb-4 uppercase">IP 핵심 체크포인트</h2>
            <p className="text-sm md:text-base text-gray-400 font-bold max-w-xl mx-auto break-keep">평가 위원의 시각에서 우리 회사의 IP 포트폴리오를 점검해야 합니다.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {[
              { 
                t: '과제와 특허의 직결성', 
                q: ['과제의 핵심 기술을 보호하고 있는가?', '계획서의 핵심 키워드가 청구항에 반영되었는가?'], 
                p: ['과제 목표와 청구항을 1:1로 정렬', '권리 범위를 과제 범위와 실질적으로 일치시킴'] 
              },
              { 
                t: '기술력의 객관적 증명', 
                q: ['과제 수행 전·후 차별성이 명확한가?', '진보된 기술 원리가 드러나는가?'], 
                p: ['개선 요소를 구체적으로 구조화', '핵심 기술 원리를 청구항에 반영'] 
              },
              { 
                t: '보호 장벽의 강건성', 
                q: ['경쟁사의 진입을 실질적으로 차단하는가?', '우회 설계를 방어할 수 있는가?'], 
                p: ['회피 설계 시나리오 분석', '장벽으로 기능하는 권리 범위 설계'] 
              },
              { 
                t: '포트폴리오의 확장성', 
                q: ['후속 특허로 확장 가능한가?', '중장기 IP 로드맵이 존재하는가?'], 
                p: ['분할·개량 출원 전략 마련', '기술 요소별 권리 분산 및 결합 구조 설계'] 
              }
            ].map((check, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full border-t-[12px] border-[#162a63] relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-4 right-6 text-5xl md:text-7xl font-black text-gray-50 pointer-events-none group-hover:text-[#162a63]/5 transition-colors leading-none">0{idx+1}</div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <h4 className="text-lg md:text-xl lg:text-2xl font-black text-[#162a63] uppercase leading-tight">{check.t}</h4>
                </div>
                
                <div className="space-y-6 relative z-10 flex-grow text-sm">
                  <div>
                    <p className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#FF4E00] mb-3 flex items-center gap-2">
                       질문
                    </p>
                    <ul className="space-y-2">
                      {check.q.map((q, i) => <li key={i} className="text-sm md:text-base lg:text-lg text-gray-500 font-bold leading-relaxed">• {q}</li>)}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100 bg-gray-50/50 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-6 md:p-8 rounded-b-3xl">
                    <p className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-[#FF4E00] mb-3 flex items-center gap-2">전략 포인트</p>
                    <ul className="space-y-2">
                      {check.p.map((p, i) => <li key={i} className="text-sm md:text-base lg:text-lg text-[#162a63] font-black">- {p}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiated Service */}
      <section className="bg-white py-8 md:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#162a63] rounded-[20px] md:rounded-[40px] p-4 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-10 md:gap-16 relative shadow-2xl overflow-hidden">
            <div className="lg:w-full relative z-10 text-center lg:text-left">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-10 break-keep leading-tight uppercase">
                IPEDIA는 출원 대행사가 아닙니다. <br/>
                <span className="text-[#FF4E00]">IP 설계 전문가입니다</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                  '과제 목표에 부합하는 IP 설계',
                  'R&D 흐름에 정렬된 단계별 출원 전략',
                  '후속 투자까지 고려하는 포괄적 IP 설계'
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center lg:items-start gap-2 p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10 h-full">
                    <p className="text-xs md:text-base lg:text-lg font-bold text-white/90 leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Final CTA Section */}
      <section className="bg-white pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-[#162a63] tracking-tighter break-keep uppercase leading-tight">
              팁스 사업 기간의 IP 구축은 <br/> 
              <span className="text-[#FF4E00]">IPEDIA</span>에 맡기세요
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


