import { services } from '../data/studio';

export default function Services() {
  return (
    <section className="services section" id="services" aria-label="Services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What we do</span>
          <h2 className="section-title">Production services</h2>
        </div>

        <div className="services__grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <h3 className="service-card__title">{svc.title}</h3>
              <p className="service-card__desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}