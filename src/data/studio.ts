/* ============================================
   Northline Pictures — Studio Content Data
   ============================================ */

export interface VideoSource {
  title: string;
  category: string;
  description: string;
  credit: string;
  embedUrl: string;
  externalUrl: string;
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const studioInfo = {
  name: 'Northline Pictures',
  tagline: 'Film, commercial, and branded content production.',
  city: 'Los Angeles, CA',
  email: 'hello@northline-demo.com',
};

export const hero = {
  headline: 'Cinematic stories for brands, artists, and studios.',
  body: 'We help companies, artists, and creative teams produce sharp, cinematic work — from concept and production to post.',
  cta: 'Start a Project',
  ctaSecondary: 'View Work',
  ctaLink: '#work',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80',
    alt: 'Film production set with cinematic lighting',
  },
};

export const featuredReel = {
  title: 'Featured Reel',
  subtitle: 'Commercials, music videos, narrative work, and branded content.',
  posterImage: {
    url: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=1400&q=80',
    alt: 'Cinematic production still from Northline Pictures reel',
  },
  playLink: '#',
};

export const services = [
  {
    id: 'commercials',
    title: 'Commercial Production',
    desc: 'Sharp, high-impact commercials for broadcast and digital — from 15-second spots to long-form brand films.',
  },
  {
    id: 'music-videos',
    title: 'Music Videos',
    desc: 'Visual storytelling for artists and labels. Concept-driven, genre-defining work.',
  },
  {
    id: 'film',
    title: 'Film & Narrative',
    desc: 'Short films, branded documentaries, and independent projects built on strong direction.',
  },
  {
    id: 'branded',
    title: 'Branded Content',
    desc: 'Content that fits your brand ecosystem — without the corporate stiffness.',
  },
  {
    id: 'post',
    title: 'Post-Production',
    desc: 'Editing, color, sound design, and VFX. We finish what we start.',
  },
  {
    id: 'direction',
    title: 'Creative Direction',
    desc: 'Concept development, visual strategy, and on-set direction for complex productions.',
  },
];

export const projects = [
  {
    id: 'campaign-film',
    title: 'Campaign Film',
    category: 'Commercial',
    year: '2024',
    roles: ['Production', 'Direction', 'Color'],
    desc: 'A brand campaign built around a single emotional hook.',
    image: {
      url: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
      alt: 'Campaign film production still',
    },
  },
  {
    id: 'music-video',
    title: 'Neon Nights',
    category: 'Music Video',
    year: '2024',
    roles: ['Direction', 'Editing', 'Post'],
    desc: 'Directed and edited a moody, neon-soaked visual for an LA artist.',
    image: {
      url: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=800&q=80',
      alt: 'Music video production still',
    },
  },
  {
    id: 'short-film',
    title: 'The Last Light',
    category: 'Short Film',
    year: '2023',
    roles: ['Production', 'Direction', 'Sound'],
    desc: 'An 8-minute narrative piece exploring memory and loss.',
    image: {
      url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
      alt: 'Short film production still',
    },
  },
  {
    id: 'brand-story',
    title: 'Handmade Chapter',
    category: 'Brand Story',
    year: '2024',
    roles: ['Production', 'Direction', 'Editing'],
    desc: 'A long-form brand documentary for an artisan goods company.',
    image: {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Brand story production still',
    },
  },
  {
    id: 'product-spot',
    title: 'Precision Series',
    category: 'Product Spot',
    year: '2023',
    roles: ['Production', 'Color', 'Motion'],
    desc: 'Clean, controlled product visuals for a precision instruments brand.',
    image: {
      url: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
      alt: 'Product spot production still',
    },
  },
  {
    id: 'documentary',
    title: 'Open Road',
    category: 'Documentary',
    year: '2023',
    roles: ['Direction', 'Editing', 'Sound'],
    desc: 'A short documentary following a traveling musician across the Southwest.',
    image: {
      url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
      alt: 'Documentary production still',
    },
  },
];

export const about = {
  heading: 'Built for productions that need clarity and taste.',
  copy: 'Northline Pictures is a production company focused on cinematic visual work for brands, artists, and independent projects. We keep the process clear, collaborative, and focused on the final screen.',
  stats: [
    { value: '12+', label: 'Years active' },
    { value: '180+', label: 'Productions delivered' },
    { value: '60+', label: 'Clients and artists' },
  ],
  locationNote: 'Los Angeles-based. Remote capable worldwide.',
};

export const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We learn what you\'re building, who it\'s for, and what success looks like.',
  },
  {
    step: '02',
    title: 'Creative Direction',
    desc: 'Concepts, references, visual strategy, and a clear path to execution.',
  },
  {
    step: '03',
    title: 'Production',
    desc: 'On-set or on-location with a focused crew and a plan.',
  },
  {
    step: '04',
    title: 'Post-Production',
    desc: 'Editing, color, sound, and finishing to the final deliverable.',
  },
  {
    step: '05',
    title: 'Delivery',
    desc: 'Formatted, optimized, and ready for distribution.',
  },
];

export const testimonials = [
  {
    quote: 'They helped us turn a loose concept into a polished campaign piece without overcomplicating the process.',
    author: 'Creative Director',
    company: 'Meridian Brands',
  },
  {
    quote: 'Fast, precise, and genuinely collaborative. The kind of team that makes everyone on set better.',
    author: 'Producer',
    company: 'Fenix Music Group',
  },
  {
    quote: 'We needed a brand film that actually felt like us. Northline delivered something we\'re proud to show.',
    author: 'Founder',
    company: 'Artisan Collective',
  },
];

export const contactCTA = {
  heading: 'Have a project in mind?',
  body: "Send over the current site, the work you want to keep, what needs to change, and any references you like. We'll help shape the next version.",
  cta: 'Start a Project',
  ctaLink: 'mailto:hello@northline-demo.com?subject=Website%20Project%20Inquiry',
  ctaSecondary: 'Send current website',
};

export const footer = {
  description: 'Cinematic production for brands, artists, and studios. Los Angeles.',
  services: ['Commercial Production', 'Music Videos', 'Film & Narrative', 'Branded Content', 'Post-Production', 'Creative Direction'],
  contact: {
    email: 'hello@northline-demo.com',
    city: 'Los Angeles, CA',
  },
  disclaimer: 'Demo website concept. Replace content, projects, and contact details before launch.',
};

// ============================================
// Featured Videos (Demo Placeholders — Short of the Week)
// ============================================
// No video files are hosted in this repo.
// All embeds link to official Short of the Week / YouTube / Vimeo pages.
// Replace with client work before launch.

export const featuredVideos: VideoSource[] = [
  {
    title: 'Myrna the Monster',
    category: 'Short Film / Comedy',
    description: 'A heartbroken alien dreamer from the moon transitions into young adult life in Los Angeles like any other 20-something.',
    credit: 'Directed by Ian Samuels. Demo placeholder via Short of the Week.',
    embedUrl: '', // No embed found — using external card
    externalUrl: 'https://www.shortoftheweek.com/2023/07/20/myrna-the-monster/',
  },
  {
    title: 'From the Future with Love',
    category: 'Sci-Fi / Proof of Concept',
    description: 'Squads of privatized police officers sell overpriced protection plans in a gritty New York dystopia. Strong world-building and production design.',
    credit: 'Directed by K-Michel Parandi. Demo placeholder via Short of the Week.',
    embedUrl: '', // No embed found — using external card
    externalUrl: 'https://www.shortoftheweek.com/2013/09/06/from-the-future-with-love/',
  },
  {
    title: 'Beyond Failure',
    category: 'Comedy / Character Short',
    description: 'A contemporary indie comedy with a personal, internet-age voice. Featured on Short of the Week in 2025.',
    credit: 'Demo placeholder via Short of the Week. Replace with client work.',
    embedUrl: '',
    externalUrl: 'https://www.shortoftheweek.com/2025/04/14/beyond-failure/',
  },
];