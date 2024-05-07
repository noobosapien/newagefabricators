import Image from "next/image";
import React from "react";

export default function Work({ images }) {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-40 mb-24">
        <div className="flex flex-col items-center lg:items-start w-full max-w-[1200px] gap-y-16">
          <h2 className="font-semibold text-2xl">Our work</h2>

          <div className="flex flex-wrap gap-10 flex-col items-center space-y-10 lg:space-y-0 lg:flex-row justify-evenly max-w-[1200px] w-full">
            {images instanceof Array ? (
              images.map((image) => (
                <div className="relative h-72 w-72 lg:h-72 lg:w-72 drop-shadow-md">
                  <Image src={image} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
