import React, { forwardRef } from 'react';
import { Code, Languages, Star } from 'lucide-react';

const Skills = forwardRef((props, ref) => {
  return (
    <section id="skills" ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <SkillCard title="C++" percentage="85" />
          <SkillCard title="Java" percentage="80" />
          <SkillCard title="React" percentage="75" />
          <SkillCard title="HTML/CSS/JS" percentage="90" />
          <SkillCard title="Python" percentage="70" />
          <SkillCard title="SQL" percentage="75" />
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-blue-800">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LanguageCard name="English" level={5} />
            <LanguageCard name="Tamil" level={5} />
          </div>
        </div>
      </div>
    </section>
  );
});

const SkillCard = ({ title, percentage }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <Code className="text-blue-600" size={32} />
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
      <div className="bg-blue-600 h-1.5 rounded-full skill-progress" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const LanguageCard = ({ name, level }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Languages className="text-blue-600 mr-3" size={24} />
      <h4 className="font-semibold text-lg">{name}</h4>
    </div>
    <div className="flex">
      <span className="text-sm text-gray-600 mr-4">Proficiency:</span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={`w-4 h-4 ${i <= level ? 'text-blue-500' : 'text-gray-300'}`} fill={i <= level ? 'currentColor' : 'none'} />
        ))}
      </div>
    </div>
  </div>
);

Skills.displayName = 'Skills';

export default Skills;