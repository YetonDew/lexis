import { useState } from "react";
import Lexis from "../icons/Lexis.jsx";
import LexisLogo from "../icons/LexisLogo.jsx";
import "../styles/global.css";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 px-2 lg:px-40 flex items-center fixed top-0 w-full justify-between bg-primaryDoubleDark trapezoid-after z-30">
      {/* LOGO */}
      <div className="flex items-center text-primaryDark px-6 z-10">
        <a href="/" title="Strona główna">
          <LexisLogo />
        </a>
        <a href="/" className="ml-4" title="Strona główna">
          <Lexis />
        </a>
      </div>

      {/* BURGUER MENU */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        <div className={`hamburger ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU */}
      <nav
        className={`fixed top-0 right-0 h-screen w-64 bg-primaryDoubleDark shadow-lg mobile-menu md:hidden ${
          isOpen ? "open" : ""
        }`}
      >
        <ul className="flex flex-col items-start p-6 space-y-4">
          <li><a href="#" className="text-white text-lg block">o nas</a></li>
          <li><a href="#oferta" className="text-white text-lg block">usługi</a></li>
          <li><a href="#" className="text-white text-lg block">zasoby</a></li>
          <li><a href="#kontakt" className="text-white text-lg block">kontakt</a></li>
        </ul>
      </nav>

      {/* DESKTOP MENU */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li><a href="#" className="text-white text-lg">o nas</a></li>
          <li><a href="#oferta" className="text-white text-lg">usługi</a></li>
          <li><a href="#" className="text-white text-lg">zasoby</a></li>
          <li><a href="#kontakt" className="text-white text-lg">kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
