import { useState } from 'react';
import { credits } from '../data/studio';
import CreditCard from './CreditCard';
import VideoLightbox from './VideoLightbox';

export default function Projects() {
  // Only videos that have an embedUrl (not credit-only)
  const playableCredits = credits.filter((c) => c.platform !== 'none' && c.embedUrl);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProject = activeIndex !== null ? playableCredits[activeIndex] : null;

  const handleClose = () => setActiveIndex(null);
  const handleNext = () =>
    setActiveIndex((i) => ((i ?? 0) + 1) % playableCredits.length);
  const handlePrev = () =>
    setActiveIndex((i) => ((i ?? 0) - 1 + playableCredits.length) % playableCredits.length);

  return (
    <>
      <section className="projects section" id="work" aria-label="Selected work">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Selected work</h2>
          </div>

          <div className="projects__grid">
            {credits.map((project) => (
              <CreditCard
                key={project.title}
                project={project}
                mode="grid"
                onPlay={() => {
                  const idx = playableCredits.findIndex((p) => p.title === project.title);
                  if (idx !== -1) setActiveIndex(idx);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <VideoLightbox
          videos={playableCredits}
          activeIndex={activeIndex!}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
}