import React from 'react'
import Header from './components/Header'
import "./index.css"
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes, Outlet } from 'react-router-dom'
import Detail from './pages/Detail'
import Cart from './components/Cart'

function App() {
  return (
    <div className='App'>
        <Header />
        <div className='Container'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='detail/:id' element={<Detail />} />
            <Route path='/cart' element={<Cart />} />

        </Routes>
        </div>

        <Footer />  
    </div>
  )
}

export default App