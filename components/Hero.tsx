import React, { useState } from 'react';
import { HERO_SPLINE_URL } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src={HERO_SPLINE_URL} 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className={`w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          title="Spline 3D Animation"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background text-gray-500">
            <span className="animate-pulse">경험을 불러오는 중...</span>
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-6 md:px-20 lg:px-32 bg-gradient-to-r from-background/90 via-background/50 to-transparent">
        <div className="max-w-4xl pointer-events-auto mt-20 md:mt-0">
          <h2 className="text-blue-400 font-medium tracking-widest text-sm mb-4 uppercase">
            Senior UX Writer & Content Strategist
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-white mb-6">
            Kim Mooseong
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-4 leading-relaxed font-light italic">
            "사용자의 문제를 언어로 해결하고 <br className="hidden md:block"/>
            비즈니스 가치를 숫자로 증명합니다."
          </p>
          <p className="text-base text-gray-400 max-w-lg mb-8 leading-relaxed">
            현대자동차와 야놀자에서 서비스의 성장을 이끄는 텍스트를 설계해 왔습니다.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#experience"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              경력 보기
            </a>
            <a 
              href="#work"
              className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              주요 프로젝트
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce pointer-events-none text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;