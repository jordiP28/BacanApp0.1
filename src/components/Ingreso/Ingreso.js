import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar
import './Ingreso.css'; // Importa los estilos
import logo2 from '../imagenes/logo2.PNG'; // Asegúrate de que la ruta sea correcta

const Ingreso = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Lógica para autenticar al usuario
  };

  return (
    <div className="login-container">
      <img src={logo2} alt="Cabecera de Ingreso" className="header-image" />
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de Usuario</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/Registro">¡Regístrate aquí!</Link>
      </p>
    </div>
  );
};

export default Ingreso;

