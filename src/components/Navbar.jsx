import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Button from "./Button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Committee", path: "/committee" },
  { label: "Schedule", path: "/schedule" },
  { label: "Speakers", path: "/speakers" },
  { label: "Registration", path: "/registration" },
  {
    label: "Call for Papers",
    path: "/call-for-papers",
    children: [
      { label: "Tracks & Topics", path: "/call-for-papers" },
      { label: "Author Guidelines", path: "/author-guidelines" },
    ],
  },
  {
    label: "Venue",
    path: "/venue",
    children: [
      { label: "Conference Venue", path: "/venue" },
      { label: "Local Attractions", path: "/venue/local-attractions" },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-blue-800/95 border-b border-white/10">
      {/* Container set to full width for maximum edge-to-edge positioning */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Far Left: IEEE Logo + ICCC'27 Text */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/ieeeLogo.svg"
              alt="IEEE"
              className="h-8 sm:h-10 w-auto brightness-0 invert"
            />
            <span className="h-6 w-px bg-white/20 hidden sm:block" />
            <img
              src="/conference-logo.svg"
              alt="ICCC 2027"
              className="h-8 sm:h-10 w-auto hidden sm:block"
            />
            <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-wider text-white ml-3">
              ICCC'27
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === link.path ||
                      pathname.startsWith(link.path + "/")
                        ? "text-white bg-white/20"
                        : "text-blue-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <HiChevronDown
                      size={14}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </Link>
                  <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-blue-800/95 backdrop-blur-md border border-white/10 rounded-xl py-2 min-w-[190px] shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-sm font-medium transition-all duration-200 ${
                            pathname === child.path
                              ? "text-white bg-white/20"
                              : "text-blue-100 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.path
                      ? "text-white bg-white/20"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Far Right: Submit Button, Mobile Menu, & CET Logo */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="https://cmt3.research.microsoft.com/ICCC2027/Submission/Manage"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline"
            >
              <Button
                variant="primary"
                className="text-xs px-5 py-2 hidden sm:inline-flex"
                style={{ background: "#FFFFFF", color: "#2563EB" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Submit
              </Button>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-blue-100 hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>

            {/* Far Right: CET Logo (Bigger) */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/assets/cet-logo.png"
                alt="CET"
                className="h-11 sm:h-14 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-blue-800/95 backdrop-blur-md border-t border-white/10">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.path
                    ? "text-white bg-white/20"
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 pl-3 border-l border-white/10 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname === child.path
                          ? "text-white bg-white/20"
                          : "text-blue-100 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://cmt3.research.microsoft.com/ICCC2027/Submission/Manage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              className="w-full justify-center mt-3"
              style={{ background: "#FFFFFF", color: "#2563EB" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Submit Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}