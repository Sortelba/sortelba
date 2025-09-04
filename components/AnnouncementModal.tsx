import React from 'react';
import { AnnouncementArticle } from './Announcements';

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: AnnouncementArticle | null;
}

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const AnnouncementModal: React.FC<AnnouncementModalProps> = ({ isOpen, onClose, article }) => {
  if (!isOpen || !article) return null;
  
  const videoId = article.youtubeLinkUrl ? getYouTubeId(article.youtubeLinkUrl) : null;
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <div className="fixed inset-0 bg-cyber-bg/90 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="announcement-title">
      <div className="w-full max-w-3xl bg-cyber-surface border-2 border-cyber-purple p-1 flex flex-col animate-fade-in-scale" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)', maxHeight: '80vh'}}>
        <div className="flex justify-between items-center bg-cyber-purple/10 px-4 py-2">
          <h2 id="announcement-title" className="font-bold text-cyber-purple text-xl truncate">{article.headline}</h2>
          <button onClick={onClose} className="text-2xl text-cyber-purple hover:text-cyber-white transition-colors" aria-label="Close modal">&times;</button>
        </div>
        
        <div className="flex-grow p-4 md:p-6 overflow-y-auto space-y-6">
          {article.image && (
            <img src={article.image} alt={article.headline} className="w-full h-auto max-h-64 object-cover border-2 border-cyber-purple/30" />
          )}

          <div className="text-cyber-white leading-relaxed whitespace-pre-wrap">
            {article.fullText}
          </div>

          {/* For embeddable videos */}
          {article.videoUrl && (
             <div className="relative w-full border-2 border-cyber-purple/30" style={{ paddingTop: '56.25%' }}>
                <iframe 
                    src={article.videoUrl}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
          )}

          {/* For videos that can't be embedded */}
          {article.youtubeLinkUrl && videoId && (
             <a href={article.youtubeLinkUrl} target="_blank" rel="noopener noreferrer" className="block relative group border-2 border-cyber-purple/30 cursor-pointer overflow-hidden">
                <img src={thumbnailUrl} alt={article.headline} className="w-full h-auto object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
                    <svg className="w-20 h-20 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                    <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-xs text-cyber-white rounded-sm">Auf YouTube ansehen</div>
                </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;