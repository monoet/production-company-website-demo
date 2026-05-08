import type { VideoSource } from '../data/studio';

interface VideoEmbedProps {
  video: VideoSource;
  featured?: boolean;
}

export default function VideoEmbed({ video, featured = false }: VideoEmbedProps) {
  const { title, category, description, embedUrl, externalUrl } = video;

  if (embedUrl) {
    return (
      <div className={`video-embed video-embed--${featured ? 'featured' : 'card'}`}>
        <span className="video-embed__demo-badge">Demo</span>
        <iframe
          className="video-embed__iframe"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback: polished external card
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-embed"
      aria-label={`Watch "${title}" on Short of the Week`}
    >
      <span className="video-embed__demo-badge">Demo</span>
      <div className="video-embed__external">
        <div className="video-embed__play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
        <div className="video-embed__external-content">
          <span className="video-embed__external-category">{category}</span>
          <span className="video-embed__external-title">{title}</span>
          {description && (
            <span className="video-embed__external-desc">{description}</span>
          )}
          <span className="video-embed__external-cta">Watch on Short of the Week</span>
        </div>
      </div>
    </a>
  );
}