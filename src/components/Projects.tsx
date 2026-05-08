import { credits } from '../data/studio';
import CreditCard from './CreditCard';

export default function Projects() {
  return (
    <section className="projects section" id="work" aria-label="Selected work">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="projects__grid">
          {credits.map((project) => (
            <CreditCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}