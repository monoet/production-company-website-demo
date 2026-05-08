import { projects, featuredVideos } from '../data/studio';
import VideoProjectCard from './VideoProjectCard';

export default function Projects() {
  // Use first 2 videos as video project cards
  const videoCards = featuredVideos.slice(0, 2).map((v) => (
    <VideoProjectCard key={v.title} video={v} />
  ));

  // Remaining image-based project cards (last 4 of the 6)
  const imageCards = projects.slice(0, 4).map((project) => (
    <article key={project.id} className="project-card">
      <div className="project-card__image-wrap">
        <img
          src={project.image.url}
          alt={project.image.alt}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__overlay" aria-hidden="true" />
      </div>
      <div className="project-card__info">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__year">{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__roles">
          {project.roles.map((role) => (
            <span key={role} className="project-card__role-tag">{role}</span>
          ))}
        </div>
      </div>
    </article>
  ));

  return (
    <section className="projects section" id="work" aria-label="Selected work">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="projects__grid">
          {videoCards}
          {imageCards}
        </div>
      </div>
    </section>
  );
}