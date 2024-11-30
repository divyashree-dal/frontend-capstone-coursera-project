import React from "react";
import { highlightsList } from "./highlightsConfig";
import HighlightsCard from "./HighlightsCard";

function Highlights() {
  return (
    <section className="flex font-karla flex-col p-20 overflow-x-hidden">
      <div className="flex justify-between gap-10 items-center">
        {/* Left Side text */}
        <h1 className="text-4xl font-semibold">Specials</h1>
        {/* Right Side button */}
        <button className="bg-primary-yellow border-r-2 rounded-md md:p-4 p-1 text-primary-green font-semibold">
          <a key="/order" href="/order" rel="noopener noreferrer">
            Online Menu
          </a>
        </button>
      </div>

      {/* highlights cards */}
      <div className="flex flex-wrap gap-8 items-stretch mt-5">
        {highlightsList.map((highlight, index) => (
          <div
            key={`highlight-${index}`}
            className="flex-grow basis-[30%] min-w-[280px]"
          >
            <HighlightsCard key={`highlight-${index}`} highlight={highlight} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
