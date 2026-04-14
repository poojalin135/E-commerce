import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../App'

function Header() {

let {cart}=useContext(Store)

  return (
    <div className='px-4 py-4 flex items-center justify-between'>
        <h1 className='text-xl'>E-commerce</h1>
        <div className='flex items-center gap-4'>
          <Link to={'/cart'}>Cart:{cart.length}</Link>
         <Link to={'/'}>Home</Link>
         <Link to={'/about'}>About</Link>
         <Link to={'/contact'}>Contact Us</Link>
         
        </div>
    </div>
  )
}

export default Header