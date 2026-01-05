import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Heart, Eye, Smile } from 'lucide-react';

interface TabContent {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  color: string;
}

const HistoryTabs = () => {
  const [activeTab, setActiveTab] = useState('valores');

  const tabs: TabContent[] = [
    {
      id: 'historia',
      title: 'Historia',
      icon: <Globe size={48} />,
      description: 'Seemann Group nace como resultado de una vasta experiencia de sus fundadores en el mercado de los seguros, reaseguros y de logística internacional, con más de 35 años de desarrollo.',
      color: '#bd2121'
    },
    {
      id: 'mision',
      title: 'Misión',
      icon: <Heart size={48} />,
      description: 'Somos una organización flexible, orientada, y preparada, para enfrentar los cambios que necesita el mercado de hoy día, que nos permita dar una rápida y profesional respuesta a las necesidades de nuestros clientes.',
      color: '#e63946'
    },
    {
      id: 'vision',
      title: 'Visión',
      icon: <Eye size={48} />,
      description: 'A nivel interno, buscamos seguir desarrollando procesos de mejoramiento continuo que nos permitan seguir evaluando y mejorando la calidad de nuestro servicio.',
      color: '#f77f00'
    },
    {
        id: 'valores',
        title: 'Valores',
        icon: <Smile size={48} />,
        description: '• Empatía y Orientación al cliente\n • Personalización\n • Responsabilidad\n • Sinceridad/Transparencia\n • Compromiso/Pro actividad\n • Flexibilidad',
        color: '#06d6a0'
    }
  ];

  return (
    <div className="history-tabs-section bg-light py-5" id="historia-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="block-heading-1" data-aos="fade-up">
              <span>Conócenos mejor</span>
              <h2>Nuestra Esencia</h2>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {tabs.map((tab, index) => (
            <div 
              key={tab.id} 
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className={`history-card ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ 
                  cursor: 'pointer',
                  borderTop: activeTab === tab.id ? `4px solid ${tab.color}` : '4px solid transparent'
                }}
              >
                <div 
                  className="history-card-icon"
                  style={{ color: tab.color }}
                >
                  {tab.icon}
                </div>
                <h3 className="history-card-title">{tab.title}</h3>
                
                {/* Contenido siempre visible */}
                <div className="history-card-content">
                <p style={{ whiteSpace: activeTab === 'valores' ? 'pre-line' : 'normal' }}>
                    {tab.description}
                </p>
                <div className="history-card-actions">
                    <Link 
                    to={`/nuestra-empresa#${tab.id}`}
                    className="btn btn-sm btn-outline-danger"
                    >
                    Ver más
                    </Link>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTabs;