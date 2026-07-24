import { useState, useRef, useEffect } from 'react';

// Crisp Vector Brand Logos (Black/Color for White Container Backdrop)
function HaylouVector() {
  return (
    <svg viewBox="0 0 160 40" width="115" height="28">
      <text x="80" y="27" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif" fill="#FFFFFF">HAYLOU</text>
    </svg>
  );
}

function SilklandVector() {
  return (
    <svg viewBox="0 0 160 40" width="115" height="28">
      <text x="80" y="27" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="sans-serif" fill="#00C48C">SILKLAND</text>
    </svg>
  );
}

function FilwansVector() {
  return (
    <svg viewBox="0 0 160 40" width="115" height="28">
      <text x="80" y="27" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif" fill="#FF5E2A">FILWANS</text>
    </svg>
  );
}

function PlextoneVector() {
  return (
    <svg viewBox="0 0 160 40" width="115" height="28">
      <text x="80" y="27" fontSize="19" fontWeight="900" textAnchor="middle" letterSpacing="0.8" fontFamily="sans-serif" fill="#00FF66">PLEXTONE</text>
    </svg>
  );
}

const COLLABORATIONS = [
  { 
    id: 'haylou',
    name: 'Haylou', 
    type: 'Colaboracion / Envio', 
    desc: 'Analisis y pruebas de rendimiento de audifonos inalambricos y smartwatches.',
    image: '/brands/haylou.png',
    Vector: HaylouVector,
    url: 'https://haylou.info/es/',
  },
  { 
    id: 'silkland',
    name: 'Silkland', 
    type: 'Colaboracion / Envio', 
    desc: 'Evaluacion tecnica de cables de video de alta gama y accesorios de conectividad.',
    image: '/brands/silkland.png',
    Vector: SilklandVector,
    url: 'https://silklandtech.com/',
  },
  { 
    id: 'filwans',
    name: 'Filwans', 
    type: 'Colaboracion / Envio', 
    desc: 'Revisiones detalladas de wearables inteligentes y gadgets de ultima generacion.',
    image: '/brands/filwans.png',
    Vector: FilwansVector,
    url: 'https://www.filwans.com/',
  },
  { 
    id: 'plextone',
    name: 'Plextone', 
    type: 'Colaboracion / Envio', 
    desc: 'Reviews y pruebas de sonido en audifonos gaming especializados de baja latencia.',
    image: '/brands/plextone.png',
    Vector: PlextoneVector,
    url: 'https://www.plextone.com.cn/en',
  },
];

function BrandLogo({ brand }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError && brand.image) {
    return (
      <img
        src={brand.image}
        alt={`Logo ${brand.name}`}
        onError={() => setImgError(true)}
        className="brand-image-logo"
      />
    );
  }

  const VectorComponent = brand.Vector;
  return <VectorComponent />;
}

export default function Brands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const items = COLLABORATIONS;

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = container.scrollWidth / items.length;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
  };

  const handleCarouselScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.scrollWidth / items.length;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex >= 0 && newIndex < items.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="section brands-section" id="marcas">
      <div className="container">
        <div className="brands-header">
          <span className="section-label fade-in">Marcas & Alianzas</span>
          <h2 className="section-title fade-in fade-in-delay-1">
            Marcas que confian en nosotros.
          </h2>
          <p className="section-subtitle fade-in fade-in-delay-2">
            Hemos colaborado estrechamente con firmas lideres en tecnologia para evaluar productos, probar hardware y compartir analisis honestos con nuestra comunidad.
          </p>
        </div>

        <div className="brands-carousel-wrapper fade-in fade-in-delay-3">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => handleScroll('left')}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div 
            className="brands-carousel" 
            ref={carouselRef}
            onScroll={handleCarouselScroll}
          >
            {items.map((brand, index) => {
              return (
                <a
                  key={brand.id}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`brand-card carousel-brand-card ${index === activeIndex ? 'active-card' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div 
                    className="brand-logo-container"
                    style={(brand.id === 'haylou' || brand.id === 'plextone') ? { background: '#000000', borderColor: 'rgba(255,255,255,0.1)' } : {}}
                  >
                    <BrandLogo brand={brand} />
                  </div>
                  <h3 className="brand-card-name" style={{ color: 'var(--color-text)' }}>{brand.name}</h3>
                  <p className="brand-card-desc" style={{ color: 'var(--color-text-muted)' }}>{brand.desc}</p>
                  <span className="brand-card-type">{brand.type}</span>
                </a>
              );
            })}
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => handleScroll('right')}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>

        <div className="brands-carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Ir a tarjeta ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
