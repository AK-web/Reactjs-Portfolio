import React from 'react';
import {  Link } from 'lucide-react';


interface ProjectsProps {
  title: string;
  description: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectsProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="group  overflow-hidden rounded-lg backdrop-blur-sm transition-all duration-300 opacity-90 hover:shadow-xl hover:shadow-navy-800/30">
      <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex gap-4 p-6 ">
        <div className="flex-1 mb-2">
          <a href={link} className="inline-flex items-center gap-2 group/title cursor-pointer" 
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="text-base font-bold text-white group-hover:text-green-300 transition-colors">
              {title}
            </h3>
            <Link size={20}
              className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-green-300"
            />
          </a>
          <p className="mt-4 text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};
