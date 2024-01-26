"use client"
import { useState } from "react"

const Counter=()=>{

    const [counter, setCounter]=useState(0);
    const [showMessage, setShowMessage]=useState(true)
   

    return(
        <div>
            <p>Haz hecho click {counter} veces </p>
            <button onClick={()=>{setCounter(counter+1)}}>Haz click   </button>
<br/>
            <div><button onClick={()=>{setCounter(0)}}>  Reset</button></div>
<br/>


            <button onClick={()=>{
                setShowMessage(!showMessage)
            }}>{!showMessage ?  "Mostrar mensaje" : "Ocultar mensaje"}</button>  
{
    showMessage && <p>¡¡Hola Mundo!!</p>

}

<br/>

<div>
    <form action="">Formulario</form>

    <h1>Nombre</h1>
    <input type="text" />
    <h1>Edad</h1>
    <input type="numer" />
    <h1>Grupo</h1>
    <input type="text" />

    <br/>

    <button>Guardar</button>

</div>
        </div>  
        
    
        
        
    )
}

export default Counter