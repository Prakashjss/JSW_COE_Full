import React, { useState } from "react";

const FinanceKPITable = () => {
  // Sample JSON data
  const [kpiData] = useState([
    {
      id: 1,
      disc_data: "Water Consumption",
      unit: "m³/day",
      baseline: "-",
      target: 0,
      actual: 0,
    },
    {
      id: 2,
      disc_data: "CO₂ Reduction",
      unit: "kg CO₂/tcs",
      baseline: 20,
      target: 0.005,
      actual: 0,
    },
    {
      id: 3,
      disc_data: "Energy Consumption",
      unit: "kWh/tcs",
      baseline: 50,
      target: 0.004,
      actual: 0,
    },
    {
      id: 4,
      disc_data: "Water Change",
      unit: "m³/tcs",
      baseline: "-",
      target: 0.8,
      actual: 0.5,
    },
   
     {
      id: 5,
      disc_data: "H₂SO₄ Addition",
      unit: "kg H₂SO₄/tcs",
      baseline: "-",
      target: "-",
      actual: "-",
    },
     {
      id: 6,
      disc_data: "H₂SO₄ Addition",
      unit: "kg H₂SO₄/tcs",
      baseline: "-",
      target: "-",
      actual: "-",
    }
  ]);



  return (
    <div className="table-responsive" id="finance_kpi_table_div">
      <table className="table table-bordered align-middle" id="finance_kpi_table">
        <thead className="table-light">
          <tr>
            <th className="heading_1">KPI Description</th>
            <th className="heading_2">Unit</th>
            <th className="heading_3">Current Baseline</th>
            <th className="heading_4">Target</th>
            <th className="heading_5">Actual</th>
          </tr>
        </thead>
        <tbody>
          {kpiData.map((kpi) => (
            <tr key={kpi.id}>
              <td className="text-grey">{kpi.disc_data}</td>
              <td>{kpi.unit}</td>
              <td>{kpi.baseline}</td>
              <td>{kpi.target}</td>
              <td>{kpi.actual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceKPITable;
