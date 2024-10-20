import {  X } from "lucide-react";
import React, { useRef } from "react";

import { FaCss3, FaGit, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { DiGithubFull, DiNodejs } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closemodal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    
    <div
      ref={modalRef}
      onClick={closemodal}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm  mx-auto   mt-     md:rounded-3xl lg:max-w-screen-lg"
    >
      <div className=" fixed inset-0 bg-main bg-opacity-50 backdrop-blur-sm  mt- flex flex-col gap-5 text-white">
        <button onClick={onClose} className="place-self-end">
          <X />
        </button>
        <>
          {/* source: https://flowrift.com/c/logo-cloud/atJUX?view=code */}
          <div className="bg-main py-10  sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                <h2 className="mb-2 text-center text-2xl font-bold text-white lg:mb-0 lg:text-3xl">
                my skills
                </h2>
                <p className="max-w-md text-center text-white lg:text-right">
                  {/* Filler text is dummy text which has no meaning however looks
                  very similar to real text. */}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
                {/* logo - start */}
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <FaHtml5 className="h-6 w-auto sm:h-8"/>
                 HTML
                </div>
                {/* logo - end */}
                {/* logo - start */}
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <FaCss3 className="h-6 w-auto sm:h-8" />

                CSS
                </div>
                {/* logo - end */}
                {/* logo - start */}
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <FaJava className="h-6 w-auto sm:h-8"/>
                JavaScrpit
                </div>
                {/* logo - end */}
                {/* logo - start */}
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <FaReact className="h-6 w-auto sm:h-8"/>
                React
                </div>
                {/* logo - end */}
                {/* logo - start */}
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <DiNodejs  className="h-6 w-auto sm:h-8" />
                Node.js
                </div>
                {/* logo - end */}
                {/* logo - start */}
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <SiAdobephotoshop  className="h-6 w-auto sm:h-8"/>
                 Photoshop

                </div>

                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <FaGit  className="h-6 w-auto sm:h-8"/>
                

                </div>
                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <DiGithubFull size={20}  className="h-6 w-auto sm:h-8"/>
                

                </div>

                <div className="flex h-16 items-center justify-center rounded-lg bg-textOne p-4 text-white sm:h-32">
                <RiTailwindCssFill  size={20}  className="h-6 w-auto sm:h-8"/>
                Tailwind CSS
                

                </div>
                {/* logo - end */}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Modal;
