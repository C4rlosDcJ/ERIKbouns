import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.png';

const TYPED_WORDS = ['calidad', 'experiencia', 'pasion', 'precision'];

function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(TYPED_WORDS);

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg-image" aria-hidden="true">
        <img src={heroBg} alt="" />
        <div className="hero-bg-overlay"></div>
      </div>
      <div className="hero-bg-gradient" aria-hidden="true"></div>
      <div className="hero-bg-grid" aria-hidden="true"></div>
      <div className="hero-scanline" aria-hidden="true"></div>

      <div className="container hero-content">
        <div className="hero-eyebrow fade-in">
          <span className="hero-eyebrow-dot"></span>
          Desde 2013 -- Tecnologia y Entretenimiento
        </div>

        <h1 className="hero-title fade-in fade-in-delay-1">
          Contenido tech<br />
          con <span className="accent">{typedText}<span className="cursor">|</span></span>
        </h1>

        <p className="hero-description fade-in fade-in-delay-2">
          Reviews, unboxings, tutoriales y noticias del mundo de la tecnologia 
          y la informatica. Produccion profesional respaldada por mas de 10 
          años de experiencia y el servicio tecnico de ONEFIX.
        </p>

        <div className="hero-actions fade-in fade-in-delay-3">
          <a
            href="https://www.youtube.com/@ERIKbouns"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-glow"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Ver Canal de YouTube
          </a>
          <a href="#contacto" className="btn-secondary">
            Contacto para Negocios
          </a>
        </div>

        <div className="hero-stats fade-in fade-in-delay-4">
          <div className="hero-stat">
            <div className="hero-stat-value">+10</div>
            <div className="hero-stat-label">Años de experiencia</div>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <div className="hero-stat-value">2013</div>
            <div className="hero-stat-label">Año de fundacion</div>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <div className="hero-stat-value">ONEFIX</div>
            <div className="hero-stat-label">Marca de reparacion</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator fade-in fade-in-delay-4">
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
