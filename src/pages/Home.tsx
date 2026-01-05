import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import AOS from 'aos';
import { 
  Plane,          // Transporte Aéreo
  Ship,           // Transporte Marítimo
  Truck,          // Transporte Terrestre
  Warehouse,      // Warehouse
  RefreshCw,      // Servicio Multimodal
  Building2,      // Servicio de Aduanas
  Users,          // Cómo te ayudamos (cambiado)
  Mail            // Contáctanos
} from 'lucide-react';

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

      {/* Servicios Section con Flip Cards */}
      <div className="site-section bg-light" id="servicios-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="block-heading-1" data-aos="fade-up" data-aos-delay="0">
                <span>Enviamos adjunto formato</span>
                <h2>Nuestros Servicios</h2>
              </div>
            </div>
          </div>

          {/* Row 1: Cómo te ayudamos + 3 servicios */}
          <div className="row justify-content-center">
            {/* Card: Cómo te ayudamos */}
            <ServiceCard
              icon={<Users size={60} strokeWidth={1.5} />}
              title="Cómo te ayudamos"
              subtitle="Soluciones logísticas diseñadas para tu negocio"
              description="En Seemann Group sabemos que cada minuto cuenta. Conecta tu negocio con el mundo a través de soluciones integradas en transporte internacional."
              details={[
                "Buscamos proveedores",
                "Anticipamos documentos",
                "Gestionamos aduanas",
                "Inventarios y seguros"
              ]}
              link="/servicios"
              variant="secondary"
            />

            {/* Card: Transporte Aéreo */}
            <ServiceCard
              icon={<Plane size={60} strokeWidth={1.5} />}
              title="Transporte Aéreo"
              subtitle="La velocidad que exige tu negocio."
              description="Gestionamos tu carga aérea con agilidad, precisión y flexibilidad, diseñando rutas que reducen al mínimo los tiempos de tránsito."
              details={[
                "General Cargo / Carga General",
                "DG Shipments / Carga Peligrosa",
                "Project Cargo / Carga Sobredimensionada",
                "Just-in-time Shipments",
                "Charter Service",
                "Courier Internacional"
              ]}
              link="/servicios#transporte-aereo"
            />

            {/* Card: Transporte Marítimo */}
            <ServiceCard
              icon={<Ship size={60} strokeWidth={1.5} />}
              title="Transporte Marítimo"
              subtitle="Movemos tu carga por mar sin detener el reloj"
              description="Optimizamos tu logística marítima negociando días libres, drop off y documentos emitidos a tiempo."
              details={[
                "FCL / Contenedor Completo",
                "LCL / Carga Consolidada",
                "RoRo / Vehículos y Maquinaria",
                "Break Bulk / Carga de Proyecto",
                "Bonded Cargo / Carga en Tránsito",
                "Reefer / Contenedor Refrigerado"
              ]}
              link="/servicios#transporte-maritimo"
            />

            {/* Card: Transporte Terrestre */}
            <ServiceCard
              icon={<Truck size={60} strokeWidth={1.5} />}
              title="Transporte Terrestre"
              subtitle="Conectado sin pausas."
              description="Conectamos primera y última milla con precisión. Gracias a nuestra red de alianzas internacionales, gestionamos reconocimientos y despacho terrestre."
              details={[
                "Less than truck Load (LTL)",
                "Full Truck Load Service (FTL)",
                "Roll-on/Roll-off (RoRo)",
                "Break Bulk (BB) o carga proyecto",
                "Cargas en tránsito / Bonded Cargo"
              ]}
              link="/servicios#transporte-terrestre"
            />
          </div>

          {/* Row 2: Contáctanos + 3 servicios */}
          <div className="row justify-content-center mt-4">
            {/* Card: Contáctanos */}
            <ServiceCard
              icon={<Mail size={60} strokeWidth={1.5} />}
              title="Contáctanos"
              subtitle=""
              description="¿Tienes dudas o necesitas una cotización? Nuestro equipo está listo para ayudarte."
              details={[
                "Email",
                "Teléfono",
                "Formulario web",
                "Redes sociales"
              ]}
              link="#contacto"
              variant="secondary"
            />

            {/* Card: Warehouse */}
            <ServiceCard
              icon={<Warehouse size={60} strokeWidth={1.5} />}
              title="Warehouse"
              subtitle="Inventarios rápidos, operaciones más ágiles."
              description="Nuestra red global de almacenes optimiza tu cadena de suministro desde puertos y aeropuertos clave."
              details={[
                "Almacenaje de las órdenes",
                "Control de inventario",
                "Inspección de mercadería",
                "Repacking"
              ]}
              link="/servicios#warehouse"
            />

            {/* Card: Servicio Multimodal */}
            <ServiceCard
              icon={<RefreshCw size={60} strokeWidth={1.5} />}
              title="Servicio Multimodal"
              subtitle="Inventarios rápidos, operaciones más ágiles"
              description="Combinamos eficiencia marítima con tiempos de tránsito optimizados para cumplir tus plazos críticos."
              details={[
                "Soluciones ocean/air y air/ocean",
                "Operaciones rentables y flexibles",
                "Balance entre velocidad y costo"
              ]}
              link="/servicios#servicio-multimodal"
            />

            {/* Card: Servicio de Aduanas */}
            <ServiceCard
              icon={<Building2 size={60} strokeWidth={1.5} />}
              title="Servicio de Aduanas"
              subtitle="Cumplimos la norma. Ganamos tiempo."
              description="Asesoramos procesos aduaneros de exportación e importación anticipando requisitos documentales y de embalaje."
              details={[
                "Eliminamos retrasos",
                "Aseguramos cumplimiento",
                "Optimizamos tiempos",
                "Documentación completa"
              ]}
              link="/servicios#servicio-aduanas"
            />
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
