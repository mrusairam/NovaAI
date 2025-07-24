import React from 'react';
import Slider from '../Main/Slider';
import { useModal } from "../Modal/ModalContext";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[100vh] px-4 sm:px-6 pt-24 pb-10 gap-6 sm:gap-10"
    >
      {/* Left: Content (40%) */}
      <div className="w-full lg:pl-20 lg:w-[40%]">
        <div className="text-center lg:text-left space-y-5 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
            AI-Powered Growth <br className="hidden sm:inline" /> For Modern Brands
          </h1>
          <p className="text-black text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            We help you automate, optimize, and grow using the latest AI tools and
            strategies tailored for your business.
          </p>
          <div>
            <a
              onClick={openModal}
              className="inline-block cursor-pointer bg-indigo-600 hover:bg-indigo-500 text-white text-base sm:text-lg font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Get a Free AI Audit
            </a>
          </div>
        </div>
      </div>

      {/* Right: Slider (60%) */}
      <div className="w-full lg:w-[60%] flex justify-center">
        <div className="h-60 sm:h-72 md:h-80 lg:h-[60vh] w-full max-w-3xl overflow-hidden rounded-lg">
          <Slider />
        </div>
      </div>
    </section>
  );
}
