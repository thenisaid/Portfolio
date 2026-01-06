import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Key Projects</h2>
            <p className="text-gray-400 max-w-md">
              개인 프로젝트 및 커뮤니티 활동을 포함한 주요 성과입니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="px-6 py-3 bg-white text-black rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    자세히 보기
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-mono text-blue-400 border border-blue-400/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {project.impact && (
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">성과 (Impact)</p>
                    <p className="text-green-400 font-medium">{project.impact}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;