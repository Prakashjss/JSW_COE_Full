import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { Calendar, Users, MapPin, Wrench } from "lucide-react";

const timelineData = [
  {
    year: 2022,
    // icon: Calendar,
    title: "COE Founded",
    desc: "Established the Centre of Excellence to drive innovation and efficiency.",
    savings: "₹6.2cr",
    style: { top: "430px", left: "105px" },
    img: "/images/calendar-check.webp",
  },
  {
    year: 2023,
    // icon: Users,
    title: "18 Clusters Formed",
    desc: "Expanded operations across multiple business units with specialized cluster teams.",
    savings: "₹15.2cr",
    style: { top: "230px", left: "390px" },
    img: "/images/users.webp",
  },
  {
    year: 2024,
    // icon: MapPin,
    title: "Major Milestones",
    desc: "Launched Intellisight Dashboard, SEED inclusion, US plant integration, coated locations added.",
    savings: "₹20.5cr",
    style: { top: "80px", left: "740px" },
    img: "/images/map-pin.webp",
  },
  {
    year: 2025,
    // icon: Wrench,
    title: "Future Expansion",
    desc: "Maintenance cluster formation, SEED expansion across all locations.",
    savings: "₹35.2cr",
    style: { top: "-45px", left: "1065px" },
    img: "/images/wrench.webp",
  },
];

const JourneyTimeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div className="timeline-container" ref={ref}>
      <h2 className="timeline-title text-center text-2xl font-bold mb-6">
        Journey of COE
      </h2>

      {/* Blue Path */}
      <motion.svg
        className="timeline-svg"
        width="100%"
        height="480"
        viewBox="135 -155 1100 480"
        // viewBox="-20 0 557 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            
        <motion.path

        // d="M-18,100 
        // C10,150 90,190 170,140 
        // S300,70 370,120 
        // S480,180 550,150 
        // S680,75 770,150 
        // S950,200 1050,160 
        // S1200,190 1200,190"

           d="M-18,100 
        C15,150 90,180 160,150 
        S280,30 365,90
        S480,180 560,150 
        S680,55 780,150 
        S950,200 1050,160 
        S1200,190 1200,190"

          stroke="#0056D2"
          strokeWidth="7"
          strokeLinecap="round"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        />
      </motion.svg>


      {/* Timeline Content */}
      <motion.div className="timeline-content relative"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}>
        {timelineData.map((item, idx) => {
        //   const Icon = item.icon;
          const cardClass = idx % 2 === 0 ? "card-left" : "card-right";
          return (
            <motion.div key={item.year}
              className={`year-block ${cardClass} absolute`}
              style={item.style}
              variants={itemVariants}>
              <div className="year-label mb-2">{item.year}</div>  
              <div className="icon-circle bg-blue-600 p-3 rounded-full w-fit mb-3">
                {/* <Icon color="white" size={22} /> */}
               <img src={item.img} alt={item.title} className="journey_icon" />
              </div>
              <div className="year-desc">
                <span className="highlight font-semibold">{item.title}:</span> <div className="item_description mt-3">{item.desc}</div>
                <div className="savings_1 font-medium mt-1"><span className="savings_2">Savings:</span> {item.savings}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default JourneyTimeline;
