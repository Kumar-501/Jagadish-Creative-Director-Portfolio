import { useState } from 'react';
import { FILM_EXPERIENCES, INSTA_POSTERS } from '../../data/portfolioData';
import { Icon } from '../common/Icons';
import { Reveal } from '../common/Reveal';

interface FilmExposureProps {
  onPlayVideo: (title: string, embedUrl: string) => void;
  onOpenImage: (title: string, imgUrl: string, caption: string) => void;
}

export function FilmExposure({ onPlayVideo, onOpenImage }: FilmExposureProps) {
  const [galleryRevealed, setGalleryRevealed] = useState(false);

  return (
    <section id="film-exposure" className="film-exposure section-pad">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-heading">
            Film Set &amp; Acting Exposure
            <span className="underline-mark" />
          </h2>
          <p className="section-subtitle">
            Hands-on exposure across Tamil feature films, commercial movie sets, music album productions, and indie cinema.
            From live-action stunts to on-screen performance and camera direction.
          </p>
        </Reveal>

        <Reveal className="film-intro">
          <div className="film-intro-copy">
            <h3>ON-SET EXPERIENCE</h3>
            <p>
              My filmmaking journey has provided opportunities to work alongside industry professionals Lokesh Kanagaraj,
              Manikandan, and Anbariv Masters.
            </p>
            <p>
              These experiences offered valuable exposure to direction, performance, action choreography, visual storytelling,
              and on-set execution, shaping my approach to creative strategy, scripting, direction, and content production.
            </p>
          </div>

          <div className="film-intro-badge">
            <span>JV</span>
            <small>ON-SET<br />EXPERIENCE</small>
          </div>
        </Reveal>

        {/* Feature 01: LEO Climax Fight Sequence */}
        <Reveal variant="left" className="film-hero-feature">
          <div className="film-hero-feature-copy">
            <div className="film-feature-top">
              <span className="film-feature-number">01</span>
              <span className="film-feature-tag">FEATURE FILM EXPERIENCE • CLIMAX FIGHT</span>
            </div>

            <h3 className="film-feature-title">LEO</h3>
            <p className="film-feature-subtitle">Climax Fight Sequence Stunt &amp; Film Set Exposure</p>

            <p className="film-feature-text">
              Selected sequence from the intense climax fight of Lokesh Kanagaraj's blockbuster <em>LEO</em>.
              Gained high-adrenaline film set exposure, observing multi-camera setups, dust/fx staging, and high-impact action choreography.
            </p>

            <div className="film-feature-meta">
              <span className="film-meta-chip">Thalapathy Vijay</span>
              <span className="film-meta-chip">Action Set Exposure</span>
              <span className="film-meta-chip">Timestamp 00:51</span>
            </div>

            <button
              onClick={() => onPlayVideo('LEO - Climax Fight Sequence', 'https://www.youtube.com/embed/OcXGKpFSYkI?start=51&autoplay=1&rel=0')}
              className="gold-btn"
            >
              <Icon.play width={14} height={14} /> WATCH SCENE (00:51)
            </button>
          </div>

          <div className="film-video-wrapper">
            <div className="film-video-badge">SCENE / 00:51</div>
            <div className="film-video-container">
              <iframe
                src="https://www.youtube.com/embed/OcXGKpFSYkI?start=51&rel=0"
                title="LEO Climax Fight Sequence"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>

        {/* Grid of other Film / Acting experiences */}
        <div className="film-grid">
          {FILM_EXPERIENCES.map((item, idx) => (
            <Reveal
              key={item.id}
              variant={idx % 2 === 0 ? 'left' : 'right'}
              className="film-card"
            >
              <div className="film-card-thumb">
                <img src={item.thumbnail} alt={item.title} />
                <span className="film-card-number">{item.number}</span>
                <span className="film-card-timestamp">{item.timestampBadge}</span>
              </div>

              <div className="film-card-body">
                <span className="film-card-tag">{item.category}</span>
                <h3 className="film-card-title">{item.title}</h3>
                <p className="film-card-desc">{item.description}</p>

                <div className="film-card-actions">
                  <button
                    onClick={() => onPlayVideo(item.title, `${item.embedUrl}${item.embedUrl.includes('?') ? '&' : '?'}autoplay=1`)}
                    className="film-play-btn"
                  >
                    <Icon.play width={14} height={14} /> Play Scene
                  </button>

                  <a
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="film-direct-link"
                  >
                    Open YouTube <Icon.arrow width={12} height={12} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* INSTAGRAM POSTERS SECTION WITH CLICK-TO-REVEAL */}
        <Reveal className="insta-posters-section">
          <div className="insta-section-header">
            <div className="insta-header-copy">
              <h3>ON-SET EXPERIENCE</h3>
              <p>
                Worked as an artist in film productions, gaining firsthand exposure to professional film sets, including direction, camera execution, action choreography, actor coordination, and the overall filmmaking process.
              </p>
            </div>

            <div className="insta-header-badge">
              <span className="gold-btn" style={{ cursor: 'default' }}>
                <Icon.sparkles width={14} height={14} /> ACTING &amp; PRODUCTION EXPOSURE
              </span>
            </div>
          </div>

          {!galleryRevealed ? (
            <div
              className="insta-unrevealed insta-gallery-reveal"
              onClick={() => setGalleryRevealed(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setGalleryRevealed(true);
              }}
              aria-label="Reveal the film set experience images"
            >
              <div className="insta-shutter-glyph">
                <Icon.camera width={32} height={32} />
              </div>
              <h4 className="insta-reveal-title">Film Set Experience | Acting &amp; Production Exposure</h4>
              <p className="insta-reveal-subtitle">Tap to reveal the three photos</p>

              <button
                type="button"
                className="insta-reveal-cta"
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryRevealed(true);
                }}
              >
                <Icon.eye width={15} height={15} /> REVEAL PHOTOS
              </button>
            </div>
          ) : (
            <div className="insta-grid">
              {INSTA_POSTERS.map((post) => (
                <div key={post.id} className="insta-poster-card">
                  <div className="insta-revealed">
                    <div
                      className="insta-poster-image-wrap"
                      onClick={() => onOpenImage(post.title, post.posterImage, post.caption)}
                      title="Click to view full size"
                    >
                      <img
                        src={post.posterImage}
                        alt={post.title}
                        className="insta-poster-img"
                      />
                      <div className="insta-poster-overlay">
                        <div className="insta-badge-top">
                          <button
                            type="button"
                            className="insta-hide-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryRevealed(false);
                            }}
                          >
                            Hide
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="insta-poster-footer">
                      <a
                        href={post.postUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="insta-link-btn"
                      >
                        <Icon.instagram width={16} height={16} /> View on Instagram
                      </a>

                      <button
                        type="button"
                        className="insta-zoom-btn"
                        onClick={() => onOpenImage(post.title, post.posterImage, post.caption)}
                      >
                        <Icon.eye width={14} height={14} /> Full Poster
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        {/* CINEMA TO COMMERCE BANNER */}
        <Reveal className="film-cinema-banner">
          <div className="film-cinema-copy">
            <span className="film-cinema-kicker">CINEMA CRAFT × COMMERCIAL PERFORMANCE</span>
            <h3>Cinema taught me to think in frames. Marketing taught me to think in numbers.</h3>
            <p>
              I bring both together to create films people remember and campaigns that build measurable business revenue.
            </p>
          </div>

          <a href="#work" className="ghost-btn">
            EXPLORE WORK <Icon.arrow width={14} height={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
