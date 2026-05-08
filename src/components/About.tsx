import { about } from '../data/studio';

export default function About() {
  return (
    <section className="about section" id="about" aria-label="About">
      <div className="container">
        <div className="about__inner">
          <div className="about__content">
            <span className="section-label">About</span>
            <h2 className="about__heading">{about.heading}</h2>
            <p className="about__copy">{about.copy}</p>
            <p className="about__location">{about.locationNote}</p>

            <div className="about__highlights">
              {about.highlights.map((h) => (
                <div key={h} className="about__highlight-item">
                  <span className="about__highlight-bullet" aria-hidden="true">—</span>
                  <span className="about__highlight-text">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
              alt="MONTENEGRO PROD. production support on location in northern Mexico"
              loading="lazy"
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}