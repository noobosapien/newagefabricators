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
                  active == "process" ? "text-slate-600" : ""
                }`}
              >
                <span className="hidden md:flex">Process</span>
              </Link>

              <Link
                href="/work"
                className={`text-center ${
                  active == "work" ? "text-slate-600" : ""
                }`}
              >
                <span className="hidden md:flex">Work</span>
              </Link>

              <Link
                href="/about"
                className={`text-center ${
                  active == "about" ? "text-slate-600" : ""
                }`}
              >
                <span className="hidden md:flex">About</span>
              </Link>
              <Link
                href="/contact"
                className={`text-center ${
                  active == "contact" ? "text-slate-600" : ""
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
            } md:hidden p-6 rounded-lg bg-secondaryBlue left-6 right-6 top-32 z-10`}
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <Link
                href="/services"
                className={`w-full text-center ${
                  active == "services" ? "text-slate-600" : ""
                }`}
              >
                Services
              </Link>

              <Link
                href="/services"
                className={`w-full text-center ${
                  active == "services" ? "text-slate-600" : ""
                }`}
              >
                Process
              </Link>

              <Link
                href="/services"
                className={`w-full text-center ${
                  active == "services" ? "text-slate-600" : ""
                }`}
              >
                Work
              </Link>

              <Link
                href="/services"
                className={`w-full text-center ${
                  active == "services" ? "text-slate-600" : ""
                }`}
              >
                About
              </Link>

              <Link
                href="/services"
                className={`w-full text-center ${
                  active == "services" ? "text-slate-600" : ""
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
                <span>Home</span>
                <span>Services</span>
                <span>Process</span>
                <span>Work</span>
              </div>

              <div className="flex justify-evenly space-x-10">
                <span>About</span>
                <span>Contact</span>
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
