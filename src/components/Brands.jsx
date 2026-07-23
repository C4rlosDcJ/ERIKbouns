import { useState, useRef, useEffect } from 'react';

// Crisp Vector Brand Logos (Black/Color for White Container Backdrop)
function OppoVector() {
  return (
    <svg viewBox="0 0 160 40" width="110" height="28" fill="#008A46">
      <path d="M30 8C17.85 8 8 13.37 8 20s9.85 12 22 12 22-5.37 22-12S42.15 8 30 8zm0 18c-7.73 0-14-2.69-14-6s6.27-6 14-6 14 2.69 14 6-6.27 6-14 6zm100-18c-12.15 0-22 5.37-22 12s9.85 12 22 12 22-5.37 22-12-9.85-12-22-12zm0 18c-7.73 0-14-2.69-14-6s6.27-6 14-6 14 2.69 14 6-6.27 6-14 6zm-50-18c-12.15 0-22 5.37-22 12s9.85 12 22 12 22-5.37 22-12-9.85-12-22-12zm0 18c-7.73 0-14-2.69-14-6s6.27-6 14-6 14 2.69 14 6-6.27 6-14 6z" />
    </svg>
  );
}

function SamsungVector() {
  return (
    <svg viewBox="0 0 160 40" width="115" height="28">
      <text x="80" y="28" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="-0.5" fontFamily="sans-serif" fill="#1428A0">SAMSUNG</text>
    </svg>
  );
}

function XiaomiVector() {
  return (
    <svg viewBox="0 0 140 40" width="105" height="28">
      <rect x="5" y="5" width="30" height="30" rx="8" fill="#FF6900" />
      <path d="M14 13h4v14h-4V13zm7 0h7a3 3 0 0 1 3 3v11h-4V17h-2v10h-4V13z" fill="#FFFFFF" />
      <text x="88" y="27" fontSize="20" fontWeight="800" textAnchor="middle" letterSpacing="0" fontFamily="sans-serif" fill="#111111">Xiaomi</text>
    </svg>
  );
}

function HuaweiVector() {
  return (
    <svg viewBox="0 0 150 40" width="115" height="28">
      <g fill="#FF2E2E" transform="translate(10, 4) scale(0.8)">
        <path d="M15 2c.8 3.5 3 6.5 6 8.5-3 2-5.2 5-6 8.5-.8-3.5-3-6.5-6-8.5 3-2 5.2-5 6-8.5z" />
        <path d="M15 34c-.8-3.5-3-6.5-6-8.5 3-2 5.2-5 6-8.5.8 3.5 3 6.5 6 8.5-3 2-5.2 5-6 8.5z" />
        <path d="M2 18c3.5-.8 6.5-3 8.5-6 2 3 5 5.2 8.5 6-3.5.8-6.5 3-8.5 6-2-3-5-5.2-8.5-6z" />
        <path d="M28 18c-3.5-.8-6.5-3-8.5-6-2 3 5 5.2-8.5 6 3.5.8 6.5 3 8.5 6 2-3 5-5.2-8.5-6z" />
      </g>
      <text x="95" y="27" fontSize="18" fontWeight="800" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif" fill="#111111">HUAWEI</text>
    </svg>
  );
}

function AsusVector() {
  return (
    <svg viewBox="0 0 140 40" width="100" height="26">
      <text x="70" y="28" fontSize="24" fontWeight="900" textAnchor="middle" fontStyle="italic" letterSpacing="3" fontFamily="sans-serif" fill="#00539B">ASUS</text>
    </svg>
  );
}

function LogitechVector() {
  return (
    <svg viewBox="0 0 160 40" width="120" height="28">
      <circle cx="20" cy="20" r="14" fill="#00B8B0" />
      <path d="M16 14a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0v-6zm6 6a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0v-6z" fill="#FFFFFF" />
      <text x="95" y="27" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="0.5" fontFamily="sans-serif" fill="#111111">logitech</text>
    </svg>
  );
}

function TplinkVector() {
  return (
    <svg viewBox="0 0 150 40" width="115" height="28">
      <path d="M18 6A12 12 0 1 0 30 18 12 12 0 0 0 18 6zm-3 16h-3V13h3zm9 0h-3v-6h-3v-3h6z" fill="#00D2B8" />
      <text x="92" y="27" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="0" fontFamily="sans-serif" fill="#111111">tp-link</text>
    </svg>
  );
}

function KingstonVector() {
  return (
    <svg viewBox="0 0 150 40" width="120" height="28">
      <text x="75" y="27" fontSize="22" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="sans-serif" fill="#E51937">KINGSTON</text>
    </svg>
  );
}

const COLLABORATIONS = [
  { 
    id: 'oppo',
    name: 'OPPO', 
    type: 'Review / Comparativa', 
    desc: 'Analisis en profundidad de rendimiento de camaras y smartphones.',
    image: '/brands/oppo.png',
    Vector: OppoVector,
  },
  { 
    id: 'samsung',
    name: 'Samsung', 
    type: 'Review / Unboxing', 
    desc: 'Unboxing exclusivo de nuevos dispositivos de la serie Galaxy.',
    image: '/brands/samsung.png',
    Vector: SamsungVector,
  },
  { 
    id: 'xiaomi',
    name: 'Xiaomi', 
    type: 'Review / Tutorial', 
    desc: 'Tutoriales de configuracion y pruebas de rendimiento de ecosistema.',
    image: '/brands/xiaomi.png',
    Vector: XiaomiVector,
  },
  { 
    id: 'huawei',
    name: 'Huawei', 
    type: 'Mencion / Review', 
    desc: 'Menciones especiales y analisis de gadgets tecnologicos.',
    image: '/brands/huawei.png',
    Vector: HuaweiVector,
  },
];

const MENTIONS = [
  { 
    id: 'asus',
    name: 'ASUS', 
    type: 'Review', 
    desc: 'Evaluacion tecnica de laptops para creadores y componentes PC.',
    image: '/brands/asus.png',
    Vector: AsusVector,
  },
  { 
    id: 'logitech',
    name: 'Logitech', 
    type: 'Unboxing / Review', 
    desc: 'Pruebas de durabilidad y rendimiento en perifericos de alta gama.',
    image: '/brands/logitech.png',
    Vector: LogitechVector,
  },
  { 
    id: 'tplink',
    name: 'TP-Link', 
    type: 'Review / Tutorial', 
    desc: 'Guias de configuracion y optimizacion de redes domesticas.',
    image: '/brands/tplink.png',
    Vector: TplinkVector,
  },
  { 
    id: 'kingston',
    name: 'Kingston', 
    type: 'Review', 
    desc: 'Pruebas de velocidad en unidades de almacenamiento SSD y memorias.',
    image: '/brands/kingston.png',
    Vector: KingstonVector,
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
  const [activeTab, setActiveTab] = useState('colaboraciones');
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const items = activeTab === 'colaboraciones' ? COLLABORATIONS : MENTIONS;

  useEffect(() => {
    setActiveIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

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
            A lo largo de los años, hemos colaborado con firmas lideres en tecnologia para llevar analisis honestos y menciones de calidad a nuestra comunidad.
          </p>

          <div className="brands-tabs fade-in fade-in-delay-2">
            <button
              className={`tab-btn ${activeTab === 'colaboraciones' ? 'active' : ''}`}
              onClick={() => setActiveTab('colaboraciones')}
            >
              COLABORACIONES
            </button>
            <button
              className={`tab-btn ${activeTab === 'menciones' ? 'active' : ''}`}
              onClick={() => setActiveTab('menciones')}
            >
              MENCIONES
            </button>
          </div>
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
                <div 
                  key={brand.id} 
                  className={`brand-card carousel-brand-card ${index === activeIndex ? 'active-card' : ''}`}
                >
                  <div className="brand-logo-container">
                    <BrandLogo brand={brand} />
                  </div>
                  <h3 className="brand-card-name">{brand.name}</h3>
                  <p className="brand-card-desc">{brand.desc}</p>
                  <span className="brand-card-type">{brand.type}</span>
                </div>
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
