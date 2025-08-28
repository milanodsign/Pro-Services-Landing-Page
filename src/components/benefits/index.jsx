import React from "react";
import styles from "./styles.module.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div>
        <span>
          <img src={icon1} alt="icon1" />
        </span>
        <span>
          <p>Revisión general gratuita</p>
        </span>
      </div>
      <div>
        <span>
          <img src={icon2} alt="icon2" />
        </span>
        <span>
          <p>Recogida y entrega del vehículo</p>
        </span>
      </div>
      <div>
        <span>
          <img src={icon3} alt="icon3" />
        </span>
        <span>
          <p>Técnicos certificados y especializados</p>
        </span>
      </div>
      <div>
        <span>
          <img src={icon4} alt="icon4" />
        </span>
        <span>
          <p>Garantía en mano de obra y repuestos</p>
        </span>
      </div>
    </div>
  );
};

export default Benefits;
