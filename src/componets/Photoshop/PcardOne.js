import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PcardOne = ({item}) => {
  return (
    <>
    <div className="">
    {
      item.map((val) =>(
        <div className=" shadow backdrop-blur-lg" key={val.id}>
        <div className="container mx-auto px-4 py-8">
        
        <h1 className="text-4xl font-bold text-center text-white  mb-8">
          {val.heading}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            
            {/* Large item */}
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={val.BeforeImg}  alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={val.AfterImg}   alt="Image two" />}
          />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Explore Nature</h3>
                  <p className="text-white">
                    Discover the beauty of the natural world
                  </p>
                </div>
              </div> */}
            </div>
            {/* Two small items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <ReactCompareSlider
            className="w-full h-48 object-cover"
            itemOne={<ReactCompareSliderImage src={val.colorcorrectionimgA}  alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={val. colorcorrectionimgB}   alt="Image two" />}
          />
      
            
              
          
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <ReactCompareSlider
            className="w-full h-48 object-cover"
            itemOne={<ReactCompareSliderImage src={val.normalcutA}  alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={val.  normalcutB}   alt="Image two" />}
          />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">Tech Innovations</h4>
                </div>
              </div> */}
            </div>
            {/* Three medium items */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={ val.exampleOne}
                alt="Travel"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white"> {val.subheadingone}</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={val.exampleTwo}
                alt="Art"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                  {val.subheadingtwo}
                  </h4>
                </div>
              </div>
            </div>
            {/* bottom cards */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={val.exampleThree}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">{val.subheadingThree}</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={val.exampleFour}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">{val.subheadingFour}</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={val.examplefive}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">{val.subheadingfive}</h4>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={val.examplesex}
                alt="Sport"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">{val.subheadingsex}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))
    }
    <div>
  

    </div>
    </div>
    </>
    
  )
}

export default PcardOne
