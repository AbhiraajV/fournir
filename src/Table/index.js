import React, { useState } from "react";
import Buttons from "./helper/components/Buttons";
import TableFunctions from "./helper/functions";
import RenderBody from "./helper/RenderBody";
import RenderHead from "./helper/RenderHead";
import "./index.css";
function Table() {
  const [data, setData] = useState({
    headers: [],
    content: [],
  });
  const tableFunc = new TableFunctions(data, setData);
  return (
    <div class="card">
      <div class="table-concept">
        <Buttons tableFunc={tableFunc} />
        <input class="table-radio" type="radio" checked="checked" />
        <div class="table-display" />
        <table>
          <RenderHead tableFunc={tableFunc} />
          <RenderBody tableFunc={tableFunc} />
        </table>
      </div>
    </div>
  );
}

export default Table;
