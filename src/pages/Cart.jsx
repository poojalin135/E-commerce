import React from 'react'
import { useContext } from 'react'
import { Store } from '../App'

function Cart() {

    let {cart} = useContext(Store)

  return (
    <div className='bg-black text-white min-h-screen w-full'>
        {cart && cart.map((item)=> (
            <div>
                <img src={item.thumbnail} alt="" />
                 <h1> {item.title}</h1>

            </div>
        ))}
    </div>
  )
}

export default Cart