import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Committee", path: "/committee" },
  { label: "Schedule", path: "/schedule" },
  { label: "Speakers", path: "/speakers" },
  { label: "Registration", path: "/registration" },
  { label: "Call for Papers", path: "/call-for-papers" },
  { label: "Venue", path: "/venue" },
  { label: "Contact", path: "/contact" },
  { label: "CMT Acknowledgement", path: "/cmt-acknowledgement" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
              I
            </span>
            <span className="font-display font-semibold text-lg text-gray-900 hidden sm:inline">
              ICCC<span className="text-blue-600">'27</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="primary" className="text-xs px-5 py-2 hidden sm:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              Register
            </Button>
            <button
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === link.path
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" className="w-full justify-center mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
