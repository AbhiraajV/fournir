import React from "react";

function Buttons({ tableFunc }) {
  return (
    <div className="button-container">
      <button className="primary" onClick={() => tableFunc.addCol()}>
        Add Col
      </button>
      <button className="danger" onClick={() => tableFunc.addRow()}>
        Add Row
      </button>
      <button className="export" onClick={() => tableFunc.exportCSV()}>
        Export CSV
      </button>
    </div>
  );
}

export default Buttons;
