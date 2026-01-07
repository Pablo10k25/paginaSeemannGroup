import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Phone, Mail, MapPin } from 'lucide-react';

interface Office {
  city: string;
  address: string;
  phone?: string;
  email: string;
  googleMaps: string;
}

interface Country {
  name: string;
  flag: string;
  offices: Office[];
}

const OfficeCards = () => {
  const { t } = useTranslation();
  const [activeChileTab, setActiveChileTab] = useState(0);

  const countries: Country[] = [
    {
      name: 'CHILE',
      flag: '🇨🇱',
      offices: [
        {
          city: 'Viña del Mar',
          address: 'Avenida Libertad #1405, of. 1203, Viña del Mar - Chile.',
          email: 'contacto@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=Avenida+Libertad+1405+Viña+del+Mar+Chile'
        },
        {
          city: 'Santiago',
          address: 'Avenida Providencia 1650, Oficina 1402, Providencia, Santiago, Chile.',
          phone: '+56-226048386',
          email: 'contacto@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=Avenida+Providencia+1650+Santiago+Chile'
        },
        {
          city: 'Aeropuerto',
          address: 'Calle Osvaldo Croquievelle 2207, oficina 477, Edificio EOS, Aeropuerto Internacional Arturo Merino Benítez, Santiago – Chile.',
          email: 'contacto@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=Osvaldo+Croquievelle+2207+Aeropuerto+Santiago+Chile'
        }
      ]
    },
    {
      name: 'ESTADOS UNIDOS',
      flag: '🇺🇸',
      offices: [
        {
          city: 'Miami',
          address: '970 NW 70th Avenida, Miami, FL 33126.',
          phone: '+1-305-902-6888',
          email: 'usasale@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=970+NW+70th+Avenue+Miami+FL+33126'
        }
      ]
    },
    {
      name: 'PERÚ',
      flag: '🇵🇪',
      offices: [
        {
          city: 'Lima',
          address: 'Avenida Jorge Basadre 607, Oficina 209, San Isidro, Lima – Perú.',
          phone: '+51 965 428 674',
          email: 'jbarandiaran@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=Avenida+Jorge+Basadre+607+San+Isidro+Lima+Peru'
        }
      ]
    },
    {
      name: 'COLOMBIA',
      flag: '🇨🇴',
      offices: [
        {
          city: 'Bogotá',
          address: 'Hirin Calle 87 #10-93 Oficina 702, Bogotá, Colombia.',
          phone: '+57 (350) 752-7109',
          email: 'asilva@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=Calle+87+10-93+Bogota+Colombia'
        }
      ]
    },
    {
      name: 'MÉXICO',
      flag: '🇲🇽',
      offices: [
        {
          city: 'México',
          address: 'Paseo de La Reforma 284, Torre Magenta, Piso 17, Juárez, Cuauhtémoc, México.',
          phone: '+52 1 55 7979 3433',
          email: 'agarciac@seemanngroup.com',
          googleMaps: 'https://maps.google.com/?q=Paseo+de+La+Reforma+284+Mexico+City'
        }
      ]
    }
  ];

  // Configuración del slider para responsive
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="site-section scroll-offset1 py-5" id="oficinas-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="block-heading-1" data-aos="fade-up">
              <span>{t('offices.subtitle')}</span>
              <h2>{t('offices.title')}</h2>
            </div>
          </div>
        </div>

        {/* Desktop: Grid normal */}
        <div className="d-none d-lg-block">
          <div className="row g-4">
            {countries.map((country, countryIndex) => (
              <div 
                key={countryIndex} 
                className={country.name === 'CHILE' ? 'col-lg-3' : 'col-lg-3'}
                data-aos="fade-up"
                data-aos-delay={countryIndex * 100}
              >
                <div className="office-card">
                  {/* Bandera y País */}
                  <div className="office-card-header">
                    <div className="office-flag">{country.flag}</div>
                    <h3 className="office-country">{country.name}</h3>
                  </div>

                  {/* Contenido */}
                  <div className="office-card-body">
                    {/* Si es Chile, mostrar tabs */}
                    {country.name === 'CHILE' ? (
                      <>
                        {/* Tabs para Chile */}
                        <div className="chile-tabs mb-3">
                          {country.offices.map((office, idx) => (
                            <button
                              key={idx}
                              className={`chile-tab-btn ${activeChileTab === idx ? 'active' : ''}`}
                              onClick={() => setActiveChileTab(idx)}
                            >
                              {office.city}
                            </button>
                          ))}
                        </div>

                        {/* Contenido del tab activo */}
                        <div className="office-info">
                          <div className="office-info-item">
                            <MapPin size={16} className="me-2 text-danger" />
                            <span>{country.offices[activeChileTab].address}</span>
                          </div>

                          {country.offices[activeChileTab].phone && (
                            <div className="office-info-item">
                              <Phone size={16} className="me-2 text-danger" />
                              <a href={`tel:${country.offices[activeChileTab].phone}`}>
                                {country.offices[activeChileTab].phone}
                              </a>
                            </div>
                          )}

                          <div className="office-info-item">
                            <Mail size={16} className="me-2 text-danger" />
                            <a href={`mailto:${country.offices[activeChileTab].email}`}>
                              {country.offices[activeChileTab].email}
                            </a>
                          </div>

                          <a
                            href={country.offices[activeChileTab].googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-danger btn-sm mt-3 w-100"
                          >
                            <MapPin size={14} className="me-1" />
                            {t('offices.viewOnMap')}
                          </a>
                        </div>
                      </>
                    ) : (
                      /* Para otros países, mostrar info directamente */
                      <div className="office-info">
                        <div className="office-info-item">
                          <MapPin size={16} className="me-2 text-danger" />
                          <span>{country.offices[0].address}</span>
                        </div>

                        {country.offices[0].phone && (
                          <div className="office-info-item">
                            <Phone size={16} className="me-2 text-danger" />
                            <a href={`tel:${country.offices[0].phone}`}>
                              {country.offices[0].phone}
                            </a>
                          </div>
                        )}

                        <div className="office-info-item">
                          <Mail size={16} className="me-2 text-danger" />
                          <a href={`mailto:${country.offices[0].email}`}>
                            {country.offices[0].email}
                          </a>
                        </div>

                        <a
                          href={country.offices[0].googleMaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-danger btn-sm mt-3 w-100"
                        >
                          <MapPin size={14} className="me-1" />
                          {t('offices.viewOnMap')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Slider */}
        <div className="d-block d-lg-none">
          <Slider {...sliderSettings}>
            {countries.map((country, countryIndex) => (
              <div key={countryIndex} className="px-2">
                <div className="office-card">
                  <div className="office-card-header">
                    <div className="office-flag">{country.flag}</div>
                    <h3 className="office-country">{country.name}</h3>
                  </div>

                  <div className="office-card-body">
                    {country.name === 'CHILE' ? (
                      <>
                        <div className="chile-tabs mb-3">
                          {country.offices.map((office, idx) => (
                            <button
                              key={idx}
                              className={`chile-tab-btn ${activeChileTab === idx ? 'active' : ''}`}
                              onClick={() => setActiveChileTab(idx)}
                            >
                              {office.city}
                            </button>
                          ))}
                        </div>

                        <div className="office-info">
                          <div className="office-info-item">
                            <MapPin size={16} className="me-2 text-danger" />
                            <span>{country.offices[activeChileTab].address}</span>
                          </div>

                          {country.offices[activeChileTab].phone && (
                            <div className="office-info-item">
                              <Phone size={16} className="me-2 text-danger" />
                              <a href={`tel:${country.offices[activeChileTab].phone}`}>
                                {country.offices[activeChileTab].phone}
                              </a>
                            </div>
                          )}

                          <div className="office-info-item">
                            <Mail size={16} className="me-2 text-danger" />
                            <a href={`mailto:${country.offices[activeChileTab].email}`}>
                              {country.offices[activeChileTab].email}
                            </a>
                          </div>

                          <a
                            href={country.offices[activeChileTab].googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-danger btn-sm mt-3 w-100"
                          >
                            <MapPin size={14} className="me-1" />
                            {t('offices.viewOnMap')}
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="office-info">
                        <div className="office-info-item">
                          <MapPin size={16} className="me-2 text-danger" />
                          <span>{country.offices[0].address}</span>
                        </div>

                        {country.offices[0].phone && (
                          <div className="office-info-item">
                            <Phone size={16} className="me-2 text-danger" />
                            <a href={`tel:${country.offices[0].phone}`}>
                              {country.offices[0].phone}
                            </a>
                          </div>
                        )}

                        <div className="office-info-item">
                          <Mail size={16} className="me-2 text-danger" />
                          <a href={`mailto:${country.offices[0].email}`}>
                            {country.offices[0].email}
                          </a>
                        </div>

                        <a
                          href={country.offices[0].googleMaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-danger btn-sm mt-3 w-100"
                        >
                          <MapPin size={14} className="me-1" />
                          {t('offices.viewOnMap')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OfficeCards;