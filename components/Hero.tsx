import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-16 md:pt-24 pb-12 md:pb-20 bg-[#1F2F6E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        <div className="text-[#F5F5F5] animate-fade-up">
          <h1 className="text-3xl md:text-6xl font-bold-heavy leading-[1.1] mb-4 md:mb-6">
            <span className="inline-block bg-[#FF5A00] text-white text-sm md:text-2xl px-2 mb-2">Out of Box</span> <br />
            <span className="text-[#FF5A00] uppercase text-3xl md:text-6xl">
              IPEDIA <br /> 
              IP SOLUTION
            </span>
          </h1>
          <p className="text-base md:text-2xl font-bold text-[#C8CCD6] mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
            기업은 혁신을 만드십시오.<br />
            저희는 장벽을 만들겠습니다.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('we-provide');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#FF5A00] text-white font-extrabold-heavy px-6 py-3 md:px-8 md:py-4 tracking-widest text-sm md:text-base rounded-sm hover:bg-[#FF5C0A] transition-all shadow-lg w-full md:w-auto"
            >
              대표 서비스 바로가기
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 transform scale-110">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Innovative Team" 
              className="rounded-lg shadow-2xl border-4 border-white/5"
            />
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF5A00]/5 skew-x-12 translate-x-32"></div>
    </section>
  );
};