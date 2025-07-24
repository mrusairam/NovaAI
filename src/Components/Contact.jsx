import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      {/* Top Section */}
      <div className="h-[30vh] flex flex-col justify-center items-center px-4 text-center">
        <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
          Contact Nova AI Solutions
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold my-2 text-gray-900">
          Book Your Free AI Strategy Session
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Let’s explore how AI automation can accelerate your business growth.
        </p>
      </div>

      {/* Cards - Floating */}
      <div className="absolute z-30 w-full top-[22vh] px-4 flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* Office Card */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500 w-full md:w-1/4 text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FaMapMarkerAlt className="text-2xl text-indigo-600 mb-3 mx-auto" />
          <h4 className="font-semibold text-gray-800 mb-2">OFFICE</h4>
          <p className="text-sm text-gray-600">
            101 AI Business Park<br />London, UK W1B 3HH
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500 w-full md:w-1/4 text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <FaEnvelope className="text-2xl text-indigo-600 mb-3 mx-auto" />
          <h4 className="font-semibold text-gray-800 mb-2">EMAIL</h4>
          <p className="text-sm text-gray-600">hello@novaai.co.uk</p>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500 w-full md:w-1/4 text-center"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <FaPhoneAlt className="text-2xl text-indigo-600 mb-3 mx-auto" />
          <h4 className="font-semibold text-gray-800 mb-2">PHONE</h4>
          <p className="text-sm text-gray-600">+44 20 7946 0990</p>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="h-[70vh] w-full mt-[10vh]">
        <iframe
          title="Nova AI London Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19897.74841926492!2d-0.1456645737269183!3d51.51879868066266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aceeabac83b%3A0xf9f4c0a5f6c1b6c6!2sOxford%20Circus%2C%20London!5e0!3m2!1sen!2suk!4v1710947345609!5m2!1sen!2suk"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
