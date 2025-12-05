// import React, { useState  } from "react";

// import project_data from "../DashboardData/ProjectTableData.json";  // Dummy Project Data Inject

// import ToggleRightPopup from '../RightOffCanvas';  // Right Side OffCanvas

// import ProjectInfoModal from './ProjectInfoModal';


// const [activeTab, setActiveTab] = ("My Projects"); 



// const Dashboardtable = ({mode = "dashboard"}) =>{


//     const handleRowAction = (row) => {
//         console.log("Row clicked:", row);
//     };

//     // const [selectedRow, setSelectedRow] = useState(null);

    // const [showModalProjectInfo, setShowModalProjectInfo] = useState(false); // Hide and Show for KPI Modal State

//     return (
//         <div className="dashboard_table_main_div">
//             <div className="table_heading">
//                 <div className="row d-flex table_head_first_div">
//                     <div className="w-25 table_head_left"> 
//                         {/* <h6>Project List</h6> 
//                         <span>This is a list of ongoing projects.</span> */}

//                         <h6>{mode === "approvals" ? "My Approvals" : "Project List"}</h6>
//                         <span>
//                         {mode === "approvals"
//                             ? "Review and take action on pending approvals here."
//                             : "This is a list of ongoing projects."
//                         }
//                         </span>
//                     </div>
//                     <div className=" row d-flex w-75 table_head_right">
//                         <div className="w-50 search-container">
//                             <input type="text" className="form-control search-input" placeholder="Search projects by title, ID, or manager..."/>
//                             <i className="bi bi-search search-icon"></i>
//                         </div>
//                         {mode != "approvals" && (
//                             <>
//                             <button className=" btn btn-danger add_new_project_btn" type="button"><i className="bi bi-plus-circle-dotted"></i>Add New Project</button>
//                             <button className=" btn btn-light project_export_btn" type="button"><i className="bi bi-box-arrow-down"></i>Export</button>
//                             </>
//                         )}
                          
//                     </div>
//                 </div>
//             </div>

//             {/* Tabs Section Start*/}

//             <div className="w-50 nav_tabs">
//                 <ul className="nav nav-tabs mt-3" id="projectTabs" role="tablist">
//                     <li className="nav-item" role="presentation">
//                         <button className="nav-link active" id="dashboard_table" data-bs-toggle="tab" data-bs-target="#my" type="button" role="tab">
//                         My Projects
//                         {mode === "approvals" && (
//                             <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>475</span>
//                         )}
//                         </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                         {/* <button className="nav-link" id="registered-tab" data-bs-toggle="tab" data-bs-target="#registered" type="button" role="tab">
//                         Registered
//                         </button> */}

//                         <button className="nav-link" id="registered-tab"  data-bs-toggle="tab" data-bs-target="#registered" type="button" role="tab"> 
//                         {mode === "approvals" ? "Approval Pending" : "Registered"}
//                         {mode === "approvals" && (
//                             <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>227</span>
//                         )}
//                         </button>

//                     </li>
//                     <li className="nav-item" role="presentation">
//                         {/* <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab">
//                         Completed
//                         </button> */}

//                          <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab">
//                          {mode === "approvals" ? "Approval Projects" : "Completed"}
//                          {mode === "approvals" && (
//                             <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>148</span>
//                         )}
//                         </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                         {/* <button className="nav-link" id="vetted-tab" data-bs-toggle="tab" data-bs-target="#vetted" type="button" role="tab">
//                         Vetted
//                         </button> */}

//                         <button className="nav-link" id="vetted-tab" data-bs-toggle="tab" data-bs-target="#vetted" type="button" role="tab">
//                        {mode === "approvals" ? "Rejected Projects" : "Vetted"}
//                        {mode === "approvals" && (
//                             <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>100</span>
//                         )}
//                         </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                         {/* <button className="nav-link" id="draft-tab" data-bs-toggle="tab" data-bs-target="#draft" type="button" role="tab">
//                         Draft
//                         </button> */}
//                         {mode !== "approvals" && (
//                             <li className="nav-item" role="presentation">
//                                 <button className="nav-link" id="vetted-tab" data-bs-toggle="tab" data-bs-target="#vetted" type="button" role="tab">
//                                 Vetted
//                                 </button>
//                             </li>
//                         )}
//                     </li>
//                 </ul>
//             </div>

//             {/* Tabs Section End*/}

//             {/* Tabs Dashboard Section Start  */}

//             <div className="tab-content mt-3" id="projectTabsContent">
//                 <div className="tab-pane fade show active" id="my" role="tabpanel">
//                       <div className="fluid-container table_main_div mt-4" id="my">
//                         <table className="table table-hover align-middle" id="dashboard_table">
//                             <thead className="table-light">
//                             <tr>
//                                 <th className="project_name_head">Project Name</th>
//                                 <th className="location_head">Location</th>
//                                 <th className="project_manager_head">Project Manager</th>
//                                 <th className="savings_head">Savings (Cr)</th>
//                                 <th className="investment_head">Investments (Cr)</th>
//                                 {/* <th className="progress_status_head">Progress Status</th> */}
//                                 {mode !== "approvals" && <th className="progress_status_head">Progress Status</th>}
//                                 <th className="charter_head">Charter</th>
//                                 <th>Stages</th>
//                                  {mode === "approvals" && <th className="action_head">Action</th>}
//                             </tr>
//                             </thead>
//                             {/* <tbody>
//                             {project_data.map((proj, idx, row) => (
//                                 <tr key={proj.id || idx} row-id={proj.id}>
//                                 <td>{proj.projectName.project && (<div className="projectName"><a className="project_link" href=''>{proj.projectName.project}</a></div>)}{proj.projectName.projectCode && (<div className="projectCode">{proj.projectName.projectCode}</div>)}</td>
//                                 <td className="location">{proj.location}</td>
//                                 <td className="manager">{proj.manager}</td>
//                                 <td className="text-success savings">{proj.savings}</td>
//                                 <td className="investments">{proj.investments}</td>
//                                 <td className="progress_status">
//                                     <div className="badge_div">
//                                         <span className={`badge ${
//                                             proj.progress.status === "Completed" ? "bg-success": 
//                                             proj.progress.status === "Delayed" ? "bg-warning text-dark": "bg-primary"
//                                             }`}>
//                                             {proj.progress.status}
//                                         </span>
//                                     </div>    
//                                     <div className="d-flex align-items-center" style={{ gap: "6px" }}>
//                                         <div className="progress flex-grow-1" style={{ height: "6px" }}>
//                                         <div
//                                             className={`progress-bar ${
//                                             proj.progress.status === "On Time" ? "bg-primary": 
//                                             proj.progress.status === "Completed" ? "bg-success":
//                                             proj.progress.status === "Delayed" ? "bg-warning": "bg-secondary"
//                                             }`}
//                                             role="progressbar"
//                                             style={{ width: `${proj.progress.percent}%` }}
//                                         ></div>
//                                         </div>
//                                         <span className="progress_count">{proj.progress.percent}%</span>
//                                     </div>
//                                 </td>

//                                 <td className="charter">
//                                     <i className={proj.charter.doc}></i>
//                                     <i className={`${proj.charter.approval}`}></i>
//                                 </td>

//                                     <td className="stages stages_main_div">
//                                        <div className="stages_main_div_inner">
//                                          <div className="stage_name"> <i className={`bi bi-circle-fill ${
//                                                 proj.stages.name.includes("S1 Verification - Pending")
//                                                 ? "text-danger" 
//                                                 : proj.stages.name === "Closed"
//                                                 ? "text-success" 
//                                                 : proj.stages.name === "Execution"
//                                                 ? "text-purple" 
//                                                 : "text-secondary" }`}></i>{" "}
//                                             {proj.stages.name}
//                                         </div>
//                                         {proj.stages.since && (<div className="text-muted small">Pending from {proj.stages.since}</div>)}
//                                        </div>
//                                        <div className="stages_three_dot_div">
//                                             <i className="bi bi-three-dots-vertical" onClick={() => { handleRowAction(proj); setShowModalProjectInfo(true) } }></i>
//                                        </div>
//                                     </td>

//                                 </tr>
//                             ))}
//                             </tbody> */}
//                             <tbody>
//                             {project_data.map((proj, idx) => (
//                                 <tr key={proj.id || idx} row-id={proj.id}>
//                                 {/* Project Name */}
//                                 <td>
//                                     {proj.projectName.project && (
//                                     <div className="projectName">
//                                         <a className="project_link" href="#">{proj.projectName.project}</a>
//                                     </div>
//                                     )}
//                                     {proj.projectName.projectCode && (
//                                     <div className="projectCode">{proj.projectName.projectCode}</div>
//                                     )}
//                                 </td>

//                                 {/* Location */}
//                                 <td className="location">{proj.location}</td>

//                                 {/* Manager */}
//                                 <td className="manager">{proj.manager}</td>

//                                 {/* Savings */}
//                                 <td className="text-success savings">{proj.savings}</td>

//                                 {/* Investments */}
//                                 <td className="investments">{proj.investments}</td>

//                                 {/* Only show progress if NOT approvals */}
//                                 {mode !== "approvals" && (
//                                     <td className="progress_status">
//                                     <div className="badge_div">
//                                         <span className={`badge ${
//                                         proj.progress.status === "Completed" ? "bg-success" :
//                                         proj.progress.status === "Delayed" ? "bg-warning text-dark" :
//                                         "bg-primary"
//                                         }`}>{proj.progress.status}</span>
//                                     </div>
//                                     <div className="d-flex align-items-center" style={{ gap: "6px" }}>
//                                         <div className="progress flex-grow-1" style={{ height: "6px" }}>
//                                         <div
//                                             className={`progress-bar ${
//                                             proj.progress.status === "On Time" ? "bg-primary" :
//                                             proj.progress.status === "Completed" ? "bg-success" :
//                                             proj.progress.status === "Delayed" ? "bg-warning" : "bg-secondary"
//                                             }`}
//                                             role="progressbar"
//                                             style={{ width: `${proj.progress.percent}%` }}
//                                         ></div>
//                                         </div>
//                                         <span className="progress_count">{proj.progress.percent}%</span>
//                                     </div>
//                                     </td>
//                                 )}

//                                 {/* Charter */}
//                                 <td className="charter">
//                                     <i className={proj.charter.doc}></i>
//                                     <i className={proj.charter.approval}></i>
//                                 </td>

//                                 {/* Stages */}
//                                 <td className="stages stages_main_div">
//                                     <div className="stages_main_div_inner">
//                                     <div className="stage_name">
//                                         <i className={`bi bi-circle-fill ${
//                                         proj.stages.name.includes("S1 Verification - Pending") ? "text-danger" :
//                                         proj.stages.name === "Closed" ? "text-success" :
//                                         proj.stages.name === "Execution" ? "text-purple" : "text-secondary"
//                                         }`}></i>{" "}
//                                         {proj.stages.name}
//                                     </div>
//                                     {proj.stages.since && (<div className="text-muted small">Pending from {proj.stages.since}</div>)}
//                                     </div>
//                                 </td>

//                                 {/* Action column only for approvals */}
//                                 {mode === "approvals" && (
//                                     <td className="action_column">
//                                         {/* <button type="button" className="btn btn-success btn-sm me-2">Accept</button>
//                                         <button type="button" className="btn btn-danger btn-sm">Reject</button> */}
//                                         <button type="button" className="btn btn-success btn-sm me-2"
//                                             onClick={() => props.onActionClick("Accept")}>
//                                             Accept</button>

//                                             <button type="button" className="btn btn-danger btn-sm"
//                                             onClick={() => props.onActionClick("Reject")}>
//                                             Reject</button>

//                                     </td>
//                                 )}
//                                 </tr>
//                             ))}
//                             </tbody>

//                         </table>
//                     </div>
//                 </div>

//                 <div className="tab-pane fade" id="registered" role="tabpanel">
//                     <p>Registered projects content goes here...</p>
//                 </div>

//                 <div className="tab-pane fade" id="completed" role="tabpanel">
//                     <p>Completed projects content goes here...</p>
//                 </div>

//                 <div className="tab-pane fade" id="vetted" role="tabpanel">
//                     <p>Vetted projects content goes here...</p>
//                 </div>

//                 <div className="tab-pane fade" id="draft" role="tabpanel">
//                     <p>Draft projects content goes here...</p>
//                 </div>
//             </div>

//             {/* Tabs Dashboard Section End  */}

//               <ToggleRightPopup/>
                        
//             {/* Project Information Popup Function  */}
//             <ProjectInfoModal show={showModalProjectInfo} onClose={() => setShowModalProjectInfo(false)} />

//         </div>
        
//     )
// }

// export default Dashboardtable


// import React, { useState } from "react";
// import project_data from "../DashboardData/ProjectTableData.json"; // Dummy Project Data
// import ToggleRightPopup from '../RightOffCanvas';  // Right Side OffCanvas
// import ProjectInfoModal from './ProjectInfoModal';

// const Dashboardtable = ({ mode = "dashboard" }) => {

//     // State hooks
//     const [activeTab, setActiveTab] = useState("My Projects");
//     const [showModalProjectInfo, setShowModalProjectInfo] = useState(false);
//     const [showActionModal, setShowActionModal] = useState(false);
//     const [actionType, setActionType] = useState(""); // Accept or Reject

//     // Handle row info action
//     const handleRowAction = (row) => {
//         console.log("Row clicked:", row);
//         setShowModalProjectInfo(true);
//     };

//     // Handle Accept / Reject buttons
//     const handleActionClick = (type) => {
//         setActionType(type);
//         setShowActionModal(true);
//     };

//     const handleConfirmAction = () => {
//         console.log(`${actionType} confirmed`);
//         setShowActionModal(false);
//     };

//     return (
//         <div className="dashboard_table_main_div">

//             {/* Table Header */}
//             <div className="table_heading">
//                 <div className="row d-flex table_head_first_div">
//                     <div className="w-25 table_head_left">
//                         <h6>{mode === "approvals" ? "My Approvals" : "Project List"}</h6>
//                         <span>
//                             {mode === "approvals"
//                                 ? "Review and take action on pending approvals here."
//                                 : "This is a list of ongoing projects."}
//                         </span>
//                     </div>
//                     <div className="row d-flex w-75 table_head_right">
//                         <div className="w-50 search-container">
//                             <input type="text" className="form-control search-input" placeholder="Search projects by title, ID, or manager..." />
//                             <i className="bi bi-search search-icon"></i>
//                         </div>
//                         {mode !== "approvals" && (
//                             <>
//                                 <button className="btn btn-danger add_new_project_btn" type="button">
//                                     <i className="bi bi-plus-circle-dotted"></i>Add New Project
//                                 </button>
//                                 <button className="btn btn-light project_export_btn" type="button">
//                                     <i className="bi bi-box-arrow-down"></i>Export
//                                 </button>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Tabs Section */}
//             <div className="w-50 nav_tabs">
//                 <ul className="nav nav-tabs mt-3" id="projectTabs" role="tablist">
//                     <li className="nav-item" role="presentation">
//                         <button className="nav-link active" id="dashboard_table" data-bs-toggle="tab" data-bs-target="#my" type="button" role="tab">
//                             My Projects
//                             {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>475</span>}
//                         </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                         <button className="nav-link" id="registered-tab" data-bs-toggle="tab" data-bs-target="#registered" type="button" role="tab">
//                             {mode === "approvals" ? "Approval Pending" : "Registered"}
//                             {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>227</span>}
//                         </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                         <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab">
//                             {mode === "approvals" ? "Approval Projects" : "Completed"}
//                             {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>148</span>}
//                         </button>
//                     </li>
//                     <li className="nav-item" role="presentation">
//                         <button className="nav-link" id="vetted-tab" data-bs-toggle="tab" data-bs-target="#vetted" type="button" role="tab">
//                             {mode === "approvals" ? "Rejected Projects" : "Vetted"}
//                             {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>100</span>}
//                         </button>
//                     </li>
//                 </ul>
//             </div>

//             {/* Tab Content */}
//             <div className="tab-content mt-3" id="projectTabsContent">
//                 <div className="tab-pane fade show active" id="my" role="tabpanel">
//                     <div className="fluid-container table_main_div mt-4">
//                         <table className="table table-hover align-middle" id="dashboard_table">
//                             <thead className="table-light">
//                                 <tr>
//                                     <th className="project_name_head">Project Name</th>
//                                     <th className="location_head">Location</th>
//                                     <th className="project_manager_head">Project Manager</th>
//                                     <th className="savings_head">Savings (Cr)</th>
//                                     <th className="investment_head">Investments (Cr)</th>
//                                     {mode !== "approvals" && <th className="progress_status_head">Progress Status</th>}
//                                     <th className="charter_head">Charter</th>
//                                     <th>Stages</th>
//                                     {mode === "approvals" && <th className="action_head">Action</th>}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {project_data.map((proj, idx) => (
//                                     <tr key={proj.id || idx}>
//                                         <td>
//                                             {proj.projectName.project && (
//                                                 <div className="projectName">
//                                                     <a className="project_link" href="#">{proj.projectName.project}</a>
//                                                 </div>
//                                             )}
//                                             {proj.projectName.projectCode && (
//                                                 <div className="projectCode">{proj.projectName.projectCode}</div>
//                                             )}
//                                         </td>
//                                         <td>{proj.location}</td>
//                                         <td>{proj.manager}</td>
//                                         <td className="text-success">{proj.savings}</td>
//                                         <td>{proj.investments}</td>

//                                         {mode !== "approvals" && (
//                                             <td className="progress_status">
//                                                 <div className="badge_div">
//                                                     <span className={`badge ${
//                                                         proj.progress.status === "Completed" ? "bg-success" :
//                                                             proj.progress.status === "Delayed" ? "bg-warning text-dark" : "bg-primary"
//                                                     }`}>{proj.progress.status}</span>
//                                                 </div>
//                                                 <div className="d-flex align-items-center" style={{ gap: "6px" }}>
//                                                     <div className="progress flex-grow-1" style={{ height: "6px" }}>
//                                                         <div className={`progress-bar ${
//                                                             proj.progress.status === "On Time" ? "bg-primary" :
//                                                                 proj.progress.status === "Completed" ? "bg-success" :
//                                                                     proj.progress.status === "Delayed" ? "bg-warning" : "bg-secondary"
//                                                         }`} role="progressbar" style={{ width: `${proj.progress.percent}%` }}></div>
//                                                     </div>
//                                                     <span className="progress_count">{proj.progress.percent}%</span>
//                                                 </div>
//                                             </td>
//                                         )}

//                                         <td className="charter">
//                                             <i className={proj.charter.doc}></i>
//                                             <i className={proj.charter.approval}></i>
//                                         </td>

//                                         <td className="stages stages_main_div">
//                                             <div className="stages_main_div_inner">
//                                                 <div className="stage_name">
//                                                     <i className={`bi bi-circle-fill ${
//                                                         proj.stages.name.includes("S1 Verification - Pending") ? "text-danger" :
//                                                             proj.stages.name === "Closed" ? "text-success" :
//                                                                 proj.stages.name === "Execution" ? "text-purple" : "text-secondary"
//                                                     }`}></i>{" "}
//                                                     {proj.stages.name}
//                                                 </div>
//                                                 {proj.stages.since && <div className="text-muted small">Pending from {proj.stages.since}</div>}
//                                             </div>
//                                         </td>

//                                         {mode === "approvals" && (
//                                             <td className="action_column">
//                                                 <button className="btn btn-success btn-sm me-2" onClick={() => handleActionClick("Accept")}>Accept</button>
//                                                 <button className="btn btn-danger btn-sm" onClick={() => handleActionClick("Reject")}>Reject</button>
//                                             </td>
//                                         )}

//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Popup & Project Info Modal */}
//             <ToggleRightPopup />
//             <ProjectInfoModal show={showModalProjectInfo} onClose={() => setShowModalProjectInfo(false)} />

//             {/* Accept / Reject Modal */}
//             {showActionModal && (
//                 <div className="modal fade show d-block"  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//                     <div className="modal-dialog" id="approavlOrReject">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <div className="modal_header_inner">
//                                     <h5 className="modal-title">Confirm {actionType}</h5>
//                                     <span>You are about to accept this project. Please provide a comment explaining your decision.</span>
//                                 </div>
//                                 <button type="button" className="btn-close" onClick={() => setShowActionModal(false)}></button>
//                             </div>
//                             <div className="modal-body">
//                                 <h6>Comment <span className="mandatory">*</span></h6>
//                                 <textarea className="form-control" id="comment_area" rows={4} placeholder="Enter your comment here..."></textarea>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-outline-secondary" onClick={() => setShowActionModal(false)}>Cancel</button>
//                                 <button type="button" className="btn btn-primary" onClick={handleConfirmAction}
//                                     style={{ backgroundColor: actionType === "Accept"
//                                             ? "#02A62B" : actionType === "Reject"
//                                             ? "#ED1C24" : "#0d6efd"
//                                     }}>Confirm {actionType || ""}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// export default Dashboardtable;


// // src/.../Dashboardtable.jsx
// import React, { useState } from "react";
// import project_data from "../DashboardData/ProjectTableData.json";
// import ToggleRightPopup from "../RightOffCanvas";
// import ProjectInfoModal from "./ProjectInfoModal";
// import "../CSS/MyApprovals.css";

// const Dashboardtable = ({ mode = "dashboard" }) => {
//   // local copy of data so we can update rows
//   const [rows, setRows] = useState(
//     project_data.map((p) => ({ ...p, status: null, time: null }))
//   );

//   const [showActionModal, setShowActionModal] = useState(false);
//   const [actionType, setActionType] = useState(""); // "Accept" or "Reject"
//   const [selectedRowId, setSelectedRowId] = useState(null);
//   const [comment, setComment] = useState("");
//   const [showModalProjectInfo, setShowModalProjectInfo] = useState(false); // Hide and Show for KPI Modal State


//   // open modal for a particular row + action
//   const handleActionClick = (type, rowId) => {
//     setActionType(type);
//     setSelectedRowId(rowId);
//     setComment("");
//     setShowActionModal(true);
    
//   };

//   // confirm accept/reject -> update the specific row
//   const handleConfirmAction = () => {
    
//     if (selectedRowId == null) {
//       setShowActionModal(false);
//       return;
//     }

//     const now = new Date();
//     // Format: DD MMM YYYY, hh:mm AM/PM
//     const timestamp = now.toLocaleString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });

//     setRows((prev) =>
//       prev.map((r) =>
//         (r.id || r.projectName.projectCode || Math.random()) === selectedRowId
//           ? {
//               ...r,
//               status: actionType === "Accept" ? "Accepted" : "Rejected",
//               time: timestamp,
//               comment: comment || null,
//             }
//           : r
//       )
//     );

//     // close modal
//     setShowActionModal(false);
//     setSelectedRowId(null);
//     setActionType("");
//     setComment("");
//   };

//   // helper to get unique id for a row (prefers r.id if present)
//   const rowKey = (r, idx) => r.id ?? r.projectName?.projectCode ?? idx;

//   return (
//     <div className="dashboard_table_main_div">
//       {/* table heading (kept minimal for brevity) */}
//       <div className="table_heading">
//         <div className="row d-flex table_head_first_div">
//           <div className="w-25 table_head_left">
//             <h6>{mode === "approvals" ? "My Approvals" : "Project List"}</h6>
//             <span>
//               {mode === "approvals"
//                 ? "Review and take action on pending approvals here."
//                 : "This is a list of ongoing projects."}
//             </span>
//           </div>
//           <div className="row d-flex w-75 table_head_right">
//             <div className="w-50 search-container">
//               <input
//                 type="text"
//                 className="form-control search-input"
//                 placeholder="Search projects by title, ID, or manager..."
//               />
//               <i className="bi bi-search search-icon"></i>
//             </div>
//             {mode != "approvals" && (
//                   <>
//                   <button className=" btn btn-danger add_new_project_btn" type="button"><i className="bi bi-plus-circle-dotted"></i>Add New Project</button>
//                   <button className=" btn btn-light project_export_btn" type="button"><i className="bi bi-box-arrow-down"></i>Export</button>
//                   </>
//               )}
//           </div>
//         </div>
//       </div>

//         <div className="w-50 nav_tabs">
//                  <ul className="nav nav-tabs mt-3" id="projectTabs" role="tablist">
//                      <li className="nav-item" role="presentation">
//                          <button className="nav-link active" id="dashboard_table" data-bs-toggle="tab" data-bs-target="#my" type="button" role="tab">
//                              My Projects
//                              {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>475</span>}
//                          </button>
//                      </li>
//                      <li className="nav-item" role="presentation">
//                          <button className="nav-link" id="registered-tab" data-bs-toggle="tab" data-bs-target="#registered" type="button" role="tab">
//                              {mode === "approvals" ? "Approval Pending" : "Registered"}
//                              {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>227</span>}
//                          </button>
//                      </li>
//                      <li className="nav-item" role="presentation">
//                          <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed" type="button" role="tab">
//                              {mode === "approvals" ? "Approval Projects" : "Completed"}
//                              {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>148</span>}
//                          </button>
//                      </li>
//                      <li className="nav-item" role="presentation">
//                          <button className="nav-link" id="vetted-tab" data-bs-toggle="tab" data-bs-target="#vetted" type="button" role="tab">
//                              {mode === "approvals" ? "Rejected Projects" : "Vetted"}
//                              {mode === "approvals" && <span className="badge bg-secondary ms-2" style={{ fontSize: "0.6rem", verticalAlign: "top" }}>100</span>}
//                          </button>
//                      </li>
//                  </ul>
//              </div>

//       {/* table */}
//   <div className="tab-content mt-3" id="projectTabsContent">
//     <div className="tab-pane fade show active" id="my" role="tabpanel"></div>
//       <div className="fluid-container table_main_div mt-4">
//         <table className="table table-hover align-middle" id="dashboard_table">
//           <thead className="table-light">
//             <tr>
//               <th>Project Name</th>
//               <th>Location</th>
//               <th>Project Manager</th>
//               <th>Savings (Cr)</th>
//               <th>Investments (Cr)</th>
//               {mode !== "approvals" && <th>Progress Status</th>}
//               <th>Charter</th>
//               <th>Stages</th>
//               {mode === "approvals" && <th>Action</th>}
//             </tr>
//           </thead>

//           <tbody>
//             {rows.map((proj, idx) => {
//               const key = rowKey(proj, idx);

//               return (
//                 <tr key={key}>
//                   <td>
//                     {proj.projectName?.project && (
//                       <div className="projectName">
//                         <a className="project_link" href="#">
//                           {proj.projectName.project}
//                         </a>
//                       </div>
//                     )}
//                     {proj.projectName?.projectCode && (
//                       <div className="projectCode">{proj.projectName.projectCode}</div>
//                     )}
//                   </td>

//                   <td>{proj.location}</td>
//                   <td>{proj.manager}</td>
//                   <td className="text-success">{proj.savings}</td>
//                   <td>{proj.investments}</td>

//                   {mode !== "approvals" && (
//                     <td>
//                       <div className="badge_div">
//                         <span
//                           className={`badge ${
//                             proj.progress.status === "Completed"
//                               ? "bg-success"
//                               : proj.progress.status === "Delayed"
//                               ? "bg-warning text-dark"
//                               : "bg-primary"
//                           }`}
//                         >
//                           {proj.progress.status}
//                         </span>
//                       </div>
//                     </td>
//                   )}

//                   <td className="charter">
//                     <i className={proj.charter?.doc}></i>
//                     <i className={proj.charter?.approval}></i>
//                   </td>

//                   <td className="stages stages_main_div">
//                     <div className="stages_main_div_inner">
//                       <div className="stage_name">
//                         <i
//                           className={`bi bi-circle-fill ${
//                             proj.stages?.name?.includes("S1 Verification - Pending")
//                               ? "text-danger"
//                               : proj.stages?.name === "Closed"
//                               ? "text-success"
//                               : "text-secondary"
//                           }`}
//                         ></i>{" "}
//                         {proj.stages?.name}
//                       </div>
//                       {proj.stages?.since && (
//                         <div className="text-muted small">Pending from {proj.stages.since}</div>
//                       )}
//                     </div>
//                   </td>

//                   {mode === "approvals" && (
//                     <td className="action_column">
//                       {/* if status exists show span + timestamp, else show two buttons */}
//                       {proj.status ? (
//                         <div>
//                           <span
//                             className={`status-badge ${
//                               proj.status === "Accepted" ? "status-accepted" : "status-rejected"
//                             }`}
//                           >
//                             {proj.status === "Accepted" ? (
//                                 <i className="bi bi-check2 me-2" style={{ color: "#02A62B" }}></i>
//                             ) : (
//                                 <i className="bi bi-x-lg me-2" style={{ color: "#ED1C24" }}></i>
//                             )}
//                             {proj.status}
//                           </span>
//                           {proj.time && (
//                             <div className="status-timestamp" style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
//                               {proj.time}
//                             </div>
//                           )}
//                           {proj.comment && (
//                             <div className="status-comment text-muted" style={{ fontSize: 12, marginTop: 4 }}>
//                               {proj.comment}
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <div>
//                           <button
//                             className="btn btn-success btn-sm me-2"
//                             onClick={() => handleActionClick("Accept", key)}
//                           >
//                             Accept
//                           </button>
//                           <button
//                             className="btn btn-danger btn-sm"
//                             onClick={() => handleActionClick("Reject", key)}
//                           >
//                             Reject
//                           </button>
//                         </div>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       </div>

//       <div className="tab-pane fade" id="registered" role="tabpanel"></div>
//   <div className="tab-pane fade" id="completed" role="tabpanel"></div>
//   <div className="tab-pane fade" id="vetted" role="tabpanel"></div>
  

//       {/* Right popup / project info */}
//       <ToggleRightPopup />
//       <ProjectInfoModal show={showModalProjectInfo} onClose={() => setShowModalProjectInfo(false)} />

//       {/* Accept/Reject modal */}
//       {showActionModal && (
//         <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Confirm {actionType}</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowActionModal(false)} />
//               </div>

//               <div className="modal-body">
//                 <p>
//                   {actionType === "Accept"
//                     ? "You are about to accept this project. Please provide a comment (optional)."
//                     : "You are about to reject this project. Please provide a comment (required)."}
//                 </p>

//                 <textarea
//                   className="form-control"
//                   rows={4}
//                   placeholder={`Enter ${actionType} comment...`}
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                 />
//               </div>

//               <div className="modal-footer">
//                 <button className="btn btn-outline-secondary" onClick={() => setShowActionModal(false)}>
//                   Cancel
//                 </button>

//                 <button
//                   className="btn"
//                   onClick={handleConfirmAction}
//                   style={{
//                     backgroundColor: actionType === "Accept" ? "#02A62B" : "#ED1C24",
//                     color: "#fff",
//                   }}
//                 >
//                   Confirm {actionType}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboardtable;


// src/.../Dashboardtable.jsx
import React, { useState } from "react";
import project_data from "../DashboardData/ProjectTableData.json";
import ToggleRightPopup from "../RightOffCanvas";
import ProjectInfoModal from "./ProjectInfoModal";
import "../CSS/MyApprovals.css";

const Dashboardtable = ({ mode = "dashboard" }) => {
  const [rows, setRows] = useState(
    project_data.map((p) => ({ ...p, status: null, time: null }))
  );

  const [showActionModal, setShowActionModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [comment, setComment] = useState("");
  const [showModalProjectInfo, setShowModalProjectInfo] = useState(false);

  const handleActionClick = (type, rowId) => {
    setActionType(type);
    setSelectedRowId(rowId);
    setComment("");
    setShowActionModal(true);
  };

  const handleConfirmAction = () => {
    if (selectedRowId == null) {
      setShowActionModal(false);
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setRows((prev) =>
      prev.map((r) =>
        (r.id || r.projectName.projectCode || Math.random()) === selectedRowId
          ? {
              ...r,
              status: actionType === "Accept" ? "Accepted" : "Rejected",
              time: timestamp,
              comment: comment || null,
            }
          : r
      )
    );

    setShowActionModal(false);
    setSelectedRowId(null);
    setActionType("");
    setComment("");
  };

  const rowKey = (r, idx) => r.id ?? r.projectName?.projectCode ?? idx;

  return (
    <div className="dashboard_table_main_div">

      {/* Heading */}
      <div className="table_heading">
        <div className="row d-flex table_head_first_div">
          <div className="w-25 table_head_left">
            <h6>{mode === "approvals" ? "My Approvals" : "Project List"}</h6>
            <span>
              {mode === "approvals"
                ? "Review and take action on pending approvals here."
                : "This is a list of ongoing projects."}
            </span>
          </div>

          <div className="row d-flex w-75 table_head_right">
            <div className="w-50 search-container">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search projects by title, ID, or manager..."
              />
              <i className="bi bi-search search-icon"></i>
            </div>

            {mode != "approvals" && (
              <>
                <button
                  className="btn btn-danger add_new_project_btn"
                  type="button"
                >
                  <i className="bi bi-plus-circle-dotted"></i>Add New Project
                </button>

                <button
                  className="btn btn-light project_export_btn"
                  type="button"
                >
                  <i className="bi bi-box-arrow-down"></i>Export
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-50 nav_tabs">
        <ul className="nav nav-tabs mt-3" id="projectTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="dashboard_table"
              data-bs-toggle="tab"
              data-bs-target="#my"
              type="button"
              role="tab"
            >
              My Projects
              {mode === "approvals" && (
                <span
                  className="badge bg-secondary ms-2"
                  style={{ fontSize: "0.6rem", verticalAlign: "top" }}
                >
                  475
                </span>
              )}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="registered-tab"
              data-bs-toggle="tab"
              data-bs-target="#registered"
              type="button"
              role="tab"
            >
              {mode === "approvals" ? "Approval Pending" : "Registered"}
              {mode === "approvals" && (
                <span
                  className="badge bg-secondary ms-2"
                  style={{ fontSize: "0.6rem", verticalAlign: "top" }}
                >
                  227
                </span>
              )}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="completed-tab"
              data-bs-toggle="tab"
              data-bs-target="#completed"
              type="button"
              role="tab"
            >
              {mode === "approvals" ? "Approval Projects" : "Completed"}
              {mode === "approvals" && (
                <span
                  className="badge bg-secondary ms-2"
                  style={{ fontSize: "0.6rem", verticalAlign: "top" }}
                >
                  148
                </span>
              )}
            </button>
          </li>

          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="vetted-tab"
              data-bs-toggle="tab"
              data-bs-target="#vetted"
              type="button"
              role="tab"
            >
              {mode === "approvals" ? "Rejected Projects" : "Vetted"}
              {mode === "approvals" && (
                <span
                  className="badge bg-secondary ms-2"
                  style={{ fontSize: "0.6rem", verticalAlign: "top" }}
                >
                  100
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content mt-3" id="projectTabsContent">

        {/* TAB 1 → YOUR TABLE MOVED HERE */}
        <div className="tab-pane fade show active" id="my" role="tabpanel">
          <div className="fluid-container table_main_div mt-4">
            <table className="table table-hover align-middle" id="dashboard_table">
              <thead className="table-light">
                <tr>
                  <th>Project Name</th>
                  <th>Location</th>
                  <th>Project Manager</th>
                  <th>Savings (Cr)</th>
                  <th>Investments (Cr)</th>
                  {mode !== "approvals" && <th>Progress Status</th>}
                  <th>Charter</th>
                  <th>Stages</th>
                  {mode === "approvals" && <th>Action</th>}
                </tr>
              </thead>

              <tbody>
                {rows.map((proj, idx) => {
                  const key = rowKey(proj, idx);

                  return (
                    <tr key={key}>
                      <td>
                        {proj.projectName?.project && (
                          <div className="projectName">
                            <a className="project_link" href="#">
                              {proj.projectName.project}
                            </a>
                          </div>
                        )}

                        {proj.projectName?.projectCode && (
                          <div className="projectCode">
                            {proj.projectName.projectCode}
                          </div>
                        )}
                      </td>

                      <td>{proj.location}</td>
                      <td>{proj.manager}</td>
                      <td className="text-success">{proj.savings}</td>
                      <td>{proj.investments}</td>

                      {mode !== "approvals" && (
                        <td>
                          <div className="badge_div">
                            <span
                              className={`badge ${
                                proj.progress.status === "Completed"
                                  ? "bg-success"
                                  : proj.progress.status === "Delayed"
                                  ? "bg-warning text-dark"
                                  : "bg-primary"
                              }`}
                            >
                              {proj.progress.status}
                            </span>
                          </div>
                        </td>
                      )}

                      <td className="charter">
                        <i className={proj.charter?.doc}></i>
                        <i className={proj.charter?.approval}></i>
                      </td>

                      <td className="stages stages_main_div">
                        <div className="stages_main_div_inner">
                          <div className="stage_name">
                            <i
                              className={`bi bi-circle-fill ${
                                proj.stages?.name?.includes(
                                  "S1 Verification - Pending"
                                )
                                  ? "text-danger"
                                  : proj.stages?.name === "Closed"
                                  ? "text-success"
                                  : "text-secondary"
                              }`}
                            ></i>{" "}
                            {proj.stages?.name}
                          </div>

                          {proj.stages?.since && (
                            <div className="text-muted small">
                              Pending from {proj.stages.since}
                            </div>
                          )}
                        </div>
                      </td>

                      {mode === "approvals" && (
                        <td className="action_column">
                          {proj.status ? (
                            <div>
                              <span
                                className={`status-badge ${
                                  proj.status === "Accepted"
                                    ? "status-accepted"
                                    : "status-rejected"
                                }`}
                              >
                                {proj.status === "Accepted" ? (
                                  <i
                                    className="bi bi-check2 me-2"
                                    style={{ color: "#02A62B" }}
                                  ></i>
                                ) : (
                                  <i
                                    className="bi bi-x-lg me-2"
                                    style={{ color: "#ED1C24" }}
                                  ></i>
                                )}
                                {proj.status}
                              </span>

                              {proj.time && (
                                <div
                                  className="status-timestamp"
                                  style={{
                                    fontSize: 12,
                                    color: "#666",
                                    marginTop: 6,
                                  }}
                                >
                                  {proj.time}
                                </div>
                              )}

                              {proj.comment && (
                                <div
                                  className="status-comment text-muted"
                                  style={{
                                    fontSize: 12,
                                    marginTop: 4,
                                  }}
                                >
                                  {proj.comment}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div>
                              <button
                                className="btn btn-success btn-sm me-2"
                                onClick={() => handleActionClick("Accept", key)}
                              >
                                Accept
                              </button>

                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleActionClick("Reject", key)}
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* EMPTY PANES REQUIRED FOR BOOTSTRAP */}
        <div className="tab-pane fade" id="registered" role="tabpanel">
            <p>Registered projects content goes here...</p>
        </div>
        <div className="tab-pane fade" id="completed" role="tabpanel">
            <p>Completed projects content goes here...</p>
        </div>
        <div className="tab-pane fade" id="vetted" role="tabpanel">
            <p>Vetted projects content goes here...</p>
        </div>
      </div>

      {/* Right popup & Project Info */}
      <ToggleRightPopup />
      <ProjectInfoModal
        show={showModalProjectInfo}
        onClose={() => setShowModalProjectInfo(false)}
      />

      {/* Accept / Reject Modal */}
      {showActionModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm {actionType}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowActionModal(false)}
                />
              </div>

              <div className="modal-body">
                <p>
                  {actionType === "Accept"
                    ? "You are about to accept this project. Please provide a comment explaining your decision."
                    : "You are about to reject this project. Please provide a comment explaining your decision."}
                </p>

                <textarea
                  className="form-control"
                  rows={4}
                  placeholder={`Enter your comment here...`}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setShowActionModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn"
                  onClick={handleConfirmAction}
                  style={{
                    backgroundColor:
                      actionType === "Accept" ? "#02A62B" : "#ED1C24",
                    color: "#fff",
                  }}
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

export default Dashboardtable;
