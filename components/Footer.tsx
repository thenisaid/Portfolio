import React from 'react';
import { SOCIALS } from '../constants';
import { Mail, Linkedin, Twitter, ArrowRight, Link } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Mail': return <Mail size={20} />;
      case 'Link': return <Link size={20} />;
      default: return <ArrowRight size={20} />;
    }
  };

  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Better words, <br />
              <span className="text-gray-500">Better experience.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              사용자의 문제를 언어로 해결하고<br/>
              비즈니스 가치를 숫자로 증명합니다.
            </p>
            <a 
              href="mailto:thenisaid1@gmail.com"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Me <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Connect</h3>
            <div className="flex flex-col gap-4">
              {SOCIALS.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.platform}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                     {getIcon(social.icon)}
                  </div>
                  <span>{social.label || social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Kim Mooseong. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="font-mono italic">Senior UX Writer & Content Strategist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;