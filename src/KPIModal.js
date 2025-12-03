import ReactDOM from "react-dom";

const KPIModal = ({ showKPI, onCloseKPI }) => {
  if (!showKPI) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal fade show kpi_modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Add New KPI</h6>
              <button type="button" className="btn-close1" onClick={onCloseKPI}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="col pb-3 pt-2">
                <label htmlFor="project_kpi" className="form-label">Project KPI <span className="mandatory">*</span></label>
                <select className="form-select" id="project_kpi" defaultValue="">
                    <option value="">Select project KPI</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>
                </select>
              </div>
              <div className="col pb-3">
                <label htmlFor="modal_unit_kpi" className="form-label"> Unit <span className="mandatory">*</span></label>
                <input type="text" id="modal_unit_kpi" className="form-control" placeholder="e.g, kwh, %, tons CO2"/>
              </div>
               <div className="col pb-3">
                <label htmlFor="current_baseline_kpi" className="form-label"> Current Baseline <span className="mandatory">*</span></label>
                <input type="number" id="current_baseline_kpi" className="form-control" placeholder="0"/>
              </div>
              <div className="col pb-3">
                <label htmlFor="modal_target_kpi" className="form-label"> Target <span className="mandatory">*</span></label>
                <input type="number" id="modal_target_kpi" className="form-control" placeholder="0"/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary kpi_cancel_btn" onClick={onCloseKPI}> Cancel</button>
              <button type="button" className="btn btn-primary add_kpi_btn">Add KPI</button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default KPIModal;
