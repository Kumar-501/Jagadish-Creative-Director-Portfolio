import { PROJECTS, Project } from '../../data/portfolioData';
import { Icon } from '../common/Icons';
import { Reveal } from '../common/Reveal';

interface FeaturedWorkProps {
  onSelectProject: (p: Project) => void;
}

export function FeaturedWork({ onSelectProject }: FeaturedWorkProps) {
  return (
    <section id="work" className="section-pad">
      <div className="container">
        <div className="work-header">
          <Reveal className="section-head">
            <h2 className="section-heading">
              Featured Work
              <span className="underline-mark" />
            </h2>
          </Reveal>
        </div>

        <div className="work-grid">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.id}
              className={`work-card ${p.videos.length ? 'work-card-playable' : ''}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={p.videos.length ? () => onSelectProject(p) : undefined}
            >
              <img src={p.img} alt={p.title} loading="lazy" />
              <div className="work-card-overlay">
                <span className="work-card-category">{p.category}</span>
                <div className="work-card-title-row">
                  <h3 className="work-card-title">{p.title}</h3>
                  {p.videos.length > 0 && (
                    <span className="work-arrow">
                      <Icon.arrow width={16} height={16} />
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
