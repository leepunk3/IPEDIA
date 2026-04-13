import React, { useState, useEffect } from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { motion, AnimatePresence } from 'motion/react';
import Papa, { ParseResult } from 'papaparse';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  FileCheck, 
  ExternalLink
} from 'lucide-react';

// Google Sheet URL (Published as CSV)
// How to get this URL:
// 1. Open your Google Sheet
// 2. File > Share > Publish to web
// 3. Select the sheet you want to publish
// 4. Select "Comma-separated values (.csv)" as the format
// 5. Click "Publish" and copy the link
// 6. Paste the link below
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQNA1PJtee1K5ATYgI_81_nMwBbT5LDlQ_-61w5JFT0L25n6VQIV7X3TB-hTYiq0yo01UbsXR3ODUzl/pub?gid=0&single=true&output=csv'; // e.g., 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR.../pub?output=csv'

interface PortfolioItem {
  id: number;
  title: string;
  applicant: string;
  filingDate: string;
  registrationDate: string;
  note: string;
}

export const WorkPortfolioPage: React.FC = () => {
  const [viewingItem, setViewingItem] = useState<PortfolioItem | null>(null);

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    if (GOOGLE_SHEET_URL) {
      Papa.parse(GOOGLE_SHEET_URL, {
        download: true,
        header: true,
        complete: (results: ParseResult<Record<string, string>>) => {
          const data = results.data as any[];
          const newItems: PortfolioItem[] = data
            .filter(row => row.Title && row.Applicant) // Basic validation
            .map((row, index) => ({
              id: index + 1, // Generate ID based on index
              title: row.Title,
              applicant: row.Applicant,
              filingDate: row.FilingDate || '',
              registrationDate: row.RegistrationDate || '',
              note: row.Note || ''
            }));
          
          if (newItems.length > 0) {
            setPortfolioItems(newItems);
          }
        },
        error: (error: Error) => {
          console.error('Error fetching Google Sheet data:', error);
        }
      });
    }
  }, []);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewingItem]);

  return (
    <div className="min-h-screen selection:bg-[#FF4E00] selection:text-white bg-[#FDFDFD]">
      <Header scrolled={true} />
      
      <AnimatePresence mode="wait">
        {viewingItem ? (
          <motion.main 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-24 md:pt-40 pb-20 md:pb-32"
          >
            <div className="max-w-6xl mx-auto px-4 md:px-6">
              <button 
                onClick={() => setViewingItem(null)}
                className="group flex items-center text-gray-400 font-bold mb-8 md:mb-12 hover:text-[#162a63] transition-colors text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                목록으로 돌아가기
              </button>

              <div className="bg-white rounded-[2rem] md:rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-4 bg-gray-50 flex items-center justify-center p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 relative overflow-hidden h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-50" />
                    <motion.img 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      src="/image03.png" 
                      alt={viewingItem.title} 
                      className="max-w-full max-h-full object-contain drop-shadow-2xl relative z-10" 
                    />
                  </div>
                  
                  <div className="lg:col-span-8 p-4 md:p-12 lg:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-[#162a63] mb-4 md:mb-10 leading-tight whitespace-pre-wrap tracking-tighter">
                        {viewingItem.title}
                      </h1>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
                        <div className="space-y-3 md:space-y-6">
                          <div className="flex flex-col">
                            <span className="text-[9px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2 flex items-center gap-2">
                              <User className="w-3 h-3" /> 출원인
                            </span>
                            <span className="text-base md:text-xl font-black text-[#162a63]">{viewingItem.applicant}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2 flex items-center gap-2">
                              <Calendar className="w-3 h-3" /> 출원일
                            </span>
                            <span className="text-base md:text-xl font-black text-[#162a63]">{viewingItem.filingDate}</span>
                          </div>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                          <div className="flex flex-col">
                            <span className="text-[9px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-1 md:mb-2 flex items-center gap-2">
                              <FileCheck className="w-3 h-3" /> 등록일
                            </span>
                            <span className="text-base md:text-xl font-black text-[#FF4E00]">{viewingItem.registrationDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-100 min-h-[240px]">
                        <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest mb-3 md:mb-4">상세 성과 및 전략</h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-wrap font-bold text-xs md:text-base break-keep">
                          {viewingItem.note || '상세 내용이 없습니다.'}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.main>
        ) : (
          <motion.main 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="bg-[#162a63] pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 text-white uppercase tracking-tighter leading-[0.9]"
                  >
                    IPEDIA <span className="text-[#FF4E00]">등록 성과</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-xl lg:text-2xl text-white/60 font-bold max-w-2xl leading-relaxed break-keep"
                  >
                    저희는 고객의 지적재산 등록을 위해 <br className="hidden lg:block" />
                    최선을 다하고 있습니다.
                  </motion.p>
                </div>
              </div>
              <div className="absolute -bottom-24 -right-24 w-1/2 h-full bg-[#FF4E00]/10 skew-x-12 transform origin-bottom-right opacity-30 blur-3xl" />
            </section>

            <section className="py-16 md:py-32">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                  {portfolioItems.map((item, idx) => (
                    <motion.div 
                      key={item.id} 
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white rounded-[24px] md:rounded-[32px] shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col overflow-hidden cursor-pointer relative h-[380px] md:h-[440px] transition-all duration-500" 
                      onClick={() => setViewingItem(item)}
                    >
                      <div className="w-full h-56 md:h-64 bg-gray-50 flex items-center justify-center p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img src="/image03.png" alt={item.title} className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 relative z-10" />
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                        <div className="mb-3 md:mb-4 flex items-center justify-between">
                          <span className="text-[10px] font-black text-[#FF4E00] tracking-widest uppercase">{item.applicant}</span>
                          <span className="text-[10px] font-black text-gray-300">{item.registrationDate}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-[#162a63] leading-tight whitespace-pre-wrap group-hover:text-[#FF4E00] transition-colors duration-300 mb-4 md:mb-6">
                          {item.title}
                        </h3>
                      </div>


                    </motion.div>
                  ))}
                  

                </div>
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>

      <Footer />

    </div>
  );
};
