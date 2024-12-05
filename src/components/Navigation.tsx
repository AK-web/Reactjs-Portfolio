import React from 'react';
import { Code2, User, Briefcase } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 p-4 text-white flex flex-col ml-8">
      <div className="mt-14">
        <a href="#about">
          <h1 className="text-[38px] font-bold">Anand Kanti</h1>
        </a>
        <p className="text-[14px] text-blue-200  mb-4">Full Stack Developer</p>
        <p className="text-[15px] text-gray-400 w-[250px] ">I craft seamless digital experiences that are as functional as they are beautiful.</p>
      </div>
      
      <ul className="flex flex-col justify-center space-y-4 flex-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`flex items-center space-x-3 p-2  transition-transform duration-300${
                activeSection === id
                  ?' font-semibold hover:translate-x-2 text-blue-400'  // Stronger active state: color, font weight, and background
                  : 'text-gray-400 hover:text-blue-400 hover:translate-x-2'
              } `}
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <SocialLinks />
      </div>
    </nav>
  );
};