import React from 'react';
import './LoginForm.css'; // Importa el archivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
  return (
    <div className="login-container">
      <img src="./src/images/pizza.png" alt="Imagen de inicio de sesión" className="login-image" />
      <div className="login-form">
        <form>
          <div className="input-container">
          <FontAwesomeIcon icon="fa-solid fa-user" />
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type="password" placeholder="Contraseña" />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
