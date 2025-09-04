import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t-2 border-cyber-purple/20 pt-6 mt-12 text-sm text-cyber-gray">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p>&copy; 2099 SORTELS MATRIX // ALL SYSTEMS OPERATIONAL.</p>
          <p>This transmission is not monitored by corporate entities.</p>
           <div className="mt-2 space-x-4">
            <a href="#impressum" onClick={(e) => handleClick(e, '#impressum')} className="hover:text-cyber-purple transition-colors">Impressum</a>
            <a href="#agb" onClick={(e) => handleClick(e, '#agb')} className="hover:text-cyber-purple transition-colors">AGB</a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="mb-2 uppercase">FOLLOW ME</p>
          <div className="flex gap-6 justify-center md:justify-end">
            {/* TikTok Icon */}
            <a href="#" className="text-cyber-gray hover:text-cyber-purple transition-colors" aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4v7a5 5 0 0 1-5 5H8" />
                <path d="M12 16a4 4 0 1 0 0-8V4" />
              </svg>
            </a>
            {/* Instagram Icon */}
            <a href="#" className="text-cyber-gray hover:text-cyber-purple transition-colors" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8v8l4 4h8l4-4V8l-4-4H7l-4 4Z" />
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M17.5 6.5v.01" />
              </svg>
            </a>
            {/* YouTube Icon */}
            <a href="#" className="text-cyber-gray hover:text-cyber-purple transition-colors" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8V16L7 20H17L21 16V8L17 4H7L3 8Z" />
                <path d="M10 9L15 12L10 15V9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;