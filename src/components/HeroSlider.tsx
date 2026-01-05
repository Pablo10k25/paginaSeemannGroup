import { useEffect } from 'react';

const HeroSlider = () => {
  useEffect(() => {
    // Inicializar carousel de Bootstrap si es necesario
    const carouselElement = document.querySelector('#heroCarousel');
    if (carouselElement && typeof window.bootstrap !== 'undefined') {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: 'carousel'
      });
    }
  }, []);

  const slides = [
    {
      id: 1,
      image: '/images/1.jpg',
      overlay: true,
      title: 'Bienvenido a Seemanngroup',
      subtitle: 'Si eres un cliente nuevo regístrate en el siguiente enlace',
      btnText: 'Nuevo Cliente',
      btnLink: '/nuevos-clientes',
      align: 'center'
    },
    {
      id: 2,
      image: '/images/2.jpeg',
      overlay: true,
      title: 'Utiliza nuestro cotizador en línea',
      subtitle: '',
      btnText: 'Cotizar Ahora',
      btnLink: '/cotizaciones',
      align: 'center'
    },
    {
      id: 3,
      image: '/images/3.jpeg',
      overlay: true,
      title: '',
      subtitle: '',
      btnText: 'Cotizar Ahora',
      btnLink: '/cotizaciones',
      align: 'center'
    }
  ];

  return (
    <div id="heroCarousel" className="carousel slide hero-slider" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item hero-slide ${index === 0 ? 'active' : ''} ${slide.overlay ? 'overlay' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: slide.overlay ? 'cover' : 'cover',
              backgroundRepeat: slide.overlay ? 'no-repeat' : 'round'
            }}
          >
            <div className="container h-100">
              <div className={`row align-items-center h-100 ${slide.align === 'center' ? 'justify-content-center text-center' : 'text-start'}`}>
                <div className={slide.align === 'center' ? 'col-md-12 col-lg-8' : 'col-md-12 col-lg-7'}>
                  {slide.title && (
                    <h1 data-aos="fade-up" data-aos-delay="0">
                      {slide.title}
                    </h1>
                  )}
                  {slide.subtitle && (
                    <p className="mb-5" data-aos="fade-up" data-aos-delay="100">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.btnText && (
                    <p data-aos="fade-up" data-aos-delay="200">
                      <a 
                        href={slide.btnLink} 
                        className={slide.overlay ? 'btn btn-outline-white border-w-2 btn-md' : 'btn btn-primary text-white border-w-2 btn-md'}
                      >
                        {slide.btnText}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroSlider;
