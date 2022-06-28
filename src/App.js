import './App.css';
import { useState } from 'react'
import { ProductsContext } from './context/ProductsContext';
import { ProdInfo } from './context/ProdInfoContext'
import { CartContext } from './context/CartContext';
import { TotalPriceContext } from './context/TotalPriceContext'
import { AppRouter } from './routing/AppRouter';
import { ProductList } from './components/ProductList'

function App() {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [product, setProduct] = useState([])

  return (
    <ProductsContext.Provider value={ProductList}>
      <TotalPriceContext.Provider value={{total, setTotal}}>
      <ProdInfo.Provider value={{product, setProduct}}>
      <CartContext.Provider value={{cart, setCart}}>
        <AppRouter />
      </CartContext.Provider>
      </ProdInfo.Provider>
      </TotalPriceContext.Provider>
    </ProductsContext.Provider>
  )

}

export default App;
