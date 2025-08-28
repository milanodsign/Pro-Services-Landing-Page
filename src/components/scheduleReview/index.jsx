import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logoYellow.png";

const ScheduleReview = () => {
  return (
    <div className={styles.scheduleReview}>
      <img src={logo} alt="logo" />
      <div className={styles.containerInfo}>
        <h1>Dominio Total Off-Road</h1>
        <p>
          Atendemos tu 4x4 con experiencia en suspensiones reforzadas,
          diferenciales, protecciones y mantenimiento especializado.
        </p>
        <a
          href="https://wa.me/17542079013"
          className="btnYellow"
          target="_blank"
          rel="noreferrer"
        >
          Agendar Revisión
        </a>
      </div>
    </div>
  );
};

export default ScheduleReview;
