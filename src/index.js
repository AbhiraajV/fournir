import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Table from "./Table";

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
