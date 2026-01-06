import React, { useState, useEffect, useRef } from 'react';
import ResumeModal from './components/ResumeModal';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Scroll spy logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;
      const height = window.innerHeight;
      const index = Math.round(scrollPos / height);
      setActiveSlide(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="relative w-full h-screen bg-background text-primary overflow-hidden font-sans">
      
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index 
                ? 'bg-accent shadow-[0_0_10px_rgba(217,119,6,0.3)] scale-125' 
                : 'bg-[#262626] hover:bg-zinc-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Container */}
      <div 
        ref={containerRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth"
      >
        
        {/* Slide 1: Intro */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative">
          <div className="max-w-4xl animate-[fadeIn_1s_ease_forwards]">
            <span className="text-sm tracking-[0.4em] opacity-40 mb-6 block font-medium">UX WRITER PORTFOLIO</span>
            <h1 className="text-5xl md:text-7xl mb-10 font-title leading-[1.2]">
              복잡함을 덜어내고<br /><span className="text-accent font-medium">가치를 선명하게</span> 적습니다.
            </h1>
            <div className="flex flex-col items-start gap-8">
                <div className="flex items-center gap-6">
                  <div className="h-[1px] w-12 bg-amber-800"></div>
                  <h2 className="text-2xl font-light text-zinc-400 font-medium">
                    김무성 <span className="text-lg opacity-40 ml-2 font-sans">(@글쓰는개미핥기)</span>
                  </h2>
                </div>
                
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-900/20"
                >
                  경력 보기
                </button>
            </div>
          </div>
        </section>

        {/* Slide 2: Philosophy */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative">
          <div className="max-w-3xl">
            <h3 className="text-lg text-accent mb-8 font-medium">My Philosophy</h3>
            <p className="text-3xl md:text-4xl font-light leading-snug text-zinc-300">
              "좋은 UX 라이팅은 눈에 띄는 것이 아니라,<br />
              사용자가 <span className="text-zinc-100 font-bold">생각하지 않고 목적지에 도달</span>하게 돕는 공기 같은 언어입니다."
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-zinc-100 mb-3 text-lg font-bold font-medium">Clear & Simple</h4>
                <p className="text-sm leading-relaxed text-secondary">사용자의 인지 부하를 줄이는 직관적인 단어 선택과 간결한 문장 구조를 지향합니다.</p>
              </div>
              <div>
                <h4 className="text-zinc-100 mb-3 text-lg font-bold font-medium">Context-Driven</h4>
                <p className="text-sm leading-relaxed text-secondary">서비스의 도메인과 사용자의 심리적 맥락에 최적화된 목소리를 설계합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Career Timeline */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative">
          <h3 className="text-lg text-accent mb-12 font-medium">Professional Journey</h3>
          <div className="space-y-14 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
              <span className="text-zinc-600 font-mono text-sm tracking-tighter pt-2 md:w-24 shrink-0">2024 - PRES</span>
              <div>
                <h4 className="text-2xl text-zinc-200 mb-2 font-title">Hyundai Motor Company | <span className="text-accent font-medium">UX Writer</span></h4>
                <p className="text-base text-secondary">인포테인먼트&모바일 통합 UX 라이팅 가이드라인 구축 및 모바일 앱 UX 라이팅 프로세스 구축</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
              <span className="text-zinc-600 font-mono text-sm tracking-tighter pt-2 md:w-24 shrink-0">2022 - 2024</span>
              <div>
                <h4 className="text-2xl text-zinc-200 mb-2 font-title">Yanolja | <span className="text-accent font-medium">UX Writer</span></h4>
                <p className="text-base text-secondary">슈퍼앱 전환 전략에 따른 전 서비스 보이스 톤앤매너 수립 및 마이크로카피 최적화</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 group">
              <span className="text-zinc-600 font-mono text-sm tracking-tighter pt-2 md:w-24 shrink-0">Community</span>
              <div>
                <h4 className="text-2xl text-zinc-200 mb-2 font-title">Founder of "Index UXer"</h4>
                <p className="text-base text-secondary">국내 최대 UX 라이팅 커뮤니티 'UX 라이터로 살아가기' 운영 및 연례 컨퍼런스 기획/총괄</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Project 1 - Conference */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs uppercase opacity-40 mb-3 block font-medium">Project 01</span>
              <h3 className="text-4xl mb-8 leading-tight font-title">"Living as a UX Writer"<br />Conference</h3>
              <p className="mb-10 text-base text-secondary">
                국내 UX 라이팅 생태계의 불모지에서, 현업자들의 생생한 경험을 나누고 직무의 전문성을 알리기 위해 매년 대규모 컨퍼런스를 개최하고 있습니다.
              </p>
              <div className="bg-surface border border-border p-8 rounded-lg">
                <p className="text-xs text-accent mb-2 uppercase font-bold font-medium">Impact</p>
                <p className="text-sm text-zinc-300">누적 참여자 1,000명 이상, 만족도 4.8/5.0을 기록하며 업계 표준을 만들어가는 지식 공유의 장으로 자리매김했습니다.</p>
              </div>
            </div>
            <div className="w-full aspect-video bg-[#0050ff] border border-border rounded-lg overflow-hidden relative group flex items-center justify-center">
              <span className="text-white text-5xl md:text-7xl font-sans font-medium tracking-tighter transition-transform duration-700 group-hover:scale-110 select-none">
                ↑ndex uxer↗
              </span>
            </div>
          </div>
        </section>

        {/* Slide 5: Project 2 - Book & Class101 */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Generative Art SVG: From Book to Digital */}
            <div className="order-2 md:order-1 w-full aspect-[3/4] max-h-[500px] bg-[#1a1a1a] border border-border rounded-lg overflow-hidden relative group shadow-2xl">
              <svg className="w-full h-full p-10" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Grid - Digital Context */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#262626" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Connection Lines (Flow of Knowledge) */}
                <path d="M200,320 C200,250 100,250 100,150" fill="none" stroke="#3f3f46" strokeWidth="2" strokeDasharray="5,5" className="group-hover:stroke-accent transition-colors duration-700" />
                <path d="M200,320 C200,250 300,250 300,150" fill="none" stroke="#3f3f46" strokeWidth="2" strokeDasharray="5,5" className="group-hover:stroke-accent transition-colors duration-700 delay-100" />
                <path d="M200,320 L200,150" fill="none" stroke="#3f3f46" strokeWidth="2" strokeDasharray="5,5" className="group-hover:stroke-accent transition-colors duration-700 delay-200" />

                {/* The Book (Base of Knowledge) */}
                <g transform="translate(140, 320)">
                    {/* Pages Left */}
                    <path d="M0,0 Q-50,10 -60,60 L0,50 Z" fill="#27272a" stroke="#d4d4d8" strokeWidth="1.5" />
                    <path d="M0,5 Q-45,15 -55,60" fill="none" stroke="#52525b" strokeWidth="1" />
                    {/* Pages Right */}
                    <path d="M0,0 Q50,10 60,60 L0,50 Z" fill="#27272a" stroke="#d4d4d8" strokeWidth="1.5" />
                    <path d="M0,5 Q45,15 55,60" fill="none" stroke="#52525b" strokeWidth="1" />
                    {/* Spine */}
                    <line x1="0" y1="0" x2="0" y2="50" stroke="#d97706" strokeWidth="2" />
                </g>
                
                {/* Floating Elements (Expansion) */}
                
                {/* Element 1: Published Book/Text */}
                <g transform="translate(80, 120)" className="animate-[float_4s_ease-in-out_infinite]">
                    <rect x="0" y="0" width="60" height="80" rx="2" fill="#18181b" stroke="#d97706" strokeWidth="1.5" />
                    <line x1="15" y1="20" x2="45" y2="20" stroke="#71717a" strokeWidth="2" />
                    <line x1="15" y1="35" x2="45" y2="35" stroke="#71717a" strokeWidth="2" />
                    <line x1="15" y1="50" x2="30" y2="50" stroke="#71717a" strokeWidth="2" />
                </g>

                {/* Element 2: Lecture/Media (Center) */}
                <g transform="translate(170, 80)" className="animate-[float_5s_ease-in-out_infinite_delay-1000]">
                    <rect x="0" y="0" width="80" height="60" rx="4" fill="#18181b" stroke="#d97706" strokeWidth="1.5" filter="url(#glow)" />
                    <path d="M30,15 L55,30 L30,45 Z" fill="#d97706" />
                    <rect x="20" y="65" width="40" height="3" rx="1.5" fill="#3f3f46" />
                </g>

                {/* Element 3: Mentoring/People */}
                <g transform="translate(280, 140)" className="animate-[float_6s_ease-in-out_infinite_delay-500]">
                    <circle cx="20" cy="20" r="20" fill="#18181b" stroke="#d97706" strokeWidth="1.5" />
                    <circle cx="20" cy="15" r="6" fill="#71717a" />
                    <path d="M10,30 Q20,40 30,30" fill="none" stroke="#71717a" strokeWidth="2" />
                </g>
                
                {/* Caption */}
                <text x="200" y="450" textAnchor="middle" fill="#52525b" fontSize="11" letterSpacing="0.2em" fontFamily="monospace">EXPANDING EXPERIENCE</text>
              </svg>
            </div>
            
            <div className="order-1 md:order-2">
              <span className="text-xs uppercase opacity-40 mb-3 block font-medium">Project 02</span>
              <h3 className="text-4xl mb-8 leading-tight font-title">Book Publishing &<br />Class101 Lecture</h3>
              <p className="mb-10 text-base text-secondary">
                UX 라이팅 책을 집필하고, Class101에서 'UX 라이팅 실전' 강의를 런칭하여 지식 공유와 주니어 양성에 힘쓰고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <a 
                  href="https://search.shopping.naver.com/book/catalog/49800357720?cat_id=50010881&frm=PBOKPRO&query=ux+%EB%9D%BC%EC%9D%B4%ED%8C%85&NaPm=ct%3Dmjpweflc%7Cci%3D6b809694e50e9b2d380da6c876451e36bb3f5967%7Ctr%3Dboknx%7Csn%3D95694%7Chk%3D60c3232055ac3122bf8dda69af2cf469af0c087a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-surface border border-border p-5 rounded-lg hover:border-accent/50 transition-colors group cursor-pointer block"
                >
                  <span className="text-xl font-light text-accent font-medium block mb-1 group-hover:underline">Published Book ↗</span>
                  <p className="text-[10px] uppercase opacity-40 mt-2 tracking-widest">View Book</p>
                </a>
                <a 
                  href="https://class101.net/ko/products/65696abc9f8775000d21fde4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-surface border border-border p-5 rounded-lg hover:border-accent/50 transition-colors group cursor-pointer block"
                >
                  <span className="text-xl font-light text-accent font-medium block mb-1 group-hover:underline">Class101 ↗</span>
                  <p className="text-[10px] uppercase opacity-40 mt-2 tracking-widest">View Course</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Community & Publications */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative">
          <div className="text-center max-w-4xl mx-auto w-full">
            <h3 className="text-lg text-accent mb-12 font-medium">Beyond Writing</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-surface border border-border p-8 rounded-lg transition-all hover:border-zinc-700">
                <h4 className="text-xl mb-4 font-medium text-white">Community Leader</h4>
                <p className="text-sm opacity-80 leading-relaxed text-secondary">국내 최대 UX 라이팅 커뮤니티를 운영하며, 사람과 사람을 연결하여 경험을 나누고 함께 성장하는 문화를 만들어갑니다.</p>
              </div>
              <div className="bg-surface border border-border p-8 rounded-lg transition-all hover:border-zinc-700">
                <h4 className="text-xl mb-4 font-medium text-white">Speaker & Mentor</h4>
                <p className="text-sm opacity-80 leading-relaxed text-secondary">여러 기업과 대학에서 UX 라이팅 특강을 진행하며, 주니어 라이터들을 위한 멘토링 프로그램에 참여합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 7: Closing */}
        <section className="h-screen w-full snap-start flex flex-col justify-center px-[10%] relative text-center">
          <div>
            <h2 className="text-5xl md:text-8xl mb-14 font-light leading-tight font-title">
              Let's talk about <br /><span className="text-accent italic font-serif">Experience.</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-8 text-sm uppercase tracking-[0.2em] opacity-50">
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">Email</a>
              <button onClick={() => setIsResumeOpen(true)} className="hover:text-accent transition-colors underline underline-offset-8">
                Resume (Click to View)
              </button>
            </div>
            <p className="mt-28 text-[10px] font-mono opacity-20 tracking-tighter">© 2024 Kim Mooseong. Built for Clarity and Comfort.</p>
          </div>
        </section>

      </div>
      
      {/* Resume Modal */}
      {isResumeOpen && <ResumeModal onClose={() => setIsResumeOpen(false)} />}
    </main>
  );
}

export default App;