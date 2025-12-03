// import React from "react";
import ReactDOM from "react-dom";

const MilestoneModal = ({ show, onClose }) => {
  if (!show) return null; 
  

  return ReactDOM.createPortal(

    <div className="modal fade show milestone_modal" data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">Add New Milestone</h6>
            <button type="button" className="btn-close1" onClick={onClose}><i className="bi bi-x-lg"></i></button>
          </div>
          <div className="modal-body">
            <div className="col">
                <label htmlFor="milestone_date_popup" className="form-label">Milestone Date <span className="mandatory">*</span> </label>
                <input type="date" id="milestone_date_popup" className="form-control" />
            </div>
            <div className="col">
                <label htmlFor="description_popup" className="form-label">Description <span className="mandatory">*</span> </label>
                <textarea className="form-control" id="description_popup" rows="4" placeholder="Enter milestone description..."></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary cancel_btn" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary add_milestone_popup_btn">Add Milestone</button>
          </div>
        </div>
      </div>
      
    </div>,
    
    document.body 
    
  );
};

export default MilestoneModal;
