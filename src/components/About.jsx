import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Who I Am</h3>
            <p className="mb-4 text-gray-700">
              I am pursuing BE graduate in Computer Science Engineering in SKCT with a passion for technology and problem-solving. 
              My skills in programming, software development, and web applications allows me to contribute and grow in a dynamic tech environment.
            </p>
            <p className="mb-4 text-gray-700">
              I'm enthusiastic about creating innovative solutions and continuously expanding my knowledge in the ever-evolving field of computer science.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Web Development</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">App Development</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">AI/ML</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full Stack Development</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Expertise</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Management Skills</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Problem Solving & Programming</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Critical Thinking</span>
                  <span className="text-sm text-gray-500">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Leadership</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full skill-progress" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;