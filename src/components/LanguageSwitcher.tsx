import { useTranslation } from 'react-i18next';

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
      className="language-flag-btn"
      onClick={toggleLanguage}
      aria-label="Change language"
      title={isEnglish ? 'Cambiar a Español' : 'Switch to English'}
    >
      {isEnglish ? '🇺🇸' : '🇨🇱'}
    </button>
  );
};

export default LanguageSwitcher;