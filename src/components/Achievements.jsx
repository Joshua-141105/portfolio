import React, { forwardRef } from 'react';
import { Award, Briefcase } from 'lucide-react';

const Achievements = forwardRef((props, ref) => {
  return (
    <section id="achievements" ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Achievements & Participation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-800 flex items-center">
              <Award className="mr-2" size={24} />
              Achievements
            </h3>
            <div className="space-y-6">
              <AchievementCard
                title="Academic Topper (2nd) in UG - First Year - 2024"
                description="Achieved second rank in the first year of undergraduate studies with a CGPA of 8.81."
              />
              <AchievementCard
                title="Smart India Hackathon - 2024 Semi-Finalist"
                description="Qualified as a semi-finalist in the prestigious Smart India Hackathon 2024, demonstrating problem-solving and innovation skills."
              />
              <AchievementCard
                title="Olympiad Gold Medalist - 2018"
                description="Received gold medal in the National Science Olympiad, showcasing academic excellence at an early age."
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-800 flex items-center">
              <Briefcase className="mr-2" size={24} />
              Participation
            </h3>
            <div className="space-y-6">
              <AchievementCard
                title="Smart India Hackathon - 2024"
                description="Participated in the Smart India Hackathon, working on innovative solutions to real-world problems."
              />
              <AchievementCard
                title="MSME Hackathon - 2024"
                description="Participated in the MSME Hackathon, developing solutions for micro, small, and medium enterprises."
              />
              <AchievementCard
                title="IIT-Madras Workshop - Cloud Computing"
                description="Attended a specialized workshop on cloud computing technologies conducted by IIT Madras."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const AchievementCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <h4 className="font-semibold text-lg text-blue-800 mb-2">{title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

Achievements.displayName = 'Achievements';

export default Achievements;