import React, { useState } from "react";
import Logo from "../assets/Logo.webp";
import { useModal } from "../Modal/ModalContext";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Header() {
  const { openModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="text-white px-6 py-4 shadow-md bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Rally AI Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-black font-semibold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-indigo-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-indigo-500 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-indigo-500 transition-colors duration-200"
          >
            Reviews
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-indigo-500 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="request"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-indigo-500 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={openModal}
            className="bg-indigo-600 cursor-pointer hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-indigo-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white text-black rounded-lg shadow-lg p-4 space-y-3">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="block cursor-pointer font-semibold hover:text-indigo-500"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="block cursor-pointer font-semibold hover:text-indigo-500"
          >
            Services
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="block cursor-pointer font-semibold hover:text-indigo-500"
          >
            Reviews
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="block cursor-pointer font-semibold hover:text-indigo-500"
          >
            About
          </Link>
          <Link
            to="request"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={closeMenu}
            className="block cursor-pointer font-semibold hover:text-indigo-500"
          >
            Contact
          </Link>
          <button
            onClick={() => {
              openModal();
              closeMenu();
            }}
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg transition"
          >
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}
