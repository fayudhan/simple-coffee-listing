import React from "react";
import bgCafe from "../assets/dccl--frontend-simple-coffee-listing/bg-cafe.jpg";
import coffeCup from "../assets/dccl--frontend-simple-coffee-listing/coffe-cup.jpg";
import starFill from "../assets/dccl--frontend-simple-coffee-listing/Star_fill.svg";
import vector from "../assets/dccl--frontend-simple-coffee-listing/vector.svg";

const CoffeeListing = () => {
  return (
    <div className="bg-darker-gray relative  h-[134vh] flex flex-col items-center justify-center ">
      <div className="fixed top-0 w-full">
        {/* Placeholder Image at the top */}
        <img
          src={bgCafe}
          alt="Coffee"
          className="w-full h-[18.75rem] object-center object-cover"
        />
      </div>

      <div className="absolute max-w-[1280px] bg-dark-gray top-0 mt-40 z-20 mx-[8.375rem] px-8 lg:px-20 pt-[6.3125rem] pb-[5.1875rem] rounded-xl">
        <div className="text-center relative">
          <h1 className="text-lightest text-[2rem] font-semibold leading-3 mb-[1.375rem] relative z-20">
            Our Collection
          </h1>
          <img
            src={vector}
            alt={vector}
            className="absolute top-[-4.2rem] right-11 xl:-translate-x-32 2xl:translate-x-[-16.4rem]"
          />
          <p className="text-gray text-base lg:px-14 xl:px-44 relative z-20">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex justify-center items-center gap-x-2 mt-6 mb-10">
            <button
              className="text-sm text-lightest px-[0.875rem] py-2 bg-gray
              rounded-xl font-semibold"
            >
              All Products
            </button>
            <button className="text-sm text-lightest  px-[0.875rem] py-2 font-semibold">
              Available Now
            </button>
          </div>
        </div>

        {/* Coffee cards  */}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-y-[4.25rem] lg:gap-x-[1.625rem]">
          {/* Coffee Card Start */}
          <div className="bg-dark-gray rounded-xl ">
            <div className="relative">
              {/* Thumbnail Coffee */}
              <img
                src={coffeCup}
                alt="Nama Kopi"
                className="w-full h-40 object-cover rounded-xl"
              />

              {/* Popular Box */}
              <div className="absolute top-2 left-2 bg-orange text-darker-gray px-3 py-1  rounded-full">
                <span className="text-[10px] font-bold">Popular</span>
              </div>
            </div>

            {/* Coffee Details */}
            <div>
              <div className="flex justify-between items-center mt-3">
                {/* Title */}
                <h3 className="text-base  text-lightest font-semibold ">
                  Cappucino
                </h3>

                {/* Price */}
                <p
                  className="text-dark-gray text-xs
               font-bold bg-light-green rounded-sm px-2 py-1
               "
                >
                  $5.20
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-3">
                <img src={starFill} alt={starFill} />

                <div className="flex items-center justify-between w-full">
                  <p
                    className="text-lightest text-sm
              "
                  >
                    4.7 <span className="text-gray">(65 votes)</span>
                  </p>

                  <p
                    className="font-bold text-sm
                     text-red
                  "
                  >
                    Sold Out
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Coffee Card End */}

          {/* Coffee Card Start */}
          <div className="bg-dark-gray rounded-xl ">
            <div className="relative">
              {/* Thumbnail Coffee */}
              <img
                src={coffeCup}
                alt="Nama Kopi"
                className="w-full h-40 object-cover rounded-xl"
              />

              {/* Popular Box */}
              <div className="absolute top-2 left-2 bg-orange text-darker-gray px-3 py-1  rounded-full">
                <span className="text-[10px] font-bold">Popular</span>
              </div>
            </div>

            {/* Coffee Details */}
            <div>
              <div className="flex justify-between items-center mt-3">
                {/* Title */}
                <h3 className="text-base  text-lightest font-semibold ">
                  Cappucino
                </h3>

                {/* Price */}
                <p
                  className="text-dark-gray text-xs
               font-bold bg-light-green rounded-sm px-2 py-1
               "
                >
                  $5.20
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-3">
                <img src={starFill} alt={starFill} />
                <p
                  className="text-lightest text-sm
              "
                >
                  4.7 <span className="text-gray">(65 votes)</span>
                </p>
              </div>
            </div>
          </div>
          {/* Coffee Card End */}
        </div>

        {/* Coffee cards  */}
      </div>
    </div>
  );
};

export default CoffeeListing;
