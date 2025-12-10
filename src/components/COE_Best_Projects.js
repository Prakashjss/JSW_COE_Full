import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const newsItems = [
  {
    id: 1,
    title: "Global Recognition: Industry Excellence Award",
    description:
      "COE receives prestigious recognition for digital transformation leadership. This honor highlights its commitment to driving innovation and excellence. The achievement reinforces COE’s role as a benchmark for industry-wide transformation.",
    date: "25 July 2025",
    tag: "Excellence Award",
    img: "/images/best_projects_1.webp",
  },
  {
    id: 2,
    title: "Driving Innovation in Smart Manufacturing",
    description:
      "Transforming the industrial landscape through smart automation and IoT-enabled solutions.Revolutionizing transportation systems with renewable energy integration",
    date: "28 July 2025",
    img: "/images/best_projects_2.webp",
  },
  {
    id: 3,
    title: "Advancing Sustainable Urban Mobility",
    description:
      "Revolutionizing transportation systems with renewable energy integration.Transforming the industrial landscape through smart automation and IoT-enabled solutions",
    date: "30 July 2025",
    img: "/images/best_projects_3.webp",
  },
  {
    id: 4,
    title: "Breakthroughs in Renewable Energy Storage",
    description:
      "Enhancing battery performance and storage capacity for long-term sustainability.Revolutionizing transportation systems with renewable energy integration",
    date: "05 August 2025",
    img: "/images/best_projects_4.webp",
  },
];



const COEBestProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  return (
    <div className="best-slide-container pt-4">
      <div className="row mb-4 position-relative">

        {/* Prev Button */}
        <button  className="btn btn-light prev-btn" onClick={handlePrev}>
          <i class="bi bi-chevron-left"></i>
        </button>

        {/* Next Button */}
        <button  className="btn btn-light next-btn" onClick={handleNext}>
        <i class="bi bi-chevron-right"></i>
        </button>

        {/* Left Image */}
        <div className="col-8 main_left_div">
          <img src={newsItems[activeIndex].img} alt={newsItems[activeIndex].title} className="img-fluid main_image"/>
          {newsItems[activeIndex].tag && (
            <div className="new_tag bg-warning">{newsItems[activeIndex].tag}</div>
          )}
        </div>

        {/* Right Text */}
        <div className="col-4 text-white mt-5 right_side_div_inner">
          <h4 className="image_title_text">{newsItems[activeIndex].title}</h4>
          <p className="slide_details">{newsItems[activeIndex].description}</p>
          <span>{newsItems[activeIndex].date}</span>
        </div>
      </div>

      {/* -- Bottom Thumbnails -- */}
      <div className="row">
        {newsItems.map((item, idx) => (
          <div key={item.id} className="col-3 bottom_image"
            onClick={() => setActiveIndex(idx)}>
            <div className={`card text-white border-0 ${ activeIndex === idx ? "border border-warning" : ""}`}
              style={{ backgroundColor: "transparent" }}>
              <div className="position-relative">
                <img src={item.img} alt={item.title} className="card-image" />
              </div>
              <div className="card-body side_image_text">
                <p className="slide_title_side">{item.title}</p>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default COEBestProjects;
