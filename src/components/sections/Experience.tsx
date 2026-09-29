import { EXPERIENCE, PERF_STATS, PERF_FOOTER } from '../../data/portfolioData';
import { Reveal } from '../common/Reveal';

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-heading">
            Experience
            <span className="underline-mark" />
          </h2>
        </Reveal>

        <div className="experience-grid">
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <Reveal key={item.role + item.date} variant="left" className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <ul className="timeline-list">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal variant="right" className="perf-card">
            <p className="perf-card-heading">Commercial Ad Campaign ROI</p>
            {PERF_STATS.map((s) => (
              <div key={s.label} className="perf-row">
                <span className="perf-value">{s.value}</span>
                <span className="perf-label">{s.label}</span>
              </div>
            ))}
            <div className="perf-footer">
              {PERF_FOOTER.map((s) => (
                <div key={s.label} className="perf-footer-item">
                  <div className="perf-footer-value">{s.value}</div>
                  <div className="perf-footer-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
