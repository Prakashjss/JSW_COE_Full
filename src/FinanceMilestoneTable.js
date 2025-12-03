import React, { useState } from "react";
import Tooltip from "./Tooltip";

const FinanceMilestoneTable = () => {
  // Sample JSON data
  const [milestones, setMilestones] = useState([
    {
      id: 1,
      date: "02-Apr-2025",
      description:
        "Reach out to vendors for assessing feasibility & risks of installing oxy-fuel burners for ladle & tundish preheating – For ladles chosen in Phase I (shell 1 ladles)",
      status: "Completed",
    },
    {
      id: 2,
      date: "02-Apr-2025",
      description:
        "Prepare drawings per site condition; Finalize budget and move approval note for Phase I ladles",
      status: "Pending",
    },
    {
      id: 3,
      date: "02-Apr-2025",
      description:
        "Receive Budget approval & order placement of oxy-fuel burners for Phase I ladles Test 1",
      status: "Pending",
    },
    {
      id: 4,
      date: "02-Apr-2025",
      description:
        "Receive Budget approval & order placement of oxy-fuel burners for Phase I ladles Test 2",
      status: "Pending",
    },
    {
      id: 5,
      date: "02-Apr-2025",
      description:
        "Receive Budget approval & order placement of oxy-fuel burners for Phase I ladles Test 3",
      status: "Pending",
    },
  ]);

  // Toggle status
  const toggleStatus = (id) => {
    setMilestones((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "Completed" ? "Pending" : "Completed" }
          : item
      )
    );
  };


  return (
    <div className="table-responsive" id="finance_milestone_table_div">
      <table className="table table-bordered align-middle" id="finance_milestone_table">
        <thead className="table-light">
          <tr>
            <th className="milestone_thead_1">Milestone Date</th>
            <th className="milestone_thead_2">Milestone Description</th>
            <th className="milestone_thead_3">Status</th>
          </tr>
        </thead>
        <tbody>
          {milestones.map((milestone) => (
            <tr key={milestone.id}>
              <td className="text-grey">{milestone.date}</td>
              <td><Tooltip text={milestone.description}>{milestone.description}</Tooltip>
              </td>
              <td><div><input type="checkbox"
                  checked={milestone.status === "Completed"}
                  onChange={() => toggleStatus(milestone.id)}
                  className="form-check-input me-2"/>
                <span>{milestone.status}</span></div>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default FinanceMilestoneTable;
