interface VideoEmbedProps {
  embedUrl: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({ embedUrl, title, className = '' }: VideoEmbedProps) {
  if (!embedUrl) return null;

  return (
    <div className={`video-embed ${className}`}>
      <iframe
        src={embedUrl}
        title={title}
        className="video-embed__iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}