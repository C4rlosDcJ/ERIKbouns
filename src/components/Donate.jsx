function PayPalIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.007 8.03c.032-.083.056-.168.072-.257.487-2.73-.396-4.47-2.652-5.22C15.116 1.78 12.016 1.8 9.333 1.8H3.3c-.55 0-1 .45-1 1l-2 18.2c-.06.55.37 1 1 1h4.8l.9-8.1 1.7 1.5c1.6 1.4 3.7 1.8 5.7 1.2 3.6-.9 5.8-3.9 5.6-7.6zM8.333 11.8l.8-7.2h2.7c1.3 0 2.4.1 3.2.7.7.5 1.1 1.4.9 2.5-.3 2.1-1.9 3.9-3.9 4H8.333z" />
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
                <img src="/brands/paypal.png" alt="PayPal" style={{ height: '32px', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
              </div>
              <h3>Donación con PayPal</h3>
              <p>Con su donación contribuye a que este sitio se mantenga y entregue mejor contenido.</p>
              <a href="https://www.paypal.com/paypalme/erikbouns" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Donar con PayPal
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
