import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoSection from "./LogoSection";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import IconSection from "./IconSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between px-4 md:px-8 lg:px-20 items-center py-3">
        {/* logo */}
        <LogoSection />

        {/* navLink - Desktop */}
        <NavLinks className="hidden md:flex" />

        {/* icon section (hidden on small screens; mobile auth will live in the menu) */}
        <IconSection className="hidden md:flex" />

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t border-gray-200">
          <NavLinksMobile setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
