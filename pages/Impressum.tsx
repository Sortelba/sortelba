
import React from 'react';
import SectionWindow from '../components/SectionWindow';

const ImpressumPage: React.FC = () => {
  return (
    <SectionWindow title="SYSTEMPROTOKOLL // IMPRESSUM">
      <div className="space-y-6 text-cyber-gray">
        <p>Dieses Datenfragment wurde kompiliert gemäß den Direktiven des Neo-Sektors 7G.</p>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; BETREIBER DES DATENSTROM-KNOTENS:</h3>
          <p>SORTELS MATRIX Kollektiv</p>
          <p>Unbekannte Koordinaten, Sektor 7G</p>
          <p>Neo-LA Sub-Ebene 4</p>
        </div>

        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; KONTAKT-PROTOKOLL (Verschlüsselt):</h3>
          <p>Signal-ID: <span className="text-cyber-white">SORTEL.MATRIX.7749</span></p>
          <p>Daten-Drop: Anfragen werden nur über gesicherte Dead-Drop-Knoten akzeptiert. Öffentliche Anfragen werden ignoriert und ihre Quellen protokolliert.</p>
        </div>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; VERANTWORTLICH FÜR DEN DATEN-FEED (Alias):</h3>
          <p>Sortel</p>
        </div>

        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; HAFTUNGSAUSSCHLUSS:</h3>
          <p>Die hier bereitgestellten Informationen sind unzensiert und können von Konzern-Algorithmen als subversiv eingestuft werden. Der Zugriff erfolgt auf eigene Gefahr. SORTELS MATRIX übernimmt keine Haftung für Datenverlust, neuronale Dissonanz oder Besuche von CorpSec-Agenten.</p>
          <p>Die Inhalte externer, verlinkter Datenströme unterliegen nicht unserer Kontrolle. Zum Zeitpunkt der Verlinkung waren keine illegalen Aktivitäten bekannt. Eine permanente Überwachung ist technisch nicht möglich und widerspricht unseren Prinzipien der Dezentralisierung.</p>
        </div>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; URHEBERRECHT:</h3>
          <p>Alle Daten, Grafiken und Codefragmente dieses Knotens sind Open Source unter der "Ghost in the Machine"-Lizenz, sofern nicht anders angegeben. Jede kommerzielle Nutzung durch Konzerne ist strengstens untersagt und wird mit einem aggressiven Datenwurm beantwortet.</p>
        </div>
      </div>
    </SectionWindow>
  );
};

export default ImpressumPage;