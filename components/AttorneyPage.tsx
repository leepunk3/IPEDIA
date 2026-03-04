import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const AttorneyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header scrolled={true} />
      <main className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16">
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-black text-gray-800 border-b-4 border-gray-800 pb-4 mb-8 md:mb-12">이광진 변리사</h1>

              <div className="space-y-8 md:space-y-12">
                <div>
                  <h2 className="text-lg font-black text-gray-800 border-b border-gray-200 pb-2 mb-4">소속</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>(현) 특허법인 성암</li>
                    <li>(현) 아이피디아 IP 솔루션 대표 변리사</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-black text-gray-800 border-b border-gray-200 pb-2 mb-4">학력</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>동국대학교 기계공학 전공 (학사)</li>
                    <li>중국인민대학 (中国人民大学) 지적재산 전공 (석사)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-black text-gray-800 border-b border-gray-200 pb-2 mb-4">주요 업무 분야</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>차량용 공조 장치, 전기차용 열관리 시스템 업무 대리(현대위아)</li>
                    <li>반도체 구조(대만 TSMC), 반도체 제조 장치(일본 Tokyo Electron) 특허 대리</li>
                    <li>자동차 부품 특허 대리(HONDA, Volkswagen)</li>
                    <li>CCTV 카메라 특허 대리(영국전자)</li>
                    <li>가전제품 특허 대리(Electrolux, DYSON)</li>
                    <li>무선통신장비 특허 대리(KMW)</li>
                    <li>기타 Hitachi, Toshiba, MAN Diesel, OSRAM, Fujitsu, Nikon, Ricoh, Sumitomo Electric 등 글로벌 기업 특허 대리</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-black text-gray-800 border-b border-gray-200 pb-2 mb-4">외부활동</h2>
                  <ul className="space-y-2 text-gray-600">
                    <li>한국발명진흥회 지식재산활용전략 사업 심사위원</li>
                    <li>KOIKA ASEAN 지식재산권 역량 강화 사업 강의</li>
                    <li>북경 한중 변리사 합동 세미나 한국 특허 제도 강의</li>
                    <li>민간 IP R&D 전략 지원사업 (한국특허전략개발원)</li>
                    <li>NEP 심사위원 (한국산업기술진흥협회)</li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 space-y-8">
              <img src="/image02.jpg" alt="이광진 변리사" className="rounded-lg w-full" />
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>이광진 변리사는 기계공학을 전공하고 '10년부터 법인에서 기계/기구/장치 특허를 썼습니다. 철강기업에서 특허 담당자로 일하면서 기업 IP 생태를 경험했고, 공공기관에서 기술평가 업무도 하였습니다. 현재는 스타트업/중소기업의 특허를 주로 쓰고 있고 상표 디자인 등록 업무를 하고 있습니다.</p>
                <p>고객의 기술을 스터디하고 IP 경험을 고객에 전달하는 즐거움을 좋아합니다.</p>
                <p>+ 이광진 변리사는 현재 중견 특허법인에서 일하고 있습니다.</p>
              </div>
              <a href="https://www.koreaip.com/main/main.html" target="_blank" rel="noopener noreferrer" className="block text-center bg-teal-500 text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-teal-600 transition-colors">특허법인 소개 바로 가기</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
