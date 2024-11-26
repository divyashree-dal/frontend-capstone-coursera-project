import React from "react";
import HeroImage from "../../assets/hero.jpg";

function Hero() {
  return (
    <section className="flex justify-between bg-primary-green p-10 font-karla gap-30 items-center mx-auto">
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
        <button className="bg-primary-yellow border-r-2 rounded-md p-2 text-primary-green font-semibold mt-4">
          <a key="/reservations" href="/reservations" rel="noopener noreferrer">
            Reserve a Table
          </a>
        </button>
      </div>
      {/* Right Side image */}
      <img
        src={HeroImage}
        alt="hero image"
        height={200}
        width={200}
        className="w-[30%] rounded-lg"
      />
    </section>
  );
}

export default Hero;
