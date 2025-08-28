import React from "react";
import styles from "./styles.module.css";
import hand from "../../assets/hand.png";

const OurServices = () => {
  const data = [
    {
      title: "Revisión general gratuita",
      description:
        "Chequeamos frenos, suspensión, niveles de líquidos y sistema motriz sin costo. Te entregamos un informe detallado",
      img: hand,
      link: "https://wa.me/17542079013",
    },
    {
      title: "Revisión de suspensión y tren motriz",
      link: "https://wa.me/17542079013",
    },
    {
      title: "Diagnóstico de fallas",
      link: "https://wa.me/17542079013",
    },
    {
      title: "Diagnóstico con escáner",
      link: "https://wa.me/17542079013",
    },
    {
      title: "Revisión de sistema de aire acondicionado",
      link: "https://wa.me/17542079013",
    },
    {
      title: "Cambio de aceite y filtro de motor con aceite sintético",
      link: "https://wa.me/17542079013",
    },
    {
      title: "Reemplazo de pastillas de freno",
      link: "https://wa.me/17542079013",
    },
    {
      title: "Cambio de líquido de frenos",
      link: "https://wa.me/17542079013",
    },
  ];
  return (
    <div className={styles.ourServices}>
      <h1>Nuestros Servicios Destacados</h1>
      <p>
        Ofrecemos soluciones integrales para tu auto, desde revisiones gratuitas
        hasta reparaciones especializadas.
      </p>
      <div className={styles.gridServices}>
        {data.map((item, i) => (
          <span key={i}>
            <h3>{item.title}</h3>
            {item.description && <small>{item.description}</small>}
            <a
              href={item.link}
              className="btnYellow"
              target="_blank"
              rel="noreferrer"
            >
              Agendar Cita
            </a>
            {item.description && <img src={hand} alt="hand" />}
          </span>
        ))}
      </div>
      <a
        href="tel:+17542079013"
        className="btnYellow"
        target="_blank"
        rel="noreferrer"
      >
        Llamar Ahora
      </a>
    </div>
  );
};

export default OurServices;
