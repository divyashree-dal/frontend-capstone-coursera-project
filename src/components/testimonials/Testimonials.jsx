import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TestimonialsList } from "./testimonialsConfig";

function Testimonials() {
  return (
    <section className="bg-primary-green p-20 font-karla overflow-x-hidden">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-white  align-middle text-center">
          Testimonials
        </h1>
      </div>

      {/*Testimonials Cards*/}
      <div className="flex flex-wrap gap-8 items-stretch mt-10">
        {TestimonialsList.map((testimonial, index) => (
          <div
            key={`testimonial-${index}`}
            className="flex-grow basis-[30%] min-w-[280px]"
          >
            <TestimonialCard
              key={`testimonial-${index}`}
              testimonial={testimonial}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
