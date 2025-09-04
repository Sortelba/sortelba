
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlliancePage from './pages/Collabs';
import ImpressumPage from './pages/Impressum';
import AGBPage from './pages/AGB';
import KontaktPage from './pages/Kontakt';
import SkateSpotsPage from './pages/SkateSpots';

// Define a type for props that will be passed to page components
export interface PageProps {
  onNavigate?: (path: string) => void;
}

const routes: { [key: string]: React.ComponentType<PageProps> } = {
  '': Home,
  '#alliance': AlliancePage,
  '#impressum': ImpressumPage,
  '#agb': AGBPage,
  '#kontakt': KontaktPage,
  '#spots': SkateSpotsPage,
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '');
  const [isAnimating, setIsAnimating] = useState(false);

  // This effect handles ALL path changes, from clicks or back/forward, to apply animations
  useEffect(() => {
    const handlePathChange = (path: string) => {
      // Check against the actual state, not a stale closure value
      if (path === currentPath) return;

      setIsAnimating(true); // Start fade-out
      setTimeout(() => {
        window.scrollTo(0, 0);
        setCurrentPath(path);
        setIsAnimating(false); // New component is rendered, fade it in
      }, 250); // This duration must match the CSS transition duration
    };
    
    const handleHashChange = () => {
      handlePathChange(window.location.hash || '');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPath]); // Depend on currentPath to get its latest value and avoid stale closures

  // The navigation function passed to children just needs to update the hash.
  // The useEffect hook above will handle the rest.
  const handleNavigate = (path: string) => {
    if ((window.location.hash || '') !== path) {
      window.location.hash = path;
    }
  };

  const ActivePage = routes[currentPath] || Home;

  return (
    <div className="bg-cyber-bg text-cyber-white min-h-screen font-mono">
      <div className="container mx-auto px-4 py-8">
        <Header currentPath={currentPath} onNavigate={handleNavigate} />
        <main className={`space-y-12 transition-opacity duration-250 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <ActivePage onNavigate={handleNavigate} />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default App;