import React from "react";
import styles from "./styles.module.css";
import toyota from "../../assets/toyota.png";
import ford from "../../assets/ford.png";
import nissan from "../../assets/nissan.png";
import honda from "../../assets/honda.png";
import jeep from "../../assets/jeep.png";
import kia from "../../assets/kia.png";

const Allies = () => {
  return (
    <div className={styles.allies}>
      <h1>Aliados</h1>
      <div className={styles.gallery}>
        <img src={toyota} alt="toyota" />
        <img src={ford} alt="ford" />
        <img src={nissan} alt="nissan" />
        <img src={honda} alt="honda" />
        <img src={jeep} alt="jeep" />
        <img src={kia} alt="kia" />
      </div>
    </div>
  );
};

export default Allies;
