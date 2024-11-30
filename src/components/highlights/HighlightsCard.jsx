import React from "react";
import Delivery from "../../assets/delivery.svg";

function HighlightsCard({ highlight }) {
  return (
    <section className="flex flex-col h-full w-full border-r-8 rounded-lg overflow-hidden bg-secondary-gray font-karla p-5 gap-5 flex-grow">
      <img
        src={highlight.image}
        alt="food"
        className="w-full h-[300px] object-cover"
      />
      <div className="flex justify-between gap-10">
        <h1 className="text-2xl font-semibold">{highlight.title}</h1>
        <h1 className="text-2xl text-secondary-orange">{highlight.cost}</h1>
      </div>

      <p className="text-md flex-grow">{highlight.description}</p>
      <div className="flex gap-2 ">
        <p className="text-md font-semibold mt-auto">Order a delivery</p>
        <img src={Delivery} alt="delivery" height={10} />
      </div>
    </section>
  );
}

export default HighlightsCard;
