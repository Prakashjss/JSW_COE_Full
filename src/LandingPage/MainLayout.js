

// import MainCard from './LandingPage/DashboardCard'; // Before Table Card, Background-Images, Options;
import MainCard from './DashboardCard'; // Before Table Card, Background-Images, Options;
// Realted to above css in LanidngPage.css

// import Dashboardtable from './LandingPage/DashboardTabSection'; //Project Table Purpose;
import Dashboardtable from './DashboardTabSection'; //Project Table Purpose;

// import SideBar from './LandingPage/LeftSideBar'; // Left Side Navigation Purpose;
import SideBar from './LeftSideBar'; // Left Side Navigation Purpose;


import '../CSS/LandingPage.css';  // Main Layout of the Landing page


// Main Dashboard Layout component 
const Layout = () => {

  return (
    <div className="container-fluid dashboard">
      <div className="row d-flex dashboatd_main_div">
        <div className="col-3 dashboard_left sidebar">
        <SideBar/>
        </div>
        <div className="col-9 dashboard_right">

          {/*Right Sidebar content Start */}
          <div className="right_side_div">
            <div className="right_side_inner_div">
           
                <div className="row">
                  
                  <div className="col-9 d-flex right_side_first_div">
                    <div className=" right_side_heading">
                      <div className="w-25"><img className="coe_logo_image" src="/images/COE_logo.png" alt="Logo" /></div>  
                    </div>
                    <div className="row d-flex heading_row w-75">

                        <select className="form-select select_one" defaultValue="">
                          <option value="" disabled>Fiscal year</option>
                          <option value="1">Dropdown 1</option>
                          <option value="2">Dropdown 2</option>
                        </select>
                        <select className="form-select select_two" defaultValue="">
                          <option value="" disabled>Cluster</option>
                          <option value="1">Dropdown 1</option>
                          <option value="2">Dropdown 2</option>
                        </select>
                        <select className="form-select select_three" defaultValue="">
                          <option value="" disabled>Location</option>
                          <option value="1">Dropdown 1</option>
                          <option value="2">Dropdown 2</option>
                        </select>
                        <select className="form-select select_four" defaultValue="">
                          <option value="" disabled>Department</option>
                          <option value="1">Dropdown 1</option>
                          <option value="2">Dropdown 2</option>
                        </select>
                        <select className="form-select select_five" defaultValue="">
                          <option value="" disabled>Progress</option>
                          <option value="1">Dropdown 1</option>
                          <option value="2">Dropdown 2</option>
                        </select>
                        <select className="form-select select_six" defaultValue="">
                          <option value="" disabled>Stages</option>
                          <option value="1">Dropdown 1</option>
                          <option value="2">Dropdown 2</option>
                        </select>
                      
                      
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="row d-flex w-100 heading_row user_level">
                      <div className="w-50">

                        <div className="dropdown">
                          <button id="dropdownBtn" className="btn btn-outline-primary dropdown-toggle" type="button" 
                          data-bs-toggle="dropdown" aria-expanded="false"> <i className="bi bi-people me-2"></i>Collaboration</button>
                          <ul className="dropdown-menu">
                            <li>
                              <label className="dropdown-item d-flex">
                                <input type="radio" name="reactRadio" className="form-check-input me-2" value="All Projects" />
                               All Projects
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item d-flex">
                                <input type="radio" name="reactRadio" className="form-check-input me-2" value="Cluster Projects" />
                                Cluster Projects
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item d-flex">
                                <input type="radio" name="reactRadio" className="form-check-input me-2" value="Collaborated Projects" />
                                Collaborated Projects
                              </label>
                            </li>
                          </ul>
                        </div>

                      </div>
                      <div className="row d-flex w-25 user_div">
                            <div className="w-25 user_icon">
                              <img src="/images/user_icon.png" className='user_icon_img' alt="" />
                              </div>
                            <div className="w-25 user_name">Admin</div>
                      </div>
                    </div>
                  </div>

                </div>

            </div>
          </div>

          <div className="right_side_div_1" >
              <div className='row'>
                  <div className='w-50'>
                  <h4>IntelliSight</h4>
                  <p>Monitor and manage all your projects from here.</p>
                  </div>
              </div>
             <MainCard />  
             <Dashboardtable/>
          </div>

          {/*Right Sidebar content End */}

        </div>
      </div>


    </div>

    
  );
}

export default Layout;
