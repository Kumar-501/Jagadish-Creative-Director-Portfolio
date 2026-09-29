import { STATS } from '../../data/portfolioData';
import { Icon } from '../common/Icons';
import { Reveal } from '../common/Reveal';

export function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-heading">
            About Me
            <span className="underline-mark" />
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal variant="left" className="about-portrait">
            <img
              src="/images/about%20us%20creative.png"
              alt="Portrait of Jagadish Vijay"
            />
          </Reveal>

          <Reveal variant="right" className="about-card">
            <h3 className="about-card-heading">About me</h3>
            <p className="about-card-text">
              Creative Marketing Professional with hands-on exposure across feature film sets, commercial ad
              productions, and screen acting. Experienced in scriptwriting, camera blocking, DaVinci Resolve color
              workflows, performance marketing, and end-to-end commercial filmmaking. Whether it's facing the camera
              for dramatic scenes or engineering high-converting B2B/B2C ad campaigns, I translate raw emotion into
              lasting brand impact.
            </p>
            <p className="about-signature">Jagadish Vijay</p>
          </Reveal>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat-card" style={{ transitionDelay: `${i * 0.08}s` }}>
              {Icon[s.icon as keyof typeof Icon]({ className: 'stat-icon' })}
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
