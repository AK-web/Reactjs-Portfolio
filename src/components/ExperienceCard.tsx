import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  year: string;
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  year,
  title,
  description,
  technologies = [],
  link = '#',
}) => {
  return (
    <div className="group ml-8 overflow-hidden rounded-lg backdrop-blur-sm transition-all duration-300 opacity-90 hover:shadow-xl hover:shadow-navy-800/30">
      <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex gap-4 p-6">
        <div className="w-24 shrink-0 pt-1">
          <p className="text-sm font-medium text-gray-500">{year}</p>
        </div>
        <div className="flex-1">
          <a 
            href={link}
            className="inline-flex items-center gap-2 group/title cursor-pointer"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
              {title}
            </h3>
            <ArrowUpRight 
              size={20}
              className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-green-300"
            />
          </a>
          <p className="mt-4 text-gray-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-green-900/30 px-3 py-1 text-sm text-green-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};