import { contactCTA } from '../data/studio';

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact" aria-label="Contact">
      <div className="contact-cta__inner container">
        <div className="contact-cta__content">
          <h2 className="contact-cta__heading">{contactCTA.heading}</h2>
          <p className="contact-cta__body">{contactCTA.body}</p>
          <a href={contactCTA.ctaLink} className="btn btn--accent btn--large">
            {contactCTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}