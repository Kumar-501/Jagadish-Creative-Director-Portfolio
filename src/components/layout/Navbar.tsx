import { useEffect, useState } from 'react';
import { CONTACT_EMAIL_URL, NAV_ITEMS } from '../../data/portfolioData';
import { Icon } from '../common/Icons';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id?: string) => {
    if (id) setActive(id);
    setOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="nav-logo" onClick={() => handleNavClick('home')}>
            <img src="/images/logocreative.png" alt="" className="nav-badge-mark" />
            <span className="nav-logo-text">
              Jagadish <span>Vijay</span>
            </span>
          </a>

          <nav>
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={active === item.id ? 'active' : ''}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href={CONTACT_EMAIL_URL} target="_blank" rel="noreferrer" className="gold-btn nav-cta">
            <span>LET'S CONNECT</span> <Icon.arrow width={15} height={15} />
          </a>

          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? 'active' : ''}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={CONTACT_EMAIL_URL}
          target="_blank"
          rel="noreferrer"
          className="gold-btn"
          onClick={() => handleNavClick()}
          style={{ marginTop: '14px' }}
        >
          Let's Work Together <Icon.arrow width={14} height={14} />
        </a>
      </div>
    </>
  );
}