
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Announcements, { AnnouncementArticle } from '../components/Announcements';
import MiniCalendar from '../components/MiniCalendar';
import EventCalendarModal from '../components/EventCalendarModal';
import AnnouncementModal from '../components/AnnouncementModal';
import { PageProps } from '../App';


const Home: React.FC<PageProps> = ({ onNavigate }) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementArticle | null>(null);

  const handleSelectAnnouncement = (article: AnnouncementArticle) => {
    setSelectedAnnouncement(article);
  };

  const handleCloseAnnouncementModal = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <>
      <Hero />
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <Announcements 
          className="md:col-span-2" 
          onNavigate={onNavigate} 
          onOpenCalendar={() => setCalendarOpen(true)}
          onSelectAnnouncement={handleSelectAnnouncement}
        />
        <MiniCalendar onOpenCalendar={() => setCalendarOpen(true)} />
      </div>
      <EventCalendarModal isOpen={isCalendarOpen} onClose={() => setCalendarOpen(false)} />
      <AnnouncementModal 
        isOpen={!!selectedAnnouncement}
        onClose={handleCloseAnnouncementModal}
        article={selectedAnnouncement}
      />
    </>
  );
};

export default Home;