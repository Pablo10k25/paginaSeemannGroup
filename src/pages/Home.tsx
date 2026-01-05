import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import AOS from 'aos';

const Home = () => {
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

      {/* Servicios Section */}
      <div className="site-section" id="press-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="block-heading-1" data-aos="fade-up" data-aos-delay="0">
                <span>Seleccione uno de nuestros</span>
                <h2>Servicios</h2>
              </div>
              <br /><br /><br /><br /><br />
            </div>
          </div>

          <div className="row bg-light">
            {/* Título Seemann Group */}
            <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
              <Link to="/servicios">
                <div className="block-heading-1" data-aos="fade-right" data-aos-delay="0">
                  <h2>Seemann</h2>
                  <h1>Group</h1>
                </div>
              </Link>
            </div>

            {/* Transporte Aéreo */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="0">
                  <h1 className="icon">
                    <i className="fas fa-plane"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/servicios#transporte-aereo" className="text-black">
                      TRANSPORTE AÉREO
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/servicios#transporte-aereo" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </li>
              </ul>
            </div>

            {/* Transporte Marítimo */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="0">
                  <h1 className="icon">
                    <i className="fas fa-ship"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/servicios#transporte-maritimo" className="text-black">
                      TRANSPORTE MARITIMO
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/servicios#transporte-maritimo" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row bg-light">
            <div className="col-lg-4"></div>

            {/* Transporte Terrestre */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="100">
                  <h1 className="icon">
                    <i className="fas fa-truck"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/servicios#transporte-terrestre" className="text-black">
                      TRANSPORTE TERRESTRE
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/servicios#transporte-terrestre" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </li>
              </ul>
            </div>

            {/* Warehouse */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="200">
                  <h1 className="icon">
                    <i className="fas fa-warehouse"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/servicios#warehouse" className="text-black">
                      WAREHOUSE
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/servicios#warehouse" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="row bg-light">
            <div className="col-lg-4"></div>

            {/* Servicio Multimodal */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="200">
                  <h1 className="icon">
                    <i className="fas fa-sync-alt"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/servicios#servicio-multimodal" className="text-black">
                      SERVICIO MULTIMODAL
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/servicios#servicio-multimodal" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </li>
              </ul>
            </div>

            {/* Servicio de Aduanas */}
            <div className="col-lg-4 col-md-6 col-sm-6 text-center">
              <ul className="list-unstyled">
                <li className="mb-5 block-team-member-1" data-aos="fade-right" data-aos-delay="200">
                  <h1 className="icon">
                    <i className="fas fa-handshake"></i>
                  </h1>
                  <h2 className="h4">
                    <Link to="/servicios#servicio-aduanas" className="text-black">
                      SERVICIO DE ADUANAS
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/servicios#servicio-aduanas" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestra Empresa Banner */}
      <div
        className="site-section-cover overlay inner-page bg-light"
        style={{ backgroundImage: "url('/images/shaking-hands-1.jpg')" }}
        data-aos="fade"
        id="services-section"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-10">
              <div className="box-shadow-content">
                <div className="block-heading-1">
                  <span className="d-block mb-3 text-white" data-aos="fade-up">
                    Transporte <span className="mx-2 text-primary">•</span> Seguridad
                  </span>
                  <h1 className="mb-4" data-aos="fade-up" data-aos-delay="100">
                    Nuestra empresa
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historia Section con Tabs */}
      <div id="historia-section"></div>
      <br /><br /><br />
      <section className="ftco-section ftco-no-pb ftco-no-pt ftco-services bg-light">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-4 ftco-animate py-2 nav-link-wrap">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button
                  className="nav-link px-4 block-team-member-1 active"
                  id="v-pills-historia-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-historia"
                  type="button"
                  role="tab"
                  style={{ padding: '15px' }}
                >
                  <span className="me-3">▼</span>Historia
                </button>
                <button
                  className="nav-link px-4 block-team-member-1"
                  id="v-pills-mision-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-mision"
                  type="button"
                  role="tab"
                  style={{ padding: '15px' }}
                >
                  <span className="me-3">▶</span>Misión
                </button>
                <button
                  className="nav-link px-4 block-team-member-1"
                  id="v-pills-vision-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-vision"
                  type="button"
                  role="tab"
                  style={{ padding: '15px' }}
                >
                  <span className="me-3">▼</span>Visión
                </button>
                <button
                  className="nav-link px-4 block-team-member-1"
                  id="v-pills-valores-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-valores"
                  type="button"
                  role="tab"
                  style={{ padding: '15px' }}
                >
                  <span className="me-3">▶</span>Valores
                </button>
              </div>
            </div>

            <div className="col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center text-center" style={{ justifyContent: 'center' }}>
              <div className="tab-content pl-md-5" id="v-pills-tabContent">
                
                {/* Historia Tab */}
                <div className="ul-check primary list-unstyled mt-1 tab-pane fade show active py-1" id="v-pills-historia" role="tabpanel">
                  <h2 className="icon mb-4 d-block">
                    <i className="fas fa-globe"></i>
                  </h2>
                  <h2 className="mb-4">Historia</h2>
                  <p style={{ textAlign: 'justify' }}>
                    Seemann Group nace como resultado de una vasta experiencia de sus fundadores en el mercado de los seguros,
                    reaseguros y de logística internacional, con más de 35 años de desarrollo.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/nuestra-empresa#historia" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </div>

                {/* Misión Tab */}
                <div className="tab-pane fade py-1" id="v-pills-mision" role="tabpanel">
                  <h2 className="icon mb-4 d-block">
                    <i className="fas fa-hand-peace"></i>
                  </h2>
                  <h2 className="mb-4">Misión</h2>
                  <p style={{ textAlign: 'justify' }}>
                    Somos una organización flexible, orientada, y preparada, para enfrentar los cambios que necesita el mercado de
                    hoy día, que nos permita dar una rápida y profesional respuesta a las necesidades de nuestros clientes.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/nuestra-empresa#mision" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </div>

                {/* Visión Tab */}
                <div className="tab-pane fade py-1" id="v-pills-vision" role="tabpanel">
                  <h2 className="icon mb-4 d-block">
                    <i className="fas fa-eye"></i>
                  </h2>
                  <h2 className="mb-4">Visión</h2>
                  <p style={{ textAlign: 'justify' }}>
                    A nivel interno, buscamos seguir desarrollando procesos de mejoramiento continuo que nos permitan seguir
                    evaluando y mejorando la calidad de nuestro servicio.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Contáctanos
                    </a>{' '}
                    <Link to="/nuestra-empresa#vision" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Ver más
                    </Link>
                  </p>
                </div>

                {/* Valores Tab */}
                <div className="ul-check primary list-unstyled mt-1 tab-pane fade py-1" id="v-pills-valores" role="tabpanel">
                  <h2 className="icon mb-4 d-block">
                    <i className="fas fa-smile"></i>
                  </h2>
                  <h2 className="mb-4">Valores</h2>
                  <li style={{ textAlign: 'justify' }}>Empatía y Orientación al cliente.</li>
                  <li style={{ textAlign: 'justify' }}>Personalización.</li>
                  <li style={{ textAlign: 'justify' }}>Responsabilidad.</li>
                  <li style={{ textAlign: 'justify' }}>Sinceridad/Transparencia.</li>
                  <li style={{ textAlign: 'justify' }}>Compromiso/Pro actividad.</li>
                  <li style={{ textAlign: 'justify' }}>Flexibilidad.</li>
                  <br />
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#contacto" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md text-center">
                      Contáctanos
                    </a>{' '}
                    <Link to="/nuestra-empresa#valores" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md text-center">
                      Ver más
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas Section */}
      <div className="site-section" id="herramientas">
        <div className="container">
          <div className="row bg-light">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-5">
              <div className="block-heading-1" data-aos="fade-right" data-aos-delay="0">
                <h2>Herramientas</h2>
                <h1 className="text-black">SeemannGroup</h1>
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
                      Cotizaciones
                    </Link>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <Link to="/cotizaciones" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Entre aquí
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
                      Conversiones
                    </a>
                  </h2>
                  <p></p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    <a href="#herramientas" className="col-xs-12 col-sm-12 col-md-12 col-lg-6 primary-outline-primary--hover border-w-2 btn-md">
                      Entre aquí
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Por ahora dejaré estas secciones pendientes para el siguiente bloque:
          - Oficinas (con tabs)
          - Network Banner
          - Tarifarios
          - Contacto (formulario)
          - Reclamos (formulario)
      */}
      
    </div>
  );
};

export default Home;
