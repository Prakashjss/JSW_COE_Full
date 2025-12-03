
import React, { useState } from "react";

const MonthlyUpdatesTable = () => {
  const [data, setData] = useState([
    {
      benefit: "Tangible Benefit",
      savings: "Savings (in Cr)",
      months: Array(12).fill(0.0),
      isHeaderRow: true,
    },
    {
      benefit: "Gas consumption reduction (mcal/ton)",
      savings: 35.4,
      months: Array(12).fill(0.0),
    },
    {
      benefit: "CO2 Reduction (KgCO2/tcs)",
      savings: 25.0,
      months: Array(12).fill(0.0),
    },
    {
      benefit: "Energy efficiency improvement (kWh/ton)",
      savings: 55.4,
      months: Array(12).fill(0.0),
    },
  ]);

  const months = [
    "Oct-24",
    "Nov-24",
    "Dec-24",
    "Jan-25",
    "Feb-25",
    "Mar-25",
    "Apr-25",
    "May-25",
    "Jun-25",
    "Jul-25",
    "Aug-25",
    "Sep-25",
  ];

  const handleChange = (rowIndex, colIndex, value) => {
    const updatedData = [...data];
    updatedData[rowIndex].months[colIndex] = value;
    setData(updatedData);
  };

  return (
    <div className="container-fluid mt-3">
      <h6 className="gen_info_heading monthly_update_heading">Monthly Updates</h6>
      <div className="table-responsive" id="monthly_update_main_div">
        <table className="table table-bordered align-middle text-center"
          id="monthly_update_table">
          <thead>
            <tr className="table-primary">
              <th colSpan="2"></th>
              {months.map((month, i) => (
                <th key={i}>{month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}
                className={row.isHeaderRow ? "table-light fw-semibold" : ""}>
                <td className="text-start">{row.benefit}</td>
                <td className={`${rowIndex}`}>
                  {row.isHeaderRow ? row.savings : `₹${row.savings.toFixed(2)}`}
                </td>
                {row.months.map((val, colIndex) => (
                  <td key={colIndex}>
                    <input type="number" className="form-control text-center" value={val}
                      onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)
                    }/>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyUpdatesTable;
