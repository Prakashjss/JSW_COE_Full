

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true); // default collapsed

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const menuItems = [
//     { icon: "bi bi-grid", label: "Dashboard" },
//     { icon: "bi bi-files", label: "Projects", path: "/projects"  },
//     { icon: "bi bi-graph-up-arrow", label: "Reports" },
//     { icon: "bi bi-book", label: "User Guide" },
//     { icon: "bi bi-check2-circle", label: "My Approvals" },
//   ];

//   return (
//     <div className={`main_inner_sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
//       {/* Logo */}
//     <div className="w-75">
//        <Link to="/projects"> {/* Redirects to new page */}
//          <img className="logo_image" src="/images/jsw_logo_1.png" alt="Logo" />
//        </Link>
//      </div>

//       {/* Toggle Button */}
//       <div className="d-flex left_collapse_div" onClick={toggleSidebar}>
//         <i className={`bi bi-chevron-double-right toggle-icon ${!isCollapsed ? "rotated" : ""}`}></i>
//         {!isCollapsed && <span className="collapse_text">Collapse</span>}
//       </div>

//       {/* Menu */}
//       <div className="left_side_inner_div">
//         <ul className="nav nav-sidebar">
//           {menuItems.map((item, index) => (
//             <li key={index} className={index === 0 ? "active" : ""}>
//               <a href={item.href || "#"}> <i className={item.icon}></i>
//                 {!isCollapsed && ` ${item.label}`}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SideBar;


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // React Router

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const location = useLocation();

  // const menuItems = [
  //   { icon: "bi bi-grid", label: "Dashboard",},
  //   { icon: "bi bi-files", label: "Projects"},
  //   { icon: "bi bi-graph-up-arrow", label: "Reports"},
  //   { icon: "bi bi-book", label: "User Guide"},
  //   { icon: "bi bi-check2-circle", label: "My Approvals", path: "/approvals"},
  // ];

  const menuItems = [
  { icon: "bi bi-grid", label: "Dashboard", path: "/dashboard" },
  { icon: "bi bi-files", label: "Projects", path: "/projects" },
  { icon: "bi bi-graph-up-arrow", label: "Reports", path: "/reports" },
  { icon: "bi bi-book", label: "User Guide", path: "/guide" },
  { icon: "bi bi-check2-circle", label: "My Approvals", path: "/approvals" },
];


  return (
    <div className={`main_inner_sidebar ${isCollapsed ? "collapsed" : "expanded"}`}>
      
      {/* Logo */}
      <div className="w-75">
        <Link to="/MainPage"> {/* Redirects to new page */}
          <img className="logo_image" src="/images/jsw_logo_1.png" alt="Logo" />
        </Link>
      </div>

      {/* Toggle Button */}
      <div className="d-flex left_collapse_div" onClick={toggleSidebar}>
        <i className={`bi bi-chevron-double-right toggle-icon ${!isCollapsed ? "rotated" : ""}`}></i>
        {!isCollapsed && <span className="collapse_text">Collapse</span>}
      </div>

      {/* Menu */}
      <div className="left_side_inner_div">
        <ul className="nav nav-sidebar">
          {/* {menuItems.map((item, index) => (
            <li key={index} className={index === 0 ? "active" : ""}>
              <Link to={item.path || "#"}>
                <i className={item.icon}></i>
                {!isCollapsed && ` ${item.label}`}
              </Link>
            </li>
          ))} */}

          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index} className={isActive ? "active" : ""}>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  {!isCollapsed && ` ${item.label}`}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
