import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Plane, Clock, Shield, Target, FileCheck, Rocket, Package, Zap } from 'lucide-react';
import ServiceHero from '../../components/Services/ServiceHero';
import FeatureGrid from '../../components/Services/FeatureGrid';
import ServiceAccordion from '../../components/Services/ServiceAccordion';
import ProcessSteps from '../../components/Services/ProcessSteps';
import WebTrackingMock from '../../components/Services/WebTrackingMock';
import FAQAccordion from '../../components/Services/FAQAccordion';

const TransporteAereo = () => {
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
    
    // Analytics page view
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'service_page_view',
        service_name: 'Transporte Aéreo',
        service_slug: 'transporte-aereo'
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Clock size={48} strokeWidth={1.5} />,
      title: 'Respuesta en 24h',
      description: 'Confirmación de ruta y tarifa en tiempo récord para optimizar tu cadena de suministro'
    },
    {
      icon: <Shield size={48} strokeWidth={1.5} />,
      title: 'Tracking 24/7',
      description: 'Visibilidad completa por AWB en cada etapa del proceso con actualizaciones en tiempo real'
    },
    {
      icon: <Target size={48} strokeWidth={1.5} />,
      title: 'Soluciones especializadas',
      description: 'Manejo certificado DG, Pharma y temperatura controlada con cumplimiento normativo'
    }
  ];

  const services = [
    {
      title: 'Carga General / General Cargo',
      description: 'Gestión completa de envíos comerciales con rutas optimizadas y frecuencias flexibles. Ideal para mercancía estándar que requiere tiempos de tránsito reducidos.',
      examples: [
        'Productos manufacturados y componentes industriales',
        'Textiles y prendas de vestir con deadlines ajustados',
        'Electrónica de consumo y dispositivos tecnológicos',
        'Muestras comerciales y prototipos para ferias internacionales'
      ]
    },
    {
      title: 'Carga Peligrosa / Dangerous Goods (DG Shipments)',
      description: 'Manejo certificado de mercancías peligrosas con personal capacitado según normativas IATA. Cumplimiento estricto de regulaciones internacionales.',
      examples: [
        'Baterías de litio y equipos electrónicos con componentes DG',
        'Productos químicos clasificados según UN (ONU)',
        'Materiales inflamables y corrosivos con embalaje especializado',
        'Documentación DGD completa y etiquetado IATA conforme'
      ]
    },
    {
      title: 'Carga Proyecto / Project Cargo',
      description: 'Soluciones para carga sobredimensionada y fuera de medida (oversize & out-of-gauge). Planificación detallada y coordinación multiequipo.',
      examples: [
        'Maquinaria industrial pesada y equipamiento minero',
        'Componentes de energías renovables (palas eólicas, paneles)',
        'Estructuras metálicas de gran tamaño',
        'Estudios de viabilidad y charters dedicados'
      ]
    },
    {
      title: 'Carga en Tránsito / Bonded Cargo',
      description: 'Gestión de carga bajo régimen de tránsito aduanero sin nacionalización. Optimización de tiempos y costos en operaciones multi-país.',
      examples: [
        'Mercancía en tránsito hacia destinos finales mediterráneos',
        'Consolidación en hubs estratégicos (Miami, Panamá)',
        'Reducción de costos arancelarios y tiempos de desaduanaje'
      ]
    },
    {
      title: 'Just-in-Time (JIT)',
      description: 'Operaciones sincronizadas con tu línea de producción. Entregas precisas que evitan costos de almacenaje y optimizan capital de trabajo.',
      examples: [
        'Componentes automotrices para líneas de ensamblaje',
        'Repuestos críticos para industria minera y manufactura',
        'Insumos farmacéuticos para producción continua',
        'Coordinación con tus sistemas ERP/WMS'
      ]
    },
    {
      title: 'Carga Perecedera / Pharmaceutical & Reefer',
      description: 'Transporte de productos farmacéuticos y perecederos con control de temperatura validado. Cadena de frío certificada.',
      examples: [
        'Vacunas y medicamentos con validación ATP/FEU',
        'Productos biológicos y muestras clínicas',
        'Alimentos y productos agrícolas de alto valor',
        'Data loggers y monitoreo continuo de temperatura'
      ]
    },
    {
      title: 'Charter / Vuelos Dedicados',
      description: 'Vuelos exclusivos para cargas críticas que requieren salida inmediata. Máxima flexibilidad y control total del proceso.',
      examples: [
        'Emergencias mineras y paradas de planta',
        'Equipamiento médico urgente',
        'Proyectos con deadlines no negociables',
        'Cotización y disponibilidad en menos de 4 horas'
      ]
    },
    {
      title: 'Courier Internacional',
      description: 'Entregas rápidas puerta a puerta para documentos y paquetes pequeños. Ideal para muestras, contratos y envíos urgentes.',
      examples: [
        'Documentos legales y contratos internacionales',
        'Muestras de producto para clientes y ferias',
        'Repuestos pequeños de alta criticidad',
        'Tracking door-to-door con POD digital'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileCheck size={40} />,
      title: 'Cotización',
      description: 'Solicitud de tarifa con análisis de rutas y opciones de tránsito',
      duration: '24 horas'
    },
    {
      icon: <Package size={40} />,
      title: 'Planificación',
      description: 'Coordinación de recolección, booking y documentación requerida',
      duration: '48-72 horas'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Ejecución',
      description: 'Embarque, tránsito con tracking 24/7 y gestión proactiva',
      duration: 'Variable según ruta'
    },
    {
      icon: <Zap size={40} />,
      title: 'Entrega',
      description: 'Desaduanaje, última milla y feedback post-operación',
      duration: '24-48 horas'
    }
  ];

  const faqs = [
    {
      question: '¿Qué tipos de cargas admite el servicio aéreo?',
      answer: 'Admitimos todo tipo de carga: general cargo, mercancías peligrosas (DG) con certificación IATA, productos farmacéuticos con control de temperatura, carga proyecto (oversize), y carga perecedera. Cada tipo requiere documentación específica y cumplimiento de regulaciones internacionales.'
    },
    {
      question: '¿Cuánto tarda un envío aéreo típico entre Asia y Sudamérica?',
      answer: 'El tiempo de tránsito directo es de 2-4 días dependiendo del origen/destino específico. Rutas con conexión pueden tomar 5-7 días. Esto incluye vuelo, conexiones, y desaduanaje. Ofrecemos opciones express con vuelos directos para reducciones de hasta 50% del tiempo estándar.'
    },
    {
      question: '¿Ofrecen manejo de mercancías peligrosas?',
      answer: 'Sí, contamos con certificación y personal capacitado para manejo de DG según IATA. Manejamos baterías de litio, productos químicos clasificados UN, materiales inflamables y corrosivos. Incluimos asesoría en embalaje, etiquetado y documentación DGD (Dangerous Goods Declaration).'
    },
    {
      question: '¿Cómo funciona el seguimiento en tiempo real?',
      answer: 'A través de nuestro portal WebTracking accedes a tu panel personalizado con ubicación GPS por etapas, documentos digitales (AWB, Invoice, Packing List), notificaciones automáticas en hitos clave, y reportes de performance. Disponible 24/7 desde cualquier dispositivo.'
    },
    {
      question: '¿Qué documentación debo preparar para exportar vía aérea?',
      answer: 'Documentos básicos: Invoice comercial, Packing List, y Certificado de Origen (si aplica). Para DG: DGD y MSDS. Para productos regulados: permisos sanitarios, fitosanitarios, o autorizaciones específicas. Nuestro equipo te asesora en cada requisito según origen/destino y tipo de mercancía.'
    },
    {
      question: '¿Qué ventajas ofrece el servicio Just-in-Time?',
      answer: 'El servicio JIT elimina costos de almacenaje, reduce capital inmovilizado en inventario, y sincroniza entregas con tu producción. Coordinamos con tus sistemas ERP/WMS para entregas programadas con precisión de horas, ideal para industria automotriz, minera y farmacéutica.'
    },
    {
      question: '¿Ofrecen vuelos charter o dedicados?',
      answer: 'Sí, para cargas críticas que requieren salida inmediata (emergencias mineras, equipamiento médico urgente, proyectos con deadlines no negociables) gestionamos charters dedicados. Cotización de disponibilidad en menos de 4 horas, con máxima flexibilidad de ruta y horario.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transporte Aéreo - Velocidad y Trazabilidad Global | Seemann Group</title>
        <meta
          name="description"
          content="Servicio de transporte aéreo internacional: General Cargo, DG, Project Cargo, JIT, Pharma. Tracking 24/7 y respuesta en 24h. Cobertura global con +100 destinos."
        />
        <meta property="og:title" content="Transporte Aéreo - Seemann Group" />
        <meta property="og:description" content="Soluciones de transporte aéreo con tracking 24/7, manejo de carga peligrosa, pharmaceutical y project cargo. 35+ años de experiencia." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://seemanngroup.com/servicios/transporte-aereo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Transporte Aéreo",
            "description": "Gestión integral de transporte aéreo internacional: general cargo, carga peligrosa, project cargo, charter y courier. Seguimiento 24/7 y soluciones a medida.",
            "provider": {
              "@type": "Organization",
              "name": "Seemann Group",
              "url": "https://seemanngroup.com"
            },
            "serviceType": "Freight Forwarding",
            "areaServed": ["CL", "PE", "AR", "US", "CN"],
            "url": "https://seemanngroup.com/servicios/transporte-aereo"
          })}
        </script>
      </Helmet>

      <ServiceHero
        title="Transporte Aéreo: Velocidad, Trazabilidad y Flexibilidad"
        subtitle="Reducción de tiempos de tránsito mediante rutas optimizadas y control en tiempo real. Soluciones para carga general, DG, pharma y project cargo."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=900&fit=crop"
        icon={<Plane size={64} strokeWidth={1.5} />}
        ctaPrimary={{ text: 'Solicitar cotización', link: '/contacto' }}
        ctaSecondary={{ text: 'Ver WebTracking', link: '#webtracking' }}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">¿Por qué elegir nuestro servicio aéreo?</h2>
              <p className="lead text-muted mb-4">
                Dada la naturaleza del transporte aéreo, donde el plazo de entrega resulta ser el factor fundamental, nuestro servicio se caracteriza por una <strong>oportuna y proactiva gestión de las operaciones</strong>.
              </p>
              <p className="mb-4">
                Analizamos diversas opciones de embarque, garantizando una mayor frecuencia de salida y flexibilidad en el tránsito, que nos permitirá obtener un menor tiempo de tránsito, <strong>garantizando el éxito de los negocios en los cuales nos involucramos</strong>.
              </p>
              <p className="mb-0">
                Dado que nuestra propuesta se basa en la <strong>individualización de los clientes</strong>, nuestro servicio siempre buscará y presentará alternativas para los tránsitos, que permita el establecimiento de soluciones adaptadas a cada una las distintas realidades de las diversas industrias.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/1203.jpg"
                alt="Cargo aéreo internacional"
                className="img-fluid rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} title="Nuestro proceso de trabajo" />

      <ServiceAccordion
        title="Servicios que ofrecemos en transporte aéreo"
        items={services}
      />

      <WebTrackingMock />

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">35+ años conectando el mundo</h2>
              <div className="row g-4 mb-5">
                <div className="col-md-4">
                  <div className="metric-card">
                    <div className="metric-value">+100</div>
                    <div className="metric-label">Destinos Globales</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="metric-card">
                    <div className="metric-value">+10K</div>
                    <div className="metric-label">Envíos Anuales</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="metric-card">
                    <div className="metric-value">98%</div>
                    <div className="metric-label">On-time Delivery</div>
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
          <h2 className="mb-4">¿Listo para optimizar tus envíos aéreos?</h2>
          <p className="lead mb-4">
            Obtén una cotización personalizada y descubre cómo podemos reducir tus tiempos de tránsito
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

export default TransporteAereo;
