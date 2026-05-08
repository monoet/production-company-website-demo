import { navLinks, studioInfo, contactCTA } from '../data/studio';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <a href="#" className="header__logo" aria-label={`${studioInfo.name} home`}>
          <span className="header__logo-wordmark">{studioInfo.name}</span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={contactCTA.ctaLink} className="header__cta">
          {contactCTA.cta}
        </a>
      </div>
    </header>
  );
}