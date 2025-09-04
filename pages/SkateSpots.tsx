
import React from 'react';
import SectionWindow from '../components/SectionWindow';

const SkateSpotsPage: React.FC = () => {
  return (
    <SectionWindow title="SKATE SPOTS // MAP DATABASE">
      <p className="mb-6 text-cyber-gray">
        Verifizierte Koordinaten für sichere Zonen und unentdeckte Skate-Spots. Datenstrom wird live aktualisiert.
        Vorsicht: Einige Zonen könnten von CorpSec überwacht werden. Map wird stetig erweitert. Schicke mir gerne einen link von eurem spot oder mehreren
        über das kontakt formular! 
      </p>
      
      <div className="bg-black/50 p-2 border border-cyber-gray/20">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=12o-_NyQri8gq0pW09KzETCsq1ETRAZ4&ehbc=2E312F"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Skate Spots Map"
        ></iframe>
      </div>
    </SectionWindow>
  );
};

export default SkateSpotsPage;