import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll"; // ✅ react-scroll import

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Nova AI Solutions</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Driving automation, innovation, and growth through cutting-edge AI
            tools tailored for your business.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-indigo-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-indigo-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-indigo-400"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-indigo-400"
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">hello@novaai.co.uk</p>
          <p className="text-sm mt-1">+44 20 7946 0990</p>
          <p className="text-sm mt-1">London, UK</p>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex items-center space-x-4 text-xl">
            <a href="#" className="hover:text-indigo-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-indigo-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Nova AI Solutions. All rights reserved.
      </div>
    </footer>
  );
}
