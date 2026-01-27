import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const isEnglish = currentLanguage === 'en';

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Change language"
      title={isEnglish ? 'Cambiar a Español' : 'Switch to English'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 14px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        fontSize: '0.9rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Globe size={16} />
      <span>{isEnglish ? 'EN' : 'ES'}</span>
    </button>
  );
};

export default LanguageSwitcher;