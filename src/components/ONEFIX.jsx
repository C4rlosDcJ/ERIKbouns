import onefixImg from '../assets/onefix-repair.png';

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="15" x2="23" y2="15" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="15" x2="4" y2="15" />
    </svg>
  );
}

const REPAIR_SERVICES = [
  {
    title: 'Diagnostico de Hardware',
    desc: 'Revision profesional profunda de componentes, placas base y circuitos de alimentacion.',
    Icon: BoltIcon,
  },
  {
    title: 'Reparacion a Nivel Componente',
    desc: 'Microsoldadura, reemplazo de chips, solucion de cortocircuitos y mantenimiento especializado.',
    Icon: WrenchIcon,
  },
  {
    title: 'Mantenimiento Preventivo',
    desc: 'Limpieza termica, reemplazo de pasta y pads de alto rendimiento para PCs, Laptops y Consolas.',
    Icon: ShieldIcon,
  },
  {
    title: 'Optimizacion de Sistemas',
    desc: 'Configuracion de BIOS, eliminacion de fallas de software y configuracion de alto rendimiento.',
    Icon: CpuIcon,
  },
];

export default function ONEFIX() {
  return (
    <section className="section onefix-section" id="onefix">
      <div className="container">
        <div className="onefix-grid">
          <div className="onefix-visual fade-in">
            <div className="onefix-image-wrapper">
              <img src={onefixImg} alt="ONEFIX Laboratorio de Reparacion" />
              <div className="onefix-image-overlay"></div>
              <div className="onefix-badge-floating">
                <span className="onefix-badge-title">ONEFIX</span>
                <span className="onefix-badge-subtitle">Servicio Tecnico Especializado</span>
              </div>
            </div>
          </div>

          <div className="onefix-content">
            <div>
              <span className="section-label fade-in">El Respaldo de la Experiencia</span>
              <h2 className="section-title fade-in fade-in-delay-1">
                ONEFIX:<br />Reparaciones con rigor tecnico.
              </h2>
              <p className="section-subtitle fade-in fade-in-delay-2">
                Nacido del aprendizaje continuo y la practica profesional desde 2013. ONEFIX es la marca de reparacion tecnologica que demuestra nuestra pasion por el hardware y la solucion de problemas reales.
              </p>
            </div>

            <div className="onefix-services-grid fade-in fade-in-delay-3">
              {REPAIR_SERVICES.map((service, index) => (
                <div key={index} className="onefix-service-card">
                  <div className="onefix-service-icon">
                    <service.Icon />
                  </div>
                  <h4 className="onefix-service-title">{service.title}</h4>
                  <p className="onefix-service-desc">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="onefix-actions fade-in fade-in-delay-4">
              <a href="#contacto" className="btn-primary btn-glow">
                Solicitar Cotizacion de Reparacion
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
