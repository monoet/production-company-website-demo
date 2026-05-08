import { process } from '../data/studio';

export default function Process() {
  return (
    <section className="process section" id="experience" aria-label="Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How we work</span>
          <h2 className="section-title">From location to screen — field-tested process.</h2>
        </div>

        <div className="process__steps">
          {process.map((item, i) => (
            <div key={item.step} className="process__step">
              <div className="process__step-number">{item.step}</div>
              <div className="process__step-content">
                <h3 className="process__step-title">{item.title}</h3>
                <p className="process__step-desc">{item.desc}</p>
              </div>
              {i < process.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}