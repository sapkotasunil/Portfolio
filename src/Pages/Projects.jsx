import React from "react";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          id="footers"
          className="w-screen h-[4vw] bg-secondaryColor flex justify-between items-center  "
        >
          <div className="bg-secondaryColor text-xl font-logoFont">Sunil</div>
          <div className="flex items-center gap-1 bg-secondaryColor">
            <FaCopyright />
            Copyright@2025
          </div>
          <div className="flex gap-1 items-center bg-secondaryColor">
            <a href="https://www.facebook.com/sunil.sapkota.7161953">
              <div className="bg-secondaryColor flex h-10 w-10">
                <img className="bg-secondaryColor" src="/fb.svg" alt="" />
              </div>
            </a>
            <a href="https://www.instagram.com/sapkota268/">
              <div className="flex bg-secondaryColor h-7 w-10">
                <img className="bg-secondaryColor" src="/insta.webp" alt="" />
              </div>
            </a>
            <a href="https://github.com/sapkotasunil">
              <div className="flex h-7 bg-secondaryColor w-10">
                <img className="bg-secondaryColor" src="/github.svg" alt="" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sunil-sapkota-88026a32a/">
              <div className="flex h-10 bg-secondaryColor w-10">
                <img className="bg-secondaryColor" src="/linkdln.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
