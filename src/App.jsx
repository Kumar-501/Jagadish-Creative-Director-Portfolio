import { useEffect, useRef, useState } from 'react';
import homeImg from './assets/home.png';
import aboutImg from './about.png';
import enzoltAdImg from './assets/enzoltad.png';
import kadhalImg from './assets/kadhalondrepodhum.png';
import ranakalamImg from './assets/ranakalam.png';
import ranakalamVideo from './assets/Ranakalam.mp4';
import oxytocinImg from './assets/oxytocin.png';
import './App.css';

/* ---------------------------------------------------------- */
/* ICONS (inline SVG, no external icon library)                */
/* ---------------------------------------------------------- */
const Icon = {
  linkedin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v6.5M7.5 7.2v.03M12 16.5v-4a2.3 2.3 0 0 1 4.6 0v4M12 12.4v4.1" />
    </svg>
  ),
  instagram: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.7 15 12l-4.5 2.3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 8 6.4 8-6.4" />
    </svg>
  ),
  behance: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M3 6.5h5.3c2.6 0 3.9 1.1 3.9 2.9 0 1.3-.7 2.1-1.9 2.5 1.5.4 2.3 1.4 2.3 3 0 2.1-1.6 3.2-4.2 3.2H3z" />
      <path d="M3 11.5h4.9M15.3 9.6h6M15 14.2c0-2.2 1.6-3.6 3.7-3.6 2.3 0 3.6 1.5 3.6 4v.5h-6.4c.1 1.5 1 2.4 2.6 2.4 1.1 0 1.9-.4 2.3-1.2" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  download: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 18v1.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V18" />
    </svg>
  ),
  clapper: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M3 9.5 4.4 4h13.4L20 9.5M3 9.5V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5H3Z" />
      <path d="m6 4 2 5.5M10.3 4l2 5.5M14.6 4l2 5.5" />
    </svg>
  ),
  megaphone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1Z" />
      <path d="M17.5 8.5a5 5 0 0 1 0 7" />
    </svg>
  ),
  camera: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.3" />
    </svg>
  ),
  chart: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  robot: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="5" y="8" width="14" height="11" rx="2.5" />
      <path d="M12 4.5v3.5M9 13v1.5M15 13v1.5" strokeLinecap="round" />
      <circle cx="12" cy="3.2" r="1.1" />
      <path d="M2.5 12h2.5M19 12h2.5" />
    </svg>
  ),
  briefcase: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </svg>
  ),
  bulb: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  people: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19c.6-3.2 3-5 6.5-5s5.9 1.8 6.5 5" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.8 14.3c2.7.3 4.6 1.9 5.1 4.7" />
    </svg>
  ),
  rupee: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M6 4h12M6 8h12M6 4c4.5 0 7.5 1.6 7.5 4.5S14.5 13 10 13H6l8 7" />
    </svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M6.5 3h2.7l1.3 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.3v2.7a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  close: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
};

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
];

const SOCIALS = [
  { key: 'linkedin', href: 'https://linkedin.com/in/jagadish-vijay-90a12a270', label: 'LinkedIn' },
  { key: 'instagram', href: 'https://www.instagram.com/jagadish__vijay/', label: 'Instagram' },
  { key: 'youtube', href: 'https://www.youtube.com/@ZenithStarPictures', label: 'YouTube' },
  { key: 'mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jagadishvijaysachin@gmail.com', label: 'Email' },
];

/* ---------------------------------------------------------- */
/* Reveal-on-scroll hook helper                                */
/* ---------------------------------------------------------- */
function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function Reveal({ as: Tag = 'div', variant = '', className = '', children, ...rest }) {
  const [ref, inView] = useReveal();
  const variantClass = variant ? `reveal-${variant}` : 'reveal';
  return (
    <Tag ref={ref} className={`${variantClass} ${inView ? 'in-view' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

function onImgError(e) {
  e.currentTarget.style.opacity = '0';
}

/* ---------------------------------------------------------- */
/* NAVBAR                                                       */
/* ---------------------------------------------------------- */
function Navbar() {
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
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="nav-logo" onClick={handleNavClick}>
            <img src="/jagadishlogo.png" alt="Jagadish Vijay" className="nav-logo-mark" onError={onImgError} />
            <span className="nav-logo-text">Jagadish Vijay</span>
          </a>

          <nav>
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={active === item.id ? 'active' : ''}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="gold-btn nav-cta">
            <strong>LET'S CONNECT</strong> <Icon.arrow width={18} height={18} />
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
          <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'active' : ''} onClick={handleNavClick}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="gold-btn" onClick={handleNavClick}>
          Let's Work Together <Icon.arrow width={14} height={14} />
        </a>
      </div>
    </>
  );
}

/* ---------------------------------------------------------- */
/* HERO                                                          */
/* ---------------------------------------------------------- */
function Hero() {
  const roles = [
    'CREATIVE MARKETING STRATEGIST',
    'CREATIVE DIRECTOR',
    'BRAND STORYTELLER',
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
            I create commercial campaigns, cinematic advertisements, and brand experiences that combine creativity,
            storytelling, AI workflows, and performance marketing to drive measurable business growth.
          </p>

          <div className="hero-actions">
            <a href="#work" className="gold-btn">
              VIEW MY WORK <Icon.arrow width={14} height={14} />
            </a>

            <a
              href="/Jagadish_Vijay_Creative_Strategist_Resume.pdf"
              download="Jagadish_Vijay_Creative_Strategist_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              DOWNLOAD RESUME <Icon.download width={14} height={14} />
            </a>
          </div>

          <div className="hero-social">
            <span className="hero-social-label">FOLLOW ME</span>
            {SOCIALS.map((s) => (
              <a key={s.key} href={s.href} className="social-icon" aria-label={s.label} target="_blank" rel="noreferrer">
                {Icon[s.key]({ width: 14, height: 14 })}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-media-glow" />
          <div className="hero-media">
            <img src={homeImg} alt="Jagadish Vijay Workstation" className="hero-banner-img" onError={onImgError} />
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

/* ---------------------------------------------------------- */
/* ABOUT                                                         */
/* ---------------------------------------------------------- */
const STATS = [
  { icon: 'briefcase', number: '4+', label: 'Years Experience' },
  { icon: 'bulb', number: '100+', label: 'Creative Projects' },
  { icon: 'people', number: '263+', label: 'Qualified Leads' },
  { icon: 'rupee', number: '\u20b97.12L+', label: 'Revenue Generated' },
];

function About() {
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
              src={aboutImg}
              alt="Portrait of Jagadish Vijay"
              onError={onImgError}
            />
          </Reveal>

          <Reveal variant="right" className="about-card">
            <h3 className="about-card-heading">About Me</h3>
            <p className="about-card-text">
              Creative Marketing Professional with hands-on experience in creative strategy, commercial
              storytelling, digital advertising, content creation, AI-assisted workflows, and film
              direction. Proven track record of spearheading campaigns from concept development and
              storyboarding to performance execution. Combines strong business acumen with creative
              vision to deliver measurable ROI and brand growth.
            </p>
            <p className="about-signature">Jagadish Vijay</p>
          </Reveal>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat-card" style={{ transitionDelay: `${i * 0.08}s` }}>
              {Icon[s.icon]({ className: 'stat-icon' })}
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* WHAT I DO                                                     */
/* ---------------------------------------------------------- */
const SERVICES = [
  { icon: 'clapper', title: 'Creative Direction', text: 'Crafting powerful concepts and stories that connect brands with people.' },
  { icon: 'megaphone', title: 'Commercial Advertising', text: 'Creating impactful ads that drive attention, engagement, and results.' },
  { icon: 'camera', title: 'Video Production', text: 'End-to-end production from scripting and shooting to editing and grading.' },
  { icon: 'chart', title: 'Performance Marketing', text: 'Running data-driven campaigns that deliver qualified leads and business growth.' },
  { icon: 'robot', title: 'AI Creative Workflows', text: 'Leveraging AI tools to streamline creative production and ideation.' },
  { icon: 'camera', title: 'Photography', text: 'Product, commercial, and brand photography that tells your story visually.' },
];

function WhatIDo() {
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
              {Icon[s.icon]({ className: 'service-icon' })}
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* EXPERIENCE                                                    */
/* ---------------------------------------------------------- */
const EXPERIENCE = [
  {
    date: '2025 \u2013 Present',
    role: 'Marketing Manager',
    company: 'Enzolt Energy Pvt. Ltd.',
    points: [
      'Planned and executed paid advertising strategy across Meta Ads and Google Ads, driving target lead acquisition.',
      'Conceptualized, scripted, and edited commercial ad videos using DaVinci Resolve; managed product photoshoots.',
      'Developed AI-assisted storyboards to streamline production workflows for visual campaigns.',
      'Generated qualified B2B leads via IndiaMART and coordinated influencer marketing campaigns.',
      'Managed channel partner relationships (dealers, distributors, retailers) and led sales activities within the team.',
    ],
  },
  {
    date: '2023 \u2013 2025',
    role: 'Marketing Executive',
    company: 'STG Groups',
    points: [
      'Spearheaded marketing initiatives and business development for heavy construction equipment.',
      'Managed B2B client communications, CRM follow-ups, content creation, and promotional video editing.',
    ],
  },
  {
    date: '2022 \u2013 2023',
    role: 'Creative Contributor & Film Production',
    company: 'Film Industry',
    points: [
      'Contributed as an artist and creative developer across feature films, commercials, and music videos.',
      'Gained practical expertise in camera composition, movements, ad production, screenwriting, and creative editing.',
    ],
  },
  {
    date: '2020 \u2013 2022',
    role: 'Marketing Executive',
    company: 'DCS Motor (Royal Enfield Dealership)',
    points: [
      'Managed retail sales and marketing for riding gear and accessories, driving customer engagement and sales pitches.',
    ],
  },
];

const PERF_STATS = [
  { value: '\u20b917,000', label: 'Ad Spend' },
  { value: '263', label: 'Leads' },
  { value: '20', label: 'Conversions' },
  { value: '32', label: 'Units Sold' },
  { value: '\u20b97,12,000', label: 'Revenue' },
];

const PERF_FOOTER = [
  { value: '\u20b964.64', label: 'CPL' },
  { value: '\u20b9850', label: 'CPA' },
  { value: '7.60%', label: 'CVR' },
];

function Experience() {
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
            <p className="perf-card-heading">Campaign Performance</p>
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

/* ---------------------------------------------------------- */
/* SKILLS                                                        */
/* ---------------------------------------------------------- */
const SKILLS = [
  {
    title: 'Creative & Film',
    items: ['Ad Scriptwriting', 'Storytelling & Boarding', 'Concept Development', 'Photography / Videography', 'DaVinci Resolve & Grading'],
  },
  {
    title: 'Digital Marketing',
    items: ['Meta & Google Ads', 'Google Analytics', 'Influencer Marketing', 'Social Media Marketing', 'IndiaMART Lead Generation', 'SEO', 'Email Marketing'],
  },
  {
    title: 'Business & Sales',
    items: ['B2B / B2C Sales', 'Dealer Development', 'Distributor Management', 'Client Relationship Management', 'Team Leadership'],
  },
  {
    title: 'AI & Tools',
    items: ['ChatGPT', 'Gemini', 'Claude', 'Canva', 'AI Workflows'],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section-pad">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-heading">
            Skills
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

/* ---------------------------------------------------------- */
/* FEATURED WORK                                                 */
/* ---------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'enzolt',
    title: 'Enzolt Energy Commercial Campaign',
    category: 'Commercial Advertisement',
    img: enzoltAdImg,
    videos: [
      { id: 'Xhws3rqOK34', title: 'Video 01 - Product Overview' },
      { id: '8cQqXlbRBV4', title: 'Video 02 - From Fear to Relief' }
    ]
  },
  {
    id: 'oxytocin',
    title: 'Oxytocin',
    category: 'Short Film',
    img: oxytocinImg,
    videos: [
      {
        id: 'yKH4PFK6oio',
        title: 'Official Short Film',
        url: 'https://youtu.be/yKH4PFK6oio?si=0wc2Bpibe2UlBslE'
      }
    ]
  },
  {
    id: 'ranakalam',
    title: 'Ranakalam',
    category: 'Short Film',
    img: ranakalamImg,
    videos: [
      {
        id: 'ranakalam-local',
        title: 'Official Short Film',
        src: ranakalamVideo
      }
    ]
  },
  {
    id: 'kadhal',
    title: 'Kadhal Ondrey Podhum',
    category: 'Music Video',
    img: kadhalImg,
    videos: [
      { id: 'NRSzsukdtCI', title: 'Official Music Video' }
    ]
  },
  {
    id: 'one-blink',
    title: 'One Blink Away',
    category: 'Short Film',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    videos: []
  },
];

function FeaturedWork({ onSelectProject }) {
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

        <div className="work-scroller">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              className="work-card"
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={() => onSelectProject(p)}
            >
              <img src={p.img} alt={p.title} onError={onImgError} loading="lazy" />
              <div className="work-card-overlay">
                <span className="work-card-category">{p.category}</span>
                <div className="work-card-title-row">
                  <h3 className="work-card-title">{p.title}</h3>
                  <span className="work-arrow">
                    <Icon.arrow width={16} height={16} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* VIDEO POPUP MODAL                                             */
/* ---------------------------------------------------------- */
function VideoModal({ project, onClose }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const currentVideo = project.videos && project.videos[activeVideoIndex];

  // Helper to validate video sources strictly
  const parseVideoSource = (video) => {
    if (!video) return { type: 'none', src: '' };
    const src = video.url || video.src || video.id || '';
    if (!src) return { type: 'none', src: '' };

    // Strict 11-character YouTube video ID extraction
    const ytMatch = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/);
    let ytId = null;

    if (ytMatch && ytMatch[1]) {
      ytId = ytMatch[1];
    } else if (/^[a-zA-Z0-9_-]{11}$/.test(src)) {
      ytId = src;
    }

    if (ytId) {
      return {
        type: 'youtube',
        src: `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`
      };
    }

    // Embed URL check with valid ID
    if (src.includes('youtube.com/embed/')) {
      const matchEmbed = src.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
      if (matchEmbed && matchEmbed[1]) {
        return {
          type: 'youtube',
          src: src.includes('autoplay=1') ? src : `${src}${src.includes('?') ? '&' : '?'}autoplay=1&rel=0`
        };
      }
    }

    // Check for direct video file extension or local video path
    const isVideoFile = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src) || src.startsWith('blob:') || src.startsWith('data:video/');
    if (isVideoFile) {
      return { type: 'video', src };
    }

    // Direct local/relative video path or non-YouTube URL
    if ((src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://')) && !src.includes('youtube.com') && !src.includes('youtu.be')) {
      return { type: 'video', src };
    }

    return { type: 'invalid', src: '' };
  };

  const videoSource = parseVideoSource(currentVideo);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <Icon.close width={20} height={20} />
        </button>

        <div className="modal-header">
          <span className="modal-category">{project.category}</span>
          <h3 className="modal-title">{project.title}</h3>
        </div>

        {project.videos && project.videos.length > 0 && videoSource.type !== 'none' && videoSource.type !== 'invalid' ? (
          <>
            {project.videos.length > 1 && (
              <div className="modal-video-tabs">
                {project.videos.map((vid, idx) => (
                  <button
                    key={vid.id || idx}
                    className={`video-tab-btn ${activeVideoIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveVideoIndex(idx)}
                  >
                    Video 0{idx + 1}
                  </button>
                ))}
              </div>
            )}

            <div className="modal-video-container">
              {videoSource.type === 'video' ? (
                <video
                  src={videoSource.src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  aria-label={`${project.title} - ${currentVideo?.title || 'Video'}`}
                />
              ) : (
                <iframe
                  src={videoSource.src}
                  title={`${project.title} - ${currentVideo?.title || 'Video'}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </>
        ) : (
          <div className="modal-no-video">
            <p>Video preview coming soon for this project!</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- */
/* CONTACT                                                       */
/* ---------------------------------------------------------- */
function Contact() {
  const rows = [
    { icon: 'phone', label: 'Phone', value: '+91 63746 02818' },
    { icon: 'mail', label: 'Email', value: 'jagadishvijaysachin@gmail.com' },
    { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/jagadish-vijay-90a12a270' },
    { icon: 'pin', label: 'Location', value: 'Tamil Nadu, India' },
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
              Have a project in mind or want to collaborate? Let's create something impactful.
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
                  <span className="contact-row-icon">{Icon[r.icon]({ width: 17, height: 17 })}</span>
                  <div>
                    <div className="contact-row-label">{r.label}</div>
                    <div className="contact-row-value">
                      {r.label === 'Email' ? (
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=jagadishvijaysachin@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {r.value}
                        </a>
                      ) : r.label === 'LinkedIn' ? (
                        <a
                          href="https://linkedin.com/in/jagadish-vijay-90a12a270"
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
                    {Icon[s.key]({ width: 15, height: 15 })}
                  </a>
                ))}
                <a href="https://behance.net" className="social-icon" aria-label="Behance" target="_blank" rel="noreferrer">
                  {Icon.behance({ width: 15, height: 15 })}
                </a>
              </div>
            </div>

            <div className="contact-quote-note">
              "The best brands don't sell products, they tell stories people remember."
              <span>&mdash; JV</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- */
/* FOOTER                                                        */
/* ---------------------------------------------------------- */
function Footer() {
  const footerServices = [
    'Creative Direction',
    'Commercial Advertising',
    'Video Production',
    'Performance Marketing',
    'AI Creative Workflows',
  ];

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo nav-logo" aria-label="Jagadish Vijay - Home">
              <img
                src="/jagadishlogo.png"
                alt="Jagadish Vijay"
                className="nav-logo-mark"
                onError={onImgError}
              />
              <span className="nav-logo-text">Jagadish Vijay</span>
            </a>

            <p className="footer-tagline">
              Creative marketing, cinematic storytelling, and performance-driven brand experiences
              built to make brands memorable.
            </p>

            <a href="#contact" className="footer-cta">
              <span>Let's Work Together</span>
              <Icon.arrow width={16} height={16} />
            </a>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Explore</h3>
            <nav className="footer-nav footer-nav-column" aria-label="Footer navigation">
              {NAV_ITEMS.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
              <a href="#what-i-do">What I Do</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Services</h3>
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
                  {Icon[s.key]({ width: 14, height: 14 })}
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
            Creative Marketing Strategist &bull; Creative Director &bull; Brand Storyteller
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------- */
/* APP                                                           */
/* ---------------------------------------------------------- */
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <Skills />
      <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />
      <Contact />
      <Footer />

      {selectedProject && (
        <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}