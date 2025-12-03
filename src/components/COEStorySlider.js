
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import COEBestProjects from './COE_Best_Projects';

const carouselData = [
  {
    title: "Digital Innovation in Smart Manufacturing",
    date: "03 August 2025",
    img: "/images/story_image_5.webp",
    tag: "NEW",
  },
  {
    title: "Advancing Sustainable Urban Mobility",
    date: "26 July 2025",
    img: "/images/story_image_2.webp",
  },
  {
    title: "Breakthroughs In Renewable Energy Storage",
    date: "27 July 2025",
    img: "/images/story_image_3.webp",
  },
  {
    title: "Advancing Sustainable Urban Mobility",
    date: "28 August 2025",
    img: "/images/story_image_6.webp",
  },
   {
    title: "Advancing Sustainable Urban Mobility with Energy Storage",
    date: "20 Jan 2025",
    img: "/images/story_image_5.webp",
  },
];

const COEStorySlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

  return (
    <div className="stories-container">
            <h2>Stories & Recognition</h2>
        <div className="inner_stories_container">       
            <div className="line_with_text mb-2">
                <span>Latest Newsletter Highlights</span>
                <hr />
            </div>  
            <div className="carousel-container pt-4">
                <div className="row row_carousel_container">
                    <div className="col-8 mb-3 left_side_slider">
                        <div className="main_image_div">
                            <img src={carouselData[activeIndex].img} className="img-fluid main_image w-100" alt="main"/>
                            {carouselData[activeIndex].tag && (
                            <span className="new_tag">{carouselData[activeIndex].tag}</span>)}
                            <div className="image_over_text">
                                <span>{carouselData[activeIndex].date}</span>
                                <h5 className="slide_title">{carouselData[activeIndex].title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column gap-3 right_side_slider">
                        {carouselData.slice(1).map((item, idx) => (
                            <div key={idx} className={`d-flex align-items-flex-start cursor-pointer`} onClick={() => handleClick(idx + 1)}>
                                <img src={item.img} alt={item.title} className="img-fluid image_side"/>
                                <div className="side_image_text">
                                    <p className="slide_title_side">{item.title}</p>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="line_with_text mt-3">
                <span>Best Project Showcase</span>
                <hr />
            </div>  
             < COEBestProjects/>
        </div>
    </div>
  );
};

export default COEStorySlider;
