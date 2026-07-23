function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

export default function Donate() {
  return (
    <section className="section donate-section" id="donar">
      <div className="container">
        <div className="donate-card fade-in">
          <div className="donate-header">
            <span className="section-label">Apoya el Contenido</span>
            <h2 className="section-title">
              ¿Te apasiona la tecnologia?<br />
              <span className="accent">Ayudanos a seguir creando.</span>
            </h2>
            <p className="section-subtitle">
              Tus aportaciones nos permiten adquirir mas dispositivos para reviews, mejorar nuestro equipo de grabacion y edicion, y mantener el contenido independiente y de maxima calidad.
            </p>
          </div>

          <div className="donate-options">
            <div className="donate-option-card">
              <div className="donate-option-icon">
                <HeartIcon />
              </div>
              <h3>Patreon / Apoyo Mensual</h3>
              <p>Acceso anticipado a videos, menciones especiales y canal de Discord exclusivo.</p>
              <a href="https://www.youtube.com/@ERIKbouns" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Ser Patron
              </a>
            </div>

            <div className="donate-option-card highlighted">
              <div className="donate-option-icon">
                <StarIcon />
              </div>
              <h3>Super Thanks en YouTube</h3>
              <p>Apoya directamente en los videos que mas te hayan servido o gustado.</p>
              <a href="https://www.youtube.com/@ERIKbouns" target="_blank" rel="noopener noreferrer" className="btn-primary btn-glow">
                Ir a YouTube
              </a>
            </div>

            <div className="donate-option-card">
              <div className="donate-option-icon">
                <CreditCardIcon />
              </div>
              <h3>Donacion Directa</h3>
              <p>Contribucion directa para proyectos especiales de reparacion o reviews de hardware.</p>
              <a href="#contacto" className="btn-secondary">
                Contactar para Donacion
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
