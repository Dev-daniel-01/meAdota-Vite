import { useState, useEffect } from "react";
import style from "./slider.module.css";

import slider1 from '../assets/images/slider1.png';
import slider2 from '../assets/images/slider2.png';
import slider3 from '../assets/images/slider3.png';
import slider4 from '../assets/images/slider4.png';
import slider5 from '../assets/images/slider5.png';

const images = [slider1, slider2, slider3, slider4, slider5];

export const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.slider}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`${style.slide} ${index === current ? style.active : ""}`}
        >
          {index === current && (
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={style.image}
            />
          )}
        </div>
      ))}
    </div>
  );
};
