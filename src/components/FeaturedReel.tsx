import { featuredReel } from '../data/studio';

export default function FeaturedReel() {
  return (
    <section className="featured-reel section--tight" aria-label="Featured reel">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{featuredReel.title}</span>
          <p className="featured-reel__subtitle">{featuredReel.subtitle}</p>
        </div>
      </div>

      <div className="featured-reel__stage">
        <div className="featured-reel__frame">
          <a href={featuredReel.playLink} className="featured-reel__poster-link" aria-label="Play featured reel">
            <img
              src={featuredReel.posterImage.url}
              alt={featuredReel.posterImage.alt}
              className="featured-reel__poster"
              loading="lazy"
            />
            <div className="featured-reel__play-btn" aria-hidden="true">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                <path d="M0 0L20 12L0 24V0Z" fill="currentColor" />
              </svg>
            </div>
            <div className="featured-reel__grain" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}