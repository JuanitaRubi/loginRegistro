"use client"
import Link from "next/link";
import { useState } from "react";
import styles from "@/public/styles/styles.module.css"

const Register = ({ onClose }: { onClose: () => void }) => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log(`Registro con nombre: ${name}, correo: ${email}, contraseña: ${password}`);
    // Aquí se podrían realizar acciones adicionales, como enviar los datos al servidor.
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.whiteText}>Registro</h2>
        <label htmlFor="name" className={styles.whiteText}>Nombre: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email" className={styles.whiteText}>Correo: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password" className={styles.whiteText}>Contraseña: </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button className={styles.button} onClick={handleRegister}>Registrar</button>
        <br />
        <p className={styles.whiteText}>¿Ya tienes cuenta? <Link href="#" passHref>Inicia sesión</Link></p>
        <button className={styles.button} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Register;
function useClient() {
  throw new Error("Function not implemented.");
}

