import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Single() {
   
    const {id}= useParams()
    console.log(id);

    
  const [product,setProduct]=useState(null);

  async function getData(){
       let response= await axios.get(`https://dummyjson.com/product/${id}`);
       console.log(response.data);
       setProduct(response.data);
 }  
 
useEffect(function(){
   getData();
},[])

  return product &&(
    <div className='bg-black p-12 w-full min-h-screen text-white'>
        <Link to={"/"}>Back</Link>
        <div className='flex gap-4'>
            <img src={product.thumbnail} alt=""className='w-1/2' />
            <div className='flex flex-col gap-4'>
                  <h1 className='text-4xl font-bold w-[60%]'>{product.title}</h1>
                  <p>{product.description}</p>
            </div>
              
        </div>
      
    </div>
  )
}

export default Single