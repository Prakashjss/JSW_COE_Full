import React, { useState } from "react";

const FinanceStakeHolderTable = () => {
  // Sample JSON data
  const [stakeHolderData] = useState([
    {
      id: 1,
      stcApproval: "Location Manager (S4 Approval)",
      approvalBy: "Returned by 'Rajesh Kumar' on 15-Jul-2025 ",
      approvalComments: "Stakeholder Comments",
    },
    {
      id: 2,
      stcApproval: "COE Team",
      approvalBy: "Approved by 'Priya Sharma' on 18-Jan-2025 ",
      approvalComments: "Stakeholder Comments",
    },
    {
      id: 3,
      stcApproval: "Costing Team",
      approvalBy: "Approved by 'Amit Patel' on 20-Jan-2025 ",
      approvalComments: "Stakeholder Comments",
    },
    {
      id: 4,
      stcApproval: "KPI Team",
      approvalBy: "Returned by 'Rajesh Kumar' on 25-Jun-2025 ",
      approvalComments: "Stakeholder Comments",
    }
  ]);

  return (
    <div className="table-responsive" id="finance_kpi_table_div">
      <table className="table table-bordered align-middle" id="finance_kpi_table">
        <thead className="table-light">
          <tr>
            <th className="heading_1">Stakeholder Approval</th>
            <th className="heading_2">Approval Stamp</th>
            <th className="heading_3">Comments</th>
          </tr>
        </thead>
        <tbody>
          {stakeHolderData.map((std) => (
            <tr key={std.id}>
              <td className="text-grey">{std.stcApproval}</td>
              <td>{std.approvalBy}</td>
              <td>{std.approvalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceStakeHolderTable;
