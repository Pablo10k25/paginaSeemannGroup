import { useEffect } from 'react';
import AOS from 'aos';

const NuestraEmpresa = () => {
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
                                >
                                Transporte <span className="text-danger fw-bold">•</span> Seguridad
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
                                NUESTRA EMPRESA
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
                  <h2>Historia</h2>
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
                  Seemann Group nace como resultado de una vasta experiencia de sus fundadores en el mercado de los seguros, 
                  reaseguros y de logística internacional, con más de 35 años de desarrollo.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Su fortaleza consiste en la entrega de asesorías profesionales y técnicas a sus clientes, evaluando 
                  siempre la mejor alternativa para el cumplimiento de sus objetivos.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  A través de su trayectoria, se han desarrollado herramientas útiles y versátiles para diferentes tamaños 
                  de empresas, que nos permiten un trabajo eficaz en pequeñas, medianas y grandes empresas de Latino América, 
                  recientemente en Estados Unidos y próximamente en Europa.
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
                  <h2>Misión</h2>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Seemann Group es una empresa dedicada al transporte internacional de carga, freight forward, con una fuerte 
                  vocación de servicio, fundamentando su propuesta comercial en la satisfacción de sus clientes respecto del 
                  trabajo otorgado. Nuestro compromiso estará en un crecimiento sustentable que garantice una alta calidad en 
                  el servicio ofrecido, interiorizándonos y comprometiéndonos con las necesidades de cada uno de nuestros clientes.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  Somos una organización flexible, orientada, y preparada, para enfrentar los cambios que necesita el mercado 
                  de hoy, que nos permita dar una rápida y profesional respuesta a las necesidades de nuestros clientes. 
                  Actualmente nuestra empresa se compone por profesionales de diversas áreas con fuerte vocación de servicio, 
                  trabajo bajo presión y orientación al cambio.
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
                  <h2>Visión</h2>
                </div>

                <p style={{ textAlign: 'justify' }}>
                  Buscamos ser una empresa sólida a nivel mundial, con una expansión internacional relevante, alcanzando una 
                  mayor cobertura en economías que consideramos estratégicas que nos permita garantizar un trabajo con la más 
                  alta calidad en la gestión de operaciones de comercio exterior, como actualmente lo desarrollamos en los 
                  mercados que participamos.
                </p>

                <p style={{ textAlign: 'justify' }}>
                  A nivel interno, buscamos seguir desarrollando procesos de mejoramiento continuos que nos permitan seguir 
                  evaluando y optimizando la calidad de nuestro servicio.
                </p>
              </div>
            </div>

            {/* Valores Section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="bg-light p-4">
                  <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                    <span></span>
                    <h2>Valores</h2>
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                    Dentro de los valores corporativos de nuestra empresa se encuentran:
                  </p>
                  <ul className="ul-check primary list-unstyled mt-4">
                    <li style={{ textAlign: 'justify' }}>
                      <strong>Empatía y orientación al cliente:</strong> nuestro principal objetivo será la entrega de un 
                      servicio de alta calidad profesional, donde prime la satisfacción del cliente respecto del trabajo realizado.
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>Personalización:</strong> conocimiento y empatía con nuestros clientes en atención a sus necesidades, 
                      desarrollando soluciones personalizadas de alto impacto que nos garanticen una mayor satisfacción del trabajo realizado.
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>Responsabilidad:</strong> con el manejo de la información, los compromisos adquiridos y el 
                      tratamiento de las operaciones en su globalidad.
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>Sinceridad y transparencia:</strong> compromiso con la entrega de la información fidedigna y de manera oportuna.
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>Compromiso y pro actividad:</strong> en la búsqueda de soluciones que brinden una optimización 
                      en las operaciones de nuestros clientes.
                    </li>
                    <li style={{ textAlign: 'justify' }}>
                      <strong>Flexibilidad:</strong> ser una organización flexible, orientada a los cambios, que nos permita 
                      una pronta adaptación a las necesidades tanto del cliente, como del entorno.
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
                <span>Nuestra Experiencia</span>
                <h2>Fotografías</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {[1, 3, 6, 2, 4, 5].map((num) => (
              <div key={num} className="col-md-4 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                <img 
                  src={`/images/galeria/${num}.jpg`} 
                  alt={`Galería ${num}`} 
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