

import React, { useEffect, useState } from "react";
import "../CSS/COE_LandingPage.css";

const COESlider = () => {
  const slides = [
    { id: 1, text: "Center of", coloredSpan:"Excellence", subText:"Driving Innovation, Impact, and growth", image: "/images/Hero_section_1.webp" },
    { id: 2, text: "Center of", coloredSpan:"Excellence 1", subText:"Driving Innovation, Impact, and growth", image: "/images/Hero_section_2.webp" },
    { id: 3, text: "Center of", coloredSpan:"Excellence 2", subText:"Driving Innovation, Impact, and growth", image: "/images/Hero_section_3.webp" },
    { id: 4, text: "Center of", coloredSpan:"Excellence 3", subText:"Driving Innovation, Impact, and growth", image: "/images/Hero_section_4.webp" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideDuration = 3000; // How long each slide is visible
    const fadeDuration = 1000; // CSS transition duration in ms

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, slideDuration + fadeDuration); // total time = visible + fade

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
            <img src={slide.image} alt={slide.text} className="slide-image" />
            <div className="slide-overlay">
              <h2>{slide.text} <span>{slide.coloredSpan}</span></h2>
              <h6>{slide.subText}</h6>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-indicators">
        {slides.map((_, index) => (
          <span key={index} onClick={() => handleDotClick(index)} 
                className={`indicator-dot ${index === activeIndex ? "active-dot" : ""}`}></span>
        ))}
      </div>
    </div>
  );
};

export default COESlider;
