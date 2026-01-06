import React from 'react';
import { PROJECTS } from '../constants';

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

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-background border border-white/5 rounded-2xl p-8 md:p-12 hover:border-accent/30 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left: Project Details */}
                <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="text-xs font-mono text-accent border border-accent/20 px-2 py-1 rounded">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
                            #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Impact or Placeholder for Structure */}
                <div className="bg-surface/50 rounded-xl p-8 border border-white/5 h-full flex flex-col justify-center">
                    {project.impact ? (
                         <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Impact</p>
                            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">{project.impact}</p>
                         </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-600 text-sm italic">
                            <p>"지식 공유를 통한 생태계 확장"</p>
                        </div>
                    )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;