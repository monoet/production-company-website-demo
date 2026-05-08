import type { CreditProject } from '../data/studio';

interface CreditCardProps {
  project: CreditProject;
  mode?: 'grid' | 'lightbox';
  onPlay?: () => void;
}

export default function CreditCard({ project, mode = 'grid', onPlay }: CreditCardProps) {
  const hasVideo = project.platform === 'youtube' || project.platform === 'vimeo';

  if (mode === 'lightbox') {
    // Lightbox mode: render iframe directly (only one is mounted at a time)
    return (
      <div className="credit-card credit-card--lightbox">
        <div className="credit-card__media">
          {hasVideo && project.embedUrl ? (
            <div className="credit-card__embed-wrap">
              <iframe
                src={project.embedUrl}
                title={`${project.title} — video`}
                className="credit-card__embed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
        <div className="credit-card__info">
          <div className="credit-card__meta">
            <span className="credit-card__category">{project.category}</span>
            {project.year && (
              <span className="credit-card__year">{project.year}</span>
            )}
          </div>
          <h3 className="credit-card__title">{project.title}</h3>
          {project.credits.length > 0 && (
            <div className="credit-card__roles">
              {project.credits.map((credit) => (
                <span key={credit} className="credit-card__role-tag">{credit}</span>
              ))}
            </div>
          )}
          {project.recognition && (
            <div className="credit-card__recognition-badge">{project.recognition}</div>
          )}
        </div>
      </div>
    );
  }

  // Grid mode: no iframe, show play button overlay
  return (
    <article className="credit-card">
      <div className="credit-card__media">
        {hasVideo ? (
          <>
            <div className="credit-card__poster">
              <img
                src={`https://img.youtube.com/vi/${project.embedUrl?.split('/').pop()}/hqdefault.jpg`}
                alt={`${project.title} thumbnail`}
                className="credit-card__poster-img"
                loading="lazy"
              />
            </div>
            <button
              className="credit-card__play-btn"
              onClick={onPlay}
              aria-label={`Play ${project.title}`}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </button>
          </>
        ) : (
          <div className="credit-card__credit-only">
            <span className="credit-card__credit-only-label">Credit only</span>
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="credit-card__watch-link"
              >
                View
              </a>
            )}
          </div>
        )}

        {project.recognition && (
          <div className="credit-card__recognition">{project.recognition}</div>
        )}
      </div>

      <div className="credit-card__info">
        <div className="credit-card__meta">
          <span className="credit-card__category">{project.category}</span>
          {project.year && (
            <span className="credit-card__year">{project.year}</span>
          )}
        </div>
        <h3 className="credit-card__title">{project.title}</h3>

        {project.credits.length > 0 && (
          <div className="credit-card__roles">
            {project.credits.map((credit) => (
              <span key={credit} className="credit-card__role-tag">{credit}</span>
            ))}
          </div>
        )}

        {project.actingCredit && (
          <p className="credit-card__acting-credit">{project.actingCredit}</p>
        )}

        {hasVideo && project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="credit-card__watch-btn"
          >
            Watch
          </a>
        )}
      </div>
    </article>
  );
}