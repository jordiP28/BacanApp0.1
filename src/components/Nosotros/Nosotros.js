import React from 'react';
import '../Nosotros/Nosotros.css'; 
import equipo from '../imagenes/logo2.PNG';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2>Sobre Nosotros</h2>
      <img src={equipo} alt="Nuestro equipo" className="equipo-imagen" />
      <p>
        Bienvenido a BacanApp, tu guía de diversión y lugares de interés. 
        Nuestro objetivo es ofrecerte las mejores recomendaciones para disfrutar 
        de tu tiempo libre en Barranquilla.
      </p>
      <p>
        Con un equipo apasionado por la cultura y la diversión, estamos aquí 
        para ayudarte a descubrir los mejores lugares y experiencias que 
        nuestra ciudad tiene para ofrecer.
      </p>
      <h3>Nuestro Equipo</h3>
      <ul>
         <li>Jordana Pacheco Altamiranda - Diseño</li>
      </ul>
      <p>
       Contactanos a travez de nuestro correo 
       ✉️ clientes@bacanaap.com
      </p>

    </div>
  );
};

export default Nosotros;
