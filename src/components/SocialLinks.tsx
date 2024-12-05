import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center space-x-14 mb-16 ">
      <a
        href="https://github.com/AK-web"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-transform duration-100 hover:translate-x-1"
        aria-label="GitHub Profile"
      >
        <Github size={24} />
      </a>
      <a
        href="https://twitter.com/kanti_anand"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-transform duration-100 hover:translate-x-1"
        aria-label="Twitter Profile"
      >
        <Twitter size={24} />
      </a>

      <a
        href="mailto:anandkanti113@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition-transform duration-100 hover:translate-x-1"
        aria-label="Twitter Profile"
      >
        <Mail size={24} />
      </a>

    </div>
  );
};