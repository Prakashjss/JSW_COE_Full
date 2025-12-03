import React, { useState } from "react";

const FinanceMonthlyUpdateTable = () => {
  // Sample JSON data
  const [monthlyUpatesData] = useState([
    {
      id: 1,
      month_1: "Savings",
      month_2: "",
      month_3: "",
    },
    {
      id: 2,
      month_1: "KPI",
      month_2: "",
      month_3: "",
    }
  ]);

  return (
    <div className="table-responsive" id="finance_monthly_updates_table_div">
      <table className="table table-bordered align-middle" id="finance_monthly_updates_table">
        <thead className="table-light">
          <tr>
            <th className="heading_1"></th>
            <th className="heading_2">Month 1</th>
            <th className="heading_3">Month 2</th>
            <th className="heading_4">Month 3</th>
          </tr>
        </thead>
        <tbody>
          {monthlyUpatesData.map((monthlyData) => (
            <tr key={monthlyData.id}>
              <td className="text-grey">{monthlyData.month_1}</td>
              <td>{monthlyData.month_2}</td>
              <td>{monthlyData.month_3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinanceMonthlyUpdateTable;
