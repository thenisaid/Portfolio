import React from 'react';
import { X } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex justify-center overflow-y-auto bg-black/80 backdrop-blur-sm py-10 px-4" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[900px] bg-[#161616] border border-[#262626] rounded-md shadow-2xl p-6 md:p-[60px] h-fit" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-2"
        >
          <X size={24} />
        </button>
        
        {/* Resume Content */}
        <div className="font-sans text-[#d4d4d8] leading-relaxed">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-10 mb-12 gap-6 md:gap-0">
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-[#f4f4f5] tracking-tight">Kim Mooseong</h1>
                    <p className="text-xl text-zinc-400 font-light">Senior UX Writer & Content Strategist</p>
                    <p className="text-sm mt-4 text-zinc-500 italic">"사용자의 문제를 언어로 해결하고 비즈니스 가치를 숫자로 증명합니다."</p>
                </div>
                <div className="text-left md:text-right text-sm text-zinc-400 flex flex-col gap-1">
                    <p className="flex items-center gap-2 md:justify-end"><i className="fa-regular fa-envelope w-5 text-center"></i> thenisaid1@gmail.com</p>
                    <p className="flex items-center gap-2 md:justify-end"><i className="fa-solid fa-link w-5 text-center"></i> https://brunch.co.kr/@1dayliterature</p>
                    <p className="flex items-center gap-2 md:justify-end"><i className="fa-brands fa-linkedin w-5 text-center"></i> https://www.linkedin.com/in/thenisaid/</p>
                </div>
            </header>

            {/* Summary */}
            <section className="mb-12">
                <h2 className="text-[#d97706] border-b border-[#262626] pb-2 mb-6 uppercase tracking-widest text-sm font-semibold">Summary</h2>
                <p>
                    현대자동차와 야놀자에서 서비스의 성장을 이끄는 텍스트를 설계해 왔습니다. 단순히 글을 다듬는 것을 넘어, 브랜드의 보이스 톤 가이드라인을 수립하고 디자인 시스템에 라이팅 컴포넌트를 통합하는 등 <strong>운영 효율화와 사용자 경험 고도화</strong>를 동시에 추구합니다. 국내 UX 라이팅 커뮤니티 'UX 라이터로 살아가기'의 운영자로서 업계 생태계 확장에도 기여하고 있습니다.
                </p>
            </section>

            {/* Experience */}
            <section className="mb-12">
                <h2 className="text-[#d97706] border-b border-[#262626] pb-2 mb-6 uppercase tracking-widest text-sm font-semibold">Experience</h2>
                
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                        <h3 className="text-[#f4f4f5] text-xl font-semibold">현대자동차 (Hyundai Motor Company)</h3>
                        <span className="text-zinc-500 font-mono text-sm">2024 — Present</span>
                    </div>
                    <p className="text-amber-600 text-sm font-medium mb-3">UX Writer</p>
                    <ul className="list-none p-0 space-y-2">
                        <li className="relative pl-6"><span className="absolute left-0 text-[#d97706] opacity-70">→</span><strong>인포테인먼트&모바일 통합 UX 라이팅 가이드라인 구축 및 프로세스 정리</strong></li>
                        <li className="relative pl-6"><span className="absolute left-0 text-[#d97706] opacity-70">→</span><strong>myHyundai/MY GENESIS/Kia app 앱 UX 라이팅 고도화:</strong> 문구 사용자 최적화 수정 및 협업 프로세스 정립</li>
                        <li className="relative pl-6"><span className="absolute left-0 text-[#d97706] opacity-70">→</span><strong>디자인 시스템(ODS) UX 라이팅 가이드라인 확립:</strong> 디자인 시스템에 맞춘 UX 라이팅 가이드라인 최적화&Figma 플러그인 툴 개발</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                        <h3 className="text-[#f4f4f5] text-xl font-semibold">야놀자 (Yanolja)</h3>
                        <span className="text-zinc-500 font-mono text-sm">2022 — 2024</span>
                    </div>
                    <p className="text-amber-600 text-sm font-medium mb-3">UX Writer</p>
                    <ul className="list-none p-0 space-y-2">
                        <li className="relative pl-6"><span className="absolute left-0 text-[#d97706] opacity-70">→</span><strong>슈퍼앱 보이스 톤 정립:</strong> 숙박, 레저, 교통 통합 서비스 운영에 따른 일관된 브랜드 보이스 확립</li>
                        <li className="relative pl-6"><span className="absolute left-0 text-[#d97706] opacity-70">→</span><strong>야놀자 UX 라이팅 가이드라인 수립:</strong> 슈퍼앱 전환기에 대응하는 전사 라이팅 원칙 정의 및 보이스앤톤 시스템 구축을 통한 프로덕트 일관성 확보</li>
                        <li className="relative pl-6"><span className="absolute left-0 text-[#d97706] opacity-70">→</span><strong>UX 라이팅 프로세스 및 협업 방식 정립:</strong> 기획-디자인-마케팅 유관 부서와의 효율적인 텍스트 리뷰 워크플로우를 자산화하여 제작 리소스 절감 및 품질 상향 평준화</li>
                    </ul>
                </div>
            </section>

            {/* Projects */}
            <section className="mb-12">
                <h2 className="text-[#d97706] border-b border-[#262626] pb-2 mb-6 uppercase tracking-widest text-sm font-semibold">Key Projects</h2>
                
                <div className="mb-8">
                    <h3 className="text-[#f4f4f5] text-xl font-semibold">'UX 라이터로 살아가기' 컨퍼런스 총괄</h3>
                    <p className="text-zinc-500 font-mono text-sm mb-2">Organizer & Host / 2021 — Present</p>
                    <p className="text-sm mb-3">UX 라이팅 불모지였던 국내 환경에서 실무자들을 위한 네트워킹과 지식 공유의 장을 마련하기 위해 매년 대규모 컨퍼런스를 기획 및 운영하고 있습니다.</p>
                    <div className="flex gap-2 flex-wrap">
                        <span className="bg-[#1a1a1a] border border-[#262626] px-3 py-1 rounded-full text-xs text-zinc-500">Conference Planning</span>
                        <span className="bg-[#1a1a1a] border border-[#262626] px-3 py-1 rounded-full text-xs text-zinc-500">Community Building</span>
                        <span className="bg-[#1a1a1a] border border-[#262626] px-3 py-1 rounded-full text-xs text-zinc-500">Branding</span>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-[#f4f4f5] text-xl font-semibold">책 집필 & Class101 강의</h3>
                    <p className="text-zinc-500 font-mono text-sm mb-2">Writer & Educator / 2023 — Present</p>
                    <p className="text-sm mb-3">UX 라이팅 책 집필 및 Class101 '실전 UX 라이팅' 강의 런칭을 통한 노하우 공유</p>
                    
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 text-sm">
                        <a href="https://search.shopping.naver.com/book/catalog/49800357720?cat_id=50010881&frm=PBOKPRO&query=ux+%EB%9D%BC%EC%9D%B4%ED%8C%85&NaPm=ct%3Dmjpweflc%7Cci%3D6b809694e50e9b2d380da6c876451e36bb3f5967%7Ctr%3Dboknx%7Csn%3D95694%7Chk%3D60c3232055ac3122bf8dda69af2cf469af0c087a" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-500 hover:underline flex items-center gap-1">
                            <i className="fa-solid fa-book"></i> 책 보러가기
                        </a>
                        <a href="https://class101.net/ko/products/65696abc9f8775000d21fde4" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-500 hover:underline flex items-center gap-1">
                            <i className="fa-solid fa-chalkboard-user"></i> 강의 보러가기
                        </a>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        <span className="bg-[#1a1a1a] border border-[#262626] px-3 py-1 rounded-full text-xs text-zinc-500">Book Publishing</span>
                        <span className="bg-[#1a1a1a] border border-[#262626] px-3 py-1 rounded-full text-xs text-zinc-500">Class101</span>
                        <span className="bg-[#1a1a1a] border border-[#262626] px-3 py-1 rounded-full text-xs text-zinc-500">Mentoring</span>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="mb-12">
                <h2 className="text-[#d97706] border-b border-[#262626] pb-2 mb-6 uppercase tracking-widest text-sm font-semibold">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm">
                    <div>
                        <p className="text-zinc-100 font-medium">Domain</p>
                        <p className="text-zinc-500">UX Writing, Content Design, Information Architecture, Localization</p>
                    </div>
                    <div>
                        <p className="text-zinc-100 font-medium">Tools</p>
                        <p className="text-zinc-500">Figma, Notion, Slack, Jira, Confluence, Lokalise, VibeCoding</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 pt-10 border-t border-zinc-800 text-center">
                <p className="text-xs text-zinc-600 tracking-widest font-mono italic">
                    "Better words, Better experience."
                </p>
            </footer>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;