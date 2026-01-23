import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import StatsBar from '../components/StatsBar';
import TrackingSection from '../components/TrackingSection';
import ServicesPreviewGrid from '../components/ServicesPreviewGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import LogoCarousel from '../components/LogoCarousel';
import WhatsAppButton from '../components/WhatsAppButton';
import AOS from 'aos';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      delay: 0,
      once: true
    });
  }, []);

  return (
    <div className="site-wrap" id="home-section">
      {/* VERSIÓN ANTERIOR (Mejorada) - Para comparación */}
      <div className="hero-version-comparison">
        <div className="version-label text-center py-2 bg-dark text-white">
          <small>⬇️ VERSIÓN ANTERIOR (con mejoras) ⬇️</small>
        </div>
        <div className="hero-slider position-relative" style={{ minHeight: '600px', backgroundImage: 'url(/images/1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="overlay"></div>
          <div className="container h-100">
            <div className="row align-items-center h-100 justify-content-center text-center" style={{ minHeight: '600px' }}>
              <div className="col-md-12 col-lg-8">
                <h1 className="text-white mb-4" style={{ position: 'relative', zIndex: 3 }}>
                  {t('hero.welcome', 'Conectamos tu negocio con el mundo')}
                </h1>
                <p className="mb-5 hero-subtitle text-white" style={{ position: 'relative', zIndex: 3, fontSize: '1.25rem' }}>
                  35+ años moviendo más que carga: movemos confianza
                </p>
                <div className="hero-cta-group" style={{ position: 'relative', zIndex: 3 }}>
                  <Link to="/contacto">
                    <button className="btn btn-primary text-white btn-lg me-3 mb-3">
                      Solicitar Cotización
                    </button>
                  </Link>
                </div>
                <p className="text-white mt-3" style={{ position: 'relative', zIndex: 3, fontSize: '0.95rem' }}>
                  Si eres un cliente de Seemann, <a href="/portal-clientes" className="text-white fw-bold text-decoration-underline">entra al portal de Clientes para Cotizar Ahora</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="bg-primary text-white text-center py-3">
        <h5 className="mb-0">⬇️ NUEVA VERSIÓN (Con botones separados) ⬇️</h5>
      </div>

      {/* VERSIÓN NUEVA - Con 2 botones separados */}
      <div className="hero-slider position-relative" style={{ minHeight: '600px', backgroundImage: 'url(/images/1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row align-items-center h-100 justify-content-center text-center" style={{ minHeight: '600px' }}>
            <div className="col-md-12 col-lg-8">
              <h1 className="text-white mb-4" style={{ position: 'relative', zIndex: 3 }}>
                {t('hero.welcome', 'Conectamos tu negocio con el mundo')}
              </h1>
              <p className="mb-5 hero-subtitle text-white" style={{ position: 'relative', zIndex: 3, fontSize: '1.25rem' }}>
                35+ años moviendo más que carga: movemos confianza
              </p>
              <div className="hero-cta-group d-flex flex-column flex-md-row gap-3 justify-content-center" style={{ position: 'relative', zIndex: 3 }}>
                {/* Botón para NUEVOS clientes */}
                <Link to="/contacto">
                  <button className="btn btn-lg btn-light text-primary fw-bold px-4 py-3">
                    📋 Solicita tu Cotización
                    <div className="small mt-1">Para nuevos clientes</div>
                  </button>
                </Link>
                {/* Botón para clientes ACTUALES */}
                <a href="/portal-clientes" className="btn btn-lg btn-primary text-white fw-bold px-4 py-3">
                  🔐 Cotiza Ahora
                  <div className="small mt-1">Clientes con sesión activa</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Números que impresionan */}
      <StatsBar />

      {/* Tracking Section - Nueva */}
      <TrackingSection />

      {/* Servicios Section - Preview Grid Moderna */}
      <ServicesPreviewGrid />

      {/* Testimonials Section - Social Proof */}
      <TestimonialsSection />

      {/* Partners Carousel - Breve */}
      <LogoCarousel />

      {/* CTA Final - Llamado a la acción */}
      <motion.div
        className="cta-final-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container text-center py-5">
          <h2 className="mb-4">{t('cta.title', '¿Listo para optimizar tu logística?')}</h2>
          <p className="mb-4 fs-5">{t('cta.subtitle', 'Contáctanos y descubre cómo podemos ayudarte')}</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contacto">
              <motion.button
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cta.quote', 'Solicitar Cotización')}
              </motion.button>
            </Link>
            <motion.a
              href="/nuevos-clientes"
              className="btn btn-outline-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta.contact', 'Contáctanos')}
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* WhatsApp Button Flotante */}
      <WhatsAppButton />
      
    </div>
  );
};

export default Home;
