import { SERVICES } from '../../data/portfolioData';
import { Icon } from '../common/Icons';
import { Reveal } from '../common/Reveal';

export function WhatIDo() {
  return (
    <section id="what-i-do" className="section-pad">
      <div className="container">
        <Reveal className="section-head center">
          <h2 className="section-heading">
            What I Do
            <span className="underline-mark" />
          </h2>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} className="service-card" style={{ transitionDelay: `${i * 0.06}s` }}>
              {Icon[s.icon as keyof typeof Icon]({ className: 'service-icon' })}
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
