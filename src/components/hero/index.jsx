import React from "react";
import styles from "./styles.module.css";
import designElement from "../../assets/designElement.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={designElement} alt="" />
      <div>
        <h1>Pro Service Auto Tu auto en las mejores manos</h1>
        <p>
          Revisión gratuita, diagnóstico confiable y servicio integral desde $40
        </p>
        <a href="tel:+17542079013" className="btnYellow">Agendar Cita</a>
      </div>
    </div>
  );
};

export default Hero;
