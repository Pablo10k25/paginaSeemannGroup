import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

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

              {/* Nuestra Empresa - Dropdown con 4 opciones */}
              <li 
                className={`nav-item dropdown ${openDropdown === 'empresa' ? 'show' : ''}`}
                onMouseEnter={() => setOpenDropdown('empresa')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('empresa');
                  }}
                  aria-expanded={openDropdown === 'empresa'}
                >
                  Nuestra empresa
                </a>
                <ul className={`dropdown-menu ${openDropdown === 'empresa' ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="/nuestra-empresa">
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Fotografías
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Nuestras Oficinas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Network
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Herramientas - Dropdown con 5 opciones */}
              <li 
                className={`nav-item dropdown ${openDropdown === 'herramientas' ? 'show' : ''}`}
                onMouseEnter={() => setOpenDropdown('herramientas')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('herramientas');
                  }}
                  aria-expanded={openDropdown === 'herramientas'}
                >
                  Herramientas
                </a>
                <ul className={`dropdown-menu ${openDropdown === 'herramientas' ? 'show' : ''}`}>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Opción 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Opción 2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Opción 3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Opción 4
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Opción 5
                    </Link>
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

              <li className="nav-item">
                <a 
                  className="nav-link btn btn-primary text-white fw-semibold border border-2 border-dark rounded ms-lg-2 mt-2 mt-lg-0" 
                  href="https://portalclientes.seemanngroup.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-user-circle me-2"></i>
                  Portal Clientes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;