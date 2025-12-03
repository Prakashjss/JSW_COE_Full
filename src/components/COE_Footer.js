

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Left Section */}
        <div className="col-5 footer-left">
          <div className="footer-logos">
            <img src="/images/jsw_logo_1.png" alt="JSW Logo" className="footer-logo" />
            <img src="/images/COE_Footer_logo.webp"  alt="COE Logo" className="footer-logo" />
          </div>
          <p className="footer-description">
            The <span className="highlight">Centre of Excellence</span> serves
            as the cornerstone of innovation within our organization, bringing
            together brilliant minds from across all locations to collaborate,
            innovate, and deliver impactful solutions that drive our collective
            success forward.
          </p>
        </div>

        {/* Center Section */}
        <div className="col-2 footer-links">
          <h4>Quick links</h4>
          <ul>
            <li><a href="#">Intellisight</a></li>
            <li><a href="#">Dashboard Report</a></li>
            <li><a href="#">Documents</a></li>
            <li><a href="#">Rewards</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-2 footer-company">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Our Leadership</a></li>
            <li><a href="#">News & Updates</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Centre of Excellence. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
