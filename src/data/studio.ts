/* ============================================
   MONTENEGRO PROD. — Studio Content Data
   Updated 2026-05-08
   ============================================ */

export interface CreditProject {
  title: string;
  category: string;
  credits: string[];
  recognition?: string;
  actingCredit?: string;
  videoUrl?: string;
  embedUrl?: string;
  platform?: 'youtube' | 'vimeo' | 'none';
  notes?: string;
  year?: string;
  description?: string;
}

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
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const studioInfo = {
  name: 'MONTENEGRO PROD',
  tagline: 'Production support rooted in real locations.',
  city: 'Torreón, Mexico',
  email: 'hello@montenegroprod.com',
};

export const hero = {
  headline: 'Production support rooted in real locations.',
  body: 'Based in Torreón, Mexico, MONTENEGRO PROD. brings field-tested experience in location management, scouting, casting, art production, and production support for film, television, commercials, and branded content.',
  cta: 'Contact Production',
  ctaSecondary: 'View Selected Work',
  ctaLink: 'mailto:hello@montenegroprod.com?subject=Production%20Inquiry',
  ctaLinkSecondary: '#work',
  heroImage: {
    url: 'https://pub-619ad6af8dfd4282a7d3446db223c040.r2.dev/actos%20de%20dios_upscayl_2x_high-fidelity-4x.png',
    alt: 'Cinematic frame from Actos de Dios',
  },
};

// ──────────────────────────────────────────────────────────────
// CREDITS — real production work
// ──────────────────────────────────────────────────────────────
export const credits: CreditProject[] = [
  {
    title: 'Alemán — "Como Pacman"',
    category: 'Music Video',
    credits: ['Location Manager', 'Art Direction'],
    videoUrl: 'https://www.youtube.com/watch?v=p9BK6E_kNJU',
    embedUrl: 'https://www.youtube.com/embed/p9BK6E_kNJU',
    platform: 'youtube',
  },
  {
    title: 'Pérdida Total',
    category: 'Production',
    credits: ['Location Manager'],
    videoUrl: 'https://www.youtube.com/watch?v=BOvizBjQ8_4',
    embedUrl: 'https://www.youtube.com/embed/BOvizBjQ8_4',
    platform: 'youtube',
  },
  {
    title: 'Dragonball Evolution',
    category: 'Feature Film',
    credits: ['Location Management', 'Second Unit Support — Dunas de Bilbao'],
    year: '2008',
    description: 'Feature film production support in Dunas de Bilbao, with location management and second unit support for desert location work.',
    videoUrl: 'https://www.youtube.com/watch?v=T4_wHfz2qUA',
    embedUrl: 'https://www.youtube.com/embed/T4_wHfz2qUA',
    platform: 'youtube',
  },
  {
    title: 'Sin Senos no hay Paraíso',
    category: 'Television Series',
    credits: ['Location Manager', 'Production Support — Dunas de Bilbao'],
    year: '2008',
    description: 'Television production support in Dunas de Bilbao, including location management and on-the-ground production coordination.',
    videoUrl: 'https://www.youtube.com/watch?v=N6y7R5WcqcM',
    embedUrl: 'https://www.youtube.com/embed/N6y7R5WcqcM',
    platform: 'youtube',
  },
  {
    title: 'Somos. — Netflix',
    category: 'TV Series',
    credits: [
      'Location Scout — Durango',
      'Casting — Gómez Palacio, Durango',
      'Animal Wrangler',
    ],
    actingCredit: 'Salvador Montenegro as Silverio',
    videoUrl: 'https://www.youtube.com/watch?v=6HTS2apdLH0',
    embedUrl: 'https://www.youtube.com/embed/6HTS2apdLH0',
    platform: 'youtube',
  },
  {
    title: 'Salvando al Soldado Pérez',
    category: 'Film',
    credits: ['Location Manager', 'Art Production', 'Additional Casting'],
    videoUrl: 'https://www.youtube.com/watch?v=9JkJ2HCgiOg',
    embedUrl: 'https://www.youtube.com/embed/9JkJ2HCgiOg',
    platform: 'youtube',
  },
  {
    title: 'Actos de Dios',
    category: 'Film',
    credits: ['Location Manager', 'Casting Director', 'Art Production'],
    recognition: 'Nominated at the Biennale',
    videoUrl: 'https://www.youtube.com/watch?v=5gM4hFBqlqM',
    embedUrl: 'https://www.youtube.com/embed/5gM4hFBqlqM',
    platform: 'youtube',
  },
  {
    title: 'GMC Hummer',
    category: 'Commercial',
    credits: ['Location Manager', 'Casting Director'],
    videoUrl: 'https://vimeo.com/1064247002',
    embedUrl: 'https://player.vimeo.com/video/1064247002',
    platform: 'vimeo',
  },
  {
    title: 'Land Rover',
    category: 'Commercial',
    credits: ['Cinematographer', 'Location Manager', 'Casting'],
    videoUrl: 'https://www.youtube.com/watch?v=K4MVKUl8n4Y',
    embedUrl: 'https://www.youtube.com/embed/K4MVKUl8n4Y',
    platform: 'youtube',
  },
  {
    title: 'Texas Rising',
    category: 'Television Miniseries',
    credits: ['Actor Wrangler'],
    year: '2015',
    description: 'Production support for the historical television miniseries, with actor wrangling responsibilities.',
    videoUrl: 'https://www.youtube.com/watch?v=UUO4oLcc7fo',
    embedUrl: 'https://www.youtube.com/embed/UUO4oLcc7fo',
    platform: 'youtube',
  },
  {
    title: 'Cristiada',
    category: 'Film',
    credits: ['Assistant Animal Wrangler'],
    actingCredit: 'Salvador Montenegro — acting beat with Andy Garcia',
    videoUrl: 'https://www.youtube.com/watch?v=9QUb_StcVzg',
    embedUrl: 'https://www.youtube.com/embed/9QUb_StcVzg',
    platform: 'youtube',
  },
  {
    title: 'The Mexican',
    category: 'Film',
    credits: [],
    actingCredit: 'Salvador Montenegro — Extra',
    videoUrl: 'https://www.youtube.com/watch?v=LyujCIHTiHc',
    embedUrl: 'https://www.youtube.com/embed/LyujCIHTiHc',
    platform: 'youtube',
  },
];

export const services = [
  {
    id: 'location-management',
    title: 'Location Management',
    desc: 'Practical coordination for productions that need reliable, production-ready locations and local support.',
  },
  {
    id: 'location-scouting',
    title: 'Location Scouting',
    desc: 'Regional scouting for film, television, commercials, and branded content across northern Mexico.',
  },
  {
    id: 'casting-support',
    title: 'Casting Support',
    desc: 'Local casting coordination, talent search, and production-specific casting support.',
  },
  {
    id: 'art-production',
    title: 'Art Production',
    desc: 'Art department and production design support for narrative, commercial, and location-based shoots.',
  },
  {
    id: 'animal-wrangling',
    title: 'Animal Wrangling',
    desc: 'On-set animal handling support for productions requiring safe, coordinated animal work.',
  },
  {
    id: 'production-support',
    title: 'Production Support',
    desc: 'Field support, logistics, local coordination, and production problem-solving from prep to shoot.',
  },
];

export const about = {
  heading: 'Built from years of production experience.',
  copy: 'Based in Torreón, Mexico, MONTENEGRO PROD. brings together practical production knowledge, regional location expertise, casting experience, art production, and on-set support. The work spans narrative films, television, commercials, music videos, and branded productions.',
  stats: [
    { value: 'Film, TV, Commercials', label: 'Production types supported' },
    { value: 'Northern Mexico', label: 'Regional location expertise' },
    { value: 'Casting & Art', label: 'On-set coordination' },
  ],
  locationNote: 'Based in Torreón, Mexico. Serving productions across northern Mexico and beyond.',
  highlights: [
    'Film, television, commercial, and branded content experience',
    'Location management and scouting across northern Mexico',
    'Casting support for regional productions',
    'Art production and on-set coordination',
    'Animal wrangling and specialized field support',
  ],
};

export const process = [
  {
    step: '01',
    title: 'Scope',
    desc: 'We learn your production, what you need from the location and support side, and what success looks like.',
  },
  {
    step: '02',
    title: 'Scouting & Planning',
    desc: 'Regional location scouting, logistics planning, and casting coordination based on your creative needs.',
  },
  {
    step: '03',
    title: 'On-Ground Support',
    desc: 'Location management, art production, and production support from prep through wrap.',
  },
  {
    step: '04',
    title: 'Wrap & Delivery',
    desc: 'Final coordination, documentation, and handoff after the shoot.',
  },
];

export const testimonials = [
  {
    quote: 'They know the region, they know the work, and they make everything easier on the ground.',
    author: 'Line Producer',
    company: 'Commercial Production',
  },
  {
    quote: 'MONTENEGRO PROD. made our location shoot happen fast without cutting corners.',
    author: 'Director',
    company: 'Narrative Production',
  },
  {
    quote: 'Reliable, practical, and actually fun to work with. That combination is rare.',
    author: 'Producer',
    company: 'TV Production',
  },
];

export const contactCTA = {
  heading: 'Planning a shoot in northern Mexico?',
  body: 'Contact MONTENEGRO PROD. for location management, scouting, casting, art production, and production support based in Torreón, Mexico.',
  cta: 'Contact Production',
  ctaLink: 'mailto:hello@montenegroprod.com?subject=Production%20Inquiry',
};

export const footer = {
  description: 'Production support, locations, casting, and art production for film, television, commercial, and branded work.',
  services: [
    'Location Management',
    'Location Scouting',
    'Casting Support',
    'Art Production',
    'Animal Wrangling',
    'Production Support',
  ],
  contact: {
    email: 'hello@montenegroprod.com',
    city: 'Torreón, Mexico',
  },
};

// Back-compat for existing VideoEmbed component
export const featuredVideos: VideoSource[] = [
  {
    title: credits[0]?.title ?? 'Selected Work',
    category: credits[0]?.category ?? 'Production',
    description: 'MONTENEGRO PROD. selected work reel.',
    credit: credits[0]?.credits?.join(', ') ?? '',
    embedUrl: credits[0]?.embedUrl ?? '',
    externalUrl: credits[0]?.videoUrl ?? '#work',
  },
];