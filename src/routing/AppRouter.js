import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Cart } from '../pages/Cart'
import { ProductInfo } from '../pages/ProductInfo'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home/>} />
            <Route path="/productos" element={<Products/>} />
            <Route path="producto/:name" element={<ProductInfo />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="*" element={<h1>Error</h1>} />
        </Routes>
    </BrowserRouter>
  )
}