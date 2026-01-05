import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const Servicios = () => {
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
        style={{ backgroundImage: "url('/images/servicios.jpg')" }}
        data-aos="fade"
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
                    Servicios
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
                  <h2>Nuestros servicios</h2>
                </div>
              </div>
            </div>

            <div className="row d-flex no-gutters align-items-stretch bg-light">
              <div 
                className="col-12 col-lg-6 block__73422" 
                style={{ 
                  backgroundImage: "url('/images/1202.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px'
                }} 
                data-aos="fade-right" 
                data-aos-delay=""
              ></div>

              <div className="col-lg-6 ms-auto p-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="">
                <p style={{ textAlign: 'justify' }}>
                  Nuestro servicio es un servicio integral, donde el factor principal dice relación al transporte 
                  internacional de cargas. No obstante aquello, ofrecemos y realizamos asesorías profesionales en la 
                  búsqueda y negociación de nuevos proveedores de productos, asesoría en la emisión de documentos y/o 
                  certificados; apoyo en los proceso de aduanas en necesarios en los países de aduana y/o destino; 
                  administración de inventarios; y asesoría y gestión de seguros involucrados en los proceso de comercio exterior.
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
                  <span>Más de nosotros</span>
                  <h2>Seemann Group</h2>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Transporte Aéreo */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="">
                <h2><a style={{ color: '#ce4747' }}>Transporte Aéreo</a></h2>
                <br />
                <img src="/images/transporte aereo4.jpg" alt="Transporte Aéreo" className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  Dada la naturaleza de la prestación, donde el plazo de entrega resulta ser el factor fundamental, 
                  nuestro servicio se caracteriza por una oportuna y proactiva gestión de las operaciones, analizando 
                  diversas opciones de embarque, garantizando una mayor frecuencia de salida y flexibilidad en el tránsito.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Dado que nuestra propuesta se basa en la individualización de los clientes, nuestro servicio siempre 
                  buscará y presentará alternativas para los tránsitos, que permita el establecimiento de soluciones 
                  adaptadas a cada una las distintas realidades de las diversas industrias.
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>Los servicios que actualmente brindamos son:</p>
                  <li style={{ textAlign: 'justify' }}>Servicio Carga General / General Cargo</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Carga Peligrosa / Dangerous Goods (DG Shipments)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Carga Proyecto / Project Cargo (Oversize Shipments)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Carga en tránsito / Bonded Cargo (In transit shipments)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Carga Just in time</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Carga perecederos o con control de temperatura (Pharmaceutical)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Charter</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Courier</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    Contáctanos
                  </Link>
                </p>
              </div>

              {/* Transporte Marítimo */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="100">
                <h2><a style={{ color: '#ce4747' }}>Transporte Marítimo</a></h2>
                <br />
                <img src="/images/Transporte marítimo 3.jpg" alt="Transporte Marítimo" className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  Los mercados hoy en día buscan el transporte marítimo por la fuerte vocación de obtener eficacia en 
                  las operaciones, buscando optimizar los recursos involucrados en cada una de éstas, por lo que nuestra 
                  empresa se compromete a una fuerte negociación sobre los contratos de transporte marítimo.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Nuestra cobertura a nivel mundial nos ha permitido establecer posiciones en cada uno de los puertos de 
                  embarque o destino que se nos solicite, estableciendo un servicio tanto para full container, como carga consolidada.
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>Los servicios que actualmente desarrollamos son:</p>
                  <li style={{ textAlign: 'justify' }}>Servicio Full Container (FCL)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Less Container (LCL), o Carga consolidada</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Roll-on/Roll-off (RoRo)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Break Bulk (BB), o carga proyecto</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Cargas en tránsito / Bonded Cargo (In transit shipments)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Full Container Reefer</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    Contáctanos
                  </Link>
                </p>
              </div>

              {/* Transporte Terrestre */}
              <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="">
                <h2><a style={{ color: '#ce4747' }}>Transporte Terrestre</a></h2>
                <br />
                <img src="/images/El transporte internacional de carga.jpg" alt="Transporte Terrestre" className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  En vista que varios de los incoterms actualmente utilizados en los proceso de compra y venta de comercio 
                  exterior involucran el tránsito terrestre, hemos realizado alianzas con las diversas empresas a nivel 
                  internacional que nos permite entregarles los servicios de recogida y/o despacho de sus operaciones.
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>Dentro de las herramientas que disponemos para nuestros clientes se encuentran:</p>
                  <li style={{ textAlign: 'justify' }}>Servicio Less than truck Load (LTL)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Full Truck Load Service (FTL)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Roll-on/Roll-off (RoRo)</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Break Bulk (BB), o carga proyecto</li>
                  <li style={{ textAlign: 'justify' }}>Servicio Cargas en tránsito / Bonded Cargo (In transit shipments)</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    Contáctanos
                  </Link>
                </p>
              </div>

              {/* Warehouse */}
              <div className="col-md-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                <h2><a style={{ color: '#ce4747' }}>Warehouse</a></h2>
                <br />
                <img src="/images/werehouse 2.jpg" alt="Warehouse" className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  Actualmente contamos con una amplia cobertura de warehouse a nivel mundial, que le otorgará a nuestros 
                  clientes la capacidad de almacenar y consolidar carga en los diversos puertos y/o aeropuertos, con el 
                  objetivo de optimizar cada logística.
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}>Dentro de los servicios que actualmente podemos entregarle a nuestro cliente se encuentra:</p>
                  <li style={{ textAlign: 'justify' }}>Almacenaje de las órdenes</li>
                  <li style={{ textAlign: 'justify' }}>Control de inventario</li>
                  <li style={{ textAlign: 'justify' }}>Inspección de mercadería</li>
                  <li style={{ textAlign: 'justify' }}>Repacking</li>
                </ul>
                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    Contáctanos
                  </Link>
                </p>
              </div>

              {/* Servicio Multimodal */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="100">
                <h2><a style={{ color: '#ce4747' }}>Servicio Multimodal</a></h2>
                <br />
                <img src="/images/TRANSPORTEMULTIMODAL2.jpg" alt="Servicio Multimodal" className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  Dada la constante búsqueda de las empresa por la optimización de los procesos, con miras a la obtención 
                  de ventajas en sus industrias, es que nuestra empresa actualmente brinda un servicio multimodal a través 
                  del cual entrega la competitividad del transporte marítimo de cargas, sin desmedro del tiempo de tránsito asociado.
                </p>

                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    Contáctanos
                  </Link>
                </p>
              </div>

              {/* Servicio de Aduanas */}
              <div className="col-md-6 col-lg-6 bg-light mb-4" data-aos="fade-up" data-aos-delay="">
                <h2><a style={{ color: '#ce4747' }}>Servicio de Aduanas</a></h2>
                <br />
                <img src="/images/logistica internacional 1.jpg" alt="Servicio de Aduanas" className="img-fluid rounded mb-4" />

                <p style={{ textAlign: 'justify' }}>
                  Nuestra amplia red de oficinas a nivel internacional, nos permite asesorar a nuestros clientes en los 
                  diversos procesos de aduanas necesarios para la exportación y/o importación de bienes. Dicho servicio 
                  nos permitirá anticipar los requisitos necesarios a nivel documental y de packing.
                </p>

                <p data-aos="fade-up" data-aos-delay="200">
                  <Link to="/#contact-section" className="primary-outline-primary--hover border-w-2 btn-md">
                    Contáctanos
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
                  <span>Accede a tus operaciones</span>
                  <a href="https://seemanngroup.sistemaforward.com/" target="_blank" rel="noopener noreferrer">
                    <h2>WEBTRACKING</h2>
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-12 bg-light" data-aos="fade-up" data-aos-delay="">
                <div className="text-center mb-4">
                  <img src="/images/werehouse 3.jpg" alt="Webtracking" className="img-fluid rounded" />
                </div>

                <p style={{ textAlign: 'justify' }}>
                  Nuestra propuesta no sólo basara sus fortalezas en el fuerte cumplimiento y satisfacción de los clientes 
                  con el trabajo realizado, sino también con el manejo oportuno de la información hacia nuestros clientes, 
                  permitiendo una mayor trazabilidad de sus operaciones.
                </p>

                <ul className="ul-check primary list-unstyled mt-3">
                  <p style={{ textAlign: 'justify' }}><strong>Conocer el status actual de sus operaciones:</strong></p>
                  <li style={{ textAlign: 'justify' }}>Obtención de documentos asociados a la operación como invoice, packing list y/o certificado de origen.</li>
                  <li style={{ textAlign: 'justify' }}>Obtención de los documentos de transporte internacional asociados como Airway Bill, Bill of Landing o CRT.</li>
                  <li style={{ textAlign: 'justify' }}>Fotografías de la carga en el caso de que se hubiesen solicitado.</li>
                  <li style={{ textAlign: 'justify' }}>Facturas asociadas al servicio prestado una vez concluido el mismo.</li>
                  <li style={{ textAlign: 'justify' }}>Cotizaciones asociadas a la operación en curso.</li>
                </ul>

                <p style={{ textAlign: 'justify' }}>
                  Nuestro sistema web, les permitirá acceder a las operaciones que se mantienen en curso, y mostrara 
                  aquellas operaciones que ya han sido cursadas.
                </p>

                <p className="text-center" data-aos="fade-up" data-aos-delay="200">
                  <a 
                    href="https://seemanngroup.sistemaforward.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="primary-outline-primary--hover border-w-2 btn-md"
                  >
                    Entre aquí
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