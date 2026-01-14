import { motion } from 'framer-motion';
import { MapPin, FileText, Bell, Clock, Shield, TrendingUp } from 'lucide-react';

const WebTrackingMock = () => {
  const features = [
    {
      icon: <MapPin size={32} />,
      title: 'Ubicación en tiempo real',
      description: 'Tracking GPS por etapas de tu envío'
    },
    {
      icon: <FileText size={32} />,
      title: 'Documentos digitales',
      description: 'Invoice, AWB, Packing List, Certificados'
    },
    {
      icon: <Bell size={32} />,
      title: 'Notificaciones automáticas',
      description: 'Alertas en hitos clave del proceso'
    },
    {
      icon: <Clock size={32} />,
      title: 'Historial completo',
      description: 'Acceso a operaciones pasadas y análisis'
    },
    {
      icon: <Shield size={32} />,
      title: 'Información segura',
      description: 'Acceso protegido y encriptado 24/7'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Reportes & Analytics',
      description: 'Métricas y KPIs de tus operaciones'
    }
  ];

  return (
    <section className="webtracking-mock-section py-5" id="webtracking">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge bg-danger mb-3 px-4 py-2 fs-6">WEBTRACKING</span>
          <h2 className="mb-3">Trazabilidad completa de tus operaciones</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
            Accede a tu portal personalizado y monitorea cada etapa de tus envíos con información actualizada en tiempo real
          </p>
        </motion.div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <motion.div
              className="webtracking-mock-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Placeholder for tracking dashboard mockup */}
              <div className="tracking-dashboard-placeholder">
                <div className="dashboard-header">
                  <div className="dashboard-logo">SEEMANN</div>
                  <div className="dashboard-nav">
                    <span>Mis envíos</span>
                    <span>Documentos</span>
                    <span>Reportes</span>
                  </div>
                </div>
                <div className="dashboard-content">
                  <div className="shipment-card active">
                    <div className="shipment-status">En tránsito</div>
                    <div className="shipment-id">AWB: 123-4567890</div>
                    <div className="shipment-route">Shanghai → Valparaíso</div>
                    <div className="shipment-progress">
                      <div className="progress-bar" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="shipment-card">
                    <div className="shipment-status completed">Entregado</div>
                    <div className="shipment-id">BL: 987-6543210</div>
                    <div className="shipment-route">Los Angeles → Santiago</div>
                  </div>
                  <div className="shipment-card">
                    <div className="shipment-status">En aduana</div>
                    <div className="shipment-id">AWB: 456-7891234</div>
                    <div className="shipment-route">Miami → Lima</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="row g-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="webtracking-feature">
                    <div className="feature-icon text-danger mb-2">
                      {feature.icon}
                    </div>
                    <h4 className="feature-title h6 mb-2">{feature.title}</h4>
                    <p className="feature-desc text-muted small mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="https://portalclientes.seemanngroup.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger btn-lg px-5"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                  event: 'webtracking_access'
                });
              }
            }}
          >
            Acceder al Portal de Clientes
          </a>
          <p className="text-muted small mt-3">
            Portal disponible para todos nuestros clientes sin costo adicional
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebTrackingMock;
