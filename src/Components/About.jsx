import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg"; // Replace with actual image
import { useModal } from "../Modal/ModalContext";

export default function About() {
  const { openModal } = useModal();

  return (
    <section id="about" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left: Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Why Choose Us</h3>
          <p className="text-lg text-gray-800 mb-6">
            We're a team of developers and marketers who understand the power
            of automation. From AI workflows to marketing strategies, we bring
            performance and simplicity together to boost your business.
          </p>
          <a
            onClick={openModal}
            className="inline-block cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold py-3 px-6 rounded-lg  transition duration-300"
          >
            Book a Free Call
          </a>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={about}
            alt="About Us"
            className="w-full rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
