import { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
// import image4 from "../assets/image4.jpg";
import images5 from "../assets/images5.jpg";

export default function Carousel() {
  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image6 },
    { id: 3, src: image7 },
    // { id: 4, src: image4 },
    { id: 5, src: images5 },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg aspect-video">
      {images.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={item.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
