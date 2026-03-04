import React from 'react';

const logos = [
  "/image04.webp",
  "/image05.webp",
  "/image06.webp",
  "/image07.webp",
  "/image08.webp",
  "/image09.webp",
  "/image010.webp",
  "/image11.webp",
];

export const CorporateExperience: React.FC = () => {
  return (
    <section className="pt-8 pb-12 md:pt-16 md:pb-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-8 md:mb-12 text-center reveal">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#1F2F6E]">
          기업 경험
        </h2>
        <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
          다양한 기업들과 함께 성장하고 있습니다
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate logos to create seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-4 md:mx-8 flex-shrink-0 flex items-center justify-center h-16 md:h-24 w-32 md:w-48 transition-all duration-300">
              <img 
                src={logo} 
                alt={`Partner Company ${index}`} 
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};
