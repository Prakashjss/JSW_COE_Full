import React, { useState, useRef, useEffect } from "react";

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef();

  const showTooltip = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      top: rect.top + window.scrollY - 10,
      left: rect.left + window.scrollX + rect.width / 2,
    });
    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  return (
    <>
      <span className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>{children}</span>
      {
      visible && (
        <div className="tooltip-text" ref={tooltipRef} style={{ top: coords.top, left: coords.left}}> {text}</div>
      )}
    </>
  );
};

export default Tooltip;
