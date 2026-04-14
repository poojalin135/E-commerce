import React, { createContext, useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Single from './pages/Single'
import Cart from './pages/Cart'


export let Store = createContext();

function App() {

const[data,setData]= useState(['car','phone','laptop']) 

// to buid add to card functionality
const [cart,setCart]=useState([])



  return (


  <Store.Provider value={{cart,setCart,data,setData}}>
      

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/product/:id' element={<Single/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>

  </Store.Provider>
  )
}

export default App