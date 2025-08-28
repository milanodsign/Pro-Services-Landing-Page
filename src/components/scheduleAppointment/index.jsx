import React from "react";
import styles from "./styles.module.css";
import recursoGrafico from "../../assets/recurso_grafico_section4.png";

const ScheduleAppointment = () => {
  return (
    <div className={styles.scheduleAppointment}>
      <h1>Confianza, Calidad y Profesionalismo</h1>
      <p>
        En Pro Service Auto entendemos que tu auto es más que un medio de
        transporte; es tu compañero diario. Por eso, reunimos experiencia,
        tecnología y pasión para que vivas la mejor experiencia de servicio.
      </p>
      <a
        href="https://wa.me/17542079013"
        className="btnYellow"
        target="_blank"
        rel="noreferrer"
      >
        Agendar Cita
      </a>
      <img
        src={recursoGrafico}
        alt="recurso gráfico"
        className={styles.graphicResource}
      />
    </div>
  );
};

export default ScheduleAppointment;
