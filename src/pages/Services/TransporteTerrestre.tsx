import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Truck, MapPin, Clock, Shield, FileCheck, Package, Rocket, Zap } from 'lucide-react';

import ServiceHero from '../../components/Services/ServiceHero';
import FeatureGrid from '../../components/Services/FeatureGrid';
import ServiceAccordion from '../../components/Services/ServiceAccordion';
import ProcessSteps from '../../components/Services/ProcessSteps';
import WebTrackingMock from '../../components/Services/WebTrackingMock';
import FAQAccordion from '../../components/Services/FAQAccordion';

const TransporteTerrestre = () => {
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
        service_name: 'Transporte Terrestre',
        service_slug: 'transporte-terrestre'
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <MapPin size={48} strokeWidth={1.5} />,
      title: 'Cobertura regional',
      description: 'Alianzas estratégicas con transportistas locales en toda Sudamérica y Norteamérica'
    },
    {
      icon: <Shield size={48} strokeWidth={1.5} />,
      title: 'Carga segura',
      description: 'Vehículos equipados con GPS, seguros de carga y protocolos de seguridad certificados'
    },
    {
      icon: <Clock size={48} strokeWidth={1.5} />,
      title: 'Entrega oportuna',
      description: 'Monitoreo en tiempo real y coordinación proactiva para cumplir tus deadlines'
    }
  ];

  const services = [
    {
      title: 'Less than Truck Load (LTL)',
      description: 'Servicio de carga parcial para volúmenes que no requieren un camión completo. Ideal para envíos regulares de menor tamaño.',
      examples: [
        'Cargas desde 100 kg hasta 10 toneladas',
        'Consolidación de múltiples clientes en rutas fijas',
        'Salidas diarias en corredores principales',
        'Tarifa por peso/volumen con prorrateo',
        'Entregas urbanas y distribución local'
      ]
    },
    {
      title: 'Full Truck Load (FTL)',
      description: 'Camión completo dedicado para tu carga. Máxima velocidad y seguridad sin consolidación con terceros.',
      examples: [
        'Camiones de 28 toneladas (capacidad estándar)',
        'Tractocamiones con semiremolque (33 toneladas)',
        'Servicio directo puerta a puerta sin transbordos',
        'Ideal para cargas frágiles o de alto valor',
        'Tracking GPS en tiempo real durante todo el trayecto'
      ]
    },
    {
      title: 'Roll-on/Roll-off (RoRo)',
      description: 'Transporte terrestre de vehículos y maquinaria rodante. Carga mediante conducción sin necesidad de grúas.',
      examples: [
        'Vehículos ligeros y pesados (autos, camiones, buses)',
        'Maquinaria agrícola y de construcción sobre ruedas',
        'Equipamiento minero autopropulsado',
        'Gestión de permisos de circulación y escoltas',
        'Rutas especializadas para cargas sobredimensionadas'
      ]
    },
    {
      title: 'Break Bulk (BB) / Carga Proyecto',
      description: 'Transporte de carga suelta no containerizada que requiere manejo especializado y planificación detallada.',
      examples: [
        'Maquinaria industrial de gran tamaño',
        'Estructuras metálicas y vigas',
        'Componentes para minería y construcción',
        'Coordinación de camas bajas y plataformas especiales',
        'Permisos especiales y escoltas de ruta'
      ]
    },
    {
      title: 'Cargas en Tránsito / Bonded Cargo',
      description: 'Gestión de mercancía en régimen de tránsito internacional terrestre. Operaciones cross-border optimizadas.',
      examples: [
        'Tránsito aduanero Chile-Argentina-Brasil',
        'Mercosur y Comunidad Andina',
        'Coordinación de DTA (Declaración de Tránsito Aduanero)',
        'Precinto aduanero y escolta cuando requerido',
        'Reducción de tiempos en fronteras'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileCheck size={40} />,
      title: 'Cotización',
      description: 'Análisis de ruta, tipo de vehículo y condiciones de carga',
      duration: '12-24 horas'
    },
    {
      icon: <Package size={40} />,
      title: 'Coordinación',
      description: 'Programación de recolección y preparación de documentación',
      duration: '24-48 horas'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Transporte',
      description: 'Recolección, tránsito con GPS tracking y gestión proactiva',
      duration: 'Variable según distancia'
    },
    {
      icon: <Zap size={40} />,
      title: 'Entrega',
      description: 'Descarga en destino final y POD (Proof of Delivery)',
      duration: 'Según coordinación'
    }
  ];

  const faqs = [
    {
      question: '¿Qué diferencia hay entre LTL y FTL?',
      answer: 'LTL (Less than Truck Load) es cuando tu carga no llena un camión completo, por lo que se consolida con otros clientes. FTL (Full Truck Load) es un camión dedicado solo para tu carga. FTL es más rápido (sin paradas intermedias) y seguro, ideal para +10 toneladas. LTL es más económico para volúmenes pequeños.'
    },
    {
      question: '¿Qué cobertura geográfica tienen?',
      answer: 'Cobertura completa en Chile, Perú, Argentina, Bolivia, Paraguay, Uruguay y Brasil mediante alianzas con transportistas certificados. También gestionamos rutas México-USA y Centroamérica. Cada aliado cumple nuestros estándares de seguridad, GPS tracking y seguros de carga.'
    },
    {
      question: '¿Ofrecen seguimiento GPS en tiempo real?',
      answer: 'Sí, todos nuestros transportes cuentan con GPS tracking que puedes consultar en tu portal WebTracking. Actualizaciones cada 30 minutos durante el tránsito, alertas en puntos clave (frontera, aduana, entrega), y notificaciones automáticas vía email/SMS.'
    },
    {
      question: '¿Qué documentación se requiere para transporte terrestre internacional?',
      answer: 'Documentos básicos: Invoice Comercial, Packing List, DTA (Declaración de Tránsito Aduanero), Carta Porte CMR/CRT. Para productos regulados: certificados sanitarios, fitosanitarios, permisos especiales. Nuestro equipo gestiona toda la documentación pre-embarque.'
    },
    {
      question: '¿Cómo manejan las cargas sobredimensionadas?',
      answer: 'Para carga sobredimensionada (maquinaria, estructuras) gestionamos permisos de circulación, escoltas obligatorias, restricciones horarias, y coordinación con autoridades de tránsito. Evaluamos rutas, puentes y altura de cables para garantizar tránsito seguro. Incluye seguro de carga todo riesgo.'
    },
    {
      question: '¿Qué seguro de carga incluye el servicio?',
      answer: 'Nuestros transportistas tienen seguro de responsabilidad civil obligatorio. Para cargas de alto valor ofrecemos seguro todo riesgo adicional (robo, daño, accidente) con cobertura según valor declarado. Prima calculada según mercancía, ruta y condiciones específicas.'
    },
    {
      question: '¿Cuánto tarda un envío terrestre típico?',
      answer: 'Depende de la ruta: Santiago-Valparaíso (mismo día), Santiago-Buenos Aires (3-4 días), Santiago-Lima (4-5 días), Santiago-São Paulo (7-10 días). Tiempos incluyen tránsito, pasos fronterizos y aduanas. Ofrecemos servicio express con prioridad en fronteras.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transporte Terrestre - LTL, FTL, RoRo | Seemann Group</title>
        <meta
          name="description"
          content="Servicio de transporte terrestre internacional: LTL, FTL, RoRo, Break Bulk. GPS tracking 24/7, alianzas regionales y gestión de tránsito aduanero."
        />
        <link rel="canonical" href="https://seemanngroup.com/servicios/transporte-terrestre" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Transporte Terrestre",
            "description": "Alianzas con transportistas certificados para recogida y despacho de operaciones con servicio rápido y seguro.",
            "provider": {
              "@type": "Organization",
              "name": "Seemann Group",
              "url": "https://seemanngroup.com"
            },
            "serviceType": "Freight Forwarding",
            "areaServed": ["CL", "PE", "AR", "BR", "UY", "PY", "BO"],
            "url": "https://seemanngroup.com/servicios/transporte-terrestre"
          })}
        </script>
      </Helmet>

      <ServiceHero
        title="Transporte Terrestre: Conectando Destinos Continentales"
        subtitle="Alianzas estratégicas con transportistas certificados para recogida y despacho con servicio rápido, seguro y tracking en tiempo real."
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&h=900&fit=crop"
        icon={<Truck size={64} strokeWidth={1.5} />}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Servicio rápido y seguro</h2>
              <p className="lead text-muted mb-4">
                En vista que varios de los incoterms actualmente utilizados en los procesos de compra y venta de comercio exterior involucran el <strong>tránsito terrestre</strong>, hemos realizado alianzas con las diversas empresas a nivel internacional.
              </p>
              <p className="mb-4">
                Esto nos permite entregarles los servicios de <strong>recogida y/o despacho de sus operaciones</strong>, a través de un servicio rápido y seguro, que velará no sólo por la entrega de la carga de forma oportuna, sino también unas <strong>óptimas condiciones</strong> en la cual se realizará la misma.
              </p>
              <p className="mb-0">
                Todas nuestras alianzas cuentan con <strong>tracking GPS, seguros de carga certificados y protocolos de seguridad</strong> que garantizan la integridad de tu mercancía durante todo el tránsito.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/1205.jpg"
                alt="Transporte terrestre de carga"
                className="img-fluid rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} title="Proceso de transporte terrestre" />

      <ServiceAccordion
        title="Servicios que ofrecemos en transporte terrestre"
        items={services}
      />

      <WebTrackingMock />

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Red terrestre regional</h2>
              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">7</div>
                    <div className="metric-label">Países Operativos</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">8K+</div>
                    <div className="metric-label">Envíos Anuales</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">50+</div>
                    <div className="metric-label">Transportistas Partners</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">96%</div>
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
          <h2 className="mb-4">¿Listo para optimizar tu logística terrestre?</h2>
          <p className="lead mb-4">
            Obtén una cotización y descubre nuestras rutas y tiempos de entrega
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

export default TransporteTerrestre;
