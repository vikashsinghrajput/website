


// https://tailwindflex.com/@Aman300/card-7

import Card from "./Card";
import CardTwo from "./CardTwo";
import Scroll from "./Scroll";



const Home = () => {
 
 
  return (
    
    <>
   
   <header className="inset-x-0 top-0 mt-20    mx-auto w-full   py-3 shadow backdrop-blur-lg md:top-1 md:rounded-3xl lg:max-w-screen-lg">
   <div className="">
  <div className="flex   items-center justify-center  p-5">
    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:px">
      <div className="md-card-text">
        <h1 className="mb-2 t  @apply text-[#f6f6f6] text-[2.875rem] font-normal leading-none m-0;">
           Hi, I'm Vikash
        </h1>
        <p className="mb-6   @apply text-[#777779] text-2xl font-normal mb-5;">
     Mern Developer
       
        </p>
        <p className="mb-6 text-white">Through constant practice & learning, I produce aesthetic software to an extremely high standard.

</p>
       
      </div>
      <div className="md-card-img">
      <img
        className="object-cover w-30 h-60 res-profile  ml-20 rounded-full"
        src="https://vikash-singh-rajput.netlify.app/static/media/profile-pic%20(4).33ac7dd9496fc943ae45.png" alt="img" />
      </div>
    </div>
    
  </div>
  <Scroll/>

</div>



<Card/>
<CardTwo/>
   </header>

 


 
    </>
  );
};

export default Home;
