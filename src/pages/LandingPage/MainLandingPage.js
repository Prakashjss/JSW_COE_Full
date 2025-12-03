
import React from "react";
import Header from "../../components/COE_Main";
import COESlider from "../../components/COE_Slider";
import AboutCOE from "../../components/COE_About";
import OurImpact from "../../components/COE_Impact";
import LeadersSlider from '../../components/COE_Leaders';
import COEStorySlider from "../../components/COEStorySlider";
// import JourneyTimeline from '../../components/COE_Journey';
import COEJourney from '../../components/Journey_test';
import SavingsImpact from '../../components/COESavingsImpact';
import Footer from '../../components/COE_Footer';

const MainPage = () => {
  return (
    <div className="page-container">
     <Header/>
     <COESlider/>
     <AboutCOE/>
     <OurImpact/>
     <LeadersSlider/>
     <COEStorySlider/>
     <COEJourney/>
     {/* <JourneyTimeline/> */}
     <SavingsImpact/>
     <Footer/>
    </div>
  );
};

export default MainPage;
