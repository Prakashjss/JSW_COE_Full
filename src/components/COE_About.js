
import '../CSS/COE_LandingPage.css';

const AboutCOE = () =>{
    return (
        <div className="about-container">
            <div className="row">
                <div className="col-6 about">
                    <h3>About COE</h3>
                    <p>The Centre of Excellence serves as the cornerstone of innovation within our organization, 
                        bringing together brilliant minds from across all locations to collaborate, 
                        innovate, and deliver impactful solutions that drive our collective success forward.</p>
                </div>
                <div className="col-3 Our_Vision">
                    <img src="images/eye_icon.png" className="eye_icon" />
                    <h5>Our Vision</h5>
                    <p>To be the driving force behind transformative innovation, 
                        fostering a culture of continuous improvement and 
                        excellence across all organizational levels.</p>
                </div>
                <div className="col-3 Our_Mission">
                    <img src="images/grid_icon.png" className="grid_icon" />
                    <h5>Our Mission</h5>
                    <p>To be the driving force behind transformative innovation, 
                        fostering a culture of continuous improvement and 
                        excellence across all organizational levels.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCOE