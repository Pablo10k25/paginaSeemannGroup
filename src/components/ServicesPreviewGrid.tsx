import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Plane,
  Ship,
  Truck,
  Warehouse,
  Route,
  FileText,
  ArrowRight
} from 'lucide-react';

interface ServicePreview {
  id: string;
  icon: React.ReactNode;
  image: string;
  name: string;
  oneLiner: string;
  color: string;
  link: string;
}

const ServicesPreviewGrid = () => {
  const { t } = useTranslation();

  const services: ServicePreview[] = [
    {
      id: 'air',
      icon: <Plane size={48} strokeWidth={1.5} />,
      image: '/images/Imagen Transporte Aereo.png',
      name: t('servicesPage.grid.air.title', 'Transporte Aéreo'),
      oneLiner: t('servicesPage.grid.air.oneLiner', 'Velocidad y precisión global'),
      color: '#0ea5e9',
      link: '/servicios#transporte-aereo'
    },
    {
      id: 'sea',
      icon: <Ship size={48} strokeWidth={1.5} />,
      image: '/images/Imagen Transporte Marítimo.png',
      name: t('servicesPage.grid.sea.title', 'Transporte Marítimo'),
      oneLiner: t('servicesPage.grid.sea.oneLiner', 'Capacidad y economía en océanos'),
      color: '#3b82f6',
      link: '/servicios#transporte-maritimo'
    },
    {
      id: 'land',
      icon: <Truck size={48} strokeWidth={1.5} />,
      image: '/images/Imagen Transporte Terrestre.png',
      name: t('servicesPage.grid.land.title', 'Transporte Terrestre'),
      oneLiner: t('servicesPage.grid.land.oneLiner', 'Conectando destinos continentales'),
      color: '#22c55e',
      link: '/servicios#transporte-terrestre'
    },
    {
      id: 'warehouse',
      icon: <Warehouse size={48} strokeWidth={1.5} />,
      image: '/images/Imagen Warehouse & Fulfillment.png',
      name: t('servicesPage.grid.warehouse.title', 'Warehouse & Fulfillment'),
      oneLiner: t('servicesPage.grid.warehouse.oneLiner', 'Almacenaje estratégico 24/7'),
      color: '#f59e0b',
      link: '/servicios#warehouse'
    },
    {
      id: 'multimodal',
      icon: <Route size={48} strokeWidth={1.5} />,
      image: '/images/Imagen Servicio Multimodal.png',
      name: t('servicesPage.grid.multimodal.title', 'Servicio Multimodal'),
      oneLiner: t('servicesPage.grid.multimodal.oneLiner', 'Rutas optimizadas integradas'),
      color: '#8b5cf6',
      link: '/servicios#servicio-multimodal'
    },
    {
      id: 'customs',
      icon: <FileText size={48} strokeWidth={1.5} />,
      image: '/images/Imagen Servicio de Aduanas.png',
      name: t('servicesPage.grid.customs.title', 'Servicio de Aduanas'),
      oneLiner: t('servicesPage.grid.customs.oneLiner', 'Cumplimiento normativo garantizado'),
      color: '#ef4444',
      link: '/servicios#servicio-aduanas'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="services-preview-section bg-light py-5">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-uppercase fw-bold text-danger small d-block mb-2">
            {t('services.subtitle', 'SELECCIONE UNO DE NUESTROS SERVICIOS')}
          </span>
          <h2 className="display-5 fw-bold mb-3">
            {t('services.title', 'NUESTROS SERVICIOS')}
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            {t('services.description', 'Soluciones logísticas integrales para cargas de alto valor en comercio internacional')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-preview-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="service-preview-card"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Link 
                to={service.link} 
                className="service-preview-link"
                onClick={() => {
                  // Analytics event
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'service_preview_click',
                      service_id: service.id,
                      service_name: service.name
                    });
                  }
                }}
              >
                {/* Image Background */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                  }}
                />
                
                {/* Grid Pattern Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `
                      linear-gradient(0deg, rgba(0,0,0,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    zIndex: 1
                  }}
                />
                
                {/* White overlay for text readability */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.55) 100%)',
                    zIndex: 2
                  }}
                />
                
                <div className="service-preview-content" style={{ position: 'relative', zIndex: 3 }}>
                  {/* Icon with color accent */}
                  <div 
                    className="service-preview-icon"
                    style={{ color: service.color }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="service-preview-title">
                    {service.name}
                  </h3>

                  {/* One-liner */}
                  <p className="service-preview-oneliner">
                    {service.oneLiner}
                  </p>

                  {/* CTA */}
                  <div className="service-preview-cta">
                    <span className="me-2">Ver más información</span>
                    <ArrowRight size={16} strokeWidth={2} />
                  </div>
                </div>

                {/* Hover border accent */}
                <div 
                  className="service-preview-border"
                  style={{ backgroundColor: service.color }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Full services page */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link 
            to="/servicios" 
            className="btn btn-outline-danger btn-lg px-5"
            style={{ borderWidth: '2px' }}
          >
            Ver todos los servicios en detalle
            <ArrowRight size={20} className="ms-2" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreviewGrid;
