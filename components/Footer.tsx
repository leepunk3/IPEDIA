import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1738] text-[#C8CCD6] py-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="mb-4">
            <div className="flex items-center gap-2 md:gap-3 mb-4 text-xl md:text-2xl">
              <div className="w-[1em] h-[1em] bg-[#FF5A00] flex-shrink-0"></div>
              <h2 className="font-bold-heavy tracking-tighter text-[#FF5A00]">IPEDIA.</h2>
            </div>
            <div className="text-xs md:text-sm space-y-1 text-white/60">
              <p>서울시 강남구 역삼로 114, 현죽빌딩 9층</p>
              <p>02. 6920. 8882</p>
              <p>010. 8936. 8203</p>
              <p>kjlee@ipedia.kr</p>
              <p>kjlee@sungampat.com</p>
            </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center text-[10px] tracking-[0.2em] font-bold gap-4 md:gap-0">
          <p className="leading-relaxed">© 2025 IPEDIA INTELLECTUAL PROPERTY SOLUTION. ALL RIGHTS RESERVED.</p>
          <div className="space-x-6 uppercase">
            <span className="text-[#FF5A00]">Built for Innovators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};