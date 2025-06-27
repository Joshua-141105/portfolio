import React, { forwardRef } from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = forwardRef((props, ref) => {
  return (
    <section id="education" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Education</h2>
        <div className="space-y-8">
          <EducationCard 
            institution="Sri Krishna College of Technology, Coimbatore"
            degree="Bachelor of Computer Science and Engineering"
            period="2023 - Present"
            grades="CGPA: 8.81"
            icon={<GraduationCap className="text-blue-600" size={24} />}
            description="Currently pursuing my Bachelor's degree in Computer Science Engineering, focusing on core computer science concepts, software development, and emerging technologies."
          />
          
          <EducationCard 
            institution="Geethaanjali All India Senior Secondary School, Erode"
            degree="Higher Secondary Education"
            period="2008 - 2023"
            grades={
              <div className="mt-2">
                <p className="text-gray-600">10th Grade: 95%</p>
                <p className="text-gray-600">12th Grade: 95%</p>
              </div>
            }
            icon={<BookOpen className="text-blue-600" size={24} />}
            description="Completed my schooling with excellent academic performance, laying a strong foundation for my higher education in engineering."
          />
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-blue-800">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificationCard 
              title="NPTEL - Effective Writing" 
              description="Completed certification course on effective technical and professional writing skills."
            />
            <CertificationCard 
              title="NPTEL - Introduction to Operating System" 
              description="Completed certification course on operating system fundamentals and concepts."
            />
            <CertificationCard 
              title="NPTEL - Data Mining" 
              description="Completed certification course on data mining fundamentals and concepts."
            />
          </div>
        </div>
      </div>
    </section>
  );
});

const EducationCard = ({ institution, degree, period, grades, icon, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div className="flex items-start mb-4 md:mb-0">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-800">{institution}</h3>
          <p className="text-gray-600">{degree}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{period}</span>
        {typeof grades === 'string' ? <p className="text-gray-600 mt-2">{grades}</p> : grades}
      </div>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CertificationCard = ({ title, description }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="flex items-start">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <Award className="text-blue-600" size={24} />
      </div>
      <div>
        <h4 className="font-semibold text-lg text-blue-800">{title}</h4>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

Education.displayName = 'Education';

export default Education;