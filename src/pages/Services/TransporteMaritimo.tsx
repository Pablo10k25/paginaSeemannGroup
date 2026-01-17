import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Ship, Anchor, DollarSign, Globe, FileCheck, Package, Rocket, Zap } from 'lucide-react';
import ServiceHero from '../../components/Services/ServiceHero';
import FeatureGrid from '../../components/Services/FeatureGrid';
import ServiceAccordion from '../../components/Services/ServiceAccordion';
import ProcessSteps from '../../components/Services/ProcessSteps';
import WebTrackingMock from '../../components/Services/WebTrackingMock';
import FAQAccordion from '../../components/Services/FAQAccordion';

const TransporteMaritimo = () => {
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
        service_name: 'Transporte Marítimo',
        service_slug: 'transporte-maritimo'
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <DollarSign size={48} strokeWidth={1.5} />,
      title: 'Tarifas competitivas',
      description: 'Negociación directa con navieras para obtener las mejores condiciones comerciales y días libres'
    },
    {
      icon: <Globe size={48} strokeWidth={1.5} />,
      title: 'Cobertura mundial',
      description: 'Posicionamiento en puertos principales y secundarios con agentes certificados'
    },
    {
      icon: <Anchor size={48} strokeWidth={1.5} />,
      title: 'FCL y LCL',
      description: 'Soluciones para contenedores completos y carga consolidada con máxima flexibilidad'
    }
  ];

  const services = [
    {
      title: 'Full Container Load (FCL)',
      description: 'Servicio de contenedor completo (20\', 40\', 40\' HC, 45\') con reserva directa en navieras principales. Ideal para volúmenes consolidados.',
      examples: [
        'Contenedores secos estándar (Dry Van) 20\'/40\'/40\'HC',
        'Contenedores High Cube para cargas de gran volumen',
        'Open Top para maquinaria y cargas especiales',
        'Flat Rack para carga sobredimensionada',
        'Negociación de contratos anuales con tarifas preferentes'
      ]
    },
    {
      title: 'Less Container Load (LCL) / Carga Consolidada',
      description: 'Consolidación de carga para volúmenes menores a un contenedor completo. Salidas semanales en rutas principales.',
      examples: [
        'Cargas desde 1 m³ con tarifas por volumen/peso',
        'Consolidación en hubs estratégicos (Shanghai, Hamburg, Miami)',
        'Coordinación de múltiples proveedores en origen',
        'Desconsolidación y distribución en destino',
        'Seguro de carga puerta a puerta disponible'
      ]
    },
    {
      title: 'Roll-on/Roll-off (RoRo)',
      description: 'Transporte de vehículos y maquinaria rodante. Carga y descarga sin grúas mediante rampas especializadas.',
      examples: [
        'Vehículos, camiones, buses y maquinaria agrícola',
        'Equipamiento minero sobre ruedas',
        'Grúas móviles y maquinaria de construcción',
        'Gestión de documentación vehicular y permisos',
        'Rutas especializadas RoRo a Sudamérica y Oceanía'
      ]
    },
    {
      title: 'Break Bulk (BB) / Carga Proyecto',
      description: 'Manejo de carga suelta no containerizable. Soluciones para project cargo y cargas fuera de medida estándar.',
      examples: [
        'Estructuras metálicas y vigas de gran tamaño',
        'Maquinaria industrial que excede dimensiones de contenedor',
        'Componentes de plantas industriales y energía',
        'Estudio de estiba, trincado y plan de carga',
        'Coordinación con grúas especializadas y transporte terrestre'
      ]
    },
    {
      title: 'Cargas en Tránsito / Bonded Cargo',
      description: 'Gestión de mercancía bajo régimen de tránsito aduanero internacional. Operaciones multi-país sin nacionalización intermedia.',
      examples: [
        'Transbordo en puertos intermedios (Panamá, Callao)',
        'Carga en tránsito hacia países mediterráneos',
        'Optimización de rutas y reducción de costos arancelarios',
        'Coordinación entre aduanas de múltiples jurisdicciones'
      ]
    },
    {
      title: 'Full Container Reefer / Contenedores Refrigerados',
      description: 'Transporte de carga que requiere temperatura controlada. Monitoreo continuo durante todo el tránsito marítimo.',
      examples: [
        'Productos farmacéuticos y químicos sensibles',
        'Alimentos congelados y productos del mar',
        'Frutas y vegetales con cadena de frío',
        'Flores y productos agrícolas de exportación',
        'Data loggers y certificación de temperatura ATP/FEU',
        'Contenedores 20\' y 40\' Reefer High Cube'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileCheck size={40} />,
      title: 'Cotización',
      description: 'Análisis de ruta, naviera y condiciones comerciales',
      duration: '24-48 horas'
    },
    {
      icon: <Package size={40} />,
      title: 'Booking',
      description: 'Reserva de espacio, coordinación de recolección y documentación',
      duration: '2-5 días'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Embarque',
      description: 'Stuffing, emisión BL, tracking durante tránsito marítimo',
      duration: '15-45 días según ruta'
    },
    {
      icon: <Zap size={40} />,
      title: 'Desaduanaje',
      description: 'Arribo a puerto, despacho aduanero y entrega final',
      duration: '3-7 días'
    }
  ];

  const faqs = [
    {
      question: '¿Qué diferencia hay entre FCL y LCL?',
      answer: 'FCL (Full Container Load) es cuando reservas un contenedor completo para tu carga (20\' o 40\'). LCL (Less Container Load) es cuando tu carga no llena un contenedor completo, por lo que se consolida con carga de otros clientes. FCL es más económico para volúmenes grandes (+15m³), mientras que LCL es ideal para cargas pequeñas (1-14m³).'
    },
    {
      question: '¿Cuánto tarda un envío marítimo entre Asia y Sudamérica?',
      answer: 'Ruta China-Chile (puerto a puerto): 28-35 días típicamente. Rutas con transbordo pueden tomar 35-45 días. El tiempo total incluye tránsito marítimo, posibles transbordos, y desaduanaje. Ofrecemos servicios directos y con conexión según disponibilidad de navieras y optimización de costos.'
    },
    {
      question: '¿Qué documentos necesito para exportar/importar vía marítima?',
      answer: 'Documentos esenciales: Invoice Comercial, Packing List, Bill of Lading (BL), Certificado de Origen (si aplica SGP/TLC). Para productos regulados: permisos sanitarios, fitosanitarios, registro de importador. Nuestro equipo verifica y gestiona toda la documentación pre-embarque.'
    },
    {
      question: '¿Ofrecen servicio de consolidación y desconsolidación?',
      answer: 'Sí, contamos con almacenes en puertos clave (Shanghai, Los Angeles, Valparaíso, Callao) donde consolidamos múltiples proveedores en origen y desconsolidamos para distribución en destino. Incluye inspección de carga, repacking si necesario, y coordinación de última milla.'
    },
    {
      question: '¿Qué incluye el servicio de transporte marítimo?',
      answer: 'Servicio integral: negociación de tarifa con naviera, booking de espacio, coordinación de recolección, emisión de BL, tracking 24/7, desaduanaje en destino, y entrega final. También gestionamos días libres en puerto, drop-off en puntos específicos, y seguros de carga.'
    },
    {
      question: '¿Manejan carga refrigerada (Reefer)?',
      answer: 'Sí, ofrecemos contenedores Reefer 20\' y 40\' HC con control de temperatura -25°C a +25°C. Monitoreo continuo con data loggers, certificación ATP/FEU, y coordinación de plug-in en puerto. Ideal para pharma, alimentos congelados, flores y productos del mar.'
    },
    {
      question: '¿Qué es el servicio Break Bulk y cuándo se usa?',
      answer: 'Break Bulk es para carga que no cabe en contenedor estándar: maquinaria industrial, estructuras metálicas, componentes de plantas. Incluye estudio de estiba, plan de trincado, coordinación de grúas especializadas, y gestión de permisos para carga sobredimensionada.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transporte Marítimo - FCL, LCL, RoRo y Break Bulk | Seemann Group</title>
        <meta
          name="description"
          content="Servicio de transporte marítimo internacional: FCL, LCL, RoRo, Break Bulk, Reefer. Negociación directa con navieras. Cobertura global con días libres optimizados."
        />
        <link rel="canonical" href="https://seemanngroup.com/servicios/transporte-maritimo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Transporte Marítimo",
            "description": "Gestión integral de transporte marítimo: FCL, LCL, RoRo, Break Bulk y Reefer. Negociación contractual, días libres optimizados y emisión oportuna de documentos.",
            "provider": {
              "@type": "Organization",
              "name": "Seemann Group",
              "url": "https://seemanngroup.com"
            },
            "serviceType": "Freight Forwarding",
            "areaServed": ["CL", "PE", "AR", "BR", "US", "CN", "EU"],
            "url": "https://seemanngroup.com/servicios/transporte-maritimo"
          })}
        </script>
      </Helmet>

      <ServiceHero
        title="Transporte Marítimo: Capacidad y Economía en Océanos"
        subtitle="Negociación directa con navieras para tarifas competitivas y mejores condiciones: días libres, drop-off específico y emisión oportuna de documentos."
        backgroundImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&h=900&fit=crop"
        icon={<Ship size={64} strokeWidth={1.5} />}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Eficacia y optimización de recursos</h2>
              <p className="lead text-muted mb-4">
                Los mercados hoy en día buscan el transporte marítimo por la fuerte vocación de obtener <strong>eficacia en las operaciones</strong>, buscando optimizar los recursos involucrados en cada una de éstas.
              </p>
              <p className="mb-4">
                Nuestra empresa se compromete a una <strong>fuerte negociación sobre los contratos de transporte marítimo</strong>, buscando alcanzar no sólo la tarifa más competitiva, sino también el otorgar las mejores condiciones para este tipo de operaciones en tópicos tales como <strong>días libres en destino, drop off en puntos específicos, emisión de documentos en destino de manera oportuna</strong>, etc.
              </p>
              <p className="mb-0">
                Nuestra <strong>cobertura a nivel mundial</strong> nos ha permitido establecer posiciones en cada uno de los puertos de embarque o destino que se nos solicite, estableciendo un servicio tanto para <strong>full container, como carga consolidada</strong>.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/Imagen Transporte Marítimo.png"
                alt="Contenedores en puerto marítimo"
                className="img-fluid rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} title="Proceso de transporte marítimo" />

      <ServiceAccordion
        title="Servicios que ofrecemos en transporte marítimo"
        items={services}
      />

      <WebTrackingMock />

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Líderes en transporte marítimo</h2>
              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">+50</div>
                    <div className="metric-label">Puertos Operativos</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">15K+</div>
                    <div className="metric-label">TEUs Anuales</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">20+</div>
                    <div className="metric-label">Navieras Partners</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">97%</div>
                    <div className="metric-label">On-time Arrivals</div>
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
          <h2 className="mb-4">¿Listo para optimizar tus envíos marítimos?</h2>
          <p className="lead mb-4">
            Obtén tarifas competitivas y mejores condiciones comerciales con nuestro equipo
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

export default TransporteMaritimo;
