import { useState } from 'react';
import './App.css';

// Layout components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Section components
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { WhatIDo } from './components/sections/WhatIDo';
import { Experience } from './components/sections/Experience';
import { FilmExposure } from './components/sections/FilmExposure';
import { Skills } from './components/sections/Skills';
import { FeaturedWork } from './components/sections/FeaturedWork';
import { Contact } from './components/sections/Contact';

// Modal components
import { VideoModal } from './components/modals/VideoModal';
import { ImageModal } from './components/modals/ImageModal';

// Type definitions
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [standaloneVideo, setStandaloneVideo] = useState<{ title: string; embedUrl: string } | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ title: string; imgUrl: string; caption: string } | null>(null);

  const handlePlayStandaloneVideo = (title: string, embedUrl: string) => {
    setSelectedProject(null);
    setStandaloneVideo({ title, embedUrl });
  };

  const handleOpenImage = (title: string, imgUrl: string, caption: string) => {
    setLightboxImage({ title, imgUrl, caption });
  };

  return (
    <div className="app">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      
      {/* Film Set Experience & Acting Production Exposure */}
      <FilmExposure
        onPlayVideo={handlePlayStandaloneVideo}
        onOpenImage={handleOpenImage}
      />

      <Skills />
      
      {/* Featured Commercial & Film Work */}
      <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />

      <Contact />

      {/* Global Footer */}
      <Footer />

      {/* Video Popup Modal */}
      {(selectedProject || standaloneVideo) && (
        <VideoModal
          project={selectedProject}
          standaloneVideo={standaloneVideo}
          onClose={() => {
            setSelectedProject(null);
            setStandaloneVideo(null);
          }}
        />
      )}

      {/* Full Size Image & Poster Lightbox Modal */}
      {lightboxImage && (
        <ImageModal
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}
