import { SOCIALS } from '../../data/portfolioData';
import { Icon } from '../common/Icons';
import { Reveal } from '../common/Reveal';

export function Contact() {
  const rows = [
    { icon: 'phone', label: 'Phone', value: '+91 63746 02818', href: 'tel:+916374602818' },
    { icon: 'mail', label: 'Email', value: 'jagadishvijaysachin@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jagadishvijaysachin@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/jagadish-vijay-90a12a270', href: 'https://linkedin.com/in/jagadish-vijay-90a12a270' },
    { icon: 'pin', label: 'Location', value: 'Tamil Nadu, India', href: undefined },
  ];

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="contact-grid">
          <Reveal variant="left">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="contact-heading">
              Let's Build Something
              <br />
              <span className="gold">Extraordinary</span> Together!
            </h2>
            <p className="contact-text">
              Looking for a Creative Marketing Strategist, Commercial Film Director, or Actor with genuine on-set experience? Let's discuss your next production or campaign.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadishvijaysachin@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="gold-btn"
            >
              Get In Touch <Icon.arrow width={15} height={15} />
            </a>
          </Reveal>

          <Reveal variant="right">
            <div className="contact-card">
              {rows.map((r) => (
                <div key={r.label} className="contact-row">
                  <span className="contact-row-icon">{Icon[r.icon as keyof typeof Icon]({ width: 17, height: 17 })}</span>
                  <div>
                    <div className="contact-row-label">{r.label}</div>
                    <div className="contact-row-value">
                      {r.href ? (
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {r.value}
                        </a>
                      ) : (
                        r.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="contact-socials">
                {SOCIALS.map((s) => (
                  <a key={s.key} href={s.href} className="social-icon" aria-label={s.label} target="_blank" rel="noreferrer">
                    {Icon[s.key as keyof typeof Icon]({ width: 15, height: 15 })}
                  </a>
                ))}
                <a href="https://behance.net" className="social-icon" aria-label="Behance" target="_blank" rel="noreferrer">
                  {Icon.behance({ width: 15, height: 15 })}
                </a>
              </div>
            </div>

            <div className="contact-quote-note">
              "The best brands don't just sell products; they tell stories people never forget."
              <span>— Jagadish Vijay</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
