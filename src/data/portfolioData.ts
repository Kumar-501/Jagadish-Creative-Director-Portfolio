// Centralized data for Jagadish Vijay Portfolio

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'film-exposure', label: 'Film Set & Acting' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export const CONTACT_EMAIL_URL = 'https://mail.google.com/mail/?view=cm&fs=1&to=jagadishvijaysachin@gmail.com';

export const SOCIALS = [
  { key: 'linkedin', href: 'https://linkedin.com/in/jagadish-vijay-90a12a270', label: 'LinkedIn' },
  { key: 'instagram', href: 'https://www.instagram.com/jagadish__vijay/', label: 'Instagram' },
  { key: 'youtube', href: 'https://www.youtube.com/@ZenithStarPictures', label: 'YouTube' },
  { key: 'whatsapp', href: 'https://wa.me/916374602818', label: 'WhatsApp' },
  { key: 'mail', href: CONTACT_EMAIL_URL, label: 'Email' },
];

export const STATS = [
  { icon: 'briefcase', number: '6+', label: 'Years Experience' },
  { icon: 'bulb', number: '25+', label: 'Creative Projects' },
  { icon: 'clapper', number: '6+', label: 'Film & Album Sets' },
  { icon: 'rupee', number: '₹7.12L+', label: 'Revenue Generated' },
];

export const SERVICES = [
  { icon: 'clapper', title: 'Film Direction & Acting', text: 'Hands-on exposure in feature films, short films, and music videos as actor, director, and creative collaborator.' },
  { icon: 'megaphone', title: 'Commercial Advertising', text: 'Crafting high-retention commercial ads from concept, storyboard, and production to post-production.' },
  { icon: 'camera', title: 'Video & Film Production', text: 'Complete production workflow: cinematography, lighting design, DaVinci Resolve grading, and editing.' },
  { icon: 'chart', title: 'Performance Marketing', text: 'Data-driven Meta Ads and Google Ads campaigns that generated 260+ qualified leads and tangible ROI.' },
  { icon: 'robot', title: 'AI Creative Workflows', text: 'Leveraging cutting-edge AI tools for rapid moodboarding, storyboarding, script drafting, and visual assets.' },
  { icon: 'people', title: 'B2B & Brand Strategy', text: 'Strategic brand positioning, influencer tie-ups, channel partner dealer development, and lead conversion.' },
];

export const EXPERIENCE = [
  {
    date: '2025 – Present',
    role: 'Marketing Manager & Creative Lead',
    company: 'Enzolt Energy Pvt. Ltd.',
    points: [
      'Engineered and executed paid advertising strategy across Meta Ads and Google Ads, driving target lead acquisition.',
      'Conceptualized, scripted, and edited commercial ad films using DaVinci Resolve; directed product shoots on location.',
      'Developed AI-assisted storyboards to streamline production workflows for visual campaigns and commercial shoots.',
      'Generated qualified B2B leads via IndiaMART and coordinated influencer collaborations with measurable ROI.',
      'Managed channel partner relationships (dealers, distributors, retailers) and spearheaded business development.',
    ],
  },
  {
    date: '2023 – 2025',
    role: 'Marketing Executive & Content Strategist',
    company: 'STG Groups',
    points: [
      'Spearheaded marketing initiatives and business development for heavy construction equipment.',
      'Managed B2B client communications, CRM pipelines, content creation, and promotional video editing.',
    ],
  },
  {
    date: '2022 – 2023',
    role: 'Creative Contributor & Film Set Production',
    company: 'Film Industry (Feature Films, Short Films & Music Videos)',
    points: [
      'Contributed as an actor, artist, and creative developer across major Tamil feature films, short films, and music videos.',
      'Gained deep practical expertise on active sets: camera composition, stunt coordination, pacing, ad production, and screenwriting.',
    ],
  },
  {
    date: '2020 – 2022',
    role: 'Marketing Executive',
    company: 'DCS Motor (Royal Enfield Dealership)',
    points: [
      'Managed retail sales and marketing for riding gear and accessories, driving customer engagement and on-ground activations.',
    ],
  },
];

export const PERF_STATS = [
  { value: '₹17,000', label: 'Ad Spend' },
  { value: '263', label: 'Leads' },
  { value: '20', label: 'Conversions' },
  { value: '32', label: 'Units Sold' },
  { value: '₹7,12,000', label: 'Revenue' },
];

export const PERF_FOOTER = [
  { value: '₹64.64', label: 'CPL' },
  { value: '₹850', label: 'CPA' },
  { value: '7.60%', label: 'CVR' },
];

export interface FilmProject {
  id: string;
  number: string;
  title: string;
  category: string;
  timestampBadge: string;
  description: string;
  youtubeUrl: string;
  embedUrl: string;
  thumbnail: string;
  roleTag: string;
}

export const FILM_EXPERIENCES: FilmProject[] = [
  {
    id: 'leo',
    number: '01',
    title: 'LEO',
    category: 'Tamil Feature Film • Film Set Exposure',
    timestampBadge: 'Scene / 00:51',
    description:
      "Selected sequence from the intense climax fight of Lokesh Kanagaraj's blockbuster LEO. Gained high-adrenaline film set exposure, observing multi-camera setups, dust/fx staging, and high-impact action choreography.",
    youtubeUrl: 'https://youtu.be/OcXGKpFSYkI?t=51',
    embedUrl: 'https://www.youtube.com/embed/OcXGKpFSYkI?start=51&rel=0',
    thumbnail: 'https://img.youtube.com/vi/OcXGKpFSYkI/hqdefault.jpg',
    roleTag: 'Climax Fight Sequence',
  },
  {
    id: 'singapore-saloon',
    number: '02',
    title: 'Singapore Saloon',
    category: 'Tamil Feature Film • Acting Exposure',
    timestampBadge: 'Scene / 52:32',
    description:
      'Acting exposure and film set experience in RJ Balaji\'s Tamil feature film Singapore Saloon. Experience on a major theatrical set with ensemble cast and live production blocking.',
    youtubeUrl: 'https://youtu.be/lkq10uvDVsw?si=xgKNxpSTU3rzwbiu&t=3152',
    embedUrl: 'https://www.youtube.com/embed/lkq10uvDVsw?start=3152&rel=0',
    thumbnail: '/images/Singapore%20Salon_%20Birds,%20City%20and%20Legends.png',
    roleTag: 'Feature Film Acting',
  },
{
  id: 'nee-mattum-podhum',
  number: '03',
  title: 'Nee Mattum Podhum',
  category: 'Tamil Album Song • Actor',
  timestampBadge: 'Scene / 01:54',
  description:
    'Acted in this Tamil album song, gaining valuable on-screen acting experience and learning cinematic performance techniques, expressions, and scene execution under the director’s guidance.',
  youtubeUrl: 'https://youtu.be/o0ivuwuHEWE?si=Hai33UewsWTL-U7o&t=114',
  embedUrl: 'https://www.youtube.com/embed/o0ivuwuHEWE?start=114&rel=0',
  thumbnail: '/images/krithikanelson.png',
  roleTag: 'Actor',
},
{
  id: 'WURAN POLLUTION | AWARD WINNING SHORT FILM | MADHAN RAJ | SILENT FILM | ENVIRONMENTAL POLLUTION | 4K',
  number: '04',
  title: 'WURAN POLLUTION | AWARD WINNING SHORT FILM | MADHAN RAJ | SILENT FILM | ENVIRONMENTAL POLLUTION | 4K',
  category: 'Tamil Short Film • Actor',
  timestampBadge: 'Award-Winning Silent Film',
  description:
    'Played the lead role in this award-winning Tamil silent short film, portraying the devastating impact of environmental pollution through powerful expressions, compelling body language, and impactful visual storytelling without dialogue.',
  youtubeUrl: 'https://youtu.be/DW6F54UfvzY?si=GT49DCE85GJjdLV3',
  embedUrl: 'https://www.youtube.com/embed/DW6F54UfvzY?rel=0',
  thumbnail: '/images/awardwiinningshortfilm.png',
  roleTag: 'Lead Actor',
},
];

export interface InstagramPoster {
  id: string;
  title: string;
  category: string;
  postUrl: string;
  posterImage: string;
  caption: string;
  badge: string;
}

export const INSTA_POSTERS: InstagramPoster[] = [
  {
    id: 'insta-1',
    title: 'Film Set Experience | Acting & Production Exposure',
    category: 'Instagram Exclusive • Official Poster',
    postUrl: 'https://www.instagram.com/p/CsoNEDLv8gG/?stkn=MWVrdTdjNjZvN2Jtdw==',
    posterImage: '/images/instareveal1.png',
    caption: 'Worked as an artist in film productions, gaining firsthand exposure to professional film sets, including direction, camera execution, action choreography, actor coordination, and the overall filmmaking process.',
    badge: '',
  },
  {
    id: 'insta-2',
    title: 'Film Set Experience | Acting & Production Exposure',
    category: 'Instagram Reel • Production Still',
    postUrl: 'https://www.instagram.com/reel/Cy6cl_av0ZO/?stkn=YXZoYTR0eGhheHJ2',
    posterImage: '/images/instareveal2.png',
    caption: 'Worked as an artist in film productions, gaining firsthand exposure to professional film sets, including direction, camera execution, action choreography, actor coordination, and the overall filmmaking process.',
    badge: 'PRODUCTION REEL',
  },
  {
    id: 'insta-3',
    title: 'Film Set Experience | Acting & Production Exposure',
    category: 'Instagram Exclusive • Character Poster',
    postUrl: 'https://www.instagram.com/jagadish__vijay/',
    posterImage: '/images/instareveal3.png',
    caption: 'Worked as an artist in film productions, gaining firsthand exposure to professional film sets, including direction, camera execution, action choreography, actor coordination, and the overall filmmaking process.',
    badge: 'CHARACTER REVEAL',
  },
];

export const SKILLS = [
  {
    title: 'Creative & Film',
    items: ['Screen Acting & Performance', 'Ad Scriptwriting & Hooking', 'Storyboarding & Blocking', 'Photography / Videography', 'DaVinci Resolve & Grading'],
  },
  {
    title: 'Digital Marketing',
    items: ['Meta & Google Ads Strategy', 'Google Analytics & Tracking', 'Influencer Collab Management', 'Social Media Organic Growth', 'IndiaMART B2B Lead Gen', 'SEO & Copywriting'],
  },
  {
    title: 'Business & Sales',
    items: ['B2B / B2C Sales Conversion', 'Dealer Network Development', 'Distributor Relationship Mgmt', 'High-Ticket CRM Followups', 'Cross-Functional Leadership'],
  },
  {
    title: 'AI & Production Tools',
    items: ['ChatGPT, Claude & Gemini AI Workflows', 'Canva & Other AI Workflows', 'Midjourney / AI Moodboards', 'Film Rigging & Gimbal Ops', 'Premiere Pro & DaVinci'],
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  img: string;
  videos: { id: string; title: string; url?: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'enzolt',
    title: 'Enzolt Energy Commercial Campaign',
    category: 'Commercial Advertisement',
    img: '/images/enzoltthumbnail.jpeg',
    videos: [
      { id: 'Xhws3rqOK34', title: 'Video 01 - Product Overview' },
      { id: '8cQqXlbRBV4', title: 'Video 02 - From Fear to Relief' }
    ]
  },
  {
    id: 'oxytocin',
    title: 'Oxytocin',
    category: 'Short Film',
    img: '/images/oxytocin-feature.png',
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
    img: '/images/ranakalam.png',
    videos: [
      {
        id: 'ranakalam',
        title: 'Ranakalam Short Film',
        url: '/images/Ranakalam.mp4',
      },
    ],
  },
  {
    id: 'kadhal-ondrey-podhum',
    title: 'Kadhal Ondrey Podhum',
    category: 'Music Video',
    img: '/images/kadhal-ondrey-podhum.png',
    videos: [
      {
        id: 'NRSzsukdtCI',
        title: 'Kadhal Ondrey Podhum',
        url: 'https://youtu.be/NRSzsukdtCI?si=loJKw4re8GkL-BCC',
      },
    ],
  },
];
