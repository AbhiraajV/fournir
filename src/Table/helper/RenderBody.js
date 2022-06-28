import React from "react";
import Td from "./components/Td";
function RenderBody({ tableFunc }) {
  return (
    <tbody>
      {tableFunc.getData().content.map((content, indexRow) => (
        <tr key={indexRow}>
          <Td>
            <input type="checkbox" />
          </Td>
          <Td>{indexRow + 1}</Td>
          {content.map((point, indexCol) => (
            <Td
              key={indexCol}
              index={[indexRow, indexCol]}
              children={point}
              tableFunc={tableFunc}
            />
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default RenderBody;
