import React, { useState, useEffect } from 'react';
import { X, Save, Edit3 } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  applicant: string;
  filingDate: string;
  registrationDate: string;
  note: string;
}

interface ModalProps {
  item: PortfolioItem | null;
  onSave: (item: PortfolioItem) => void;
  onClose: () => void;
}

export const PortfolioModal: React.FC<ModalProps> = ({ item, onSave, onClose }) => {
  const [isEditing, setIsEditing] = useState(!item);
  const [title, setTitle] = useState('');
  const [applicant, setApplicant] = useState('');
  const [filingDate, setFilingDate] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setApplicant(item.applicant || '');
      setFilingDate(item.filingDate || '');
      setRegistrationDate(item.registrationDate || '');
      setNote(item.note || '');
    } else {
      setTitle('');
      setApplicant('');
      setFilingDate('');
      setRegistrationDate('');
      setNote('');
    }
  }, [item]);

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({
      id: item?.id || Date.now(),
      title,
      applicant,
      filingDate,
      registrationDate,
      note,
    });
  };

  return (
    <div className="fixed inset-0 bg-[#162a63]/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#162a63] rounded-xl flex items-center justify-center text-white">
              <Edit3 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-black text-[#162a63] tracking-tighter">
              {isEditing ? (item ? '성과 수정' : '새 성과 추가') : '상세 정보'}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-grow">
          {isEditing ? (
            <div className="space-y-6">
              <div className="group">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2 ml-1 group-focus-within:text-[#FF4E00] transition-colors">제목</label>
                <input 
                  type="text" 
                  placeholder="예: 특허 등록 결정 (핵심 알고리즘 고도화)" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4E00] focus:bg-white transition-all font-bold text-[#162a63]" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2 ml-1 group-focus-within:text-[#FF4E00] transition-colors">출원인</label>
                  <input 
                    type="text" 
                    placeholder="회사명 또는 성함" 
                    value={applicant} 
                    onChange={(e) => setApplicant(e.target.value)} 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4E00] focus:bg-white transition-all font-bold text-[#162a63]" 
                  />
                </div>
                <div className="group">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2 ml-1 group-focus-within:text-[#FF4E00] transition-colors">출원일</label>
                  <input 
                    type="date" 
                    value={filingDate} 
                    onChange={(e) => setFilingDate(e.target.value)} 
                    className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4E00] focus:bg-white transition-all font-bold text-[#162a63]" 
                  />
                </div>
              </div>
              <div className="group">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2 ml-1 group-focus-within:text-[#FF4E00] transition-colors">등록일</label>
                <input 
                  type="date" 
                  value={registrationDate} 
                  onChange={(e) => setRegistrationDate(e.target.value)} 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4E00] focus:bg-white transition-all font-bold text-[#162a63]" 
                />
              </div>
              <div className="group">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-2 ml-1 group-focus-within:text-[#FF4E00] transition-colors">상세 노트</label>
                <textarea 
                  placeholder="성과에 대한 상세 설명 및 전략을 입력하세요." 
                  value={note} 
                  onChange={(e) => setNote(e.target.value)} 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4E00] focus:bg-white transition-all font-bold text-[#162a63] h-40 resize-none" 
                />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-[#162a63] mb-6 leading-tight tracking-tight">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">출원인</span>
                    <span className="text-[#162a63] font-black text-lg">{applicant || '-'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">출원일</span>
                    <span className="text-[#162a63] font-black text-lg">{filingDate || '-'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">등록일</span>
                    <span className="text-[#FF4E00] font-black text-lg">{registrationDate || '-'}</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 ml-1">상세 노트</label>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl text-gray-600 font-bold leading-relaxed whitespace-pre-wrap min-h-[120px]">
                  {note || '내용이 없습니다.'}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 border-t border-gray-100 flex justify-end gap-4 bg-gray-50/50">
          <button 
            onClick={onClose} 
            className="px-8 py-3 rounded-xl text-gray-500 font-black hover:bg-gray-200 transition-all text-sm uppercase tracking-widest"
          >
            {isEditing ? '취소' : '닫기'}
          </button>
          {isEditing ? (
            <button 
              onClick={handleSave} 
              className="px-10 py-3 rounded-xl bg-[#162a63] text-white font-black hover:bg-[#FF4E00] transition-all shadow-lg flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              <Save className="w-4 h-4" /> 저장하기
            </button>
          ) : (
            <button 
              onClick={() => setIsEditing(true)} 
              className="px-10 py-3 rounded-xl bg-[#FF4E00] text-white font-black hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              <Edit3 className="w-4 h-4" /> 수정하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
