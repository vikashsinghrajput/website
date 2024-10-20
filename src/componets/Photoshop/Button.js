import React from 'react'
import Data from './Data'
const Button = ({menuItems ,filterItems,setItems}) => {
     
  return (
    <div className=' top-0 mt-20    mx-auto w-full   py-3 shadow backdrop-blur-lg  lg:max-w-screen-lg'>
        <div className=''>
            <div className='btn-responsive-div'>
                
        {
        menuItems.map(val=>(
          
           
            
            <button  onClick={() =>filterItems(val)} type="button" id='btn-responsive' className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{val}</button>
         
            
            
        ))
      }
      <button onClick={()=>setItems(Data)}  type="button"  id='btn-responsive' className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset </button>
            </div>
        </div>
        







       


    </div>
  )
}

export default Button
