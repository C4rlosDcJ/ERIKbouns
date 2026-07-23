import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          ERIK<span>bouns</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')}>INICIO</a>
          <a href="#sobre-mi" onClick={(e) => handleNavClick(e, 'sobre-mi')}>SOBRE MI</a>
          
          <div className="navbar-mobile-dropdown">
            <a href="#youtube" onClick={(e) => handleNavClick(e, 'youtube')}>YOUTUBE</a>
            <div className="navbar-sublinks">
              <a href="#marcas" onClick={(e) => handleNavClick(e, 'marcas')}>- Colaboraciones</a>
              <a href="#marcas" onClick={(e) => handleNavClick(e, 'marcas')}>- Menciones</a>
            </div>
          </div>

          <a href="#onefix" onClick={(e) => handleNavClick(e, 'onefix')}>ONEFIX</a>
          <a href="#donar" onClick={(e) => handleNavClick(e, 'donar')}>DONAR</a>
          <a href="#marcas" onClick={(e) => handleNavClick(e, 'marcas')}>MARCAS</a>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>CONTACTO</a>
          
          <a
            href="#contacto"
            className="navbar-cta mobile-cta"
            onClick={(e) => handleNavClick(e, 'contacto')}
          >
            NEGOCIOS
          </a>
        </div>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu de navegacion"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
