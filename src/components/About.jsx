export default function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div>
              <span className="section-label fade-in">Sobre Mi</span>
              <h2 className="section-title fade-in fade-in-delay-1">
                Tecnologia con<br />perspectiva real.
              </h2>
            </div>

            <p className="about-text fade-in fade-in-delay-2">
              Soy ErikBouns, creador de contenido especializado en tecnologia, 
              informatica y entretenimiento desde 2013. Lo que empezo como un 
              proyecto personal se transformo en una plataforma de contenido de 
              alta calidad: reviews detallados, unboxings honestos, tutoriales 
              practicos y noticias del mundo tech.
            </p>

            <p className="about-text fade-in fade-in-delay-2">
              Con el paso de los años, mi pasion por la tecnologia me llevo a 
              reparar equipos, y de ahi nacio <strong>ONEFIX</strong> -- mi marca 
              dedicada a la reparacion tecnologica que respalda cada opinion 
              y recomendacion con años de experiencia real tocando hardware.
            </p>

            <div className="about-highlights fade-in fade-in-delay-3">
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
                  </svg>
                </div>
                <h4>Reviews y Unboxings</h4>
                <p>Analisis honestos y detallados de productos tecnologicos.</p>
              </div>
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/>
                  </svg>
                </div>
                <h4>Tutoriales</h4>
                <p>Guias paso a paso sobre informatica y tecnologia.</p>
              </div>
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5"/>
                  </svg>
                </div>
                <h4>Noticias Tech</h4>
                <p>Lo mas relevante del mundo tecnologico.</p>
              </div>
              <div className="about-highlight-item">
                <div className="about-highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11.42 15.17l-5.58-3.3A1.26 1.26 0 015.1 10.3l6.18-3.4a1.36 1.36 0 011.44 0l6.18 3.4a1.26 1.26 0 01-.74 2.3l-5.58 3.3a1.34 1.34 0 01-1.16-.03z"/>
                    <path d="M12 12v9"/>
                  </svg>
                </div>
                <h4>ONEFIX</h4>
                <p>Reparacion tecnologica profesional. Años de experiencia.</p>
              </div>
            </div>
          </div>

          <div className="about-visual fade-in fade-in-delay-2">
            <div className="about-visual-card">
              <div className="about-visual-inner">
                <div className="about-visual-logo">
                  <div className="about-visual-logo-text">
                    <span className="about-visual-logo-erik">ERIK</span>
                    <span className="about-visual-logo-bouns">bouns</span>
                  </div>
                  <div className="about-visual-logo-tagline">
                    Tech Content Creator
                  </div>
                  <div className="about-visual-logo-year">Est. 2013</div>
                </div>
              </div>

              <div className="about-visual-badge">
                <h4>Creador de Contenido</h4>
                <p>Tecnologia -- Informatica -- Entretenimiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
