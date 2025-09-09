import React from "react";

const Hero = () => {
  const cardArray = [
    {
      title: "Money Transfer",
      img: "/images/transfer.png",
      subtitle:
        "Send and receive money from and to anyone within Nigeria at a cheaper rate.",
    },
    {
      title: "Pay Bills",
      img: "/images/yellow.png",
      subtitle:
        "Buy airtime, data, dstv, gotv and also your prepaid meter token and get your instant electricity token via sms.",
    },

    {
      title: "Tuition/School Fees",
      img: "/images/pigggy.png",
      subtitle:
        "Pay your child tuition seamlessly and get instant receipt and instant credit to the school account.",
    },
    {
      title: "Reffer & Earn",
      img: "/images/banking.png",
      subtitle:
        "you can be making over 500k yearly on our refferal system. Yes i mean it when i say 500k call below phone number or contact us via email for further breakdown and we are sure u will be amazed.",
    },
  ];

  return (
    <div className="  py-10 px-15 bg-[#FBFBFB] ">
      {" "}
      <div className=" shadow  grid grid-cols-2  gap-11 bg-white max-md:grid-cols-1  w-full max-w-5xl mx-auto  ">
        {cardArray.map((items) => (
          <div className="  w-4xl  py-4 px-9 flex gap-10  rounded-4xl ">
            <img className="h-[57px] w-[59px]  " src={items.img} alt="" />

            <div>
              {" "}
              <h1 className=" font-medium text-[25px] mt-2">{items.title}</h1>
              <p className="text-[22px]  w-[430px] max-md:w-[300px] mt-3 ">
                {items.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-30 flex gap-24 max-md:flex-col ">
        <div>
          <img
            className="h-[670px] w-[710px]"
            src="./images/iphone.png"
            alt=""
          />
        </div>
        <div className="w-[690px] m-27 ">
          <h1 className="text-[55px] font-bold max-md:w-[400px] font-bold">
            Track your income and expenses
          </h1>
          <p className="text-[22px] max-md:w-[400px] mt-3">
            Tracking your income and expenses is an exercise in self trust. You
            trust yourself enough to know that you'll track them down, even if
            there's no immediate tangible benefit. A big part of financial
            freedom comes with knowing early on which expenses are worth.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
