import React from 'react';

interface SectionWindowProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionWindow: React.FC<SectionWindowProps> = ({ title, children, id, className = '' }) => (
  <section id={id} className={`bg-cyber-surface border border-cyber-purple/50 p-1 backdrop-blur-sm ${className}`} style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'}}>
    <div className="bg-cyber-purple/10 px-4 py-2">
      <h2 className="font-bold text-cyber-white text-xl">{title}</h2>
    </div>
    <div className="p-6">
      {children}
    </div>
  </section>
);

export default SectionWindow;