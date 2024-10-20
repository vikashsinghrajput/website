import React from 'react'
import AliceCarousel, { Link } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import porjectimageone from '../Assets/Organic.jpg'
import porjectimagetwo from '../Assets/Organic-2.jpg'
import porjectimagethird from '../Assets/Organic-3.jpg'


const Card = () => {


    const responsive = {
        2000: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        800: {
          items: 1,
        },
        0: {
          items: 1,
        },
      };
  return (
 <><h1 className='text-white mt-20  text-2xl p-1 mb-20'> Recent Project</h1>
<div className='grid grid-cols-1  px-4 xl:grid-cols-2 gap-y-12 md:gap-y-12 gap-x-6 items-start  '>

  <div className=' w-full h-60  '>
    
 <div className=''>
   <AliceCarousel  className="" responsive={responsive}>
            <img src={porjectimageone} className="h-60 w-70 rounded-lg" alt="" />

            <img src={porjectimagetwo} className="h-60 w-70  rounded-lg"  alt="" />
            
            <img src={porjectimagethird} className="h-60 w-70  rounded-lg" alt="" />
            
            
      
          </AliceCarousel></div>
  </div>
  <div className=' w-full h-60 p-5 ml res-card-raect '>
  <div className="">
          <h3 className='text-2xl text-white'>React Sensei</h3>
          <p className='mt-5 text-white'> 
            UI component library used to build beautiful responsive company portfolio 
            super fast. All c ode is open-source and currently only partially
            maintained.
          </p>
      
          <button  onClick={()=> window.open("https://organicz.in/", "_blank")} type="button" className='btn-demo mt-5 '> <Link to="https://organicz.in/"> Demo &nbsp; →</Link></button> 
          <Link to={'/'}onClick={() => window.location = 'mailto:vsr81150@gmail.com'}><p className=' underline portfolio-text cursor-pointer'>Full portfolio, available on demand</p></Link> 
        </div>
    </div>

</div>


 </>
  
  )
}

export default Card
