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
      <div className="relative h-[70vh] flex justify-center">
        <div className="absolute left-[0px] w-48 h-48 bg-mainBlue z-10"></div>

        <div className="h-full max-w-[1200px] w-full flex flex-col items-center justify-around">
          <h2 className="text-4xl font-bold">Some Client Testimonials</h2>

          <div className="w-full flex items-center justify-around space-x-10">
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
