import React from "react";
import { Table } from "reactstrap";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const ListingTable = (props) => {
  const { headers, tableData } = props;

  return (
    <Table hover>
      <TableHeader headers={headers} />
      <TableBody tableData={tableData} headers={headers} />
    </Table>
  );
};

export default ListingTable;
