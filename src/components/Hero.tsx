import { hero } from '../data/studio';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero__bg">
        <img
          src={hero.heroImage.url}
          alt={hero.heroImage.alt}
          className="hero__bg-img"
          loading="eager"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <h1 className="hero__headline">{hero.headline}</h1>
          <p className="hero__body">{hero.body}</p>
          <div className="hero__actions">
            <a href={hero.ctaLinkSecondary} className="btn btn--accent btn--large">
              {hero.ctaSecondary}
            </a>
            <a href={hero.ctaLink} className="btn btn--outline btn--large">
              {hero.cta}
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}