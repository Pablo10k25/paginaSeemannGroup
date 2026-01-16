import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Route, TrendingDown, Zap, Target, FileCheck, Package, Rocket, Clock } from 'lucide-react';
import ServiceHero from '../../components/Services/ServiceHero';
import FeatureGrid from '../../components/Services/FeatureGrid';
import ServiceAccordion from '../../components/Services/ServiceAccordion';
import ProcessSteps from '../../components/Services/ProcessSteps';
import WebTrackingMock from '../../components/Services/WebTrackingMock';
import FAQAccordion from '../../components/Services/FAQAccordion';

const ServicioMultimodal = () => {
  useEffect(() => {
    // Múltiples intentos para forzar scroll al inicio
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
    
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
    
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'service_page_view',
        service_name: 'Servicio Multimodal',
        service_slug: 'servicio-multimodal'
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <TrendingDown size={48} strokeWidth={1.5} />,
      title: 'Optimización de costos',
      description: 'Equilibrio perfecto entre costo y tiempo mediante combinación estratégica de modos'
    },
    {
      icon: <Zap size={48} strokeWidth={1.5} />,
      title: 'Flexibilidad de rutas',
      description: 'Ocean/Air, Air/Ocean y combinaciones terrestres para rutas optimizadas'
    },
    {
      icon: <Target size={48} strokeWidth={1.5} />,
      title: 'Reducción de tránsitos',
      description: 'Hasta 40% menos tiempo vs. marítimo puro sin costos de aéreo completo'
    }
  ];

  const services = [
    {
      title: 'Ocean/Air (Mar-Aire)',
      description: 'Combinación de transporte marítimo en tramo principal con aéreo en última etapa. Ideal para equilibrar costo y velocidad.',
      examples: [
        'Asia-Europa-Sudamérica: marítimo hasta hub europeo + aéreo final',
        'Ahorro de hasta 50% vs. aéreo completo',
        'Reducción de 15-20 días vs. marítimo puro',
        'Ideal para cargas con deadline ajustado pero presupuesto limitado',
        'Rutas típicas: Shanghai-Amsterdam-Santiago, Shenzhen-Dubai-Lima'
      ]
    },
    {
      title: 'Air/Ocean (Aire-Mar)',
      description: 'Tramo inicial aéreo hasta hub estratégico, luego marítimo hacia destino final. Máxima velocidad en primera etapa crítica.',
      examples: [
        'Carga urgente desde origen con entrega flexible en destino',
        'Productos estacionales o lanzamientos con stock inicial rápido',
        'Europa-USA-Chile: aéreo hasta Miami + marítimo a puertos sudamericanos',
        'Combina urgencia inicial con economía en tramo final',
        'Rutas: Frankfurt-Los Angeles-Valparaíso, Paris-Miami-Buenos Aires'
      ]
    },
    {
      title: 'Marítimo + Terrestre (Multimodal Regional)',
      description: 'Combinación de tránsito marítimo internacional con distribución terrestre regional. Ideal para destinos mediterráneos.',
      examples: [
        'Contenedor hasta puerto principal + terrestre a ciudades internas',
        'Asia-Valparaíso-Santiago, Asia-Buenos Aires-Córdoba/Mendoza',
        'Gestión de tránsito aduanero y DTA integrado',
        'Coordinación única de toda la cadena (single point of contact)',
        'Tarifa all-inclusive puerto origen → dirección final'
      ]
    },
    {
      title: 'Aéreo + Terrestre (Express Regional)',
      description: 'Vuelo internacional hasta aeropuerto hub con última milla terrestre express. Máxima velocidad door-to-door.',
      examples: [
        'Entregas JIT con distribución multi-ciudad',
        'Aéreo hasta SCL/LIM/EZE + terrestre a destinos secundarios',
        'Coordinación de desaduanaje y entrega en menos de 48h post-arribo',
        'Ideal para repuestos críticos y emergencias industriales',
        'Cobertura: capitales + ciudades secundarias (Antofagasta, Iquique, Concepción)'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileCheck size={40} />,
      title: 'Análisis',
      description: 'Evaluación de origen/destino, urgencia y presupuesto para ruta óptima',
      duration: '24 horas'
    },
    {
      icon: <Package size={40} />,
      title: 'Planificación',
      description: 'Diseño de ruta multimodal con transbordos y coordinación integrada',
      duration: '48 horas'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Ejecución',
      description: 'Gestión de tramos, transbordos y tracking end-to-end',
      duration: 'Variable según combinación'
    },
    {
      icon: <Clock size={40} />,
      title: 'Entrega',
      description: 'Último tramo coordinado con POD y feedback',
      duration: '24-72 horas'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es el servicio multimodal y cuándo conviene?',
      answer: 'Servicio multimodal combina dos o más modos de transporte (marítimo-aéreo, aéreo-terrestre, etc.) para optimizar el equilibrio costo/tiempo. Conviene cuando el aéreo puro es muy costoso pero necesitas menos tiempo que marítimo estándar. Ahorras hasta 50% vs. aéreo con 15-20 días menos que marítimo.'
    },
    {
      question: '¿Qué es Ocean/Air y cuáles son sus ventajas?',
      answer: 'Ocean/Air es marítimo en tramo principal (ej. Asia-Europa) + aéreo en tramo final (Europa-Sudamérica). Ventajas: ahorro de 40-50% vs. aéreo completo, reducción de 15-20 días vs. marítimo puro, menos riesgo de retrasos portuarios en destino. Ideal para balance costo-tiempo cuando tienes deadline ajustado pero presupuesto limitado.'
    },
    {
      question: '¿Cómo funciona el transbordo entre modos?',
      answer: 'Gestionamos todo el transbordo en hub intermedio: desconsolidación, cross-docking, cambio de modo y nueva documentación. Tú solo recibes tracking end-to-end sin gestionar cada tramo. Hubs típicos: Dubai, Amsterdam, Miami, Panamá. Tiempo de transbordo: 24-72 horas según hub y conexiones disponibles.'
    },
    {
      question: '¿El servicio multimodal es más caro que marítimo estándar?',
      answer: 'Sí, típicamente 20-30% más caro que marítimo puro, pero 40-50% más barato que aéreo completo. La ventaja está en el tiempo: reduces 15-20 días vs. marítimo con costo muy inferior a aéreo. Ideal cuando aéreo excede presupuesto pero marítimo es demasiado lento para tu deadline.'
    },
    {
      question: '¿Ofrecen rutas multimodales para destinos mediterráneos?',
      answer: 'Sí, especialistas en rutas marítimo+terrestre: contenedor hasta puerto principal (Valparaíso, Buenos Aires, Callao) + terrestre hasta ciudades internas (Santiago, Córdoba, Arequipa). Coordinamos tránsito aduanero (DTA), última milla y entrega con tarifa all-inclusive puerto origen → dirección final.'
    },
    {
      question: '¿Puedo hacer seguimiento de todo el trayecto multimodal?',
      answer: 'Sí, a través de WebTracking ves tracking end-to-end con visibilidad en cada etapa: salida origen, arribo hub, transbordo, segundo tramo, arribo destino y entrega final. Notificaciones automáticas en cada hito. Single point of contact para cualquier consulta durante todo el tránsito.'
    },
    {
      question: '¿Qué documentación se requiere para servicio multimodal?',
      answer: 'Documentos estándar: Invoice, Packing List, BL (tramo marítimo) o AWB (tramo aéreo), Certificado de Origen. Nosotros gestionamos la documentación de transbordo y cambio de modo. Para destinos con TLC aprovechamos preferencias arancelarias. Asesoría completa incluida en servicio.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicio Multimodal - Ocean/Air, Air/Ocean | Seemann Group</title>
        <meta
          name="description"
          content="Servicio multimodal: combinación estratégica mar-aire, aire-mar y terrestre. Optimización de costos y tiempos con tracking end-to-end."
        />
        <link rel="canonical" href="https://seemanngroup.com/servicios/servicio-multimodal" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicio Multimodal",
            "description": "Operaciones multimodales que combinan modos de transporte para rentabilizar operaciones: Ocean/Air, Air/Ocean y rutas terrestres integradas.",
            "provider": {
              "@type": "Organization",
              "name": "Seemann Group",
              "url": "https://seemanngroup.com"
            },
            "serviceType": "Freight Forwarding",
            "areaServed": ["CL", "PE", "AR", "BR", "US", "EU", "CN"],
            "url": "https://seemanngroup.com/servicios/servicio-multimodal"
          })}
        </script>
      </Helmet>

      <ServiceHero
        title="Servicio Multimodal: Rutas Optimizadas Integradas"
        subtitle="Equilibrio perfecto entre costo y tiempo mediante combinación estratégica de transporte marítimo, aéreo y terrestre."
        backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=900&fit=crop"
        icon={<Route size={64} strokeWidth={1.5} />}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Rentabilidad mediante optimización multimodal</h2>
              <p className="lead text-muted mb-4">
                Dada la constante búsqueda de las empresas por la <strong>optimización de los procesos</strong>, con miras a la obtención de ventajas en sus industrias, es que nuestra empresa actualmente brinda un servicio multimodal.
              </p>
              <p className="mb-4">
                Entregamos la <strong>competitividad del transporte marítimo</strong> de cargas, sin desmedro del tiempo de tránsito asociado a las mismas, teniendo como resultado una <strong>operación eficiente y eficaz</strong>.
              </p>
              <p className="mb-0">
                Aun cuando el servicio multimodal se encuentra intrínseco para todos aquellos orígenes y/o destinos mediterráneos en el caso del transporte marítimo, actualmente ofrecemos servicios <strong>ocean/air o air/ocean</strong> para diversas rutas que permiten <strong>rentabilizar las operaciones</strong> de nuestros clientes.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/1207.jpg"
                alt="Transporte multimodal integrado"
                className="img-fluid rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} title="Proceso de servicio multimodal" />

      <ServiceAccordion
        title="Servicios multimodales que ofrecemos"
        items={services}
      />

      <WebTrackingMock />

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Eficiencia multimodal comprobada</h2>
              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">-40%</div>
                    <div className="metric-label">Ahorro vs. Aéreo</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">-15</div>
                    <div className="metric-label">Días vs. Marítimo</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">5K+</div>
                    <div className="metric-label">Envíos Multimodales/Año</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">95%</div>
                    <div className="metric-label">Satisfacción Clientes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={faqs} />

      <section className="cta-service-final py-5">
        <div className="container text-center text-white">
          <h2 className="mb-4">¿Listo para rentabilizar tus operaciones?</h2>
          <p className="lead mb-4">
            Descubre cómo el servicio multimodal puede optimizar costo y tiempo
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contacto" className="btn btn-light btn-lg px-5">
              Solicitar cotización
            </Link>
            <Link to="/contacto" className="btn btn-outline-light btn-lg px-5">
              Hablar con un experto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicioMultimodal;
