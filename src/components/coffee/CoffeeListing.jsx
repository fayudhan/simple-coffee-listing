// Di komponen CoffeeListing.jsx
import React, { useState, useEffect } from "react";
import Image from "../common/Image";
import Button from "../common/Button";
import bgCafe from "../../assets/dccl--frontend-simple-coffee-listing/bg-cafe.jpg";
import CoffeeCard from "./CoffeeCard ";
import vector from "../../assets/dccl--frontend-simple-coffee-listing/vector.svg";

const CoffeeListing = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAvailable, setShowAvailable] = useState(false); // State untuk menunjukkan apakah hanya produk yang tersedia yang akan ditampilkan

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        const data = await response.json();
        setCoffeeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk mengubah state showAvailable
  const toggleAvailable = () => {
    setShowAvailable(!showAvailable);
  };

  // Filter data kopi berdasarkan kondisi "Available Now"
  const filteredCoffeeData = showAvailable
    ? coffeeData.filter((coffee) => coffee.available === true)
    : coffeeData;

  return (
    <div className="bg-darker-gray min-h-screen flex flex-col items-center justify-center pb-[4.625rem]">
      <div className="fixed top-0 w-full">
        {/* Placeholder Image at the top */}
        <Image
          src={bgCafe}
          alt="Coffee"
          className="w-full h-[18.75rem] object-center object-cover"
        />
      </div>

      <div className=" max-w-[1280px] bg-dark-gray top-0 mt-40 z-20 mx-[8.375rem] px-8 lg:px-20 xl:px-[7.75rem] pt-[6.3125rem] pb-[5.1875rem] rounded-xl overflow-hidden">
        <div className="text-center relative ">
          <img
            src={vector}
            alt={vector}
            className="absolute top-[-4.2rem] right-0 left-1/2 transform ranslate-x-2/3"
          />
          <h1 className="text-lightest text-[2rem] font-semibold leading-3 mb-[1.375rem] relative z-20  ">
            Our Collection
          </h1>
          <p className="text-gray text-base lg:max-w-[30rem] mx-auto relative z-20">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="flex justify-center items-center gap-x-2 mt-6 mb-10">
            <Button
              isActive={!showAvailable}
              onClick={() => setShowAvailable(false)}
            >
              All Products
            </Button>
            <Button isActive={showAvailable} onClick={toggleAvailable}>
              Available Now
            </Button>
          </div>
        </div>

        {/* Coffee cards  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-[4.25rem] lg:gap-x-[1.625rem]">
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredCoffeeData.map((coffee) => (
              <CoffeeCard
                key={coffee.id}
                name={coffee.name}
                imageSrc={coffee.image}
                price={coffee.price}
                rating={coffee.rating}
                votes={coffee.votes}
                popular={coffee.popular}
                available={coffee.available}
              />
            ))
          )}
        </div>
        {/* End of Coffee cards  */}
      </div>
    </div>
  );
};

export default CoffeeListing;
