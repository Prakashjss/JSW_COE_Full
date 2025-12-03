



import React, { useEffect, useRef, useState } from "react";
import "../CSS/COE_LandingPage.css";

const impactData = [
  { value: 156, label: "Workshops Conducted" },
  { value: 1240, label: "Projects Registered" },
  { value: 2850, label: "Ideas Identified (NI & HD)" },
  { value: 89, label: "Pain Areas Solved", isPercent: true },
  { value: 12.5, label: "Savings Till Date (Cr)", isCurrency: true },
  { value: 300, label: "Team Size (Stakeholders)" },
];

export default function OurImpact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="impact-container" ref={ref}>
      <h2>Our Impact</h2>
      <div className="row impact-grid">
        {impactData.map((d, i) => (
          <div key={i} className="col-4 pb-5 impact-card">
            <Counter {...d} visible={visible} />
            <div className="impact-label">{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Counter = ({ value, visible, isPercent, isCurrency }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return setN(0);
    let start = 0, step = value / 150;
    const t = setInterval(() => {
      start += step;
      if (start >= value) { start = value; clearInterval(t); }
      setN(start);
    }, 20);
    return () => clearInterval(t);
  }, [visible, value]);

  return (
    <div className="impact-value">
      {isCurrency && "₹"}{Math.round(n)}{isPercent ? "%" : "+"}
    </div>
  );
};
