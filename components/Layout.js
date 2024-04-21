import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import FB from "@/public/facebook.svg";
import WA from "@/public/whatsapp.svg";
import IG from "@/public/instagram.svg";

export default function Layout({ active, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="scroll-smooth">
        <nav className="relative container flex flex-col justify-center">
          <div className="flex items-center justify-center p-6 mx-auto w-screen">
            <div className="flex items-center justify-between w-full max-w-[1200px]">
              <Link href="/">
                <div className="relative md:h-24 md:w-64 h-12 w-32">
                  <Image src={Logo} fill />
                </div>
              </Link>

              <div className="flex items-center justify-end space-x-4">
                <div className="relative w-8 h-8">
                  <Image src={WA} fill />
                </div>

                <div className="relative w-8 h-8">
                  <Image src={FB} fill />
                </div>

                <div className="relative w-8 h-8">
                  <Image src={IG} fill />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-screen h-10 bg-mainBlue font-bold text-white justify-center items-center">
            <div className="hidden md:flex items-center space-x-10 w-full max-w-[1200px]">
              <Link
                href="/services"
                className={`text-center ${
                  active == "services" ? "font-light" : ""
                }`}
              >
                <span className="hidden md:flex">Services</span>{" "}
              </Link>

              <Link
                href="/process"
                className={`text-center ${
                  active == "process" ? "font-light" : ""
                }`}
              >
                <span className="hidden md:flex">Process</span>
              </Link>

              <Link
                href="/work"
                className={`text-center ${
                  active == "work" ? "font-light" : ""
                }`}
              >
                <span className="hidden md:flex">Work</span>
              </Link>

              <Link
                href="/about"
                className={`text-center ${
                  active == "about" ? "font-light" : ""
                }`}
              >
                <span className="hidden md:flex">About</span>
              </Link>
              <Link
                href="/contact"
                className={`text-center ${
                  active == "contact" ? "font-light" : ""
                }`}
              >
                <span className="hidden md:flex">Contact</span>
              </Link>
            </div>

            <div className="md:hidden flex w-screen justify-end pr-6 items-center">
              <button
                onClick={openMenu}
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
                href="/services"
                className={`w-full text-center ${
                  active == "services" ? "font-light" : ""
                }`}
              >
                Services
              </Link>

              <Link
                href="/process"
                className={`w-full text-center ${
                  active == "process" ? "font-light" : ""
                }`}
              >
                Process
              </Link>

              <Link
                href="/work"
                className={`w-full text-center ${
                  active == "work" ? "font-light" : ""
                }`}
              >
                Work
              </Link>

              <Link
                href="/about"
                className={`w-full text-center ${
                  active == "about" ? "font-light" : ""
                }`}
              >
                About
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

        <footer className="relative mt-24 w-screen h-96 bg-mainBlue footer">
          <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center space-y-10 md:space-y-0">
            <p className="text-white text-2xl font-bold">New Age Fabricators</p>

            <div className="flex flex-col justify-center items-center text-white space-y-10">
              <div className="flex justify-evenly space-x-10">
                <Link href="/">
                  <span>Home</span>
                </Link>

                <Link href="/services">
                  <span>Services</span>
                </Link>
                <Link href="/process">
                  <span>Process</span>
                </Link>
                <Link href="/work">
                  <span>Work</span>
                </Link>
              </div>

              <div className="flex justify-evenly space-x-10">
                <Link href="/about">
                  <span>About</span>
                </Link>

                <Link href="/contact">
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center text-white font-semibold">
              <p>Quick contact</p>
              <p>Phone: 0210000000</p>
              <p>Email: admin@newagefabrication.co.nz</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
