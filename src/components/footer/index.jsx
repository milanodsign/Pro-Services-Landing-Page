import React from "react";
import styles from "./styles.module.css";
import logoFooter from "../../assets/logoyellow_footer.png";
import facebook from "../../assets/fb.png";
import instagram from "../../assets/ig.png";
import youtube from "../../assets/yt.png";
import phone from "../../assets/phone.png";
import email from "../../assets/mail.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src={logoFooter} alt="" />
      </div>
      <div>
        <div className={styles.socialMedia}>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
        </div>
        <a href="#">Políticas de Privacidad</a>
        <a href="#">Preguntas Frecuentes</a>
        <a href="#">Términos y Condiciones</a>
      </div>
      <div>
        <div>
          <img src={email} alt="" />
          <a href="mailto:Info@proserviceautofl.com">
            Info@proserviceautofl.com
          </a>
        </div>
        <div>
          <img src={phone} alt="" />
          <a href="tel:+50244444444">754 207-9013</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
