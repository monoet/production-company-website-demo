import { featuredVideos } from '../data/studio';
import VideoEmbed from './VideoEmbed';

export default function FeaturedReel() {
  const featured = featuredVideos[0];

  return (
    <section className="featured-reel section--tight" aria-label="Featured reel">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Featured Reel</span>
          <p className="featured-reel__subtitle">
            {featuredVideos[0]?.description ?? 'Commercials, music videos, narrative work, and branded content.'}
          </p>
        </div>
      </div>

      <div className="featured-reel__embed-wrap">
        <VideoEmbed video={featured} featured />
      </div>
    </section>
  );
}