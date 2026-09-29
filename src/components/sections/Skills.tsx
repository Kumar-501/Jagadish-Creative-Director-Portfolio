import { SKILLS } from '../../data/portfolioData';
import { Reveal } from '../common/Reveal';

export function Skills() {
  return (
    <section id="skills" className="skills section-pad">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-heading">
            Skills &amp; Mastery
            <span className="underline-mark" />
          </h2>
        </Reveal>

        <Reveal className="skills-grid">
          {SKILLS.map((col) => (
            <div key={col.title} className="skills-col">
              <h3 className="skills-col-title">{col.title}</h3>
              <ul>
                {col.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
