import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import { CartContext } from '../context/CartContext'
import '../styles/home.css'

export const Home = () => {

  const Productos = useContext(ProductsContext)
  const {setCart} = useContext(CartContext)
  

  return (
    <>
    <main className="home">
        <section>
            <h1>Productos destacados</h1>
            <ul>
                {/* Selecciono los primeros 4 elementos del array Productos y los recorro con un map para mostrarlos*/}
                {Productos.slice(0, 4).map(function(articulo){
                    return (
                        <li key={articulo.id}>
                            <img src={articulo.img} alt="articulo"/>
                            <p>{articulo.name}</p>
                            <p>$ {articulo.price.toLocaleString('en-US')}</p>
                            {/* Agrego al state Cart todo lo que tenía antes y agrego un nuevo articulo con un "id aleatorio" */}
                            <button onClick={() => setCart((cart) => [...cart, {...articulo, ...articulo.id= new Date() }])}>Agregar al carrito</button>
                        </li>
                    )
                })}
            </ul>
            <NavLink to="/productos"><h2>Ver más productos</h2></NavLink>
        </section>
    </main>
    </>
  )
}