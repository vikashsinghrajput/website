import {  FaInstagram } from "react-icons/fa";

import { useState } from "react";

import Modal from "./Modal";
import { SiAdobephotoshop } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoIosConstruct } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { RiCameraLensLine } from "react-icons/ri";

const Navbar = () => {
  const [showmodal, setshowmodal] = useState(false);
  // const [darMode,setdarkMode] =useState(false)
  // const toggleDarkMode =()=>{
  //   setdarkMode(!darMode)
  // }

  // change nav color when scrolling
  const [color, setcolor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  return (
    <>
      <div className="">
        <div className={color ? "nav-conatiner header-bg" : "nav-conatiner"}>
          <header className="fixed inset-x-0 top-0 z-30   mx-auto w-full   py-5 shadow backdrop-blur-lg md:top-1 md:rounded-3xl ">
            <div className="px-4 lg:max-w-screen-lg mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex shrink-0  ">
                  <Link
                    aria-current="page"
                    className="flex items-center text-white "
                    to="/"
                  >
                  <RiCameraLensLine size={30} />
                    <p className="sr-only">Website Title</p>
                  </Link>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                  <Link
                  target="_blank"
                    aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white  transition-all duration-200 hover:bg-textOne hover:text-white"
                    to="https://www.instagram.com/vikash_singh_rajput_000/"
                  >
                    <FaInstagram size={30} />
                  </Link>
                  <Link
                   target="_blank"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-textOne hover:text-white"
                    to="/photoshop-work"
                  >
                    <SiAdobephotoshop size={30} />
                  </Link>
                  <Link
                  target="_blank"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white  transition-all duration-200 hover:bg-textOne hover:text-white"
                    to="/contact-us"
                  >
                    <GrContact size={30} />
                  </Link>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <Link
                   target="_blank"
                    className="inline-flex lg:hidden items-center justify-center rounded-xl   text-white px-3 py-2 text-sm font-semibold shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to="https://www.instagram.com/vikash_singh_rajput_000/"
                  >
                    <FaInstagram size={30} />
                  </Link>
                  <Link
                  target="_blank"
                    className="inline-flex lg:hidden items-center justify-center rounded-xl text-white px-3 py-2 text-sm font-semibold shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  to="/photoshop-work"
                  >
                    <SiAdobephotoshop size={30} />
                  </Link>
                  <Link
                    className="inline-flex lg:hidden items-center justify-center rounded-xl  text-white px-3 py-2 text-sm font-semibold  shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                   to="/contact-us"
                  >
                    <GrContact   size={30} />
                  </Link>
                  <button
                    onClick={() => setshowmodal(true)}
                    className="inline-flex    items-center justify-center rounded-xl bg-textOne px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <IoIosConstruct  size={30} />
                  </button>
                  {showmodal && <Modal onClose={() => setshowmodal(false)} />}
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Navbar;
