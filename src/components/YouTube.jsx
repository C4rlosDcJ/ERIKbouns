import { useState, useRef, useEffect } from 'react';

const FEATURED_VIDEOS = [
  {
    id: 'cable-displayport',
    title: 'Este Cable Display Port Cambio la Calidad de Imagen',
    category: 'Review',
    views: '138 vistas',
    youtubeId: 'bRZ9ci5_Vig',
  },
  {
    id: 'pc-gamer-mercadolibre',
    title: 'PC Gamer - Accesorios Baratos Mercado Libre (Paneles 3D)',
    category: 'Accesorios',
    views: '132 vistas',
    youtubeId: 'WwFR05piCrQ',
  },
  {
    id: 'pc-gamer-aliexpress',
    title: 'PC Gamer - Accesorios Gamer Aliexpress',
    category: 'Gadgets',
    views: '557 vistas',
    youtubeId: 'z6Ai_lBAjPk',
  },
  {
    id: 'cooler-master-mf120',
    title: 'Cooler Master MF120 Halo - Ventilador Gamer Barato',
    category: 'Hardware',
    views: '1.2K vistas',
    youtubeId: 'O4AFk6IkCSw',
  },
  {
    id: 'peores-samsung',
    title: 'Peores Celulares de Samsung que debes conocer',
    category: 'Samsung',
    views: '2.1K vistas',
    youtubeId: 'p_VdOnMrXtA',
  },
  {
    id: 'celular-antiguo-vs-moderno',
    title: 'Celular Antiguo 2011 VS Celular Moderno 2024 / BlackBerry',
    category: 'Comparativa',
    views: '564 vistas',
    youtubeId: 'opsNaKLpr3Q',
  },
];


export default function YouTube() {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [videoViews, setVideoViews] = useState({});

  useEffect(() => {
    FEATURED_VIDEOS.forEach((video) => {
      const targetUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          const html = data.contents;
          // Look for interactionCount meta tag
          const match = html.match(/<meta itemprop="interactionCount" content="(\d+)">/);
          let rawCount = match ? match[1] : null;
          if (!rawCount) {
            const match2 = html.match(/"viewCount":"(\d+)"/);
            rawCount = match2 ? match2[1] : null;
          }
          if (rawCount) {
            const num = parseInt(rawCount, 10);
            let formatted = '';
            if (num >= 1000000) {
              formatted = `${(num / 1000000).toFixed(1)}M vistas`;
            } else if (num >= 1000) {
              formatted = `${(num / 1000).toFixed(1)}K vistas`;
            } else {
              formatted = `${num} vistas`;
            }
            setVideoViews((prev) => ({ ...prev, [video.id]: formatted }));
          }
        })
        .catch((error) => console.error('Error fetching views for', video.id, error));
    });
  }, []);


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
            {FEATURED_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-card carousel-card"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveVideoId(video.youtubeId);
                }}
              >
                <div className="youtube-card-thumb">
                  <img src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} alt={video.title} loading="lazy" />
                  <span className="youtube-card-badge">{video.category}</span>
                  <div className="youtube-card-play">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="youtube-card-body">
                  <h3 className="youtube-card-title">{video.title}</h3>
                  <p className="youtube-card-meta">ErikBouns -- {videoViews[video.id] || video.views}</p>
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

      {activeVideoId && (
        <div className="video-lightbox" onClick={() => setActiveVideoId(null)}>
          <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-lightbox-close" onClick={() => setActiveVideoId(null)} aria-label="Cerrar reproductor">
              &times;
            </button>
            <div className="video-lightbox-iframe-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
