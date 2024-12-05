import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id,  title, children }) => {
  return (
    <section id={id} className="min-h-screen py-16">
      <h2 className="mb-4 text-[16px]  text-violet-300">{title}</h2>
      {children}
    </section>
  );
};