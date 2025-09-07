import React from "react";

const Down = () => {
  return (
    <div className="bg-[#7854F7] py-5 px-10 flex justify-center max-md:flex-col gap-10 pl-36 ">
      <div className="">
        <div className="mb-5">
          <h1 className="text-3xl text-amber-50">Download the app now!</h1>
        </div>
        <div className=" flex mr-48 gap-7 max-md:flex-col w-[310px] items-center " >
          <img className="h-24" src="/images/google.png" alt="" />
          <img className="h-24" src="./images/apple.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Down;
