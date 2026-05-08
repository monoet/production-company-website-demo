import { useEffect, useRef } from 'react';
import type { CreditProject } from '../data/studio';
import CreditCard from './CreditCard';

interface VideoLightboxProps {
  videos: CreditProject[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function VideoLightbox({
  videos,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: VideoLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const activeVideo = videos[activeIndex];

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Focus close button on open
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onNext, onPrev]);

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      className="video-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${activeVideo.title}`}
      onClick={onClose}
    >
      <div className="video-lightbox__panel" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          ref={closeRef}
          className="video-lightbox__close"
          onClick={onClose}
          aria-label="Close video"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Video + info */}
        <div className={`video-lightbox__content${reducedMotion ? ' video-lightbox__content--no-motion' : ''}`}>
          <CreditCard project={activeVideo} mode="lightbox" />
        </div>

        {/* Controls */}
        <div className="video-lightbox__controls">
          <button
            className="video-lightbox__nav"
            onClick={onPrev}
            aria-label="Previous video"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Prev
          </button>

          <span className="video-lightbox__counter">
            {activeIndex + 1} / {videos.length}
          </span>

          <button
            className="video-lightbox__nav"
            onClick={onNext}
            aria-label="Next video"
          >
            Next
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}