import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, Clock, CheckCircle, FileCheck, Package, Rocket, Zap } from 'lucide-react';

import ServiceHero from '../../components/Services/ServiceHero';
import FeatureGrid from '../../components/Services/FeatureGrid';
import ServiceAccordion from '../../components/Services/ServiceAccordion';
import ProcessSteps from '../../components/Services/ProcessSteps';
import WebTrackingMock from '../../components/Services/WebTrackingMock';
import FAQAccordion from '../../components/Services/FAQAccordion';

const ServicioAduanas = () => {
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
        service_name: 'Servicio de Aduanas',
        service_slug: 'servicio-aduanas'
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Shield size={48} strokeWidth={1.5} />,
      title: 'Cumplimiento normativo',
      description: 'Asesoría experta en regulaciones aduaneras y clasificación arancelaria correcta'
    },
    {
      icon: <Clock size={48} strokeWidth={1.5} />,
      title: 'Despacho ágil',
      description: 'Gestión proactiva de documentación para minimizar tiempos de desaduanaje'
    },
    {
      icon: <CheckCircle size={48} strokeWidth={1.5} />,
      title: 'Agentes certificados',
      description: 'Red de agentes aduanales en puertos y aeropuertos principales'
    }
  ];

  const services = [
    {
      title: 'Clasificación Arancelaria',
      description: 'Determinación correcta del código arancelario (HTS/NCM) para evitar errores costosos y cumplir regulaciones.',
      examples: [
        'Análisis técnico de producto para clasificación precisa',
        'Consulta con aduanas para productos complejos o nuevos',
        'Minimización de aranceles mediante aprovechamiento de TLC',
        'Ruling requests para productos con clasificación ambigua',
        'Actualización ante cambios en nomenclatura arancelaria',
        'Asesoría en valoración aduanera (Método 1-6 según Acuerdo OMC)'
      ]
    },
    {
      title: 'Despacho de Importación',
      description: 'Gestión integral del proceso de nacionalización de mercancía en país de destino. Coordinación con autoridades y clientes.',
      examples: [
        'Presentación de DIN (Declaración de Importación)',
        'Pago de aranceles, IVA y tasas aplicables',
        'Coordinación de revisión documental y aforo físico',
        'Gestión de certificados y permisos especiales (SAG, ISP, SEC)',
        'Retiro de mercancía y coordinación de entrega',
        'Respuesta a observaciones y levante aduanero'
      ]
    },
    {
      title: 'Despacho de Exportación',
      description: 'Proceso completo de documentación para salida legal de mercancía desde país de origen hacia mercados internacionales.',
      examples: [
        'Emisión de DUS (Declaración Única de Salida)',
        'Obtención de Certificado de Origen (Form A, EUR1, según TLC)',
        'Visación de documentos de exportación',
        'Coordinación con aduanas de salida',
        'Gestión de reintegros y draw-back cuando aplique',
        'Asesoría en incentivos a la exportación'
      ]
    },
    {
      title: 'Regímenes Especiales',
      description: 'Gestión de regímenes suspensivos y especiales que optimizan flujo de comercio y diferimiento de impuestos.',
      examples: [
        'Admisión Temporal (muestras, ferias, reparación)',
        'Tránsito Aduanero Internacional (DTA)',
        'Depósito Aduanero para mercancía no nacionalizada',
        'Zona Franca: operaciones bajo régimen de exención',
        'Perfeccionamiento Activo (maquila, procesamiento)',
        'Reimportación de mercancías reparadas/procesadas'
      ]
    },
    {
      title: 'Consultoría y Compliance',
      description: 'Asesoría estratégica para cumplimiento aduanero, auditorías preventivas y optimización de procesos de comercio exterior.',
      examples: [
        'Auditorías de cumplimiento aduanero (compliance audit)',
        'Implementación de programas OEA (Operador Económico Autorizado)',
        'Asesoría en Incoterms y su impacto aduanero',
        'Capacitación a equipos internos en normativa aduanera',
        'Due diligence para fusiones/adquisiciones (M&A)',
        'Defensa ante fiscalizaciones aduaneras'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileCheck size={40} />,
      title: 'Revisión documental',
      description: 'Análisis de invoice, packing list, certificados y permisos requeridos',
      duration: '24 horas pre-arribo'
    },
    {
      icon: <Package size={40} />,
      title: 'Presentación DIN/DUS',
      description: 'Transmisión electrónica de declaración aduanera ante autoridad',
      duration: '24-48 horas post-arribo'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Revisión y aforo',
      description: 'Coordinación con aduana para revisión documental o física',
      duration: '1-3 días hábiles'
    },
    {
      icon: <Zap size={40} />,
      title: 'Levante y entrega',
      description: 'Retiro de mercancía nacionalizada y coordinación de entrega',
      duration: '24-48 horas post-levante'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es el servicio de aduanas y por qué es necesario?',
      answer: 'El servicio de aduanas gestiona el proceso legal de importación/exportación ante autoridades. Es obligatorio para comercio internacional: determina clasificación arancelaria, calcula impuestos, verifica cumplimiento normativo, obtiene permisos especiales, y coordina retiro de mercancía. Sin agente aduanal certificado no puedes nacionalizar carga.'
    },
    {
      question: '¿Cuánto tarda el proceso de desaduanaje?',
      answer: 'Depende del país y tipo de carga: Chile/Perú (24-72 horas típicamente), Argentina/Brasil (3-7 días). Factores que afectan: correctitud documental, aforo físico vs. documental, productos regulados que requieren permisos (SAG, ISP), y congestión portuaria. Nuestra gestión proactiva minimiza tiempos.'
    },
    {
      question: '¿Qué documentos se requieren para importar?',
      answer: 'Documentos básicos: Invoice Comercial, Packing List, BL/AWB, Certificado de Origen (si aplica TLC). Para productos regulados: permisos de SAG (agrícola), ISP (farmacéutico/alimentos), SEC (eléctricos), autorización sanitaria. Nuestro equipo te asesora en requisitos específicos según país y producto.'
    },
    {
      question: '¿Cómo se calcula el arancel a pagar?',
      answer: 'Arancel se calcula: Valor CIF (costo + flete + seguro) × Tasa arancelaria según código HTS/NCM. Además se suma IVA sobre (CIF + arancel). Existen preferencias arancelarias mediante TLC (ej. Chile-UE: 0% con Cert. Origen EUR1). Hacemos simulación de costos de nacionalización pre-embarque.'
    },
    {
      question: '¿Qué es la clasificación arancelaria y por qué es importante?',
      answer: 'Clasificación arancelaria es el código de 8-10 dígitos (HTS/NCM/TARIC) que identifica tu producto y determina: tasa de arancel aplicable, permisos requeridos, restricciones o prohibiciones, y elegibilidad para preferencias TLC. Error en clasificación puede resultar en: multas, sobrecostos, retrasos, o incautación de mercancía.'
    },
    {
      question: '¿Ofrecen asesoría para aprovechar Tratados de Libre Comercio?',
      answer: 'Sí, especialistas en TLC: Chile-UE, Chile-USA, Chile-China, Alianza Pacífico, Mercosur, etc. Analizamos cadena de valor, reglas de origen, y acumulación para determinar elegibilidad. Gestionamos Certificados de Origen (Form A, EUR1, COO) y maximizamos ahorro arancelario. Asesoría incluida sin costo adicional.'
    },
    {
      question: '¿Qué pasa si aduana retiene mi mercancía?',
      answer: 'Motivos comunes de retención: error documental, clasificación incorrecta, falta de permisos, valoración cuestionada, aforo físico discrepante. Nuestro equipo gestiona: respuesta a observaciones, presentación de documentos adicionales, corrección de errores, y coordinación con aduana para levante. Comunicación constante contigo durante proceso.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicio de Aduanas - Despacho y Compliance | Seemann Group</title>
        <meta
          name="description"
          content="Servicio de aduanas: clasificación arancelaria, despacho de importación/exportación, regímenes especiales y consultoría. Agentes certificados en puertos principales."
        />
        <link rel="canonical" href="https://seemanngroup.com/servicios/servicio-aduanas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicio de Aduanas",
            "description": "Red internacional de oficinas para asesoría en procesos aduaneros de exportación/importación. Anticipación de requisitos y documentación.",
            "provider": {
              "@type": "Organization",
              "name": "Seemann Group",
              "url": "https://seemanngroup.com"
            },
            "serviceType": "Freight Forwarding",
            "areaServed": ["CL", "PE", "AR", "BR", "UY", "PY", "BO"],
            "url": "https://seemanngroup.com/servicios/servicio-aduanas"
          })}
        </script>
      </Helmet>

      <ServiceHero
        title="Servicio de Aduanas: Cumplimiento Normativo Garantizado"
        subtitle="Red internacional de agentes certificados para asesoría en procesos aduaneros, anticipando requisitos documentales y normativos."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop"
        icon={<FileText size={64} strokeWidth={1.5} />}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Anticipación y cumplimiento normativo</h2>
              <p className="lead text-muted mb-4">
                Nuestra <strong>amplia red de oficinas a nivel internacional</strong>, nos permite asesorar a nuestros clientes en los diversos procesos de aduanas necesarios para la exportación y/o importación de bienes.
              </p>
              <p className="mb-4">
                Dicho servicio nos permitirá <strong>anticipar los requisitos necesarios a nivel documental y de packing</strong> para que las operaciones no sufran atrasos y/o problemas en las aduanas de origen o destino.
              </p>
              <p className="mb-0">
                Contamos con agentes aduanales certificados en puertos y aeropuertos principales, con expertise en <strong>clasificación arancelaria, aprovechamiento de TLC, regímenes especiales y compliance aduanero</strong>.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/Imagen Servicio de Aduanas.png"
                alt="Documentación aduanera y compliance"
                className="img-fluid rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} title="Proceso de despacho aduanero" />

      <ServiceAccordion
        title="Servicios de aduanas que ofrecemos"
        items={services}
      />

      <WebTrackingMock />

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Experiencia en compliance aduanero</h2>
              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">20K+</div>
                    <div className="metric-label">Despachos Anuales</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">12</div>
                    <div className="metric-label">Países con Agentes</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">98%</div>
                    <div className="metric-label">Levantes Sin Observación</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">35+</div>
                    <div className="metric-label">Años Experiencia</div>
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
          <h2 className="mb-4">¿Necesitas asesoría aduanera?</h2>
          <p className="lead mb-4">
            Nuestros expertos te ayudan a anticipar requisitos y evitar retrasos
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contacto" className="btn btn-light btn-lg px-5">
              Solicitar asesoría
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

export default ServicioAduanas;
