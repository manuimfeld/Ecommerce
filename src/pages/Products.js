import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext'
import '../styles/products.css'

export const Products = () => {

  const {setCart} = useContext(CartContext)
  const Productos = useContext(ProductsContext)

  const [todos, setTodos] = useState(Productos)

  const Contains = (e) => {
    setTodos(Productos.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  return (
    <>
      <main className='products'>
        <section>
          <input type="text" onChange={(e) => Contains(e)}/>
        <ul>
          {todos.map(function (articulo) {
          return (
            <li key={articulo.id}>
              <img src={articulo.img} alt="articulo"/>
              <p>{articulo.name}</p>
              <p>{articulo.price}</p>
              <button onClick={() => setCart((cart) => [...cart, {...articulo, ...articulo.id= new Date() }])}>Agregar al carrito</button>
            </li>
          )
          })}
        </ul>
        </section>
      </main>
    </>
  )
}
