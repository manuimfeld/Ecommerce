import React, { useContext, useEffect } from 'react'
import '../styles/cart.css'
import { CartContext } from '../context/CartContext'
import { TotalPriceContext } from '../context/TotalPriceContext'

export const Cart = () => {

  const {cart, setCart} = useContext(CartContext)
  const {total, setTotal} = useContext(TotalPriceContext)

  /* Cada vez que se cambia el state Cart el useEffect actualiza el precio total */
  useEffect(() => {
    TotalPrice()
  }, [cart]);

  /* Función para conseguir el precio total de todos los productos en el carrito*/
  const TotalPrice = () => {
    setTotal(0)
    let numero = 0
    cart.map(function (prod) {
      return numero += prod.price
    })
    setTotal(numero)
  }

  /* Función para eliminar un producto del state */
  const deleteProduct = (e) => {
    setCart(cart.filter(task => task.id !== e.id))
  }

  return (
    <>
    {cart.length > 0 ? (
    <main className="cart">
    <section>
      <h1>Carrito</h1>
        <ul>
          {/* Recorro el state de cart, para conseguir los productos almacenados en el carrito de compras*/}
          {cart.map(function (articulo) {
            return (
              <li key={articulo.id} >
                <img src={articulo.img} alt="" />
                <p>{articulo.name}</p>
                <p>{articulo.price.toLocaleString('en-US')}</p>
                <button onClick={() => deleteProduct(articulo)}>Borrar</button>
              </li>
            )
          })}
        </ul>
        <button>Comprar ${total.toLocaleString('en-US')}</button>
        <button onClick={() => setCart([])}>Borrar todo</button>
    </section>
  </main>
    ) : <main className='cart'><h1>No hay productos en el carrito</h1></main>}
    </>
  )
}