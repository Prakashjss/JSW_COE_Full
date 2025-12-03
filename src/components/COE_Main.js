// import React from "react";

// import '../CSS/COE_LandingPage.css'

// const Heading = () => {
//   return (
//     <div>
//       <h3>My New Component</h3>
//       <p>This is a reusable component added inside the MainPage.</p>
//     </div>
//   );
// };

// export default Heading;


import React from "react";
import '../CSS/COE_LandingPage.css';


const Header = () => {
  return (
    <header className="header-container">
      <div className=" col-10 header_left">
        <img src="images/jsw_logo_1.png" alt="JSW Logo" className="logo jsw" />
        <img src="images/COE_logo.png" alt="COE Logo" className="logo coe" />

      <nav className="header_nav">
        <a href="#" className="active">Intellisight</a>
        <a href="#">Dashboard Report</a>
        <a href="#">Documents</a>
        <a href="#">Rewards</a>
        <a href="#">About Us</a>
      </nav>
      </div>

      <div className=" col-2 header_right">
       <div className="admin_box">
          <img src="images/user_icon.png" alt="user Icon" className="logo user_icon" />
          <span className="admin-name">Admin</span>
          <span className="admin-arrow"><i className="bi bi-chevron-down"></i></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
