import Link from "next/link";
import React, { useState } from "react";

export default function Layout({ active, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = (e) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="scroll-smooth">
        <nav className="relative container flex flex-col justify-center">
          <div className="flex items-center justify-between p-6 mx-auto w-screen">
            <Link href="/">
              <h1>
                <span className="font-bold text-mainBlue text-3xl lg:text-5xl">
                  Logo
                </span>
              </h1>
            </Link>

            <div>
              <span>WA</span>
              <span>FB</span>
              <span>IG</span>
            </div>
          </div>

          <div className="flex w-screen h-10 pr-6 bg-mainBlue font-bold text-white space-x-10 justify-end items-center">
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

            <button
              onClick={openMenu}
              id="menu-btn"
              type="button"
              className={`block hamburger md:hidden focus:outline-none ${
                menuOpen ? "open" : ""
              }`}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
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
          <span className="absolute p-4 rounded-2xl text-white hover:bg-mainBlue bg-secondaryBlue email-us">
            Email Us
          </span>
        </footer>
      </div>
    </>
  );
}
