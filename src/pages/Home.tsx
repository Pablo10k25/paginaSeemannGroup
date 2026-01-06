import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import LogoCarousel from '../components/LogoCarousel';
import HistoryTabs from '../components/HistoryTabs';
import AOS from 'aos';
import { 
  Plane,
  Ship,
  Truck,
  Warehouse,
  RefreshCw,
  Building2,
  Users,
  Mail
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      delay: 0
    });
  }, []);

  return (
    <div className="site-wrap" id="home-section">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Servicios Section con Flip Cards */}
      <div className="site-section bg-light" id="servicios-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="block-heading-1 mt-5" data-aos="fade-up" data-aos-delay="0">
                <span>{t('services.subtitle')}</span>
                <h2>{t('services.title')}</h2>
              </div>
            </div>
          </div>

          {/* Row 1: Cómo te ayudamos + 3 servicios */}
          <div className="row justify-content-center">
            {/* Card: Cómo te ayudamos */}
            <ServiceCard
              icon={<Users size={60} strokeWidth={1.5} />}
              title={t('services.howWeHelp.title')}
              subtitle={t('services.howWeHelp.subtitle')}
              description={t('services.howWeHelp.description')}
              details={[
                t('services.howWeHelp.detail1'),
                t('services.howWeHelp.detail2'),
                t('services.howWeHelp.detail3'),
                t('services.howWeHelp.detail4')
              ]}
              link="/servicios"
              variant="secondary"
            />

            {/* Card: Transporte Aéreo */}
            <ServiceCard
              icon={<Plane size={60} strokeWidth={1.5} />}
              title={t('services.air.title')}
              subtitle={t('services.air.subtitle')}
              description={t('services.air.description')}
              details={[
                t('services.air.detail1'),
                t('services.air.detail2'),
                t('services.air.detail3'),
                t('services.air.detail4'),
                t('services.air.detail5'),
                t('services.air.detail6')
              ]}
              link="/servicios#transporte-aereo"
            />

            {/* Card: Transporte Marítimo */}
            <ServiceCard
              icon={<Ship size={60} strokeWidth={1.5} />}
              title={t('services.sea.title')}
              subtitle={t('services.sea.subtitle')}
              description={t('services.sea.description')}
              details={[
                t('services.sea.detail1'),
                t('services.sea.detail2'),
                t('services.sea.detail3'),
                t('services.sea.detail4'),
                t('services.sea.detail5'),
                t('services.sea.detail6')
              ]}
              link="/servicios#transporte-maritimo"
            />

            {/* Card: Transporte Terrestre */}
            <ServiceCard
              icon={<Truck size={60} strokeWidth={1.5} />}
              title={t('services.land.title')}
              subtitle={t('services.land.subtitle')}
              description={t('services.land.description')}
              details={[
                t('services.land.detail1'),
                t('services.land.detail2'),
                t('services.land.detail3'),
                t('services.land.detail4'),
                t('services.land.detail5')
              ]}
              link="/servicios#transporte-terrestre"
            />
          </div>

          {/* Row 2: Contáctanos + 3 servicios */}
          <div className="row justify-content-center mt-4">
            {/* Card: Contáctanos */}
            <ServiceCard
              icon={<Mail size={60} strokeWidth={1.5} />}
              title={t('services.contact.title')}
              subtitle={t('services.contact.subtitle')}
              description={t('services.contact.description')}
              details={[
                t('services.contact.detail1'),
                t('services.contact.detail2'),
                t('services.contact.detail3'),
                t('services.contact.detail4')
              ]}
              link="#contacto"
              variant="secondary"
            />

            {/* Card: Warehouse */}
            <ServiceCard
              icon={<Warehouse size={60} strokeWidth={1.5} />}
              title={t('services.warehouse.title')}
              subtitle={t('services.warehouse.subtitle')}
              description={t('services.warehouse.description')}
              details={[
                t('services.warehouse.detail1'),
                t('services.warehouse.detail2'),
                t('services.warehouse.detail3'),
                t('services.warehouse.detail4')
              ]}
              link="/servicios#warehouse"
            />

            {/* Card: Servicio Multimodal */}
            <ServiceCard
              icon={<RefreshCw size={60} strokeWidth={1.5} />}
              title={t('services.multimodal.title')}
              subtitle={t('services.multimodal.subtitle')}
              description={t('services.multimodal.description')}
              details={[
                t('services.multimodal.detail1'),
                t('services.multimodal.detail2'),
                t('services.multimodal.detail3')
              ]}
              link="/servicios#servicio-multimodal"
            />

            {/* Card: Servicio de Aduanas */}
            <ServiceCard
              icon={<Building2 size={60} strokeWidth={1.5} />}
              title={t('services.customs.title')}
              subtitle={t('services.customs.subtitle')}
              description={t('services.customs.description')}
              details={[
                t('services.customs.detail1'),
                t('services.customs.detail2'),
                t('services.customs.detail3'),
                t('services.customs.detail4')
              ]}
              link="/servicios#servicio-aduanas"
            />
          </div>
        </div>
      </div>

      {/* Logo Carousel - Empresas Afiliadas */}
      <LogoCarousel />

      {/* Historia Section - Modern Cards */}
      <HistoryTabs />

      {/* Herramientas Section */}
      <div className="site-section" id="herramientas">
        <div className="container">
          <div className="row bg-light">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
              <div className="block-heading-1" data-aos="fade-right" data-aos-delay="0">
                <h2>{t('tools.title')}</h2>
                <h1 className="text-black">{t('tools.subtitle')}</h1>
              </div>
            </div>

            {/* Cotizaciones */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="0">
                  <h1 className="icon">
                    <i className="fas fa-dollar-sign"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/cotizaciones" className="text-black">
                      {t('tools.quotations')}
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <Link to="/cotizaciones" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      {t('tools.enterHere')}
                    </Link>
                  </p>
                </li>
              </ul>
            </div>

            {/* Conversiones */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="0">
                  <h1 className="icon">
                    <i className="fas fa-cog"></i>
                  </h1>
                  <h2 className="h4">
                    <a href="#herramientas" className="text-black">
                      {t('tools.conversions')}
                    </a>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#herramientas" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      {t('tools.enterHere')}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;