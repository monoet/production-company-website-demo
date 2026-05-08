import type { CreditProject } from '../data/studio';

interface CreditCardProps {
  project: CreditProject;
}

export default function CreditCard({ project }: CreditCardProps) {
  const hasVideo = project.platform === 'youtube' || project.platform === 'vimeo';

  return (
    <article className="credit-card">
      {/* Media area */}
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
        ) : (
          <div className="credit-card__credit-only">
            <span className="credit-card__credit-only-label">Credit only</span>
            {project.notes && (
              <span className="credit-card__credit-only-note">{project.notes}</span>
            )}
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

      {/* Info area */}
      <div className="credit-card__info">
        <div className="credit-card__meta">
          <span className="credit-card__category">{project.category}</span>
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