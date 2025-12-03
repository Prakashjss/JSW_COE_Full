// import React, { useState } from "react";
// import SideBar from "../LandingPage/LeftSideBar";
// import Dashboardtable from "../LandingPage/DashboardTabSection";  
// import ProjectInfoModal from "./ProjectInfoModal"; // Modal component
// import "../CSS/LandingPage.css";
// import "../CSS/MyApprovals.css";

// const MyApprovals = () => {
//   // Modal state
//   const [showModal, setShowModal] = useState(false);
//   const [actionType, setActionType] = useState(""); // "Accept" or "Reject"

//   // Function passed to Dashboardtable
//   const handleActionClick = (type) => {
//     setActionType(type); // Store Accept or Reject
//     setShowModal(true);  // Show modal
//   };

//   // Confirm button inside modal
//   const handleConfirm = () => {
//     console.log(`${actionType} confirmed`);
//     setShowModal(false);
//   };

//   return (
//     <div className="container-fluid dashboard">
//       <div className="row d-flex dashboatd_main_div">

//         {/* Left Sidebar */}
//         <div className="col-3 dashboard_left sidebar">
//           <SideBar />
//         </div>

//         {/* Right Side */}
//         <div className="col-9 dashboard_right">
//           <div className="right_side_div">
//             <div className="right_side_inner_div">
//               <div className="row">
//                 <div className="col-9 d-flex right_side_first_div">
//                   <div className="right_side_heading">
//                     <div className="w-25">
//                       <img className="coe_logo_image" src="/images/COE_logo.png" alt="Logo" />
//                     </div>  
//                   </div>
//                   <div className="row d-flex heading_row w-75">
//                     <select className="form-select select_one" defaultValue="">
//                       <option value="" disabled>Fiscal year</option>
//                       <option value="1">Dropdown 1</option>
//                       <option value="2">Dropdown 2</option>
//                     </select>
//                     <select className="form-select select_two" defaultValue="">
//                       <option value="" disabled>Cluster</option>
//                       <option value="1">Dropdown 1</option>
//                       <option value="2">Dropdown 2</option>
//                     </select>
//                     <select className="form-select select_three" defaultValue="">
//                       <option value="" disabled>Location</option>
//                       <option value="1">Dropdown 1</option>
//                       <option value="2">Dropdown 2</option>
//                     </select>
//                     <select className="form-select select_four" defaultValue="">
//                       <option value="" disabled>Department</option>
//                       <option value="1">Dropdown 1</option>
//                       <option value="2">Dropdown 2</option>
//                     </select>
//                     <select className="form-select select_five" defaultValue="">
//                       <option value="" disabled>Progress</option>
//                       <option value="1">Dropdown 1</option>
//                       <option value="2">Dropdown 2</option>
//                     </select>
//                     <select className="form-select select_six" defaultValue="">
//                       <option value="" disabled>Stages</option>
//                       <option value="1">Dropdown 1</option>
//                       <option value="2">Dropdown 2</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="col-3">
//                   <div className="row d-flex w-100 heading_row user_level">
//                     <div className="w-50">
//                       <div className="dropdown">
//                         <button id="dropdownBtn" className="btn btn-outline-primary dropdown-toggle" type="button" 
//                           data-bs-toggle="dropdown" aria-expanded="false">
//                           <i className="bi bi-people me-2"></i>Collaboration
//                         </button>
//                         <ul className="dropdown-menu">
//                           <li>
//                             <label className="dropdown-item d-flex">
//                               <input type="radio" name="reactRadio" className="form-check-input me-2" value="All Projects" />
//                               All Projects
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item d-flex">
//                               <input type="radio" name="reactRadio" className="form-check-input me-2" value="Cluster Projects" />
//                               Cluster Projects
//                             </label>
//                           </li>
//                           <li>
//                             <label className="dropdown-item d-flex">
//                               <input type="radio" name="reactRadio" className="form-check-input me-2" value="Collaborated Projects" />
//                               Collaborated Projects
//                             </label>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="row d-flex w-25 user_div">
//                       <div className="w-25 user_icon">
//                         <img src="/images/user_icon.png" className='user_icon_img' alt="" />
//                       </div>
//                       <div className="w-25 user_name">Admin</div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>

//           {/* Dashboard Table */}
//           <div className="right_side_div_2">
//             <Dashboardtable mode="approvals" onActionClick={handleActionClick} />
//           </div>

//         </div>
//       </div>

//       {/* Modal for Accept/Reject */}
//       {showModal && (
//         <ProjectInfoModal
//           show={showModal}
//           onClose={() => setShowModal(false)}
//           title={actionType === "Accept" ? "Confirm Accept" : "Confirm Reject"}
//           onConfirm={handleConfirm}>
//           Are you sure you want to {actionType.toLowerCase()} this project?
//         </ProjectInfoModal>
//       )}

//     </div>
//   );
// };

// export default MyApprovals;


import React, { useState } from "react";
import SideBar from "../LandingPage/LeftSideBar";
import Dashboardtable from "../LandingPage/DashboardTabSection";
// import "../CSS/LandingPage.css";
import "../CSS/MyApprovals.css";

const MyApprovals = () => {
  const [showActionModal, setShowActionModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Open Modal from child component
  const handleActionClick = (type) => {
    setActionType(type);
    setShowActionModal(true);
  };

  // Confirm Accept / Reject
  const handleConfirmAction = () => {
    const timeStamp = new Date().toLocaleString();

    setStatusMessage(`${actionType}ed on ${timeStamp}`);
    setShowActionModal(false);
  };





  return (
    <div className="container-fluid dashboard">
      <div className="row d-flex dashboatd_main_div">

        {/* Left Sidebar */}
        <div className="col-3 dashboard_left sidebar">
          <SideBar />
        </div>

        {/* Right Side */}
        <div className="col-9 dashboard_right">
          <div className="right_side_div">
            <div className="right_side_inner_div">
              <div className="row">

                <div className="col-9 d-flex right_side_first_div">
                  <div className="right_side_heading">
                    <div className="w-25">
                      <img className="coe_logo_image" src="/images/COE_logo.png" alt="Logo" />
                    </div>
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
                        <button
                          id="dropdownBtn"
                          className="btn btn-outline-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-people me-2"></i>Collaboration
                        </button>

                        <ul className="dropdown-menu">
                          <li>
                            <label className="dropdown-item d-flex">
                              <input type="radio" className="form-check-input me-2" />
                              All Projects
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item d-flex">
                              <input type="radio" className="form-check-input me-2" />
                              Cluster Projects
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item d-flex">
                              <input type="radio" className="form-check-input me-2" />
                              Collaborated Projects
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row d-flex w-25 user_div">
                      <div className="w-25 user_icon">
                        <img src="/images/user_icon.png" className="user_icon_img" alt="" />
                      </div>
                      <div className="w-25 user_name">Admin</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Table */}
          <div className="right_side_div_2">
            <Dashboardtable mode="approvals" onActionClick={handleActionClick} />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className="alert alert-info text-center mt-3">
              {statusMessage}
            </div>
          )}

        </div>
      </div>

      {/* Modal */}
      {showActionModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">
                  Confirm {actionType}
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowActionModal(false)}></button>
              </div>

              <div className="modal-body">
                Are you sure you want to <strong>{actionType}</strong> this project?
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowActionModal(false)}>
                  Cancel
                </button>

                <button
                  className="btn"
                  style={{
                    backgroundColor: actionType === "Accept" ? "#02A62B" : "#ED1C24",
                    color: "white"
                  }}
                  onClick={handleConfirmAction}
                >
                  Confirm {actionType}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MyApprovals;
