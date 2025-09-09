import React from "react";

const Hero2 = () => {
  const cardArray = [
    {
      title:
        "This is definitely the best app i’ve used for paying bills online. Its so simple and seamless",
      img: "/images/chidin.png",
      subtitle: "Anthonia M.",
    },

    {
      title: "My School tuition payment now seamless and instant",
      img: "/images/John.png",
      subtitle: "Samuel A. (AFSS Ikeja)",
    },

    {
      title:
        "I can now track my tuition payment and other transactions in my school from anywhere",
      img: "/images/benga.png",
      subtitle: "Mr. Ajayi (Propietor).",
    },
  ];

  return (
    <div className="py-20 px-10 bg-[#FBFBFB] ">
      <div className="flex justify-center   ">
        <h1 className="text-3xl font-medium max-md:w-[45%] text-[20px] ">
          See what people are saying about us
        </h1>
      </div>

      <div>
        <div className=" flex gap-4 py-7 max-md:flex-col items-center  ">
          {cardArray.map((items) =>(
            <div className=" w-[360px] py-4 px-6 gap-4 m-4 bg-white rounded-lg shadow-lg">
              <div className=" py-4 px-4  text-[18px] font-bold  ">
                <h2>{items.title}</h2>
              </div>
              <div className="flex gap-7 items-center  p-4">
                <img className="h-14 w-13" src={items.img} alt="" />
                <p className="font-bold">{items.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
       <div>
         <div className="py-10 px-15 flex justify-center max-md:">
          <h1 className="font-bold text-[36px]">Our Partners</h1>
        </div>
        <div >
          <img  className=" max-md:w-[100%] m-6 py-4  pl-17   " src="./images/flutter.png" alt="" />

        </div>

       </div>
      </div>
    </div>
  );
};

export default Hero2;
