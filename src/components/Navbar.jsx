import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16 max-w-5xl mx-auto">
          {/* Logo */}
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            anusha<span className="text-[#F58CD0]">.portfolio</span>
          </a>

          <div
            className="w-8 h-6 relative cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-white transition-colors text-lg font-bold"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-white transition-colors text-lg font-bold"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white hover:text-white transition-colors text-lg font-bold"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-white transition-colors text-lg font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};