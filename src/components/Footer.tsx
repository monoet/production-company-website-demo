import { navLinks, studioInfo, footer } from '../data/studio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">{studioInfo.name}</span>
            <p className="footer__desc">{footer.description}</p>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Navigate</div>
            <ul className="footer__col-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__col-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Services</div>
            <ul className="footer__col-links">
              {footer.services.map((svc) => (
                <li key={svc}>
                  <span className="footer__col-link">{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <ul className="footer__contact-list">
              <li>
                <a href={`mailto:${footer.contact.email}`} className="footer__contact-item">
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <span className="footer__contact-item">{footer.contact.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {currentYear} {studioInfo.name}. All rights reserved.</span>
          <span className="footer__disclaimer">{footer.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}