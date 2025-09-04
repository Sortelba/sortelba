import React from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const navLinks: NavLink[] = [
    { href: '', label: 'START' },
    { href: '#spots', label: 'SKATE SPOTS' },
    { href: '#alliance', label: 'ALLIANCE' },
    { href: '#kontakt', label: 'KONTAKT' },
    { href: 'https://sprungbrett-skate.netlify.app/#/', label: 'SKATEN LERNEN', external: true },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="mb-12">
        <div className="flex items-center justify-between border-b-2 border-cyber-purple/50 pb-4">
          <a href="#" onClick={(e) => handleClick(e, '')} className="text-3xl md:text-4xl font-bold text-cyber-white hover:text-cyber-purple transition-colors">
            SORTELS MATRIX
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-purple hover:drop-shadow-glow-purple transition-all duration-300">
                    &gt; {link.label}
                  </a>
                );
              }
              return (
                <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className={`transition-all duration-300 ${currentPath === link.href ? 'text-cyber-white drop-shadow-glow-purple' : 'text-cyber-gray hover:text-cyber-purple hover:drop-shadow-glow-purple'}`}>
                  &gt; {link.label}
                </a>
              );
            })}
          </nav>
        </div>
         <div className="md:hidden mt-4 text-center space-x-4">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-cyber-gray hover:text-cyber-purple">
                    {link.label}
                  </a>
                );
              }
              return (
                <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className={`${currentPath === link.href ? 'text-cyber-white' : 'text-cyber-gray'} hover:text-cyber-purple`}>
                  {link.label}
                </a>
              );
            })}
        </div>
    </header>
  );
};

export default Header;