import React from 'react';
import SectionWindow from './SectionWindow';
import { PageProps } from '../App';
import { announcementData, AnnouncementArticle, Announcement } from '../data/announcements';

// Re-exporting for use in other components like Home.tsx
export type { AnnouncementArticle };

interface AnnouncementsProps extends PageProps {
  className?: string;
  onOpenCalendar: () => void;
  onSelectAnnouncement: (article: AnnouncementArticle) => void;
}

const Announcements: React.FC<AnnouncementsProps> = (props) => {
  const { className } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, ann: Announcement) => {
    e.preventDefault();
    if ('action' in ann && ann.action) {
      ann.action(props);
    } else if ('fullText' in ann) {
      props.onSelectAnnouncement(ann as AnnouncementArticle);
    }
  };

  return (
    <SectionWindow title="SYSTEM ANNOUNCEMENTS // LATEST UPLOADS" id="announcements" className={className}>
        <div className="bg-black/50 text-cyber-white p-4 min-h-[10rem] overflow-y-auto border border-cyber-gray/20 font-mono text-base space-y-2">
          {announcementData.length > 0 ? (
            announcementData.map((ann) => (
              <a 
                key={ann.id} 
                href="#"
                onClick={(e) => handleClick(e, ann)}
                className="block hover:bg-cyber-purple/10 p-1 transition-colors"
              >
                <span className="text-cyber-orange">{ann.label}{'://'}</span> {ann.headline}
              </a>
            ))
          ) : (
            <p className="text-cyber-gray">NO NEW TRANSMISSIONS...</p>
          )}
          <p className="animate-pulse">_</p>
        </div>
    </SectionWindow>
  );
};

export default Announcements;