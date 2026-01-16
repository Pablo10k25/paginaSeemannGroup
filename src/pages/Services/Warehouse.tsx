import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Warehouse as WarehouseIcon, Package, BarChart3, FileCheck, Rocket, Zap } from 'lucide-react';
import ServiceHero from '../../components/Services/ServiceHero';
import FeatureGrid from '../../components/Services/FeatureGrid';
import ServiceAccordion from '../../components/Services/ServiceAccordion';
import ProcessSteps from '../../components/Services/ProcessSteps';
import WebTrackingMock from '../../components/Services/WebTrackingMock';
import FAQAccordion from '../../components/Services/FAQAccordion';

const Warehouse = () => {
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
        service_name: 'Warehouse & Fulfillment',
        service_slug: 'warehouse'
      });
    }
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <WarehouseIcon size={48} strokeWidth={1.5} />,
      title: 'Almacenaje estratégico',
      description: 'Ubicaciones en puertos y aeropuertos clave con acceso 24/7 y seguridad perimetral'
    },
    {
      icon: <BarChart3 size={48} strokeWidth={1.5} />,
      title: 'Control de inventario',
      description: 'WMS (Warehouse Management System) con visibilidad en tiempo real de tu stock'
    },
    {
      icon: <Package size={48} strokeWidth={1.5} />,
      title: 'Pick & Pack',
      description: 'Servicios de fulfillment, repacking e inspección de mercancía'
    }
  ];

  const services = [
    {
      title: 'Almacenaje de mercancía',
      description: 'Espacios seguros en almacenes estratégicamente ubicados cerca de puertos y aeropuertos principales. Tarifas por m³ o pallet según volumen.',
      examples: [
        'Almacenaje temporal (1-90 días) y de larga estadía (+3 meses)',
        'Almacenes con certificación ISO y seguridad 24/7',
        'Control de temperatura y humedad para carga sensible',
        'Seguro todo riesgo incluido en tarifas',
        'Acceso a inventario via WebTracking en tiempo real'
      ]
    },
    {
      title: 'Control de inventario / WMS',
      description: 'Sistema de gestión de almacén (WMS) integrado con tu ERP. Visibilidad completa de entradas, salidas y stock disponible.',
      examples: [
        'Dashboard con inventario actualizado en tiempo real',
        'Reportes de rotación, aging y stock mínimo',
        'Alertas automáticas de reposición',
        'Integración API con tu sistema ERP/SAP',
        'Trazabilidad por lote, serial number o SKU',
        'Generación automática de órdenes de compra'
      ]
    },
    {
      title: 'Inspección de mercancía',
      description: 'Verificación física de cantidad, calidad y condiciones de empaque pre-embarque o post-arribo.',
      examples: [
        'Conteo de unidades y verificación vs. packing list',
        'Inspección de daños, defectos o no conformidades',
        'Fotografías detalladas de carga y embalaje',
        'Reporte de inspección con evidencia digital',
        'Ideal para compras a proveedores nuevos (quality control)'
      ]
    },
    {
      title: 'Repacking / Reembalaje',
      description: 'Servicios de reacondicionamiento de carga, cambio de embalaje o consolidación de múltiples proveedores.',
      examples: [
        'Re-etiquetado con códigos de barras o SKU',
        'Cambio de cajas master para optimizar cubicaje',
        'Paletizado según normas de destino (ISPM-15)',
        'Strech film, zuncho y refuerzo de embalaje',
        'Consolidación de órdenes de múltiples proveedores en origen'
      ]
    },
    {
      title: 'Servicios 4PL / Fulfillment',
      description: 'Gestión integral de tu cadena de suministro. Administramos inventarios, órdenes, picking, packing y distribución.',
      examples: [
        'Recepción de órdenes via EDI/API',
        'Picking & packing según especificaciones',
        'Integración con plataformas e-commerce (Shopify, WooCommerce)',
        'Distribución last-mile coordinada',
        'KPIs y dashboards de performance logística',
        'Optimización de costos mediante análisis de datos'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <FileCheck size={40} />,
      title: 'Cotización',
      description: 'Análisis de volumetría, tipo de carga y servicios requeridos',
      duration: '24 horas'
    },
    {
      icon: <Package size={40} />,
      title: 'Recepción',
      description: 'Arribo a warehouse, inspección de entrada y registro en WMS',
      duration: '24-48 horas'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Almacenaje',
      description: 'Ubicación, control de inventario y servicios value-added',
      duration: 'Según necesidad'
    },
    {
      icon: <Zap size={40} />,
      title: 'Despacho',
      description: 'Picking, packing, carga y coordinación de entrega',
      duration: '24-48 horas'
    }
  ];

  const faqs = [
    {
      question: '¿En qué ubicaciones tienen almacenes?',
      answer: 'Contamos con almacenes propios y aliados en puertos/aeropuertos clave: Valparaíso, San Antonio (Chile), Callao (Perú), Buenos Aires (Argentina), Los Angeles, Miami (USA), Shanghai, Ningbo (China). Todos con certificación ISO, seguridad 24/7 y WMS integrado.'
    },
    {
      question: '¿Cómo se cobra el almacenaje?',
      answer: 'Tarifa por m³ o por pallet según volumen y tiempo de estadía. Primeros 7-15 días suelen estar incluidos en flete marítimo (free time). Después se cobra por día o semana. Para contratos de largo plazo (+3 meses) ofrecemos tarifas preferenciales con servicios 4PL incluidos.'
    },
    {
      question: '¿Puedo ver mi inventario en tiempo real?',
      answer: 'Sí, a través de tu portal WebTracking accedes a dashboard con inventario actualizado en tiempo real: stock disponible, ubicación física en warehouse, entradas/salidas, aging de mercancía, y reportes personalizados. Integración API disponible para conectar con tu ERP.'
    },
    {
      question: '¿Ofrecen servicios de fulfillment para e-commerce?',
      answer: 'Sí, ofrecemos servicios 4PL completos: recepción de inventario, almacenaje, picking & packing según órdenes, integración con Shopify/WooCommerce/Mercado Libre, y coordinación de última milla. Ideal para empresas que venden online y necesitan outsourcing logístico.'
    },
    {
      question: '¿Qué incluye el servicio de inspección de mercancía?',
      answer: 'Inspección física completa: conteo de unidades vs. packing list, verificación de calidad, detección de daños o no conformidades, fotografías detalladas, y reporte digital con evidencia. Ideal para compras a proveedores nuevos o mercancía de alto valor. Se realiza pre-embarque o post-arribo.'
    },
    {
      question: '¿Pueden consolidar carga de múltiples proveedores?',
      answer: 'Sí, uno de nuestros servicios principales. Recibimos mercancía de tus diferentes proveedores en nuestro warehouse en origen (ej. Shanghai), inspeccionamos, re-embalamos si necesario, consolidamos en un contenedor único, y enviamos a destino. Reduces costos de flete y optimizas cubicaje.'
    },
    {
      question: '¿Qué es un servicio 4PL y cuándo conviene?',
      answer: '4PL (Fourth Party Logistics) es cuando outsourceas toda tu operación logística: gestionamos proveedores, inventarios, almacenaje, distribución y KPIs. Conviene cuando necesitas focus en ventas/marketing y prefieres dejar logística a expertos. Incluye WMS, análisis de datos y optimización continua.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Warehouse & Fulfillment - Almacenaje y Gestión 4PL | Seemann Group</title>
        <meta
          name="description"
          content="Servicios de warehouse, control de inventario WMS, inspección, repacking y fulfillment 4PL. Almacenes en puertos clave con visibilidad 24/7."
        />
        <link rel="canonical" href="https://seemanngroup.com/servicios/warehouse" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Warehouse & Fulfillment",
            "description": "Almacenaje estratégico con WMS, control de inventario, inspección, repacking y servicios 4PL para optimización logística.",
            "provider": {
              "@type": "Organization",
              "name": "Seemann Group",
              "url": "https://seemanngroup.com"
            },
            "serviceType": "Freight Forwarding",
            "areaServed": ["CL", "PE", "AR", "US", "CN"],
            "url": "https://seemanngroup.com/servicios/warehouse"
          })}
        </script>
      </Helmet>

      <ServiceHero
        title="Warehouse & Fulfillment: Almacenaje Estratégico 24/7"
        subtitle="Control de inventario en tiempo real, servicios 4PL y fulfillment para generar ventajas competitivas en tu industria."
        backgroundImage="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&h=900&fit=crop"
        icon={<WarehouseIcon size={64} strokeWidth={1.5} />}
      />

      <FeatureGrid features={features} columns={3} />

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Ventajas competitivas mediante gestión logística</h2>
              <p className="lead text-muted mb-4">
                Actualmente contamos con una <strong>amplia cobertura de warehouse a nivel mundial</strong>, que le otorgará a nuestros clientes la capacidad de almacenar y consolidar carga en los diversos puertos y/o aeropuertos, con el objetivo de optimizar cada logística.
              </p>
              <p className="mb-4">
                Seemann ofrece la posibilidad de establecer una <strong>administración de inventarios en nuestros almacenes</strong>, permitiendo entregar servicios de <strong>4PL</strong>, permitiendo generar <strong>ventajas competitivas</strong> a nuestros clientes en sus respectivas industrias.
              </p>
              <p className="mb-0">
                Nuestro sistema WMS te permite <strong>visibilidad en tiempo real</strong> de tu stock, con reportes automatizados, alertas de reposición y dashboards personalizados para toma de decisiones informada.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/im3.png"
                alt="Almacén moderno con gestión de inventario"
                className="img-fluid rounded shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps steps={processSteps} title="Proceso de warehouse & fulfillment" />

      <ServiceAccordion
        title="Servicios que ofrecemos en warehouse"
        items={services}
      />

      <WebTrackingMock />

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Infraestructura logística global</h2>
              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">15+</div>
                    <div className="metric-label">Warehouses Globales</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">50K+</div>
                    <div className="metric-label">m² Almacenaje</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">99.8%</div>
                    <div className="metric-label">Accuracy Rate</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="metric-card">
                    <div className="metric-value">24/7</div>
                    <div className="metric-label">Operación Continua</div>
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
          <h2 className="mb-4">¿Listo para optimizar tu almacenaje e inventario?</h2>
          <p className="lead mb-4">
            Descubre cómo nuestros servicios 4PL pueden generar ventajas competitivas
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

export default Warehouse;
