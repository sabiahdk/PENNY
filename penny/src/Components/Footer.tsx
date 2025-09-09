import React from "react";

const Footer = () => {
  return (
    <div className="py-10 px-15 bg-[#1B1531] text-white ">
      <div className="flex justify-center gap-13 max-md:flex-col items-center max-md:gap-10">
        <div>
          <h1 className="font-bold">PAGES</h1>
          <p>Home</p>
          <p>FAQ's</p>
          <p>T & C</p>
          <p>Privacy and Policy</p>
        </div>

        <div>
          <h1 className="font-bold">CONTACT US</h1>
          <p>08056554433</p>
          <p>info@m-ware.com</p>
        </div>
        <div>
          <h1 className="font-bold">FOLLOW US</h1>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
