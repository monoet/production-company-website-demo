import type { VideoSource } from '../data/studio';

interface VideoProjectCardProps {
  video: VideoSource;
}

export default function VideoProjectCard({ video }: VideoProjectCardProps) {
  const { title, category, description, externalUrl } = video;

  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-project-card"
      aria-label={`${title} — demo placeholder video on Short of the Week`}
    >
      <div className="video-project-card__embed">
        <VideoEmbedInline video={video} />
      </div>
      <div className="video-project-card__info">
        <div className="video-project-card__meta">
          <span className="video-project-card__category">{category}</span>
          <span className="video-project-card__year">Demo</span>
        </div>
        <h3 className="video-project-card__title">{title}</h3>
        <p className="video-project-card__desc">{description}</p>
        <div className="video-project-card__roles">
          <span className="video-project-card__role-tag">Demo Ref</span>
          <span className="video-project-card__role-tag">Placeholder</span>
        </div>
        <span className="video-project-card__link">
          Watch on Short of the Week
        </span>
      </div>
    </a>
  );
}

interface VideoEmbedInlineProps {
  video: VideoSource;
}

function VideoEmbedInline({ video }: VideoEmbedInlineProps) {
  const { title, embedUrl, externalUrl } = video;

  if (embedUrl) {
    return (
      <iframe
        src={embedUrl}
        title={title}
        className="video-embed__iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-embed"
      aria-label={`Watch "${title}" on Short of the Week`}
      style={{ height: '100%', aspectRatio: '16/9' }}
    >
      <span className="video-embed__demo-badge">Demo</span>
      <div className="video-embed__external">
        <div className="video-embed__play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
        <div className="video-embed__external-content">
          <span className="video-embed__external-category">Demo placeholder</span>
          <span className="video-embed__external-title">{title}</span>
          <span className="video-embed__external-cta">Watch on Short of the Week</span>
        </div>
      </div>
    </a>
  );
}