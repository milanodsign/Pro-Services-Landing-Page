import React from "react";
import styles from "./styles.module.css";
import icon4 from "../../assets/icon1.png";
import icon3 from "../../assets/icon2.png";
import icon2 from "../../assets/icon3.png";
import icon1 from "../../assets/icon4.png";

const Benefits = () => {
  const data = [
    {
      icon: icon1,
      text: "Revisión general gratuita",
    },
    {
      icon: icon2,
      text: "Recogida y entrega del vehículo",
    },
    {
      icon: icon3,
      text: "Técnicos certificados y especializados",
    },
    {
      icon: icon4,
      text: "Garantía en mano de obra y repuestos",
    },
  ];
  return (
    <div className={styles.benefits}>
      {data.map((item, index) => (
        <div key={index}>
          <span>
            <img src={item.icon} alt={`icon${index + 1}`} />
          </span>
          <span>
            <p>{item.text}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
