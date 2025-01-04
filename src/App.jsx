import { Route, Routes } from 'react-router-dom'
import './App.scss'

import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Bag from "./pages/Bag/Bag"
import Phones from "./pages/Phones/Phones"
import Laptops from "./pages/Laptops/Laptops"
import Headphones from "./pages/Headphones/Headphones"
import Accessories from "./pages/Accessories/Accessories"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/accessories' element={<Accessories />} />
      </Routes>
    </>
  )
}

export default App
