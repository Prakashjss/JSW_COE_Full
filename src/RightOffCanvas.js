import React, { useState  } from "react";
import MilestoneModal from "./MilestoneModal";  // Milestone Modal Popup
import MilestoneTable from "./MilestoneTable";  // Milestone Table with Dummy Data

import KPIModal from "./KPIModal"; // KPI Modal Popup
import KPITable from "./KPITable"; // KPI Table with Dummy Data

import MonthlyUpdatesTable from "./MonthlyUpdateTable"; // Monthly Update Table with Dummy Data

import FinanceMilestoneTable from "./FinanceMilestoneTable"; // Milestone table 

import FinanceKPITable from "./FinanceKPITable"; // KPI table

import FinanceStakeHolderTable from "./FinanceStakeHolderTable"; // StakeHolder table

import FinanceMonthlyUpdateTable from "./FinanceMonthlyUpdateTable"; // Monthly Updates table

const ToggleRightPopup = () =>{

    const [showModal, setShowModal] = useState(false); // Hide and Show for Milestone Modal State
    const [showModalKPI, setShowModalKPI] = useState(false); // Hide and Show for KPI Modal State

    return (
            <>

            <div className="custom-backdrop"></div>

            <div className="offcanvas1 offcanvas-end1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Edit Project Form</h5>
                <span>Manage updates to your ongoing projects.</span>    
            </div>
            <div className="offcanvas-body1">
               
            {/* Tab Start  */}
            <div className="w-100 nav_tabs_create_project">
                <ul className="nav nav-tabs" id="create_project_tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="project_info_btn" data-bs-toggle="tab" data-bs-target="#project_info_tab" type="button" role="tab">
                        Project Information
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="stake_holder_btn" data-bs-toggle="tab" data-bs-target="#stake_holder_tab" type="button" role="tab">
                        Stakeholders
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="milestones_btn" data-bs-toggle="tab" data-bs-target="#milestones_tab" type="button" role="tab">
                        Milestones
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="kpis_tab_btn" data-bs-toggle="tab" data-bs-target="#kpis_tab" type="button" role="tab">
                        KPIs
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="finance_tab_btn" data-bs-toggle="tab" data-bs-target="#finance_tab" type="button" role="tab">
                        Finance
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="monthly_updates_btn" data-bs-toggle="tab" data-bs-target="#monthly_updates" type="button" role="tab">
                        Monthly Updates
                        </button>
                    </li>
                </ul>
            </div>
            {/* Tab End  */}

            <div className="tab-content mt-3" id="createProjectNavTabs">
                
                <div className="tab-pane fade show active" id="project_info_tab" role="tabpanel">
                    <h6 className="gen_info_heading">General Information</h6>
                    {/* Project Info Start Tab-1*/}
                    <div className="project_info_div">
                        <div className="row w-100">
                            <div className="col-4">
                                <label htmlFor="cluster_Name" className="form-label">Cluster <span className="mandatory">*</span> </label>
                                <input type="text" id="cluster_Name" className="form-control"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="collaboration_cluster" className="form-label">In Collaboration with Cluster? <span className="mandatory">*</span> </label>
                                <select className="form-select" id="collaboration_cluster" defaultValue="">
                                    <option value="">Select option</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                             <div className="col-4">
                                <label htmlFor="new_idea" className="form-label project_type_label">Project Type <span className="mandatory">*</span> </label>
                                <div className="row project_radio_div">
                                    <div className="w-25 form-check new_idea_div">
                                        <input className="form-check-input" type="radio" name="radioDefault" id="new_idea" defaultChecked/>
                                        <label className="form-check-label" htmlFor="new_idea">
                                            New Idea
                                        </label>
                                    </div>
                                    <div className="w-75 form-check horizontal_idea_div">
                                        <input className="form-check-input" type="radio" name="radioDefault" id="horizontal_idea"/>
                                        <label className="form-check-label" htmlFor="horizontal_idea">
                                        Horizontal Deployment Idea
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-4">
                                <label htmlFor="project_name" className="form-label">Project Name <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_name" defaultValue="">
                                    <option value="">Select project name</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                              <div className="col-4">
                                <label htmlFor="project_progress" className="form-label">Project Progress <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_progress" defaultValue="">
                                    <option value="">Select benifits</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="department" className="form-label">Department <span className="mandatory">*</span> </label>
                                <select className="form-select" id="department" defaultValue="">
                                    <option value="">Select department</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                           
                        </div>
                        {/* <div className="row">
                            <div className="w-100">
                                <label htmlFor="project_description" className="form-label">Project Description <span className="mandatory">*</span> </label>
                                <textarea className="form-control" id="project_description" rows="3" placeholder="Provide a detailed description of the project..."></textarea>
                            </div>
                        </div> */}
                        <div className="row">
                                <div className="col-4">
                                <label htmlFor="project_benifits" className="form-label">Project Benifits <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_benifits" defaultValue="">
                                    <option value="">Select benifits</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="planned_fiscal_year" className="form-label">Planned Fiscal Year <span className="mandatory">*</span> </label>
                                <select className="form-select" id="planned_fiscal_year" defaultValue="">
                                    <option value="">Select fiscal year</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="project_location" className="form-label">Project Location <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_location" defaultValue="">
                                    <option value="">Select location</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-4">
                                <label htmlFor="project_progress" className="form-label">Project Progress <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_progress" defaultValue="">
                                    <option value="">Select benifits</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="department" className="form-label">Department <span className="mandatory">*</span> </label>
                                <select className="form-select" id="department" defaultValue="">
                                    <option value="">Select department</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="w-50">
                                <label htmlFor="project_description" className="form-label">Project Description <span className="mandatory">*</span> </label>
                                <textarea className="form-control" id="project_description" rows="4" placeholder="Provide a detailed description of the project..."></textarea>
                            </div>
                             <div className="w-50">
                                <label htmlFor="remarks" className="form-label">Remarks</label>
                                <textarea className="form-control" id="remarks" rows="4" placeholder="Add any additional remarks or note..."></textarea>
                            </div>
                        </div>
                        <div className="row attachment_section">
                            <div className="col-3">
                                <label htmlFor="attachment_one" className="form-label">Attachment</label>
                                <input type="file" id="attachment_one" className="form-control" /> <br/>
                            </div>
                        </div>
                    </div>
                    {/* Project Info End Tab-1*/}
                </div>

                 <div className="tab-pane fade" id="stake_holder_tab" role="tabpanel">
                    <h6 className="gen_info_heading stake_holder_heading">Stakeholder Information</h6>
                    {/* Stake Holder Start Tab-2 */}
                    <div className="stakeholder_Info_div">
                        <div className="row">
                            <div className="col-4">
                                 <label htmlFor="project_manager" className="form-label">Project Manager <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_manager" defaultValue="">
                                    <option value="">Search & select project manager</option>
                                </select>
                            </div>
                             <div className="col-4">
                                 <label htmlFor="location_manager" className="form-label">Location Manager <span className="mandatory">*</span> </label>
                                <select className="form-select" id="location_manager" defaultValue="">
                                    <option value="">Search & select location manager</option>
                                </select>
                            </div>
                             
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="pro_manager_ph_number" className="form-label">Project Manager Phone Number <span className="mandatory">*</span> </label>
                                <input type="tel" id="pro_manager_ph_number" className="form-control" maxLength={10} onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, "")  }} placeholder="Enter phone number"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="co_ordinator" className="form-label">Coordinator <span className="mandatory">*</span> </label>
                                <input type="text" id="co_ordinator" className="form-control" placeholder="Enter coordinator name"/>
                            </div>
                        </div>
                        <div className="row">
                              <div className="col-4">
                                <label htmlFor="convenor" className="form-label">Convenor <span className="mandatory">*</span> </label>
                                <input type="text" id="convenor" className="form-control" placeholder="Enter convenor name"/>
                            </div>
                            <div className="col-4">
                                <label htmlFor="costing" className="form-label">Costing Head <span className="mandatory">*</span> </label>
                                <input type="text" id="costing" className="form-control" placeholder="Enter costing head name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 select_team_members">
                                <label htmlFor="project_team_members" className="form-label">Project Team Members <span className="mandatory">*</span> </label>
                                {/* <select className="form-select" id="project_team_members"  multiple="multiple"> */}
                                <select className="form-select" id="project_team_members"  defaultValue="">
                                    <option value="">Search & select team members</option>
                                    <option value="Test 1">Test 1</option>
                                    <option value="Test 2">Test 2</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    {/* Stake Holder End  Tab-2*/}
                </div>

                <div className="tab-pane fade" id="milestones_tab" role="tabpanel">
                    <h6 className="gen_info_heading project_milestone_heading">Milestone Timeline</h6>
                    {/* Milestone Timeline start Tab-3*/}
                    <div className="milestone_timeline">
                        <div className="row">
                            <div className="col-4">
                                <label htmlFor="planned_start_date" className="form-label">Planned Start Date <span className="mandatory">*</span> </label>
                                <input type="date" id="planned_start_date" className="form-control" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="actual_planned_date" className="form-label">Actual Start Date <span className="mandatory">*</span> </label>
                                <input type="date" id="actual_planned_date" className="form-control" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="planned_end_date" className="form-label">Planned End Date <span className="mandatory">*</span> </label>
                                <input type="date" id="planned_end_date" className="form-control" />
                            </div>
                        </div>
                            <div className="row">
                            <div className="col-4">
                                <label htmlFor="actual_end_date" className="form-label">Actual End Date <span className="mandatory">*</span> </label>
                                <input type="date" id="actual_end_date" className="form-control" />
                            </div>
                            <div className="col-4">
                                <label htmlFor="completion_quarter" className="form-label">Completion Quarter <span className="mandatory">*</span> </label>
                                <select className="form-select" id="completion_quarter" defaultValue="">
                                    <option value="">Select Quarter</option>
                                    <option value="Q1">Q1</option>
                                    <option value="Q2">Q2</option>
                                    <option value="Q3">Q3</option>
                                    <option value="Q4">Q4</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="project_level" className="form-label">Project Level <span className="mandatory">*</span> </label>
                                <select className="form-select" id="project_level" defaultValue="">
                                    <option value="">Select project level</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="milestone_table">
                            <div className="row milestone_head">
                                <div className="w-75 milestone_inner_1">
                                    <h6 className="gen_info_heading pro_milestone_head">Project Milestones</h6>
                                    <div className="milestone_inner_2">
                                        <i className="bi bi-info-circle"></i>
                                        <span className="milestone_sub_head">Please add atleast 3 milestones to proceed to the next action.</span>
                                    </div>
                                </div>
                                <div className="w-25 milestone_inner_3">
                                        <button className="add_milestone btn btn-outline-primary" type="button" onClick={() => setShowModal(true)}><i className="bi bi-plus"></i>Add Milestone </button>
                                </div>
                            </div>
                                
                            {/* Milestone Table  */}
                            <div className="milestone_table_div">
                                <MilestoneTable/>
                            </div>
                            {/* Milestone Table  */}
                            
                        </div>                    

                    </div>
                    {/* Milestone Timeline End Tab-3 */}
                </div>

                <div className="tab-pane fade" id="kpis_tab" role="tabpanel">
                    <h6 className="gen_info_heading">KPIs Management</h6>
                     {/* KPI Management Start Tab-4  */}
                    <div className="kpi_management">
                        <div className="kpi_management_inner_div">
                            <div className="row">
                                <div className="w-50">
                                    <label htmlFor="business_problem" className="form-label">Business Problem <span className="mandatory">*</span> </label>
                                    <textarea className="form-control" id="business_problem" rows="3" placeholder="Describe the business problem this project aims to solve..."></textarea>
                                </div>
                                <div className="w-50">
                                    <label htmlFor="solution" className="form-label">Solution<span className="mandatory">*</span> </label>
                                    <textarea className="form-control" id="solution" rows="3" placeholder="Describe the solution this project offers..."></textarea>
                                </div>
                            </div>
                        </div>
                        <hr className="custom_line"/>

                        <div className="row milestone_head">
                            <div className="w-75 milestone_inner_1">
                                <h6 className="gen_info_heading pro_milestone_head">Add New KPI</h6>
                                <div className="milestone_inner_2">
                                    <i className="bi bi-info-circle"></i>
                                    <span className="milestone_sub_head">Please add at least 1 KPI (maximum 4) to proceed to the next section.</span>
                                </div>
                            </div>
                            <div className="w-25 milestone_inner_3">
                                <button className="add_milestone btn btn-outline-primary" id="add_kpi_btn" type="button" 
                                onClick={() => setShowModalKPI(true)}><i className="bi bi-plus"></i>Add KPI </button>
                            </div>
                        </div>
                        
                        {/* KPI Table Start  */}
                        <KPITable/>
                        {/* KPI Table End  */}
                        <div className="kpi_last_div">
                            <div className="row pt-3">
                                <div className="col-3">
                                    <label htmlFor="project_function" className="form-label">Project Function <span className="mandatory">*</span> </label>
                                    <select className="form-select" id="project_function" defaultValue="">
                                        <option value="">Select function</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                     {/* KPI Management End Tab-4  */}
                </div>

                <div className="tab-pane fade" id="finance_tab" role="tabpanel">
                    {/* Finance Start Tab-5  */}

                    <div className="finance_tab_main_div">
                        <div className="accordion accordion-flush">
                            {/* Finance Project Input Section Start   */}
                            <div className="accordion mt-3" id="projectInputAccordian">
                                <div className="accordion-item custom-accordion-item">
                                    {/* <h2 className="accordion-header">
                                    <div className="accordion-button custom-accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFinance"
                                        aria-expanded="true" aria-controls="collapseFinance">
                                        <span>
                                            <i className="bi bi-chevron-right me-2 rotate-icon"></i>
                                            <span className="form-label mx-2">Project Inputs</span>
                                            <span className="text-muted">(To be filled by Project Manager)</span>
                                        </span>
                                        <button className="btn btn-sm btn-outline-secondary view_message_btn" data-bs-toggle="collapse" 
                                        data-bs-target="#collapseFinance">View Comments</button>
                                    </div>
                                    </h2> */}
                                    <h2 className="accordion-header d-flex justify-content-between align-items-center">
                                    <button className="accordion-button custom-accordion-button collapsed flex-grow-1" type="button" id="financeToggleBtn">
                                        <span>
                                        <i className="bi bi-chevron-right me-2 rotate-icon"></i>
                                        <span className="form-label mx-2">Project Inputs</span>
                                        <span className="text-muted">(To be filled by Project Manager)</span>
                                        </span>
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary ms-2 view_message_btn" id="viewCommentsBtn">View Comments</button>
                                  </h2>
                                    <div id="collapseFinance" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <label htmlFor="planned_investment" className="form-label">Planned Investment (Cr)<span className="mandatory">*</span> </label>
                                                <input type="number" id="planned_investment" className="form-control" placeholder="0.00"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="planned_savings" className="form-label">Planned Savings (Cr)<span className="mandatory">*</span> </label>
                                                <input type="number" id="planned_savings" className="form-control" placeholder="0.00"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="planned_ROI" className="form-label">Planned ROI (in Months) <span className="mandatory">*</span> </label>
                                                <input type="number" id="planned_ROI" className="form-control" placeholder="0.00"/>
                                            </div>
                                        </div>
                                        <div className="row pt-3 ">
                                            <div className="col-4">
                                                <label htmlFor="revised_investment" className="form-label">Revised Investment (Cr)<span className="mandatory">*</span> </label>
                                                <input type="number" id="revised_investment" className="form-control" placeholder="0.00"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="revised_savings" className="form-label">Revised Savings (Cr)<span className="mandatory">*</span> </label>
                                                <input type="number" id="revised_savings" className="form-control" placeholder="0.00"/>
                                            </div>
                                            <div className="col-4">
                                                <div className="row finance_radio">
                                                    <label htmlFor="new_idea" className="col-6 form-label finance_type_label">Budget Allocated <span className="mandatory">*</span> </label>
                                                    <div className="col-3 form-check finance_yes_div">
                                                        <input className="form-check-input me-2" type="radio" name="financeAllocated" id="finance_yes" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="finance_yes">Yes</label>
                                                    </div>
                                                    <div className="col-3 form-check finance_no_div">
                                                        <input className="form-check-input me-2" type="radio" name="financeAllocated" id="finance_no"/>
                                                        <label className="form-check-label" htmlFor="finance_no">No</label>
                                                    </div>
                                                </div>
                                                <div className="row finance_radio">
                                                    <div className="col-4 form-check finance_capex_div">
                                                        <input className="form-check-input me-2" type="radio" name="financeType" id="finance_capex"/>
                                                        <label className="form-check-label" htmlFor="finance_capex">Capex</label>
                                                    </div>
                                                     <div className="col-3 form-check other_radio_div">
                                                        <input className="form-check-input me-2" type="radio" name="financeType" id="other_radio" defaultChecked/>
                                                        <label className="form-check-label" htmlFor="other_radio">Other</label>
                                                    </div>
                                                     <div className="col-5 form-check zero_investment_radio_div">
                                                        <input className="form-check-input me-2" type="radio" name="financeType" id="zero_investment_radio"/>
                                                        <label className="form-check-label" htmlFor="zero_investment_radio">Zero Investment</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row pt-3 finance_third_row">
                                            <div className="col-4">
                                                <label htmlFor="wbs_number" className="form-label">WBS Number (If Applicable)</label>
                                                <input type="number" id="wbs_number" className="form-control" placeholder="DLCA-2122/SN09-06-02"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="project_annual_business" className="form-label">Project in Annual Business Plan (ABP)? <span className="mandatory">*</span> </label>
                                                <select className="form-select" id="project_annual_business" defaultValue="">
                                                    <option value="">Yes</option>
                                                    <option value="Low">Low</option>
                                                </select>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="project_manager_remark" className="form-label">Project Manager Remark<span className="mandatory">*</span> </label>
                                                <textarea className="form-control" id="project_manager_remark" rows="3" placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                         <div className="row attachment_section">
                                            <div className="col-3">
                                                <label htmlFor="attachment_two" className="form-label">Attachment</label>
                                                <input type="file" id="attachment_two" className="form-control" /> <br/>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* Project Input Section End   */}

                            {/* Finance Review & Validation Start  */}
                            <div className="accordion mt-3" id="financeReviewAccordian">
                                <div className="accordion-item custom-accordion-item">
                                    {/* <h2 className="accordion-header">
                                    <div className="accordion-button custom-accordion-button collapsed" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOperations" 
                                        aria-expanded="true" aria-controls="collapseOperations">
                                        <span>
                                            <i className="bi bi-chevron-right me-2 rotate-icon"></i>
                                            <span className="form-label mx-2">Finance Review & Validation</span>
                                            <span className="text-muted">(To be filled by Finance)</span>
                                        </span>
                                        <button className="btn btn-sm btn-outline-secondary view_message_btn" data-bs-toggle="collapse" 
                                        data-bs-target="#collapseOperations"> View Comments</button>
                                    </div>
                                    </h2> */}
                                    <h2 className="accordion-header d-flex justify-content-between align-items-center">
                                        <button className="accordion-button custom-accordion-button collapsed flex-grow-1" type="button" id="financeToggleBtn2">
                                            <span>
                                            <i className="bi bi-chevron-right me-2 rotate-icon"></i>
                                            <span className="form-label mx-2">Finance Review & Validation</span>
                                            <span className="text-muted">(To be filled by Finance)</span>
                                            </span>
                                        </button>

                                        <button className="btn btn-sm btn-outline-secondary ms-2 view_message_btn" id="viewCommentsBtn2">View Comments</button>
                                        </h2>
                                    <div id="collapseOperations" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <h6 className="gen_info_heading">Project Information</h6>
                                        <div className="row pt-2">
                                            <div className="col-4">
                                                <label htmlFor="finance_project_id" className="form-label">Project ID</label>
                                                <input id="finance_project_id" className="form-control" type="text"/>
                                            </div>  
                                            <div className="col-4">
                                                <label htmlFor="finance_cluster" className="form-label">Cluster</label>
                                                <input id="finance_cluster" className="form-control" type="text"/>
                                            </div>  
                                            <div className="col-4">
                                                <label htmlFor="finance_fiscal_year" className="form-label">Fiscal Year</label>
                                                <input id="finance_fiscal_year" className="form-control" type="text"/>
                                            </div>  
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-4">
                                                <label htmlFor="finance_project_Name" className="form-label">Project Name</label>
                                                <input id="finance_project_Name" className="form-control" type="text" placeholder="Select project name"/>
                                            </div>  
                                            <div className="col-4">
                                                <label htmlFor="finance_project_location" className="form-label">Project Location</label>
                                                <input id="finance_project_location" className="form-control" type="text" placeholder="Select project location"/>
                                            </div>  
                                            <div className="col-4">
                                                <label htmlFor="finance_department" className="form-label">Department</label>
                                                <input id="finance_department" className="form-control" type="text" placeholder="Select department"/>
                                            </div>  
                                        </div>
                                         <h6 className="gen_info_heading pt-3">Stakeholders</h6>
                                         <div className="row pt-3">
                                            <div className="col-4">
                                                <label htmlFor="finance_project_manager" className="form-label">Project Manager</label>
                                                <input id="finance_project_manager" className="form-control" type="text" placeholder="Search & select project manager"/>
                                            </div>  
                                            <div className="col-4">
                                                  <label htmlFor="finance_manager_ph_number" className="form-label">Project Manager Phone Number</label>
                                                    <input type="tel" id="finance_manager_ph_number" className="form-control" maxLength={10} onInput={(e) => {
                                                    e.target.value = e.target.value.replace(/[^0-9]/g, "")  }} placeholder="Enter phone number"/>
                                            </div>  
                                            <div className="col-4">
                                                <label htmlFor="finance_location_manaager" className="form-label">Location Manager</label>
                                                <input id="finance_location_manaager" className="form-control" type="text" placeholder="Search & select location manager"/>
                                            </div>  
                                        </div>
                                         <h6 className="gen_info_heading pt-3">Milestones</h6>
                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="finance_planned_start_date" className="form-label">Planned Start Date</label>
                                                <input id="finance_planned_start_date" className="form-control" type="date"/>
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="finance_planned_end_date" className="form-label">Planned End Date</label>
                                                <input id="finance_planned_end_date" className="form-control" type="date"/>
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="finance_actual_start_date" className="form-label">Actual Start Date</label>
                                                <input id="finance_actual_start_date" className="form-control" type="date"/>
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="finance_actual_end_date" className="form-label">Actual End Date</label>
                                                <input id="finance_actual_end_date" className="form-control" type="date"/>
                                            </div>
                                        </div>
                                        {/* Milestone table start  */}
                                        <FinanceMilestoneTable/>
                                        {/* Milestone table end  */}
                                        <h6 className="gen_info_heading pt-2">KPI Management</h6>
                                        <div className="row pt-2">
                                            <div className="col-6">
                                                <label htmlFor="finance_business_problem" className="form-label">Business Problem<span className="mandatory">*</span></label>
                                                <textarea id="finance_business_problem" className="form-control" rows={3} placeholder="Describe the business problem this project aims to solve..."></textarea>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="finance_solution" className="form-label">Solution<span className="mandatory">*</span></label>
                                                <textarea id="finance_solution" className="form-control" rows={3} placeholder="Describe the solution this project offers..."></textarea>
                                            </div>
                                        </div>
                                        {/* KPI table start  */}
                                        <FinanceKPITable/>
                                        {/* KPI table end  */}
                                        <h6 className="gen_info_heading pt-2">Finance</h6>
                                        <div className="row pt-2">
                                            <div className="col-4">
                                                <label htmlFor="finance_prevetted_investment" className="form-label">Prevetted Investment</label>
                                                <input id="finance_prevetted_investment" className="form-control" type="text"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="finance_prevetted_savings" className="form-label">Prevetted Savings</label>
                                                <input id="finance_prevetted_savings" className="form-control" type="text"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="finance_prevetted_ROI" className="form-label">Prevetted ROI</label>
                                                <input id="finance_prevetted_ROI" className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-4">
                                                <label htmlFor="finance_business_plan" className="form-label">Project in Business Plan</label>
                                                <input id="finance_business_plan" className="form-control" type="text"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="finance_manager_remakrs" className="form-label">Project Manager Rermark</label>
                                                <input id="finance_manager_remakrs" className="form-control" type="text"/>
                                            </div>
                                            <div className="col-4">
                                                <label htmlFor="finance_sent_vetting" className="form-label">Date Sent for Vetting</label>
                                                <input id="finance_sent_vetting" className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <h6 className="gen_info_heading pt-2">Stakeholder Comments</h6>
                                        {/* Stake Holder table start  */}
                                        <FinanceStakeHolderTable/>
                                        {/* Stake Holder table end  */}
                                        <div className="row attachment_section">
                                            <div className="col-4">
                                                <label htmlFor="finance_attachment" className="form-label">Attachments</label>
                                                <input id="finance_attachment" className="form-control" type="file"/> <br/>
                                            </div>
                                        </div>
                                        <h6 className="gen_info_heading pt-2">Monthly Updates</h6>
                                            {/* Monthly Update table start  */}
                                            <FinanceMonthlyUpdateTable/>
                                            {/* Monthly Update table end  */}
                                            <hr className="monthly_table_underline"/>
                                        <div className="row pt-3 finance_third_row">
                                                <div className="col-4">
                                                    <label htmlFor="business_impact" className="form-label">Business Impact<span className="mandatory">*</span> </label>
                                                    <select className="form-select" id="business_impact" defaultValue="">
                                                        <option value="">Select business impact level</option>
                                                        <option value="Low">Low</option>
                                                    </select>
                                                </div>
                                                 <div className="col-4">
                                                    <label htmlFor="new_idea" className="form-label project_type_label_second">Savings Type <span className="mandatory">*</span> </label>
                                                    <div className="row project_radio_div">
                                                        <div className="w-25 form-check new_idea_div_second">
                                                            <input className="form-check-input me-2" type="radio" name="radioDefault" id="finance_capex_second" />
                                                            <label className="form-check-label" htmlFor="finance_capex_second">One Time </label>
                                                        </div>
                                                        <div className="w-75 form-check horizontal_idea_div">
                                                            <input className="form-check-input me-2" type="radio" name="radioDefault" id="finance_other_second" defaultChecked/>
                                                            <label className="form-check-label" htmlFor="horizontal_idea">Recurring</label>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        <div className="row pt-3 ">
                                                 <div className="col-4">
                                                    <label htmlFor="post_vetted_investment" className="form-label">Post-Vetted Investments</label>
                                                    <input type="number" id="post_vetted_investment" className="form-control"/>
                                                </div>
                                                <div className="col-4">
                                                    <label htmlFor="post_vetted_savings" className="form-label">Post-Vetted Savings</label>
                                                    <input type="number" id="post_vetted_savings" className="form-control" />
                                                </div>
                                                <div className="col-4">
                                                    <label htmlFor="post_vetted_ROI" className="form-label">Post-Vetted ROI</label>
                                                    <input type="number" id="post_vetted_ROI" className="form-control" />

                                                </div>
                                        </div>
                                            <div className="row pt-3 attachment_section">
                                                <div className="col-4">
                                                    <label htmlFor="attachment_three" className="form-label">Costing Attachment</label>
                                                    <input type="file" id="attachment_three" className="form-control" /> <br/>
                                                </div>
                                                  <div className="col-4">
                                                    <label htmlFor="finance_remark" className="form-label">Finance Remark</label>
                                                    <textarea className="form-control" id="finance_remark   " rows="3" placeholder="Description"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Finance Review & Validation Start  */}
                        </div>
                    </div>

                    {/* Finance End Tab-5  */}
                </div>

                <div className="tab-pane fade" id="monthly_updates" role="tabpanel">
                    
                    {/* Monthly Updates Table Start Tab-6 */}
                    <MonthlyUpdatesTable/>
                    {/* Monthly Updates Table End Tab-6  */}

                </div>

            </div>

            </div>

            <div className="off_canvas_btn_div">
                <button type="button" className="btn btn-outline-secondary back_btn" aria-label="Back">Back</button>
                <button type="button" className="btn btn-outline-secondary exit_btn" aria-label="Exit">Exit</button>
                <button type="button" className="btn btn-primary save_next_btn">Save & Next</button>
            </div>

            </div>

                <MilestoneModal show={showModal} onClose={() => setShowModal(false)} />

                <KPIModal showKPI={showModalKPI} onCloseKPI={() => setShowModalKPI(false)} />


            </>
    )
}

export default ToggleRightPopup;