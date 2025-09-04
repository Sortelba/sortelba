
import React, { useState, useMemo } from 'react';
import { events, Event } from '../data/events';

interface EventCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventCalendarModal: React.FC<EventCalendarModalProps> = ({ isOpen, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    if (!searchTerm) {
      return events;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return Object.entries(events).reduce((acc, [date, event]) => {
      if (
        event.title.toLowerCase().includes(lowercasedFilter) ||
        event.details.toLowerCase().includes(lowercasedFilter)
      ) {
        acc[date] = event;
      }
      return acc;
    }, {} as Record<string, Event>);
  }, [searchTerm]);

  const { month, year, daysInMonth, firstDayOfMonth } = useMemo(() => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { month, year, daysInMonth, firstDayOfMonth };
  }, [currentDate]);

  const handleDayClick = (day: number) => {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedEvent(filteredEvents[dateString] || null);
    setSelectedDay(day);
  };

  const changeMonth = (delta: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentDate(newDate);
    setSelectedEvent(null);
    setSelectedDay(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-cyber-bg/90 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="calendar-title">
      <div className="w-full max-w-5xl h-[80vh] bg-cyber-surface border-2 border-cyber-orange p-1 flex flex-col" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)'}}>
        <div className="flex justify-between items-center bg-cyber-orange/10 px-4 py-2">
          <h2 id="calendar-title" className="font-bold text-cyber-orange text-2xl">EVENT DATABASE</h2>
          <button onClick={onClose} className="text-2xl text-cyber-orange hover:text-cyber-white transition-colors" aria-label="Close modal">&times;</button>
        </div>
        
        <div className="flex-grow p-4 flex flex-col md:flex-row gap-4 overflow-hidden">
          {/* Calendar Grid */}
          <div className="flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => changeMonth(-1)} className="px-4 py-1 border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-bg transition-colors">&lt; PREV</button>
              <h3 className="text-xl font-bold text-cyber-purple">{new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(currentDate)}</h3>
              <button onClick={() => changeMonth(1)} className="px-4 py-1 border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-bg transition-colors">NEXT &gt;</button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="SEARCH DATABASE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/50 p-2 border border-cyber-gray/50 focus:border-cyber-purple focus:outline-none text-cyber-white font-mono"
                aria-label="Search events"
              />
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-cyber-gray border-b border-cyber-gray/50 mb-2">
              {['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 flex-grow">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const hasEvent = !!filteredEvents[dateString];
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    className={`p-2 border hover:bg-cyber-purple/20 cursor-pointer transition-colors text-left align-top relative ${
                      isSelected ? 'border-2 border-cyber-purple bg-cyber-purple/50' : 'border border-cyber-gray/20'
                    }`}
                    aria-label={`Date ${day}, ${hasEvent ? 'has event' : 'no event'}`}
                  >
                    <span className={`font-bold ${isSelected || hasEvent ? 'text-cyber-white' : 'text-cyber-gray/70'}`}>{day}</span>
                    {hasEvent && <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyber-white rounded-full"></div>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Event Details */}
          <div className="w-full md:w-1/3 bg-black/50 p-4 border border-cyber-gray/20 flex flex-col">
            <h3 className="font-bold text-cyber-white border-b border-cyber-gray/50 pb-2 mb-4 text-lg">EVENT DETAILS</h3>
            {selectedEvent ? (
              <div className="text-cyber-gray space-y-4">
                <p><span className="text-cyber-orange font-bold">&gt; TITLE:</span> {selectedEvent.title}</p>
                <p className="whitespace-pre-wrap"><span className="text-cyber-orange font-bold">&gt; DATA:</span> {selectedEvent.details}</p>
              </div>
            ) : (
              <p className="text-cyber-gray animate-pulse">SELECT A DATE WITH AN ACTIVE SIGNAL...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendarModal;