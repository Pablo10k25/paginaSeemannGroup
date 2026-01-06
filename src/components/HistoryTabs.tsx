import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Heart, Eye, Smile } from 'lucide-react';

interface TabContent {
  id: string;
  titleKey: string;
  icon: JSX.Element;
  descriptionKey: string;
  color: string;
}

const HistoryTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('valores');

  const tabs: TabContent[] = [
    {
      id: 'historia',
      titleKey: 'history.historia.title',
      icon: <Globe size={48} />,
      descriptionKey: 'history.historia.description',
      color: '#bd2121'
    },
    {
      id: 'mision',
      titleKey: 'history.mision.title',
      icon: <Heart size={48} />,
      descriptionKey: 'history.mision.description',
      color: '#e63946'
    },
    {
      id: 'vision',
      titleKey: 'history.vision.title',
      icon: <Eye size={48} />,
      descriptionKey: 'history.vision.description',
      color: '#f77f00'
    },
    {
      id: 'valores',
      titleKey: 'history.valores.title',
      icon: <Smile size={48} />,
      descriptionKey: 'history.valores.description',
      color: '#06d6a0'
    }
  ];

  return (
    <div className="history-tabs-section bg-light py-5" id="historia-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="block-heading-1" data-aos="fade-up">
              <span>{t('history.subtitle')}</span>
              <h2>{t('history.title')}</h2>
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
                <h3 className="history-card-title">{t(tab.titleKey)}</h3>
                
                {/* Contenido siempre visible */}
                <div className="history-card-content">
                  <p style={{ whiteSpace: tab.id === 'valores' ? 'pre-line' : 'normal' }}>
                    {t(tab.descriptionKey)}
                  </p>
                  <div className="history-card-actions">
                    <Link 
                      to={`/nuestra-empresa#${tab.id}`}
                      className="btn btn-sm btn-outline-danger"
                    >
                      {t('history.seeMore')}
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