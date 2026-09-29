import { NAV_ITEMS, SOCIALS } from '../../data/portfolioData';
import { Icon } from '../common/Icons';

export function Footer() {
  const footerServices = [
    'Film Set & Acting Exposure',
    'Commercial Advertising',
    'Creative Direction & Scripting',
    'Performance Marketing (Meta/Google)',
    'AI Creative Workflows',
  ];

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo nav-logo" aria-label="Jagadish Vijay - Home">
              <img src="/images/logocreative.png" alt="" className="nav-badge-mark" />
              <span className="nav-logo-text">
                Jagadish <span>Vijay</span>
              </span>
            </a>

            <p className="footer-tagline">
              Creative marketing, cinematic storytelling, and performance-driven campaigns built to make brands memorable.
            </p>

            <a href="#contact" className="footer-cta">
              <span>Let's Work Together</span>
              <Icon.arrow width={15} height={15} />
            </a>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Explore</h3>
            <nav className="footer-nav-column" aria-label="Footer navigation">
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Expertise</h3>
            <ul className="footer-service-list">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-connect">
            <h3 className="footer-column-title">Connect</h3>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadishvijaysachin@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-email"
            >
              jagadishvijaysachin@gmail.com
            </a>

            <a href="tel:+916374602818" className="footer-phone">
              +91 63746 02818
            </a>

            <div className="footer-socials" aria-label="Social links">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  className="social-icon"
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {Icon[s.key as keyof typeof Icon]({ width: 14, height: 14 })}
                </a>
              ))}
              <a
                href="https://behance.net"
                className="social-icon"
                aria-label="Behance"
                target="_blank"
                rel="noreferrer"
              >
                {Icon.behance({ width: 14, height: 14 })}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Jagadish Vijay. All Rights Reserved.
          </p>

          <p className="footer-location">
            Creative Marketing Strategist • Film Director • Brand Storyteller
          </p>

          <div className="footer-legal">
            <a href="#home">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
