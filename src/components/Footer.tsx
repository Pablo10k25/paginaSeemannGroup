import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-wave-bg"></div>
      <div className="container">
        <div className="row py-5">
          
          {/* Logo y Descripción */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <img src="/images/logo1.png" alt="Seemann Group" className="footer-logo mb-3" />
              <p className="footer-description">
                {t('footer.description')}
              </p>
              
              <div className="footer-contact-info mt-4">
                <a href="mailto:contacto@seemanngroup.com" className="footer-contact-item">
                  <Mail size={18} />
                  <span>contacto@seemanngroup.com</span>
                </a>
                <a href="tel:+56226048386" className="footer-contact-item">
                  <Phone size={18} />
                  <span>+56 2 2604 8386</span>
                </a>
              </div>
            </div>
          </div>

          {/* Menú - Columna 1 */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-heading">{t('footer.menu')}</h4>
            <ul className="footer-links">
              <li><Link to="/servicios">{t('navbar.services')}</Link></li>
              <li><Link to="/nuestra-empresa">{t('navbar.history')}</Link></li>
              <li><Link to="/#oficinas-section">{t('navbar.offices')}</Link></li>
              <li><Link to="/nuevos-clientes">{t('navbar.newClients')}</Link></li>
            </ul>
          </div>

          {/* Menú - Columna 2 */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h4 className="footer-heading">{t('navbar.tools')}</h4>
            <ul className="footer-links">
              <li>
                <a href="https://seemanngroup.sistemaforward.com/" target="_blank" rel="noopener noreferrer">
                  Webtracking
                </a>
              </li>
              <li><Link to="/cotizaciones">{t('tools.quotations')}</Link></li>
              <li><Link to="/#herramientas">{t('tools.conversions')}</Link></li>
              <li><Link to="/network">{t('navbar.network')}</Link></li>
              <li><Link to="/#contacto">{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="footer-heading">{t('footer.getInTouch')}</h4>
            <ul className="footer-social-links">
              <li>
                <a href="https://www.facebook.com/seemanngroup" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-wrapper">
                    <Facebook size={16} />
                  </div>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/seemann_group/" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-wrapper">
                    <Instagram size={16} />
                  </div>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/seemanngroup/" target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-wrapper">
                    <Linkedin size={16} />
                  </div>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="footer-copyright mb-0">
                © {currentYear} {t('footer.copyright')}&nbsp;
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="footer-terms mb-0">
                <Link to="/terminos">{t('footer.terms')}</Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;