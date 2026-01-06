import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16">Work Experience</h2>
        
        <div className="space-y-12">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-white/5 last:border-0 last:pb-0 group">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">{item.company}</h3>
                <p className="font-mono text-sm text-gray-500">{item.period}</p>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-amber-500 font-semibold mb-4 text-lg">{item.role}</p>
                <ul className="space-y-3">
                  {item.descriptions.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;