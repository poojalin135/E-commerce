import React, { useContext } from 'react'
import Header from '../components/Header'
import { Store } from '../App'
import { useForm } from 'react-hook-form';

function Contact() {

let data = useContext(Store);
// console.log(data)


 let {register,handleSubmit,reset}=useForm();
 
function  fnKaAndarKaFn(formData){
  console.log(formData);
  reset()

}





  return (
         <div className='bg-black text-white min-h-screen w-full'>
        <Header/>
        <form onSubmit={handleSubmit(fnKaAndarKaFn)}  className='w-1/3 mx-auto h[80vh] flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Name</label>
            <input {...register("name")}
             type="text" 
             placeholder="Enter your name" 
             className='bg-zinc-800 px-4 py-2 rounded-lg'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input 
            {...register("email")} 
            type="email" 
            placeholder="Enter your email addredd" className='bg-zinc-800 px-4 py-2 rounded-lg'/>
          </div>
          <button className='text-white bg-purple-600 px-4 py-2    rounded-2xl'>  
            Submit
            </button>
        </form>
        </div>
   
  )
}

export default Contact