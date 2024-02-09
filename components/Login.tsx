"use client"
import Link from "next/link";
import { useState } from "react";



const Login=({onClose}) => {
    const [email, setEmail]= useState('')
    const [password, setPassword]=useState('')
    
    const handleLogin=()=>{
        console.log(`Login con correo:    ${email}, contraseña:  ${password} `);
        
    }

    const handleClose = () => {       
        onClose();
    }

    return(
        <div>
            <div className="modal-content">
                <h2>Iniciar Sesión</h2>
                <label htmlFor="email">Correo: </label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Contraseña: </label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Iniciar sesión</button>
                <br/>
                <p>¿No tienes cuenta? <Link href="../../../app/pages/registro/page" passHref>Regístrate</Link></p>
                <button onClick={handleClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default Login