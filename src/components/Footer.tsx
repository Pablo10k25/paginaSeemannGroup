import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {/* Menú */}
              <div className="col-md-2 mb-4">
                <h2 className="footer-heading mb-3">Menú</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/servicios">Servicios</Link>
                  </li>
                  <li>
                    <Link to="/nuestra-empresa#historia">Historia</Link>
                  </li>
                  <li>
                    <Link to="/#oficinas">Nuestras oficinas</Link>
                  </li>
                  <li>
                    <Link to="/nuevos-clientes">Clientes nuevos</Link>
                  </li>
                  <li>
                    <a href="https://seemanngroup.sistemaforward.com/" target="_blank" rel="noopener noreferrer">
                      Webtracking
                    </a>
                  </li>
                  <li>
                    <Link to="/cotizaciones">Cotizaciones</Link>
                  </li>
                  <li>
                    <Link to="/#herramientas">Conversiones</Link>
                  </li>
                  <li>
                    <Link to="/network">Network</Link>
                  </li>
                  <li>
                    <Link to="/#contacto">Contacto</Link>
                  </li>
                </ul>
              </div>

              {/* Oficinas Chile y Perú */}
              <div className="col-md-4 mb-4" style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>
                <h2 className="footer-heading mb-3">Nuestras oficinas</h2>
                
                {/* Viña del Mar */}
                <ul className="list-unstyled mb-4">
                  <h2 className="footer-heading mb-3">Seemann Group Chile - Viña del Mar</h2>
                  <li>
                    <i className="fas fa-map-marker-alt me-2"></i>
                    <span>Avenida Libertad #1405, of. 1203, Viña del Mar - Chile.</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:contacto@seemanngroup.com">contacto@seemanngroup.com</a>
                  </li>
                </ul>

                {/* Santiago */}
                <ul className="list-unstyled mb-4">
                  <h2 className="footer-heading mb-3">Seemann Group Chile - Santiago</h2>
                  <li>
                    <i className="fas fa-map-marker-alt me-2"></i>
                    <span>Avenida Providencia 1650, Oficina 1402, Providencia, Santiago, Chile.</span>
                  </li>
                  <li>
                    <i className="fas fa-phone me-2"></i>
                    <a href="tel:+56226048386">+56-226048386</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:contacto@seemanngroup.com">contacto@seemanngroup.com</a>
                  </li>
                </ul>

                {/* Aeropuerto */}
                <ul className="list-unstyled">
                  <h2 className="footer-heading mb-3">Seemann Group Chile - Aeropuerto</h2>
                  <li>
                    <i className="fas fa-map-marker-alt me-2"></i>
                    <span>Calle Osvaldo Croquievelle 2207, oficina 477, Edificio EOS, Aeropuerto Internacional Arturo Merino Benítez, Santiago – Chile.</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:contacto@seemanngroup.com">contacto@seemanngroup.com</a>
                  </li>
                </ul>
              </div>

              {/* Lima */}
              <div className="col-md-4 mb-4" style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>
                <h2 className="footer-heading mb-3"><br /></h2>
                <ul className="list-unstyled">
                  <h2 className="footer-heading mb-3">Seemann Group Lima – Perú</h2>
                  <li>
                    <i className="fas fa-map-marker-alt me-2"></i>
                    <span>Av Jorge Basadre 607. Oficina 313, San Isidro, Lima – Perú.</span>
                  </li>
                  <li>
                    <i className="fas fa-phone me-2"></i>
                    <a href="tel:+51965428674">+51-965428674</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:sales.lim@seemanngroup.com">sales.lim@seemanngroup.com</a>
                  </li>
                </ul>
              </div>

              {/* Horarios */}
              <div className="col-md-2 mb-4" style={{ fontFamily: 'Oswald, sans-serif', textTransform: 'uppercase' }}>
                <br />
                <div className="mb-3">
                  <ul className="list-unstyled">
                    <h2 className="footer-heading mb-3">Horarios</h2>
                    <li>Lunes - Viernes</li>
                    <li>
                      <i className="fas fa-clock me-2"></i>
                      08:00 AM - 18:00 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-12 text-center rrss mt-4">
            <a href="https://www.facebook.com/seemanngroup" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook" style={{ margin: '0 5px', color: 'white' }}></i>
            </a>
            <a href="https://www.instagram.com/seemann_group/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ margin: '0 5px', color: 'white' }}></i>
            </a>
            <a href="https://www.linkedin.com/company/seemanngroup/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" style={{ margin: '0 5px', color: 'white' }}></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row pt-2 mt-2 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p className="copyright">
                <small>
                  Copyright © {currentYear} Diseñado y Programado por KRAKEN&nbsp;
                  <a href="http://krakensoluciones.cl/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/logo-kraken1.png" alt="Kraken" style={{ height: '20px' }} />
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
