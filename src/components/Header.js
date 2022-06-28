import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import { CartContext } from '../context/CartContext'

export const Header = () => {

  const {cart} = useContext(CartContext)
  const [cartValue, setCartValue] = useState(0)

  useEffect(() => {
    return (cart.length > 0) ? setCartValue(cart.length) : setCartValue(0)
  }, [cart]);

  return (
    <header className='header'>
        <nav>
            <ul>
                <li className='logo'>
                  <NavLink to="/inicio">Logo</NavLink>
                </li>
                <li>
                  <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li> 
                  <NavLink to="/productos">Productos</NavLink>
                </li>
                <li> 
                  <NavLink to="/carrito">Carrito</NavLink>
                  <span>{cartValue}</span>
                </li>
            </ul>
        </nav>
    </header>
  )
}