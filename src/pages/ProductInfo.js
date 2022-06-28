import React, { useContext } from 'react'
import { ProdInfo } from '../context/ProdInfoContext'
import '../styles/prodinfo.css'

export const ProductInfo = () => {

  const {product} = useContext(ProdInfo)

  return (
    <>
    <main className='prodinfo'>
      <section>
        <h1>Página en construcción, vuelta pronto</h1>
        <p>Esta sería la página del producto: {product.name}</p>
      </section>
    </main>
    </>
  )
}
