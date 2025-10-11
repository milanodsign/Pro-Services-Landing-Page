import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import bannerMarquesina from "../../assets/banner_marquesina.png";

const EnjoyPromotions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Array de imágenes para el slider (puedes agregar más imágenes)
  const sliderImages = [
    bannerMarquesina,
    bannerMarquesina, // Puedes cambiar por otras imágenes
    bannerMarquesina, // Puedes cambiar por otras imágenes
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.enjoyPromotions}>
      <div className={styles.containerInfo}>
        <h1>Disfruta de nuestras promociones</h1>
        <p>
          Aprovecha nuestros paquetes especiales y promociones especiales de
          temporadas. Contáctanos y disfruta los beneficios
        </p>
        <a
          href="https://wa.me/17542079013"
          className="btnYellow"
          target="_blank"
          rel="noreferrer"
        >
          Contactar ahora
        </a>
      </div>
      <div className={styles.containerBanner}>
        <div className={styles.slider}>
          <div className={styles.sliderContainer}>
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Promoción ${index + 1}`}
                className={`${styles.sliderImage} ${
                  currentSlide === index
                    ? styles.activeImage
                    : styles.inactiveImage
                }`}
              />
            ))}
          </div>
          <div className={styles.sliderDots}>
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${
                  currentSlide === index ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnjoyPromotions;
