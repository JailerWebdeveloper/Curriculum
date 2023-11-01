import React from "react";
import {MdLightMode, MdNightlight} from "react-icons/md";

const Footer = ({dowload,toggle}) => {
    const printCV = () => {
        window.print();
      };

  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row  gap-10 flex-col">

        <label className="swap swap-rotate w-5 h-5">
            <input type="checkbox" onChange={toggle} />
            {/* sun icon */}
            <MdLightMode className="swap-on fill-current w-5 h-5" />
            {/* moon icon */}
            <MdNightlight className="swap-off fill-current w-5 h-5" />
          </label>

        <div className="flex-col md:flex-row flex w-full  items-center gap-4">
            <button onClick={dowload} className="text-lg md:text-xl font-bold">
              Download PDF
            </button>
            <p className="hidden md:block">||</p>
            <button onClick={printCV} className=" text-lg md:text-xl text-info font-bold">Print</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
