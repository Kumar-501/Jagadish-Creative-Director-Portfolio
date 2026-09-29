import { useEffect } from 'react';
import { Icon } from '../common/Icons';

interface ImageModalProps {
  image: { title: string; imgUrl: string; caption: string } | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
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

  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <Icon.close width={18} height={18} />
        </button>

        <div className="modal-header">
          <span className="modal-category">POSTER &amp; FILM STILL • FULL VIEW</span>
          <h3 className="modal-title">{image.title}</h3>
          <p style={{ fontSize: '13px', color: '#b0b0b0', marginTop: '6px' }}>{image.caption}</p>
        </div>

        <div className="lightbox-img-wrap">
          <img src={image.imgUrl} alt={image.title} className="lightbox-img" />
        </div>
      </div>
    </div>
  );
}
