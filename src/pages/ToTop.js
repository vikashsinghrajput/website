import React from 'react'
import { FaHeart } from 'react-icons/fa'


const ToTop = () => {


    const [position, setPosition] = React.useState({top: 0, left: 0})
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth'
    })
  })
   
  const [visibility, setVisibility] = React.useState(false)
  const scrollTop = React.useRef()
   React.useEffect(( ) => {
     window.addEventListener('scroll', (e) => {
      window.scrollY > 200 
      ? scrollTop.current.style.display = 'inline-block'
      : scrollTop.current.style.display = 'none'
    })
   }) 
  return (
    <div className='  '>


<div className='hide-card' >
<button  onClick={() => setPosition({...position, position: {top: 0, left: 0}})}        ref={scrollTop}
  className="  px-6 mt-20 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring "
 
>
   To Top
</button>
</div>

<div className="   gotopbtn">
<p>Coded &nbsp;<FaHeart  color="#8f44fd"/>&nbsp;by@Vikash Singh Rajput</p>

          </div>



    </div>
  )
}

export default ToTop
