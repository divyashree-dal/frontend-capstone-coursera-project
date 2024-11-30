import React from "react";
import AboutImage from "../../assets/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="pt-20 flex flex-col md:flex-row justify-between bg-secondary-gray p-20 font-karla gap-50 items-center overflow-x-hidden">
      {/* Left Side text */}
      <div className="md:w-[50%] w-[100%]">
        <h1 className="text-5xl text-secondary-black">Little Lemon</h1>
        <h2 className="text-3xl text-secondary-black">Chicago</h2>
        <p className="mt-7 text-secondary-black text-justify"></p>
        <p className="text-justify mb-5">
          Located in the vibrant heart of Chicago, Little Lemon blends
          contemporary charm with a touch of nostalgia. Our thoughtfully curated
          menu showcases a variety of artisanal delights, from flavorful
          bruschettas and juicy burgers to crisp Greek salads, reflecting our
          passion for culinary artistry. Prepared by skilled chefs using fresh,
          locally-sourced ingredients, each dish is designed to please the
          senses and uplift the spirit. Whether you're planning a romantic
          evening, a family gathering, or a casual outing with friends, Little
          Lemon offers the perfect setting. Join us in Chicago for an
          exceptional dining experience you won't forget.
        </p>
      </div>
      {/* Right Side image */}
      <img
        src={AboutImage}
        alt="about banner"
        height={200}
        width={200}
        className="md:w-[40%] rounded-full pt-15 w-[100%]"
      />
    </section>
  );
}

export default About;
