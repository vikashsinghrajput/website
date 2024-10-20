import React from 'react'
import porjectimage from '../Assets/slider-image-1.jpg'
import comingsoon from '../Assets/comeing-soon.jpg'

import ToTop from './ToTop';

const CardTwo = () => {
  
  return (
<>
<div className="py-20 res-cardtwo mt-20 px-4  md:px-0 4xl:px-20 2xl:container 2xl:mx-auto">
  <div className="flex justify-start item-start space-y-2 flex-col">
   
    
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start rounded-2xl  bg-cardcolor px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
          Project’s 
        </p>

        {/* Card-1 */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img
              className="w-full hidden h-40  object-cover md:block"
              src={porjectimage}
              alt="dress"
            />
            <img
              className="w-full md:hidden"
              src={porjectimage}
              alt="dress"
            />
          </div>
          <div className="border-b border-bordercolor md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
              We are Almost there!

              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    React:{" "}
                  </span>{" "}
                  Italic Minimal Design
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Size:{" "}
                  </span>{" "}
                  Small
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Color:{" "}
                  </span>{" "}
                  Light Blue
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              {/* <p className="text-base dark:text-white xl:text-lg leading-6">
              $36.00
                <span className="text-red-300 line-through"> $45.00</span>
              </p> */}
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                01
              </p>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Demo</button>
            </div>
          </div>
        </div>


{/* Card-3 */}


<div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            <img
              className="w-full hidden md:block"
              src={comingsoon}
              alt="dress"
            />
            <img
              className="w-full md:hidden"
              src={comingsoon}
              alt="dress"
            />
          </div>
          <div className="border-b border-bordercolor md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
              We are Almost there!
              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Style:{" "}
                  </span>{" "}
                  Italic Minimal Design
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Size:{" "}
                  </span>{" "}
                  Small
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Color:{" "}
                  </span>{" "}
                  Light Blue
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">
                $36.00{" "}
                <span className="text-red-300 line-through"> $45.00</span>
              </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                01
              </p>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Demo</button>
            </div>
          </div>
        </div>
{/* Card-2 */}
        <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
          <div className="w-full md:w-40">
            <img
              className="w-full hidden md:block"
              src={comingsoon}
              alt="dress"
            />
            <img
              className="w-full md:hidden"
              src={comingsoon}
              alt="dress"
            />
          </div>
          <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
              We are Almost there!

              </h3>
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Style:{" "}
                  </span>{" "}
                  We are Almost there!
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Size:{" "}
                  </span>{" "}
                  Small
                </p>
                <p className="text-sm dark:text-white leading-none text-gray-800">
                  <span className="dark:text-gray-400 text-gray-300">
                    Color:{" "}
                  </span>{" "}
                  Light Blue
                </p>
              </div>
            </div>
            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-base dark:text-white xl:text-lg leading-6">
                $20.00{" "}
                <span className="text-red-300 line-through"> $30.00</span>
              </p>
              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                01
              </p>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Demo</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
   
  </div>
</div>
<ToTop/>


</>
 
 
 
  )
}

export default CardTwo
