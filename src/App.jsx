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

// Modal components
import { VideoModal } from './components/modals/VideoModal';
import { ImageModal } from './components/modals/ImageModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [standaloneVideo, setStandaloneVideo] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handlePlayStandaloneVideo = (title, embedUrl) => {
    setSelectedProject(null);
    setStandaloneVideo({ title, embedUrl });
  };

  const handleOpenImage = (title, imgUrl, caption) => {
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
