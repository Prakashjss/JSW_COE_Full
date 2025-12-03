// import React from "react";

// const SavingsImpact = () => {
//   return (
//     <div className="savings-impact-container">

//      <div className="row d-flex align-items-center text-white impact_row_first">
//             {/* Left Section */}
//             <div className="col-4 first_left_div_savings">
//                 <h2 className="text-center savings_head_new">
//                 Savings Impact <br /> & Project Count
//                 </h2>
//             </div>
           
//             {/* Middle Divider */}
//             <div className="col-8 flex justify-center items-center relative first_right_div_savings">
//                <div className="row d-flex">
//                      <div className="flex col-6 text-center first_right_div_savings_inner">
//                      <img src="/images/folder-dot.webp"/>
//                       <div className="savings_project_count">1240+</div>
//                       <div className="savings_project_title">Total Projects</div>
//                     </div>
//                     <div className="flex col-6 text-center">
//                       <img src="/images/heroicons_user-group.webp"/>
//                       <div className="savings_project_count">300+</div>
//                       <div className="savings_project_title">No. of Stakeholders</div>
//                     </div>
//                </div>
//             </div>
//      </div>

//     </div>
//   );
// };

// export default SavingsImpact;


import React, { useEffect, useRef, useState } from "react";

const SavingsImpact = () => {
  const [projects, setProjects] = useState(0);
  const [stakeholders, setStakeholders] = useState(0);
  const sectionRef = useRef(null);
  const [trigger, setTrigger] = useState(0); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger((prev) => prev + 1);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const projectTarget = 1240;
    const stakeholderTarget = 300;
    const duration = 2000; // animation duration
    const steps = 60;
    const intervalTime = duration / steps;
    let currentStep = 0;

    setProjects(0);
    setStakeholders(0);

    const interval = setInterval(() => {
      currentStep++;
      setProjects(Math.min(Math.floor((projectTarget / steps) * currentStep), projectTarget));
      setStakeholders(Math.min(Math.floor((stakeholderTarget / steps) * currentStep), stakeholderTarget));
      if (currentStep >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [trigger]); 

  return (
    <div className="savings-impact-container" ref={sectionRef}>
      <div className="row d-flex align-items-center text-white impact_row_first">
        {/* Left Section */}
        <div className="col-4 first_left_div_savings">
          <h2 className="text-center savings_head_new">
            Savings Impact <br /> & Project Count
          </h2>
        </div>

        {/* Right Section */}
        <div className="col-8 flex justify-center items-center relative first_right_div_savings">
          <div className="row d-flex justify-content-center">
            <div className="flex col-6 text-center first_right_div_savings_inner">
              <img src="/images/folder-dot.webp" alt="Projects" />
              <div className="savings_project_count">{projects}+</div>
              <div className="savings_project_title">Total Projects</div>
            </div>
            <div className="flex col-6 text-center">
              <img src="/images/heroicons_user-group.webp" alt="Stakeholders" />
              <div className="savings_project_count">{stakeholders}+</div>
              <div className="savings_project_title">No. of Stakeholders</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsImpact;
