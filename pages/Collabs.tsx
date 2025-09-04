import React, { useState, useMemo } from 'react';
import SectionWindow from '../components/SectionWindow';
import { allianceData, categories, AllianceCategory } from '../data/alliance';

const AlliancePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AllianceCategory>('skate-shops');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category: AllianceCategory) => {
    setActiveCategory(category);
    setSearchTerm(''); // Reset search on category change
  };

  const filteredAllianceData = useMemo(() => {
    const dataInCategory = allianceData.filter(item => item.category === activeCategory);
    
    if (activeCategory === 'vereine' && searchTerm.trim() !== '') {
      return dataInCategory.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return dataInCategory;
  }, [activeCategory, searchTerm]);

  return (
    <SectionWindow title="SYSTEM // ALLIANCES" id="alliance">
      <p className="mb-6 text-cyber-gray">Datenströme von unabhängigen Betreibern und vertrauenswürdigen Kollektiven. Jedes Signal verifiziert.</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
            <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 border font-bold transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-cyber-purple text-cyber-white border-cyber-purple'
                : 'border-cyber-purple text-cyber-white hover:bg-cyber-purple/20'
            }`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
            >
            {category.name}
            </button>
        ))}
      </div>

      {activeCategory === 'vereine' && (
        <div className="mb-8">
          <input
            type="text"
            placeholder="VEREIN SUCHEN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black/50 p-3 border border-cyber-gray/50 focus:border-cyber-purple focus:outline-none text-cyber-white font-mono transition-colors"
            aria-label="Skate Verein suchen"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAllianceData.map((item, index) => (
          <div key={index} className="border border-cyber-gray/30 flex flex-col">
            <div className="aspect-video bg-black">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-75"/>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-cyber-white text-xl mb-2">{item.name}</h3>
              <p className="text-sm text-cyber-gray mb-4 flex-grow">{item.description}</p>
              <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center px-4 py-2 border border-cyber-orange text-cyber-orange hover:bg-cyber-orange hover:text-cyber-bg transition-all duration-300"
              >
                &gt; Access Channel
              </a>
            </div>
          </div>
        ))}
        {filteredAllianceData.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 text-center text-cyber-gray py-10">
                <p>Keine Einträge in dieser Kategorie gefunden...</p>
            </div>
        )}
      </div>
    </SectionWindow>
  );
};

export default AlliancePage;