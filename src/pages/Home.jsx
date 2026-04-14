import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Card from '../components/Card'
import axios from 'axios'
import { Store } from '../App'

function Home() {

const [products,setProducts]=useState(null);

// useContext ( store se samaan kharidna)
  let contextData=useContext(Store)
//   console.log(contextData);


  async function getData(){
       let response= await axios.get('https://dummyjson.com/products');
    //    console.log(response.data.products);
       setProducts(response.data.products);
 }  
 
useEffect(function(){
   getData();
},[])

  return (
     <div className='bg-black text-white min-h-screen w-full'>
        <Header/>
        <Hero/>
        <div className='p-4 '>
            <h1 className='text-4xl trackig-tighter font-semibold '>
                Our latest collections</h1>
                <div className='flex my-4 items-center flex-wrap gap-8 '>
                    {/* <Card/> */}
                 { products && products.map( (items,idx)=> <Card key={idx} data={items}/>) } 
                </div>
        </div>
    </div>
  )
}

export default Home