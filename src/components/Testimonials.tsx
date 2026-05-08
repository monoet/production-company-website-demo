import { testimonials } from '../data/studio';

export default function Testimonials() {
  return (
    <section className="testimonials section" aria-label="Testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client notes</span>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial-card__footer">
                <span className="testimonial-card__author">{t.author}</span>
                <span className="testimonial-card__divider" aria-hidden="true">—</span>
                <span className="testimonial-card__company">{t.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}