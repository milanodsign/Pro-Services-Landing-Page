import React from "react";
import styles from "./styles.module.css";
import affirm from "../../assets/affirm.png";
import sunbit from "../../assets/sunbit.png";
import snap from "../../assets/snap.png";
import klarna from "../../assets/klarna.png";

const ApplyFinancing = () => {
  return (
    <div className={styles.applyFinancing}>
      <div className={styles.applyFinancingText}>
        <h2>Financia tu servicio sin complicaciones</h2>
        <p>
          Divide tu factura en cuotas sin intereses o aprovecha nuestros
          convenios exclusivos. Mantén tu auto al día sin afectar tu bolsillo.
        </p>
        <a
          href="https://wa.me/17542079013"
          className="btnYellow"
          target="_blank"
          rel="noreferrer"
        >
          Solicitar financiamiento
        </a>
      </div>
      <div className={styles.applyFinancingImgs}>
        <img src={affirm} alt="" />
        <img src={sunbit} alt="" />
        <img src={snap} alt="" />
        <img src={klarna} alt="" />
      </div>
    </div>
  );
};

export default ApplyFinancing;
