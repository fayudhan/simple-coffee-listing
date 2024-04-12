import React from "react";
import Image from "../common/Image";
import starFill from "../../assets/dccl--frontend-simple-coffee-listing/Star_fill.svg";
import starNull from "../../assets/dccl--frontend-simple-coffee-listing/Star.svg";
const CoffeeCard = ({
  name,
  imageSrc,
  price,
  rating,
  votes,
  popular,
  available,
}) => {
  return (
    <div className="bg-dark-gray rounded-xl ">
      <div className="relative">
        {/* Thumbnail Coffee */}
        <Image
          src={imageSrc}
          alt={name}
          className="w-full h-40  object-cover rounded-xl"
        />

        {/* Popular Box */}
        {popular && (
          <div className="absolute top-2 left-2 bg-orange text-darker-gray px-3  rounded-full">
            <span className="text-[10px] font-bold">Popular</span>
          </div>
        )}
      </div>

      {/* Coffee Details */}
      <div>
        <div className="flex justify-between items-center mt-3">
          {/* Title */}
          <h3 className="text-base  text-lightest font-semibold">{name}</h3>

          {/* Price */}
          <p className="text-dark-gray text-xs font-bold bg-light-green rounded-sm px-2 py-1">
            {price}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <img src={rating ? starFill : starNull} alt="Star" />

          <div className="flex items-center justify-between w-full">
            <p className="text-lightest text-sm ml-[7px]">
              {rating !== null ? (
                <p className="text-lightest text-sm">
                  {rating}{" "}
                  <span className="text-gray font-semibold">
                    ({votes} votes)
                  </span>
                </p>
              ) : (
                <p className="text-gray text-sm font-semibold">No Ratings</p>
              )}{" "}
            </p>
            {!available && (
              <p className="font-bold text-sm text-red ">Sold Out</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
