import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar.jsx'
import { Routes, Route } from 'react-router'
import AddProduct from './component/AddProduct.jsx'
import Home from './component/Home.jsx'
import EditProduct from './component/EditProduct.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/AddProduct' element={<AddProduct />}></Route>
        <Route path='/EditProduct/:id' element={<EditProduct />}></Route>
      </Routes>
    </>
  )
}

export default App
