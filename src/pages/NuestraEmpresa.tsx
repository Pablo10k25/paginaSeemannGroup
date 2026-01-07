import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';

const NuestraEmpresa = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease',
      delay: 0
    });
  }, []);

  return (
    <div className="site-wrap">
      {/* Banner Hero */}
      <div 
        className="site-section-cover inner-page bg-light position-relative" 
        style={{ 
          backgroundImage: "url('/images/logo2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
        data-aos="fade"
      >
        {/* Overlay oscuro */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>

        {/* Contenido */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center justify-content-center text-center" style={{ minHeight: '400px' }}>
            <div className="col-lg-10">
              <div className="py-5">
                <div className="block-heading-1">
                  <span 
                    className="d-block mb-2 text-white" 
                    data-aos="fade-up"
                    style={{ 
                      fontSize: '1rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase'
                    }}
                    dangerouslySetInnerHTML={{ __html: t('ourCompany.banner.subtitle') }}
                  >
                  </span>
                  <h1 
                    className="mb-0 text-white" 
                    data-aos="fade-up" 
                    data-aos-delay="100"
                    style={{ 
                      fontSize: '3rem',
                      fontWeight: '700',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {t('ourCompany.banner.title')}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historia Section */}
      <div className="site-section" id="historia-section">
        <div className="block__73694 mb-2">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                  <span></span>
                  <h2>{t('ourCompany.historia.title')}</h2>
                </div>
              </div>
            </div>
            <div className="row d-flex no-gutters align-items-stretch">
              <div 
                className="col-12 col-lg-6 block__73422" 
                style={{ 
                  backgroundImage: "url('/images/im1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px'
                }} 
                data-aos="fade-right" 
                data-aos-delay=""
              ></div>

              <div className="col-lg-5 ms-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="">
                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.historia.p1')}
                </p>

                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.historia.p2')}
                </p>

                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.historia.p3')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Misión Section */}
        <div className="block__73694">
          <div className="container">
            <div className="row d-flex no-gutters align-items-stretch">
              <div 
                className="col-12 col-lg-6 block__73422 order-lg-2" 
                style={{ 
                  backgroundImage: "url('/images/im2.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px'
                }} 
                data-aos="fade-up" 
                data-aos-delay=""
              ></div>

              <div className="col-lg-5 me-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right" data-aos-delay="">
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                  <span></span>
                  <h2>{t('ourCompany.mision.title')}</h2>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.mision.p1')}
                </p>

                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.mision.p2')}
                </p>
              </div>
            </div>

            {/* Visión Section */}
            <div className="row d-flex no-gutters align-items-stretch mt-5">
              <div 
                className="col-12 col-lg-6 block__73422 order-lg-1" 
                style={{ 
                  backgroundImage: "url('/images/im3.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px'
                }} 
                data-aos="fade-up" 
                data-aos-delay=""
              ></div>

              <div className="col-lg-5 me-auto p-lg-5 mt-4 mt-lg-0 order-lg-2" data-aos="fade-up" data-aos-delay="">
                <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                  <span></span>
                  <h2>{t('ourCompany.vision.title')}</h2>
                </div>

                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.vision.p1')}
                </p>

                <p style={{ textAlign: 'justify' }}>
                  {t('ourCompany.vision.p2')}
                </p>
              </div>
            </div>

            {/* Valores Section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="bg-light p-4">
                  <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                    <span></span>
                    <h2>{t('ourCompany.valores.title')}</h2>
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                    {t('ourCompany.valores.intro')}
                  </p>
                  <ul className="ul-check primary list-unstyled mt-4">
                    <li style={{ textAlign: 'justify' }}>
                      <strong>{t('ourCompany.valores.empathy.title')}</strong> {t('ourCompany.valores.empathy.description')}
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>{t('ourCompany.valores.personalization.title')}</strong> {t('ourCompany.valores.personalization.description')}
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>{t('ourCompany.valores.responsibility.title')}</strong> {t('ourCompany.valores.responsibility.description')}
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>{t('ourCompany.valores.sincerity.title')}</strong> {t('ourCompany.valores.sincerity.description')}
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>{t('ourCompany.valores.commitment.title')}</strong> {t('ourCompany.valores.commitment.description')}
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>{t('ourCompany.valores.flexibility.title')}</strong> {t('ourCompany.valores.flexibility.description')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galería de Fotografías */}
      <div className="site-section" id="experiencia-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                <span>{t('ourCompany.gallery.subtitle')}</span>
                <h2>{t('ourCompany.gallery.title')}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[1, 3, 6, 2, 4, 5].map((num) => (
              <div key={num} className="col-md-4 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                <img 
                  src={`/images/galeria/${num}.jpg`} 
                  alt={`${t('ourCompany.gallery.title')} ${num}`}
                  className="img-fluid rounded"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestraEmpresa;