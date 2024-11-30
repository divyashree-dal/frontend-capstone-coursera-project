import React from "react";
import Star from "../../assets/star.svg";

function TestimonialCard({ testimonial }) {
  return (
    <section className="relative flex flex-col h-full w-full border-r-8 rounded-lg bg-secondary-gray font-karla p-5 gap-5 flex-grow">
      {/* Circular Image Positioned at the Top Center */}
      <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-primary-green">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Render stars based on the stars value */}
      <div className="flex items-center justify-center mt-20">
        {Array.from({ length: testimonial.stars }, (_, index) => (
          <img
            key={index}
            src={Star}
            alt="Star"
            className="w-5 h-5 object-contain"
          />
        ))}
      </div>
      <blockquote className="text-md text-secondary-black flex-grow text-justify">
        {testimonial.description}
      </blockquote>
      <p className="text-md">{testimonial.name}</p>
    </section>
  );
}

export default TestimonialCard;
