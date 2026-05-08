import { featuredReel } from '../data/studio';

export default function FeaturedReel() {
  return (
    <section className="featured-reel section--tight" aria-label="Selected work reel">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{featuredReel.title}</span>
          <p className="featured-reel__subtitle">{featuredReel.subtitle}</p>
        </div>
      </div>

      <div className="featured-reel__embed-wrap">
        <div className="featured-reel__placeholder">
          <p>Selected work — browse credits below.</p>
          <a href="#work" className="btn btn--outline">View All Work</a>
        </div>
      </div>
    </section>
  );
}