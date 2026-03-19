import { useState } from "react";
import JNFLogo from "../assets/icons/logo.svg"; // adjust path

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#F6F1E8]">
      {/* Top bar */}
      <div className="mx-auto flex h-16 lg:h-25 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={JNFLogo} alt="J&F Divino" className="h-16 lg:h-25 w-auto" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 md:hidden"
          aria-controls="navbar"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="#aboutUs" className="font-medium text-gray-700 hover:text-black">
            About
          </a>
          <a
            href="#contactus"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/80"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile dropdown (does NOT change navbar height) */}
      <div id="navbar" className={`${open ? "block" : "hidden"} md:hidden`}>
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
          <div className="rounded-xl border border-black/10 bg-white/90 p-2 shadow-sm backdrop-blur">
            <a
              href="#home"
              className="block rounded-lg px-3 py-2 font-medium text-gray-800 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#aboutUs"
              className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#contactus"
              className="mt-2 block rounded-lg bg-black px-3 py-2 text-center text-sm font-semibold text-white hover:bg-black/80"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
