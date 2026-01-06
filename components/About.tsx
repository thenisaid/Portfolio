import React from 'react';
import { SKILLS, USER_IMAGE_URL } from '../constants';
import { CheckCircle2, PenTool, Users, Layout, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  const getIcon = (name: string) => {
     switch(name) {
        case 'PenTool': return <PenTool size={24} className="text-blue-400 mb-4" />;
        case 'Users': return <Users size={24} className="text-purple-400 mb-4" />;
        case 'Layout': return <Layout size={24} className="text-green-400 mb-4" />;
        case 'MessageSquare': return <MessageSquare size={24} className="text-orange-400 mb-4" />;
        default: return <CheckCircle2 size={24} className="text-blue-400 mb-4" />;
     }
  };

  return (
    <section id="about" className="py-24 bg-surface text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Summary Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h3 className="text-blue-500 font-semibold tracking-wider uppercase mb-2">Summary</h3>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                운영 효율화와 <br />
                <span className="text-gray-400">사용자 경험 고도화.</span>
              </h2>
              <div className="text-gray-400 leading-relaxed text-lg space-y-4">
                <p>
                  현대자동차와 야놀자에서 서비스의 성장을 이끄는 텍스트를 설계해 왔습니다. 
                </p>
                <p>
                  단순히 글을 다듬는 것을 넘어, 브랜드의 보이스 톤 가이드라인을 수립하고 디자인 시스템에 라이팅 컴포넌트를 통합하는 등 운영 효율화와 사용자 경험 고도화를 동시에 추구합니다.
                </p>
                <p>
                  국내 UX 라이팅 커뮤니티 'UX 라이터로 살아가기'의 운영자로서 업계 생태계 확장에도 기여하고 있습니다.
                </p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 mt-8 aspect-video">
               <img 
                src={USER_IMAGE_URL} 
                alt="UX Writer Workspace" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-blue-500 font-semibold tracking-wider uppercase mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 gap-6">
              {SKILLS.map((skill) => (
                <div key={skill.name} className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                        {getIcon(skill.icon)}
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2 text-white">{skill.name}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;