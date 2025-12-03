import '../CSS/COE_LandingPage.css';

// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeadersSlider = () => {
  const leaders = [
    {
      quote: "We’re not just a business, we’re a catalyst for India’s growth.",
      description: "The Centre of Excellence represents our commitment to fostering innovation and driving transformational change. Through collaborative efforts and strategic initiatives, we are building a future where excellence is not just an aspiration, but our standard operating procedure.",
      name: "Rathod Sir",
      image:"/images/Leader_person_image.webp",
    },
    {
      quote: "Innovation drives progress, and progress drives success.",
      description: "At our core, we believe in continuous learning and empowering individuals to challenge the norm. Together, we’re creating a culture that thrives on innovation and collaboration.",
      name: "Kumar Sir",
      image: "/images/Leader_person_image.webp",
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="leader-container">
      <h2 className="text-center mb-5 leader_title">Our Leaders</h2>
      <div className="leader-carousel-container">
        <Slider {...settings}>
          {leaders.map((leader, index) => (
            <div key={index}>
              <div className="row our_leader_row">
                <div className="col-lg-7 col-md-6 text-md-start text-center">
                  <h3 className="leader_quote mb-4">{leader.quote}</h3>
                  <p className="leader_description mb-3">{leader.description}</p>
                  <p className="fw-semibold text-dark">- {leader.name}</p>
                </div>
                <div className="col-5">
                  <img src={leader.image} alt={leader.name} className="img-fluid"/>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
    </div>
  );
};

export default LeadersSlider;
