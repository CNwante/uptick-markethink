import { useState } from "react";
import { Button } from "../components/Button";
import markethink_logo from "../assets/logos/markethink.svg";

const navLinks = ["Features", "Pricing", "About", "Contact Us"];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-[90%] mx-auto py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={markethink_logo}
            alt="Markethink logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold">markethink</span>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-lime-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex justify-evenly items-center gap-10">
          <ul className="flex gap-8 text-gray-300 cursor-pointer">
            {navLinks.map((link) => (
              <li key={link} className="hover:underline">
                {link}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button variant="secondary" className="w-[200px] py-4 border-lime-0">
            <span className="text-gray-300">Free Trial</span>
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute z-10 bg-green-10 shadow-lime-500 shadow-2xl w-[90%] mx-auto h-[70%] mt-4 py-8 px-4 rounded-3xl space-y-4 text-center lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-300 font-medium mt-4">
            {navLinks.map((link) => (
              <li key={link} className="hover:underline">
                {link}
              </li>
            ))}
          </ul>
          <Button
            variant="secondary"
            className="w-full py-3 mt-2 border-lime-0"
          >
            <span className="text-gray-300">Free Trial</span>
          </Button>
        </div>
      )}
    </header>
  );
};
