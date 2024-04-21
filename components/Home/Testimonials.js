import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [reviews] = useState([
    {
      name: "leemar colina",
      stars: 5,
      review:
        "We had the pleasure to work with Brian, Steve, and Dan for our laundry shop. They are very professional and honest. The price is unbeatable compared to other metal fabricators. One of the best customer service i experienced in the industry. The team is very knowledgeable and they always put safety and quality over anything else. You can never go wrong with New Age Fabrication! We are using them again in our next project (which is very soon!)",
    },
    {
      name: "Lx McClelland",
      stars: 5,
      review:
        "Needed steel bars for a firebox. These Men are exceptionally helpful friendly and quick. Thanks guys. Top effort",
    },
  ]);
  return (
    <>
      <div className="relative flex justify-center mt-64">
        <div className="absolute left-[0px] w-10 h-20 lg:w-48 lg:h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] flex flex-col space-y-32 md:space-y-48 items-center justify-around">
          <h2 className="text-4xl text-center font-bold">
            Some Client Testimonials
          </h2>

          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around md:space-x-10 space-y-10 md:space-y-0 p-4">
            {reviews.map((rev, i) => (
              <TestimonialCard
                key={`testimonial_${i}`}
                name={rev.name}
                stars={rev.stars}
                review={rev.review}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
