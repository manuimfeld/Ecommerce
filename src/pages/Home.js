import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import { ProdInfo } from '../context/ProdInfoContext'
import { CartContext } from '../context/CartContext'
import '../styles/home.css'

export const Home = () => {
  const Productos = useContext(ProductsContext)
  const {setCart} = useContext(CartContext)
  const {setProduct} = useContext(ProdInfo)

  return (
    <>
    <main className="home">
        <section>
            <h1>Productos destacados</h1>
                <ul>
                    {Productos.slice(0, 4).map(function(articulo){
                        return (
                            <li key={articulo.id} onClick={() => setProduct(articulo)}>
                                <Link to={'/producto/' + articulo.name.toLowerCase().split(' ').join('-')}>
                                <img src={articulo.img} alt="articulo"/>
                                </Link>
                                <p>{articulo.name}</p>
                                <p>$ {articulo.price.toLocaleString('en-US')}</p>
                                <button onClick={() => setCart((cart) => [...cart, {...articulo, ...articulo.id= new Date() }])}>Agregar al carrito</button>
                            </li>
                        )})}
                </ul>
            <h2><Link to="/productos">Ver más productos</Link></h2>
        </section>
    </main>
    </>
  )
}