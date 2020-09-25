import React from "react";

const TableBody = (props) => {
  const renderContent = (element, index) => {
    return <td key={index}>{element[index]}</td>;
  };

  const { tableData, headers } = props;

  return (
    <tbody>
      {tableData.map((element) => (
        <tr key={element.id ? element.id : element.name}>
          {headers.map((header) => renderContent(element, header.index))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
