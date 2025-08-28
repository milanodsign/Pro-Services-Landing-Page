import React from "react";
import styles from "./styles.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <h1>Habla con Nosotros</h1>
      <p>
        Queremos escucharte, respondemos de forma rápida. Diligencia el
        formulario y nos comunicaremos contigo
      </p>
      <div className={styles.containerForm}>
        <form>
          <input type="text" placeholder="Nombre y apellido" />
          <input type="text" placeholder="Teléfono" />
          <input type="email" placeholder="Correo electrónico" />
          <input type="text" placeholder="Asunto" />
          <textarea placeholder="Mensaje"></textarea>
          <button className={styles.btnYellow} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
