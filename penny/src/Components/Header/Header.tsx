import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <div className="bg-violet-600 py-10 px-15  ">
      <div className=" flex justify-between  ">
        <div>
          <img src="./images/applogo.png" alt="" />
        </div>

        <div className="flex items-center max-md:hidden">
          <div className=" flex  text-white font-bold text-[20px] gap-10 cursor-pointer">
            <h1 className="hover:text-blue-300">login</h1>
            <h1 className="hover:text-blue-300">Sign up</h1>
            <div></div>
            <RxHamburgerMenu className="block md:hidden max-md:" />
          </div>
        </div>
      </div>

      <div className="mt-20 ml-2  flex gap-10 max-md:flex-col">
        <div >
          <h1 className="text-6xl font-bold text-white w-[580px] max-md: text-[40px]">
            An all-in-one utility & everyday payment solution.
          </h1>

          <h1 className="mt-5 ml-2 w-[660px] font-bold text-xl text-white max-md:w-[400px]">
            Penney stands as a secure and reliable platform, streamlining
            utility bill payments while offering unparalleled features such as
            gas and tuition payment options. Moreover, it extends its
            capabilities to assist businesses in enhancing their collections
            effortlessly. Experience the ease and security of Penney, your
            all-in-one utility payment solution.
          </h1>
          <button className="bg-white text-indigo-600 font-bold px-10 py-8 rounded-[50px]  mt-10 hover:bg-gray-300 max-md:px-5 max-md:py-4 max-md:text-[16px]">
            Sign up now! it's FREE
          </button>
        </div>
        <div>
          <img
            className="h-[570px] w-[400px] max-md:h-[430px]"
            src="./images/banner-phone_1.png "
            alt=""
          />
        </div>
      </div>
        




    </div>
  );
};

export default Header;
