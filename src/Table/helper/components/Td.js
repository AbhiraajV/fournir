import React from "react";

function Td({ children, index, tableFunc }) {
  return (
    <td
      contentEditable={true}
      children={children}
      onInput={(e) => tableFunc.contentChangeHandler(e, index)}
    />
  );
}

export default Td;
