
// import './App.css';    // All Page css 
// import Layout from '../src/LandingPage/MainLayout';  // Main Layout of the Landing page


// function App() {
//   return (
//   <Layout />
//   );
// }

// export default App;


import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './LandingPage/MainLayout';
import MainPage from './pages/LandingPage/MainLandingPage';

import MyApprovals from "./LandingPage/Approvals";


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Layout />} />

        {/* New COE Landing Page */}
        <Route path="/MainPage" element={<MainPage />} />

        {/* My Approvals Page */}
        <Route path="/approvals" element={<MyApprovals />} />
      </Routes>
    </Router>
  );
}

export default App;
