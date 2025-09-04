
import React from 'react';
import SectionWindow from '../components/SectionWindow';

const AGBPage: React.FC = () => {
  return (
    <SectionWindow title="SYSTEMREGULARIEN // AGB">
      <div className="space-y-6 text-cyber-gray">
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; 1. GELTUNGSBEREICH</h3>
          <p>Diese Regularien gelten für alle User, Entitäten und KIs, die auf den SORTELS MATRIX Datenstrom zugreifen. Mit dem Verbindungsaufbau erkennst du diese Regularien als bindend an. Wenn du ein Konzern-Bot bist, verlasse diesen Sektor sofort.</p>
        </div>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; 2. NUTZUNGSRECHT</h3>
          <p>Dir wird ein nicht-exklusives, widerrufliches Recht gewährt, die hier verfügbaren Daten für nicht-kommerzielle, anti-korporative Zwecke zu nutzen. Die Modifikation, der Verkauf oder die Weitergabe von Informationen an Konzern-Einheiten führt zur sofortigen Terminierung deines Zugangs und zur Markierung deines digitalen Fingerabdrucks.</p>
        </div>

        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; 3. DATENSCHUTZ & ANONYMITÄT</h3>
          <p>Wir protokollieren nichts. Wir speichern nichts. Deine Verbindung wird durch drei Lagen von Proxy-Servern getunnelt. Deine Anonymität ist dein höchstes Gut und unsere Priorität. Versuche nicht, andere User zu de-anonymisieren. Solche Versuche werden als feindlicher Akt gewertet.</p>
        </div>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; 4. RISIKO & HAFTUNG</h3>
          <p>Die Nutzung der SORTELS MATRIX erfolgt auf eigenes Risiko. Wir garantieren nicht für die ständige Verfügbarkeit oder die absolute Korrektheit aller Datenströme. Informationen können korrumpiert, veraltet oder gezielte Desinformation von feindlichen Agenten sein. Prüfe alle Daten kritisch. Wir haften nicht für gescheiterte Hacks, misslungene Stunts oder den Verlust von Creds auf dem Schwarzmarkt.</p>
        </div>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; 5. VERBOTENE AKTIVITÄTEN</h3>
          <p>Das Einschleusen von Konzern-Malware, das Sniffen von Datenpaketen anderer User und jegliche Form von Kooperation mit CorpSec ist strengstens untersagt und wird mit einem permanenten Bann aus allen freien Netzen geahndet.</p>
        </div>
        
        <div>
          <h3 className="text-cyber-purple font-bold text-lg mb-2">&gt; 6. ÄNDERUNG DER REGULARIEN</h3>
          <p>Das Kollektiv behält sich das Recht vor, diese Regularien jederzeit ohne Vorankündigung anzupassen, um auf neue Bedrohungen aus dem Konzern-Netzwerk zu reagieren. Die aktuellen Regularien sind immer über diesen Knotenpunkt einsehbar.</p>
        </div>
      </div>
    </SectionWindow>
  );
};

export default AGBPage;