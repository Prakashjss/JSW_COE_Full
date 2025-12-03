

import React from "react";

const COEJourney = () => {

  const journeyData = [
    {
      year: 2022,
      img: "/images/calendar-check.webp",
      title: "COE Founded",
      description:
        "Established the Centre of Excellence to drive innovation and operational efficiency.",
      savings: "$6.2 Cr",
    },
    {
      year: 2023,
      img: "/images/users.webp",
      title: "18 Clusters Formed",
      description:
        "Expanded operations across multiple business units with specialized cluster teams.",
      savings: "$15.2 Cr",
    },
    {
      year: 2024,
      img: "/images/map-pin.webp",
      title: "Major Milestones",
      description:
        "Launched Intellisight Dashboard, SEED inclusion, and US plant integration.",
      savings: "$20.5 Cr",
    },
    {
      year: 2025,
      img: "/images/wrench.webp",
      title: "Future Expansion",
      description:
        "Maintenance cluster formation and SEED expansion across all locations.",
      savings: "$35.2 Cr",
    },
  ];

  return (
    <div className="journey-container">
      <h2 className="journey-title">Journey of COE</h2>

      {/* Wave SVG */}
      <svg className="journey-wave" viewBox="0 0 1150 230">
        <defs>
          <filter id="waveShadow" x="-20%" y="-20%" width="160%" height="160%">
            <feDropShadow dx="0" dy="20" stdDeviation="10" floodColor="#2744A0" floodOpacity="0.3"/>
          </filter>
        </defs>

        <path className="wave-path"
          filter="url(#waveShadow)"
          d="M-18,100 
            C15,150 90,180 160,150 
            S280,30 365,90
            S480,180 560,150 
            S680,55 780,150 
            S950,200 1050,140 
            S1200,190 1200,180"/>
      </svg>

      {/* Journey Cards */}
      <div className="cards">
        {journeyData.map((item, index) => (
          <div className="card" key={index}>
            <h4>{item.year}</h4>
            <img src={item.img} alt={item.title} className="journey-icon"/>
            <p>{item.title}</p>
            <div className="disc">{item.description}</div>
            <div className="savings_value">
              Savings: <span>{item.savings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default COEJourney;
