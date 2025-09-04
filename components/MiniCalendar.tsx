import React, { useMemo } from 'react';
import SectionWindow from './SectionWindow';
import { events } from '../data/events';

interface MiniCalendarProps {
  onOpenCalendar: () => void;
}

const MiniCalendar: React.FC<MiniCalendarProps> = ({ onOpenCalendar }) => {
  const { monthName, year, days, firstDay, eventDays } = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const monthName = new Intl.DateTimeFormat('de-DE', { month: 'long' }).format(now).toUpperCase();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const monthStr = String(month + 1).padStart(2, '0');
    const currentMonthEventDays = Object.keys(events)
      .filter(dateStr => dateStr.startsWith(`${year}-${monthStr}`))
      .map(dateStr => parseInt(dateStr.split('-')[2], 10));

    return {
      monthName,
      year,
      days: Array.from({ length: daysInMonth }, (_, i) => i + 1),
      firstDay: firstDayOfMonth,
      eventDays: currentMonthEventDays,
    };
  }, []);

  return (
    <SectionWindow title="EVENTS" id="events">
      <div className="text-center">
        <p className="font-bold text-cyber-purple text-lg mb-2">{monthName} {year}</p>
        <div className="grid grid-cols-7 gap-2 text-xs text-cyber-gray mb-2">
          {['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2 text-sm">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
          {days.map(day => (
            <div key={day} className="flex items-center justify-center h-6">
                <span className={`flex items-center justify-center w-6 h-6 ${eventDays.includes(day) ? 'bg-cyber-orange text-cyber-bg font-bold rounded-full shadow-glow-orange' : 'text-cyber-gray/50'}`}>
                    {day}
                </span>
            </div>
          ))}
        </div>
        <button 
          onClick={onOpenCalendar} 
          className="mt-4 text-cyber-purple hover:underline"
        >
          &gt; Open Full Calendar Database
        </button>
      </div>
    </SectionWindow>
  );
};

export default MiniCalendar;