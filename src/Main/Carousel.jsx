import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Nova AI completely transformed our operations. What took us hours now happens in minutes — automatically.",
    name: "James Patel, Founder @ RetailSync",
  },
  {
    id: 2,
    quote:
      "Their AI-driven chatbot saved us over 40% in support costs while improving customer satisfaction.",
    name: "Aisha Khan, CX Lead @ Digitron",
  },
  {
    id: 3,
    quote:
      "The Nova team helped us build intelligent workflows that scaled effortlessly with our business.",
    name: "Liam O'Connor, COO @ FlexAuto",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => setCurrent(index);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden px-4 py-12">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="min-w-full px-6">
            <div className="w-full h-72 md:h-80 border-2 border-indigo-500 bg-white p-8 rounded-xl shadow text-center flex flex-col justify-center">
              <p className="text-lg sm:text-xl text-gray-700 italic mb-4 max-w-2xl mx-auto leading-relaxed">
                “{testimonial.quote}”
              </p>
              <h4 className="text-indigo-600 font-semibold text-sm sm:text-base">
                — {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-indigo-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
