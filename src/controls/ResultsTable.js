import React from "react";

const ResultsTable = ({ detailsMap }) => {
  return (
    <div className="table-responsive">
      <table className="table table-sm border-bottom my-0">
        <thead className="thead-light">
          <tr className="text-muted font-weight-normal">
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(detailsMap).map((key, index) => {
            const { label, value } = detailsMap[key];
            return (
              <tr key={index}>
                <td>{label}</td>
                <td className="text-success">{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
