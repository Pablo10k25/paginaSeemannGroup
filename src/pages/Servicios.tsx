import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';

const Servicios = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      delay: 0
    });
  }, []);

  return (
    <div className="site-wrap">
      {/* Banner Hero */}
      <div 
        className="site-section-cover overlay inner-page bg-light" 
        style={{ backgroundImage: "url('/images/logo2.jpg')" }}
        data-aos="fade"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <div className="box-shadow-content">
                <div className="block-heading-1">
                  <span 
                    className="d-block mb-3 text-white" 
                    data-aos="fade-up"
                    dangerouslySetInnerHTML={{ __html: t('servicesPage.banner.subtitle') }}
                  >
                  </span>
                  <h1 className="mb-4" data-aos="fade-up" data-aos-delay="100">
                    {t('servicesPage.banner.title')}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Servicios */}
      <div className="site-section" id="servicios-section">
        <div className="block__73694 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                  <span></span>
                  <h2>{t('servicesPage.intro.title')}</h2>
                </div>
              </div>
            </div>

            <div className="row d-flex no-gutters align-items-stretch bg-light">
              <div 
                className="col-12 col-lg-6 block__73422" 
                style={{ 
                  backgroundImage: "url('/images/1202.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px'
                }} 
                data-aos="fade-right" 
                data-aos-delay=""
              ></div>

              <div className="col-lg-6 ms-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="">
                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.intro.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios Detallados */}
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5" id="transporte-aereo">
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                  <span>{t('servicesPage.moreAbout.subtitle')}</span>
                  <h2>{t('servicesPage.moreAbout.title')}</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Transporte Aéreo */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="">
                <h2><a style={{ color: '#ce4747' }}>{t('servicesPage.airTransport.title')}</a></h2>
                <br />
                <img src="/images/1203.jpg" alt={t('servicesPage.airTransport.title')} className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.airTransport.p1')}
                </p>

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.airTransport.p2')}
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.servicesIntro')}</p>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service1')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service2')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service3')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service4')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service5')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service6')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service7')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.airTransport.service8')}</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    {t('services.contactUs')}
                  </Link>
                </p>
              </div>

              {/* Transporte Marítimo */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="100">
                <h2><a style={{ color: '#ce4747' }}>{t('servicesPage.seaTransport.title')}</a></h2>
                <br />
                <img src="/images/1204.jpg" alt={t('servicesPage.seaTransport.title')} className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.seaTransport.p1')}
                </p>

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.seaTransport.p2')}
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.servicesIntro')}</p>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.service1')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.service2')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.service3')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.service4')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.service5')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.seaTransport.service6')}</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    {t('services.contactUs')}
                  </Link>
                </p>
              </div>

              {/* Transporte Terrestre */}
              <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="">
                <h2><a style={{ color: '#ce4747' }}>{t('servicesPage.landTransport.title')}</a></h2>
                <br />
                <img src="/images/1205.jpg" alt={t('servicesPage.landTransport.title')} className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.landTransport.p1')}
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>{t('servicesPage.landTransport.servicesIntro')}</p>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.landTransport.service1')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.landTransport.service2')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.landTransport.service3')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.landTransport.service4')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.landTransport.service5')}</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    {t('services.contactUs')}
                  </Link>
                </p>
              </div>

              {/* Warehouse */}
              <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <h2><a style={{ color: '#ce4747' }}>{t('servicesPage.warehouse.title')}</a></h2>
                <br />
                <img src="/images/1206.jpg" alt={t('servicesPage.warehouse.title')} className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.warehouse.p1')}
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>{t('servicesPage.warehouse.servicesIntro')}</p>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.warehouse.service1')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.warehouse.service2')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.warehouse.service3')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.warehouse.service4')}</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    {t('services.contactUs')}
                  </Link>
                </p>
              </div>

              {/* Servicio Multimodal */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="100">
                <h2><a style={{ color: '#ce4747' }}>{t('servicesPage.multimodal.title')}</a></h2>
                <br />
                <img src="/images/1207.jpg" alt={t('servicesPage.multimodal.title')} className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.multimodal.p1')}
                </p>

                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    {t('services.contactUs')}
                  </Link>
                </p>
              </div>

              {/* Servicio de Aduanas */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="">
                <h2><a style={{ color: '#ce4747' }}>{t('servicesPage.customs.title')}</a></h2>
                <br />
                <img src="/images/1208.jpg" alt={t('servicesPage.customs.title')} className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.customs.p1')}
                </p>

                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    {t('services.contactUs')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Webtracking Section */}
        <div className="site-section" id="webtracking-section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                  <span>{t('servicesPage.webtracking.subtitle')}</span>
                  <a href="https://seemanngroup.sistemaforward.com/" target="_blank" rel="noopener noreferrer">
                    <h2>{t('servicesPage.webtracking.title')}</h2>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-12 bg-light" data-aos="fade-up" data-aos-delay="">
                <div className="text-center mb-4">
                  <img src="/images/1209.jpg" alt="Webtracking" className="img-fluid rounded" />
                </div>

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.webtracking.p1')}
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}><strong>{t('servicesPage.webtracking.statusTitle')}</strong></p>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.webtracking.feature1')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.webtracking.feature2')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.webtracking.feature3')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.webtracking.feature4')}</li>
                  <li style={{ textAlign: 'justify' }}>{t('servicesPage.webtracking.feature5')}</li>
                </ul>

                <p style={{ textAlign: 'justify' }}>
                  {t('servicesPage.webtracking.p2')}
                </p>

                <p className="text-center" data-aos="fade-up" data-aos-delay="200">
                  <a 
                    href="https://seemanngroup.sistemaforward.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="primary-outline-primary--hover border-w-2 btn-md"
                  >
                    {t('servicesPage.webtracking.enterHere')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;