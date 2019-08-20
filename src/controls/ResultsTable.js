import React from "react";

const ResultsTable = ({ detailsMap }) => {
  return (
    <div className="table-responsive">
      <table className="table table-sm border-bottom my-0">
        <thead className="thead-light">
          <tr>
            <th className="pl-3">Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(detailsMap).map((key, index) => {
            const { label, value, units = "", rowClassName = "" } = detailsMap[
              key
            ];
            return (
              <tr key={index} className={rowClassName}>
                <td className="text-muted pl-3">
                  {label}
                  {units && <span>&nbsp;({units})</span>}
                </td>
                <td className="text-dark">{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
