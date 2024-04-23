import { useState } from "react"
import "./Formulario.css"
import React from 'react'
import { Navigate } from 'react-router-dom';


export function Formulario(){


    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [redirectTo, setRedirectTo] = useState(null);
    const [error,setError] = useState(false)
  
    // Supongamos que tienes los nombres de usuario y contraseñas almacenados en un array
    const usuariosValidos = [
      { nombre: 'william', contraseña: '3447112W' },
      { nombre: 'brayan', contraseña: '12345' },

      // Agrega más usuarios y contraseñas según sea necesario
    ];
  
    const handleSubmit = (evento) => {
      evento.preventDefault();

        
      if(usuario === "" || contraseña === ""){
        setError(true)
        return
    } else{
        setError(false)
    }
  
      // Verificar si el usuario y la contraseña coinciden con los valores almacenados
      const usuarioValido = usuariosValidos.find(user => user.nombre === usuario && user.contraseña === contraseña);



      if (usuarioValido) {
        // Redirigir al usuario a la página deseada
        setRedirectTo('/ordenes');
      } else {
        // Mostrar mensaje de error o realizar otras acciones si el usuario no es válido
        alert('Usuario o contraseña incorrectos');
      }
    };
  
    if (redirectTo) {
      return <Navigate to={redirectTo} />;
    }


    return(
        <div className="">
            <div className="formulario">
                <h1 className="  text-3xl font-light">Login</h1>
 
                <div >
                    <form  onSubmit={handleSubmit}>
                        <input type="text" className='shadow appearance-none border rounder w-full py-2 
                                px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                                bloc text-sm font-bold mb-2 flex flex-col justify-center items-center  max-w-3x1' 
                                
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                />
                        <input type="password" className='shadow appearance-none border rounder w-full py-2 
                                px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                                text-sm font-bold mb-2 flex justify-center mt-10 max-w-3xl'
                                
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}

                                />
                        
                        <button type="submit" className="bg-blue-800 hover:bg-blue-700 inline-block w-full max-w-3xl mt-5 p-2 mb-5 text-white uppercase font-bold">Iniciar sesion</button>
                    </form>

                    {error && <p>Todos los campos son obligatorios</p>}

                </div>
            </div>
        </div>
    )
}
