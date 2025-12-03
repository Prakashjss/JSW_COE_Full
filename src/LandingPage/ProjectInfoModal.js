// import React from "react";
import ReactDOM from "react-dom";

const ProjectInformationModal = ({ show, onClose }) => {
  if (!show) return null; 
  

  return ReactDOM.createPortal(

    <div className="modal fade show project_info_modal" data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">Project Information</h6>
            <button type="button" className="btn-close1" onClick={onClose}><i className="bi bi-x-lg"></i></button>
          </div>
          <div className="modal-body">
            <div className="row pb-2">
                <div className="col-6">
                    <label htmlFor="project_name_popup" className="form-label">Project Name</label>
                    <input type="text" id="project_name_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="project_level_popup" className="form-label">Project Level</label>
                    <input type="text" id="project_level_popup" className="form-control" />
                </div>
            </div>
             <div className="row pb-2">
                <div className="col-6">
                    <label htmlFor="project_type_popup" className="form-label">Project Type</label>
                    <input type="text" id="project_type_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="project_manager_popup" className="form-label">Project Manager</label>
                    <input type="text" id="project_manager_popup" className="form-control" />
                </div>
            </div>
            <div className="row pb-2">
                <div className="col">
                    <label htmlFor="project_description_popup" className="form-label">Project Manager</label>
                    <textarea className="form-control" id="project_description_popup"></textarea>
                </div>
            </div>
             <div className="row pb-2">
                <div className="col-6">
                    <label htmlFor="location_manager_popup" className="form-label">Location Manager</label>
                    <input type="text" id="location_manager_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="project_benefits_popup" className="form-label">Project Benefits</label>
                    <input type="text" id="project_benefits_popup" className="form-control" />
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-6">
                    <label htmlFor="collab_cluster_popup" className="form-label">Collab. CLuster</label>
                    <input type="text" id="collab_cluster_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="fiscal_year_popup" className="form-label">Fiscal Year</label>
                    <input type="text" id="fiscal_year_popup" className="form-control" />
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-6">
                    <label htmlFor="project_function_popup" className="form-label">Project Function</label>
                    <input type="text" id="project_function_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="kpis_popup" className="form-label">KPIs</label>
                    <input type="text" id="kpis_popup" className="form-control" />
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-6">
                    <label htmlFor="approval_pending_popup" className="form-label">Current approval pending stage</label>
                    <input type="text" id="approval_pending_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="last_approval_popup" className="form-label">Last Approval</label>
                    <input type="text" id="last_approval_popup" className="form-control" />
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-6">
                    <label htmlFor="last_approval_date_popup" className="form-label">Last Approval Date</label>
                    <input type="date" id="last_approval_date_popup" className="form-control" />
                </div>
                <div className="col-6">
                    <label htmlFor="budget_allocated_popup" className="form-label">Is Budget Allocated?</label>
                    <input type="text" id="budget_allocated_popup" className="form-control" />
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>,
    
    document.body 
    
  );
};

export default ProjectInformationModal;
