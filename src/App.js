import {Routes, Route} from 'react-router'
import React from 'react';
//Firebase
import firebase, {FirebaseContext} from './firebase';

//Componentes
import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoProducto from './components/paginas/NuevoProducto';
import { Formulario } from './components/paginas/Formulario';


function App() {



  return (


    <FirebaseContext.Provider value={{
      firebase
    }}>

      <div className='md:w-3/5 xl:w-4/5 p-6'> 


        <Routes>
          <Route path='/' element={<Formulario/>}/>
          <Route path='/ordenes' element={<Ordenes/>}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/nuevo-producto' element={<NuevoProducto/>} />
        </Routes>
      </div>

    </FirebaseContext.Provider>
  );
}

export default App;
