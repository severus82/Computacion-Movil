import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='flex min-h-screen'>
            <div className="w-1/5 bg-slate-800">
                <div className="p-6">
                    <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">Restaurante app</p>
                    <p className="mt-3 text-gray-600">Administra tu restaurante en las siguientes opciones:</p>
                </div>
                <nav>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact={true} to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeClassName="text-yellow-500" exact={true} to="/menu">Menu</NavLink>
                </nav>
            </div>
            <div className="w-3/5 p-6">
                <h1 className="text-3xl font-light mb-4">Menu</h1>
                <Link to="/nuevo-producto" className='bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold'>
                    Agregar Producto
                </Link>
            </div>
        </div>
    );
}

export default Menu;
