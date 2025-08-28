import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import useCountdown from "../../hooks/useCountdown";
import logo from "../../assets/logoTop.png";

const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Set target date to June 15th (you can adjust the year as needed)
  const targetDate = new Date("2024-06-15T23:59:59").getTime();
  const { hours, minutes, seconds } = useCountdown(targetDate);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para scroll suave
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 120; // Altura aproximada del header fixed
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil después de hacer clic
    setIsMobileMenuOpen(false);
  };

  // Toggle menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Banner promocional - Fixed también */}
      <div className={`${styles.promoBanner} ${isScrolled ? styles.bannerHidden : ''}`}>
        <div className={styles.container}>
          <div className={styles.infoTop}>
            <span>¡Quedan pocos días para consentir a papá!</span>
            <span>
              Aprovecha nuestro descuento especial por el Día del Padre hasta el
              15 de junio
            </span>
          </div>
          <div className={styles.countdown}>
            <div className={styles.timeContainer}>
              <span className={styles.timeValue}>
                {String(hours).padStart(2, "0")}
              </span>
              <span className={styles.timeLabel}>Hr</span>
            </div>
            <div className={styles.timeContainer}>
              <span className={styles.timeValue}>
                {String(minutes).padStart(2, "0")}
              </span>
              <span className={styles.timeLabel}>Min</span>
            </div>
            <div className={styles.timeContainer}>
              <span className={styles.timeValue}>
                {String(seconds).padStart(2, "0")}
              </span>
              <span className={styles.timeLabel}>Seg</span>
            </div>
          </div>
          <div>
            <a href="tel:+17542079013" className="btnYellow">Llamar Ahora</a>
          </div>
        </div>
      </div>
      
      {/* Header Menu Fixed */}
      <header className={`${styles.headerMenu} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.menuContainer}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          
          {/* Menú Desktop */}
          <nav className={styles.menu}>
            <a 
              className={styles.active} 
              href="#inicio"
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
            >
              INICIO
            </a>
            <a 
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, 'servicios')}
            >
              SERVICIOS
            </a>
            <a 
              href="#conocenos"
              onClick={(e) => handleSmoothScroll(e, 'conocenos')}
            >
              CONÓCENOS
            </a>
            <a 
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, 'contacto')}
            >
              CONTACTO
            </a>
          </nav>
          
          {/* Botón Hamburguesa */}
          <div 
            className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Menú Móvil Overlay */}
        <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}>
          <nav className={styles.mobileMenu}>
            <a 
              href="#inicio"
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
            >
              INICIO
            </a>
            <a 
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, 'servicios')}
            >
              SERVICIOS
            </a>
            <a 
              href="#conocenos"
              onClick={(e) => handleSmoothScroll(e, 'conocenos')}
            >
              CONÓCENOS
            </a>
            <a 
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, 'contacto')}
            >
              CONTACTO
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
