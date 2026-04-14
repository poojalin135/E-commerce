import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../App'

function Card({data}) {

 const {cart,setCart}=useContext(Store);
 console.log(cart)

function addToCart(){
console.log(data);
setCart([...cart,data])
}





  return (
    <div className='w-[30%] p-4 my-2 bg-zinc-800 rounded-2xl'>
        <img src={data.thumbnail} alt={data.title} className='mx-auto' />
        <h3 className='text-2xl font-semibold tracking-tighter'>{data.title}</h3>
        <p className='text-sm'>Category:{data.category}</p>
        <h5 className='text-red-600 my-1 text-xl'>MRP:{data.price} </h5>

        <div className='flex items-center gap-4'>
           <button onClick={addToCart} className='bg-blue-900 text-white px-4 py-2 rounded-lg'>
            Add to Cart
            </button>
             <Link to={`/product/${data.id}`}>View Products</Link>
        </div>
        
    </div>
  )
}

export default Card