import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { ArrowUpRight } from 'lucide-react';

interface Experience {
  year: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
  onViewResume: () => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <div className="relative">
      {/* Main Timeline Line */}
      <div className="absolute left-[1.65rem] top-0 h-full w-px bg-blue-900/50" />
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {/* Circle Marker */}
            <div className="absolute left-[1.65rem] top-8 z-10 -translate-x-1/2 transform">
              <div className="h-3 w-3 rounded-full border-2 border-blue-400 bg-navy-900" />
            </div>
            
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>

      <button
        // onClick={onViewResume}
        className="group mt-6 ml-10 flex items-center gap-2 text-white-400 hover:text-green-300 transition-colors font-bold text-[16px]"
      >
        <a href='https://drive.google.com/file/d/1oe5KHobKLzpT7zObz91suRUaR6eWGpmD/view?usp=sharing'
            className="inline-flex items-center gap-2 group/title"
            target="_blank" 
            rel="noopener noreferrer"
          > View Full Resume </a>
        
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>
    </div>
  );
};