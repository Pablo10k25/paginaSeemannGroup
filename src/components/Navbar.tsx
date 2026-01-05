import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="float-end">
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
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar navbar-expand-lg site-navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand site-logo" to="/">
            <img src="/images/logo1.png" alt="Seemann Group Logo" />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto site-navigation">
              
              {/* Servicios */}
              <li className="nav-item">
                <Link className="nav-link" to="/servicios">
                  Servicios
                </Link>
              </li>

              {/* Nuestra Empresa - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nuestra empresa
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/nuestra-empresa#historia">
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/nuestra-empresa#fotografias">
                      Fotografías
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/#oficinas">
                      Nuestras oficinas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/network">
                      Network
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Herramientas - Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Herramientas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://seemanngroup.sistemaforward.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Webtracking
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cotizaciones">
                      Cotizaciones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/#herramientas">
                      Conversiones
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/#tarifario">
                      Tarifarios
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://myseemann.clickandcargo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tracking Click and Cargo
                    </a>
                  </li>
                </ul>
              </li>

              {/* Clientes Nuevos */}
              <li className="nav-item">
                <Link className="nav-link" to="/nuevos-clientes">
                  Clientes Nuevos
                </Link>
              </li>

              {/* Contacto */}
              <li className="nav-item">
                <Link className="nav-link" to="/#contacto">
                  Contacto
                </Link>
              </li>

              {/* Reclamos */}
              <li className="nav-item">
                <Link className="nav-link" to="/#reclamos">
                  Reclamos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
