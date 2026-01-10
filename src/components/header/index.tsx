import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoSection from "./LogoSection";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import IconSection from "./IconSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-20">
        {/* logo */}
        <LogoSection />

        {/* navLink - Desktop */}
        <NavLinks className="hidden md:flex" />

        {/* icon section (hidden on small screens; mobile auth will live in the menu) */}
        <IconSection className="hidden md:flex" />

        {/* Mobile menu button */}
        <button
          className="p-2 text-gray-700 md:hidden rounded-md hover:text-violet-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-4 pt-2 pb-4 bg-white border-t border-gray-200 md:hidden">
          <NavLinksMobile setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
