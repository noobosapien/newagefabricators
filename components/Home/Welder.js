import React from "react";
import WeldImg from "@/public/welder.jpg";
import TruckImage from "@/public/truck.jpg";
import GateImage from "@/public/gate_img.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function Welder() {
  const imageStyle = {
    objectFit: "cover",
    filter: "grayscale(70%)",
    zIndex: -1,
  };

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex w-screen h-[40vh] md:h-[80vh] flex-col items-start justify-center">
            <div className="absolute w-screen h-[40vh] md:h-[80vh]">
              <Image src={WeldImg} style={imageStyle} fill />
            </div>

            <div
              className="flex flex-col items-start justify-center leading-relaxed space-y-2 lg:space-y-10 py-6 px-6 lg:py-16 lg:px-32 "
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <h1
                className="lg:text-4xl text-center font-semibold text-white drop-shadow-sm "
                style={{ textShadow: "2px 2px #000000" }}
              >
                New Age Fabricators
              </h1>
              <h2
                className="text-white lg:text-2xl text-center"
                style={{ textShadow: "2px 2px #000000" }}
              >
                Wellington based fabricators
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex w-screen h-[40vh] md:h-[80vh] flex-col items-start justify-center">
            <div className="absolute w-screen h-[40vh] md:h-[80vh]">
              <Image src={TruckImage} style={imageStyle} fill />
            </div>

            <div
              className="flex flex-col items-start justify-center leading-relaxed space-y-2 lg:space-y-10 py-6 px-6 lg:py-16 lg:px-32 "
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <h2
                className="lg:text-4xl text-center font-semibold text-white drop-shadow-sm "
                style={{ textShadow: "2px 2px #000000" }}
              >
                Truck decks and tool boxes
              </h2>
              <h2
                className="text-white lg:text-2xl text-center"
                style={{ textShadow: "2px 2px #000000" }}
              >
                Truck tool box and deck fabrications
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex w-screen h-[40vh] md:h-[80vh] flex-col items-start justify-center">
            <div className="absolute w-screen h-[40vh] md:h-[80vh]">
              <Image src={GateImage} style={imageStyle} fill />
            </div>

            <div
              className="flex flex-col items-start justify-center leading-relaxed space-y-2 lg:space-y-10 py-6 px-6 lg:py-16 lg:px-32 "
              style={{
                background: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <h2
                className="lg:text-4xl text-center font-semibold text-white drop-shadow-sm "
                style={{ textShadow: "2px 2px #000000" }}
              >
                Gates and pregolas
              </h2>
              <h2
                className="text-white lg:text-2xl text-left lg:text-center"
                style={{ textShadow: "2px 2px #000000" }}
              >
                Custom built gates and pregolas to fit your own style
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
