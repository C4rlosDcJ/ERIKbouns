import { useState, useRef } from 'react';
import thumbReview from '../assets/yt-review.png';
import thumbTutorial from '../assets/yt-tutorial.png';
import thumbGadgets from '../assets/yt-gadgets.png';

const FEATURED_VIDEOS = [
  {
    id: 'shorts-oppo',
    title: 'La camara de OPPO que nadie esperaba -- Comparativa real en condiciones extremas',
    category: 'Review',
    image: thumbReview,
    views: '12.5K vistas',
  },
  {
    id: 'tutorial-windows',
    title: 'Como optimizar Windows para maximo rendimiento sin perder estabilidad',
    category: 'Tutorial',
    image: thumbTutorial,
    views: '45.2K vistas',
  },
  {
    id: 'review-gadgets',
    title: 'Los mejores gadgets tecnologicos imprescindibles para tu escritorio',
    category: 'Unboxing',
    image: thumbGadgets,
    views: '28.9K vistas',
  },
  {
    id: 'config-movil',
    title: 'Trucos ocultos de configuracion para tu smartphone que deberias activar hoy',
    category: 'Tips',
    image: thumbReview,
    views: '18.4K vistas',
  },
  {
    id: 'noticias-tech',
    title: 'Noticias de tecnologia: Lo mas relevante de la semana sintetizado',
    category: 'Noticias',
    image: thumbTutorial,
    views: '15.1K vistas',
  },
  {
    id: 'unboxing-acc',
    title: 'Unboxing de accesorios tech: Evaluamos si realmente valen la pena',
    category: 'Unboxing',
    image: thumbGadgets,
    views: '32.0K vistas',
  },
];

export default function YouTube() {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    const newPos = direction === 'left' 
      ? Math.max(0, container.scrollLeft - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);
    
    container.scrollTo({
      left: newPos,
      behavior: 'smooth',
    });
    setScrollPosition(newPos);
  };

  return (
    <section className="section youtube-section" id="youtube">
      <div className="container">
        <div className="youtube-header">
          <div>
            <span className="section-label fade-in">Canal de YouTube</span>
            <h2 className="section-title fade-in fade-in-delay-1">
              Contenido que importa.
            </h2>
            <p className="section-subtitle fade-in fade-in-delay-2">
              Reviews honestos, unboxings detallados, tutoriales practicos y las 
              noticias mas relevantes. Desliza para explorar nuestro contenido.
            </p>
          </div>

          <div className="carousel-controls fade-in fade-in-delay-2">
            <button 
              className="carousel-btn" 
              onClick={() => handleScroll('left')}
              aria-label="Anterior"
            >
              ←
            </button>
            <button 
              className="carousel-btn" 
              onClick={() => handleScroll('right')}
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>

        <div className="youtube-carousel-wrapper fade-in fade-in-delay-3">
          <div className="youtube-carousel" ref={carouselRef}>
            {FEATURED_VIDEOS.map((video, index) => (
              <a
                key={video.id}
                href="https://www.youtube.com/@ERIKbouns"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-card carousel-card"
              >
                <div className="youtube-card-thumb">
                  <img src={video.image} alt={video.title} loading="lazy" />
                  <span className="youtube-card-badge">{video.category}</span>
                  <div className="youtube-card-play">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="youtube-card-body">
                  <h3 className="youtube-card-title">{video.title}</h3>
                  <p className="youtube-card-meta">ErikBouns -- {video.views}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="youtube-channel-cta fade-in">
          <a
            href="https://www.youtube.com/@ERIKbouns"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-glow"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Suscribete a @ERIKbouns
          </a>
        </div>
      </div>
    </section>
  );
}
