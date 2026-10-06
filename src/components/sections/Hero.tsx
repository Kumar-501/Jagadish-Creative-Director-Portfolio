import { SOCIALS } from '../../data/portfolioData';
import { Icon } from '../common/Icons';

export function Hero() {
  const roles = [
    'CREATIVE MARKETING STRATEGIST',
    'CREATIVE DIRECTOR & FILMMAKER',
    'ACTING & PRODUCTION EXPOSURE',
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-bg-vignette" />

      <div className="container">
        <div className="hero-left">
          <h1 className="hero-name">
            JAGADISH
            <br />
            VIJAY
          </h1>

          <div className="hero-roles">
            {roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
            <div className="roles-divider" />
          </div>

          <p className="hero-para">
            I create commercial campaigns, cinematic advertisements, and brand
            experiences that combine creativity, storytelling, AI workflows,
            and performance marketing to drive measurable business growth.
          </p>

          <div className="hero-actions">
            <a href="#film-exposure" className="gold-btn">
              FILM SET EXPOSURE <Icon.arrow width={14} height={14} />
            </a>

            <a href="#film-exposure" className="ghost-btn">
              VIEW FILM WORK <Icon.camera width={14} height={14} />
            </a>

            <a
              href="/Jagadish_Vijay_Creative_Strategist_Resume%20%285%29.pdf"
              download="Jagadish_Vijay_Creative_Strategist_Resume.pdf"
              className="ghost-btn"
            >
              DOWNLOAD RESUME <Icon.download width={14} height={14} />
            </a>
          </div>

          <div className="hero-social">
            <span className="hero-social-label">CONNECT</span>
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
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-media-wrapper">
            <div className="hero-media-glow" />
            <div className="hero-media">
              <img
                src="/images/herocreative%20(2).png"
                alt="Jagadish Vijay - Director and Creative Strategist"
                className="hero-banner-img"
              />
              <div className="hero-media-badge">
                <span>ON SET • DIRECTOR &amp; ACTOR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}