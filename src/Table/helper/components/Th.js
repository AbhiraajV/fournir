import React from "react";

function Th({ children, tableFunc, index }) {
  console.log({ index });
  return (
    <th
      index={index}
      contentEditable={true}
      className="CustomHead"
      onInput={(e) => tableFunc.headerChangeHandler(e, index)}
      children={children}
    />
  );
}

export default Th;
