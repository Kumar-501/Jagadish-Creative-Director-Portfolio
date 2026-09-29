import { useEffect, useState } from 'react';
import { Project } from '../../data/portfolioData';
import { Icon } from '../common/Icons';

interface VideoModalProps {
  project?: Project | null;
  standaloneVideo?: { title: string; embedUrl: string } | null;
  onClose: () => void;
}

export function VideoModal({ project, standaloneVideo, onClose }: VideoModalProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project && !standaloneVideo) return null;

  // Determine current video source
  const title = standaloneVideo?.title || project?.title || 'Video Player';
  const category = project?.category || 'Film & Production Video';
  let embedUrl = '';
  let localVideoUrl = '';

  if (standaloneVideo) {
    embedUrl = standaloneVideo.embedUrl;
  } else if (project && project.videos && project.videos.length > 0) {
    const activeVid = project.videos[activeVideoIndex];
    if (activeVid.url) {
      if (/\.(mp4|webm|ogg)(?:[?#]|$)/i.test(activeVid.url)) {
        localVideoUrl = activeVid.url;
      } else {
        const matchId = activeVid.url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/);
        const ytId = matchId ? matchId[1] : activeVid.id;
        const startParam = activeVid.url.match(/start=(\d+)|t=(\d+)/);
        const startSec = startParam ? (startParam[1] || startParam[2]) : '';
        embedUrl = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0${startSec ? `&start=${startSec}` : ''}`;
      }
    } else {
      embedUrl = `https://www.youtube.com/embed/${activeVid.id}?autoplay=1&rel=0`;
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <Icon.close width={18} height={18} />
        </button>

        <div className="modal-header">
          <span className="modal-category">{category}</span>
          <h3 className="modal-title">{title}</h3>
        </div>

        {project && project.videos.length > 1 && (
          <div className="modal-video-tabs">
            {project.videos.map((vid, idx) => (
              <button
                key={vid.id || idx}
                className={`video-tab-btn ${activeVideoIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveVideoIndex(idx)}
              >
                {vid.title || `Video 0${idx + 1}`}
              </button>
            ))}
          </div>
        )}

        <div className="modal-video-container">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : localVideoUrl ? (
            <video src={localVideoUrl} title={title} controls autoPlay playsInline />
          ) : (
            <div className="modal-no-video">
              <p>Video preview unavailable</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
