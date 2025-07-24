import Carousel from "../Main/Carousel";
import { useModal } from "../Modal/ModalContext";

export default function Testimonial() {
  const { openModal } = useModal();

  return (
    <>
      <section className="relative w-full flex flex-col pt-10 pb-5 lg:flex-row items-center justify-between min-h-[80vh] px-4 sm:px-8 py-10 gap-10 bg-white">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[80vh] px-4 sm:px-6 md:px-12 lg:px-24 pt-4 pb-8 gap-6 lg:gap-8 z-20">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-indigo-600 font-bold text-left sm:text-lg mb-4 max-w-xl mx-auto lg:mx-0">
              Testimonials
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              What Our Clients Say About Nova AI
            </h1>
            <p className="mb-5 text-gray-700">
              We’ve helped startups, agencies, and enterprises automate tasks,
              optimize workflows, and scale smarter using AI. Here's what some
              of our amazing clients have to say about their experience with
              Nova AI Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="cursor-pointer bg-gradient-to-b from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white px-6 py-3 rounded-md text-sm sm:text-base font-semibold transition duration-300 shadow hover:shadow-md"
              >
                Book an Appointment
              </button>
            </div>
          </div>

          {/* Right Image / Slider */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px]">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
