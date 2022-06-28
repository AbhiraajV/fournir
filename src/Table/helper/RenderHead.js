import React from "react";
import Th from "./components/Th";

function RenderHead({ tableFunc }) {
  return (
    <thead>
      <tr>
        <Th> </Th>
        <Th>No</Th>
        {tableFunc.getData().headers.map((head, index) => (
          <Th tableFunc={tableFunc} index={index} children={head} />
        ))}
      </tr>
    </thead>
  );
}

export default RenderHead;
