"use client";
import Link from "next/link";
import { useState } from "react";

const Register = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log(`Registro con nombre: ${name}, correo: ${email}, contraseña: ${password}`);
    // Aquí podrías realizar acciones adicionales, como enviar los datos al servidor.
  };

  return (
    <div>
      <div className="modal-content">
        <h2>Registro</h2>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br/>
        <label htmlFor="email">Correo: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <label htmlFor="password">Contraseña: </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        <button onClick={handleRegister}>Registrar</button>
        <br/>
        <p>¿Ya tienes cuenta? <Link href="#" passHref>Inicia sesión</Link></p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Register;
