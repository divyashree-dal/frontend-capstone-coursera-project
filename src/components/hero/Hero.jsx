import React from "react";
import HeroImage from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="pt-20 p-10 flex flex-col md:flex-row md:justify-around bg-primary-green md:p-20 font-karla md:gap-30 items-center overflow-x-hidden">
      {/* Left Side text */}
      <div className="w-[60%]">
        <h1 className="text-5xl text-primary-yellow">Little Lemon</h1>
        <h2 className="text-3xl text-white">Chicago</h2>
        <p className="mt-7 text-white text-justify">
          Little Lemon is a family-owned Mediterranean restaurant known for its
          warm hospitality. It celebrates traditional recipes passed down
          through generations, infused with a modern twist. Each dish is crafted
          with fresh, authentic ingredients to create a unique dining
          experience.
        </p>
        <button className="bg-primary-yellow border-r-2 rounded-md md:p-2 p-5 text-primary-green font-semibold md:mt-4 mt-10">
          <a key="/reservations" href="/reservations" rel="noopener noreferrer">
            Reserve a Table
          </a>
        </button>
      </div>
      {/* Right Side image */}
      <img
        src={HeroImage}
        alt="hero banner"
        height={200}
        width={200}
        className="md:w-[30%] rounded-lg pt-20 w-[100%]"
      />
    </section>
  );
}

export default Hero;
