import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [message, setMessage] = useState('IPEDIA의 서비스에 관심이 있습니다. 후속 미팅을 위해 회신 바랍니다.');
  const emailAddress = 'kjlee@ipedia.kr';

  return (
    <section id="contact" className="py-12 md:py-12 bg-[#1F2F6E] text-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="reveal">
          <h2 className="text-xl md:text-3xl font-bold-heavy mb-2 md:mb-4">아이피디아의 지적재산 서비스를 받아보세요</h2>
          <p className="text-[#C8CCD6] text-base md:text-lg mb-6 md:mb-8 font-medium">
            이광진 변리사 <span className="text-[#FF5A00] font-bold-heavy lowercase block md:inline">{emailAddress}</span>
          </p>
          
          <div className="bg-white p-4 md:p-10 rounded-sm shadow-2xl text-left">
            <div className="mb-0">
              <label className="block text-sm font-bold text-gray-500 mb-2 md:mb-3 leading-relaxed">
                아래 내용을 복사하신 후 이광진 변리사에게 메일을 보내주세요.
              </label>
              <textarea 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 text-[#1F2F6E] font-medium outline-none focus:border-[#FF5A00] transition-colors resize-none text-base md:text-lg"
                placeholder="상담받고 싶으신 내용을 적어주세요."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};