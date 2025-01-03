import React from "react";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <div
          id="footers"
          className="w-screen h-16 flex justify-between items-center border-solid border-primaryColor drop-shadow-lg border-t  "
        >
          <div className=" text-xl font-logoFont">Sunil</div>
          {/* <div className="flex items-center gap-1 ">
            <FaCopyright />
            Copyright@2025
          </div> */}
          <div className="flex gap-1 items-center ">
            <a href="https://www.facebook.com/sunil.sapkota.7161953">
              <div className=" flex h-10 w-10">
                <img className="" src="/fb.svg" alt="" />
              </div>
            </a>
            <a href="https://www.instagram.com/sapkota268/">
              <div className="flex  h-7 w-10">
                <img className="" src="/insta.webp" alt="" />
              </div>
            </a>
            <a href="https://github.com/sapkotasunil">
              <div className="flex h-7  w-10">
                <img className="" src="/github.svg" alt="" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/">
              <div className="flex h-10  w-10">
                <img className="" src="/linkdln.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
