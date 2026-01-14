import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      name: 'Carlos Mendoza',
      position: t('testimonials.client1Position', 'Director de Operaciones'),
      company: 'Viña del Mar Exports',
      content: t('testimonials.client1', 'Seemann Group ha sido clave en nuestra expansión internacional. Su red en 5 países y respuesta rápida nos permite operar con confianza.'),
      rating: 5
    },
    {
      name: 'María González',
      position: t('testimonials.client2Position', 'Gerente Logística'),
      company: 'Industrial Tech Chile',
      content: t('testimonials.client2', 'La transparencia en el tracking y la gestión aduanera impecable hacen de Seemann nuestro socio logístico de confianza desde hace 8 años.'),
      rating: 5
    },
    {
      name: 'Roberto Silva',
      position: t('testimonials.client3Position', 'CEO'),
      company: 'AgriFood LatAm',
      content: t('testimonials.client3', 'Necesitábamos un partner que entendiera transporte refrigerado. Seemann cumplió cada promesa. Envíos perfectos, tiempos exactos.'),
      rating: 5
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-badge">{t('testimonials.badge', 'TESTIMONIOS')}</span>
          <h2 className="section-title">{t('testimonials.title', 'Lo que nuestros clientes dicen')}</h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle', 'Más de 100 empresas confían en nosotros para sus operaciones logísticas')}
          </p>
        </motion.div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="testimonial-card">
                <div className="testimonial-quote-icon">
                  <Quote size={40} />
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                  ))}
                </div>

                <p className="testimonial-content">"{testimonial.content}"</p>

                <div className="testimonial-author">
                  <div className="testimonial-author-avatar">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <div className="testimonial-avatar-placeholder">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="testimonial-author-info">
                    <h6 className="testimonial-author-name">{testimonial.name}</h6>
                    <p className="testimonial-author-position">{testimonial.position}</p>
                    <p className="testimonial-author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats adicionales */}
        <motion.div
          className="testimonials-stats mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="row text-center">
            <div className="col-md-4">
              <div className="testimonial-stat">
                <h3 className="testimonial-stat-number">98%</h3>
                <p className="testimonial-stat-label">{t('testimonials.stat1', 'Satisfacción del Cliente')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-stat">
                <h3 className="testimonial-stat-number">+100</h3>
                <p className="testimonial-stat-label">{t('testimonials.stat2', 'Clientes Activos')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-stat">
                <h3 className="testimonial-stat-number">35+</h3>
                <p className="testimonial-stat-label">{t('testimonials.stat3', 'Años de Experiencia')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
