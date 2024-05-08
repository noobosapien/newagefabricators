import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Head from "next/head";

export default function Layout({ active, title, description, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://newagefabrication.co.nz" />
      </Head>

      <div className="scroll-smooth">
        <nav className="relative container flex flex-col justify-center">
          <div className="flex items-center justify-center p-6 mx-auto w-screen">
            <div className="flex items-center justify-between w-full max-w-[1200px]">
              <Link href="/">
                <div className="relative md:h-[81px] md:w-[375px] h-[40px] w-[187px]">
                  <Image src={Logo} fill alt="logo" />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex w-screen h-10 bg-mainBlue font-bold text-white justify-center items-center">
            <div className="hidden md:flex items-center space-x-10 w-full max-w-[1200px]">
              <Link
                href="/boat_repairs"
                className={`text-center hidden md:flex ${
                  active == "boat_repairs" ? "font-light" : ""
                }`}
              >
                Boat repairs
              </Link>

              <Link
                href="/truck"
                className={`text-center hidden md:flex ${
                  active == "truck" ? "font-light" : ""
                }`}
              >
                Truck decks & toolboxes
              </Link>

              <Link
                href="/balustrades_rails"
                className={`text-center hidden md:flex ${
                  active == "balustrades_rails" ? "font-light" : ""
                }`}
              >
                Balustrades & Rails
              </Link>

              <Link
                href="/gates_pergolas"
                className={`text-center hidden md:flex ${
                  active == "gates_pergolas" ? "font-light" : ""
                }`}
              >
                Gates & Pergolas
              </Link>

              <Link
                href="/beams_portals"
                className={`text-center hidden md:flex ${
                  active == "beams_portals" ? "font-light" : ""
                }`}
              >
                Structural house beams & portals
              </Link>

              <Link
                href="/contact"
                className={`text-center hidden md:flex ${
                  active == "contact" ? "font-light" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden flex w-screen justify-end pr-6 items-center">
              <button
                onClick={openMenu}
                aria-label="menu"
                id="menu-btn"
                type="button"
                className={`block hamburger pr-6 md:hidden focus:outline-none ${
                  menuOpen ? "open" : ""
                }`}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>

          <div
            className={`absolute ${
              menuOpen ? "flex" : "hidden"
            } md:hidden p-6 bg-secondaryBlue left-6 right-6 top-32 z-10`}
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <Link
                href="/boat_repairs"
                className={`w-full text-center ${
                  active == "boat_repairs" ? "font-light" : ""
                }`}
              >
                Boat Repairs
              </Link>

              <Link
                href="/truck"
                className={`w-full text-center ${
                  active == "truck" ? "font-light" : ""
                }`}
              >
                Truck decks & toolboxes
              </Link>

              <Link
                href="/balustrades_rails"
                className={`w-full text-center ${
                  active == "balustrades_rails" ? "font-light" : ""
                }`}
              >
                Balustrades & Rails
              </Link>

              <Link
                href="/gates_pergolas"
                className={`w-full text-center ${
                  active == "gates_pergolas" ? "font-light" : ""
                }`}
              >
                Custom Gates & Pergolas
              </Link>

              <Link
                href="/beams_portals"
                className={`w-full text-center ${
                  active == "beams_portals" ? "font-light" : ""
                }`}
              >
                Structural house beams & portals
              </Link>

              <Link
                href="/contact"
                className={`w-full text-center ${
                  active == "contact" ? "font-light" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="relative mt-24 w-screen py-48 bg-mainBlue footer">
          <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center space-y-10 md:space-y-0">
            <p className="text-white text-2xl font-bold">New Age Fabrication</p>

            <div className="flex flex-col justify-center items-center text-white space-y-10">
              <div className="flex gap-y-4 lg:gap-y-0 items-center flex-col lg:flex-row flex-wrap justify-evenly lg:space-x-10">
                <Link href="/">Home</Link>

                <Link href="/boat_repairs">Boat Repairs</Link>
                <Link href="/truck">Truck decks & toolboxes</Link>
                <Link href="/balustrades_rails">Balustrades & Rails</Link>
              </div>

              <div className="flex flex-col items-center gap-y-4 lg:gap-y-0 lg:flex-row lg:justify-evenly lg:space-x-10">
                <Link href="/gates_pergolas">Custom gates & pergolas</Link>

                <Link href="/beams_portals">House beams & portals</Link>

                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="flex flex-col items-center text-white font-semibold">
              <p>Quick contact</p>
              <p>Brian: 021 127 1496 </p>
              <p>Email: admin@newagefabrication.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
