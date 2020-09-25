import React from "react";
import PropTypes from "prop-types";

const TableHeader = (props) => {
  const { headers } = props;
  return (
    <thead>
      <tr>
        {headers.map((header) => {
          return (
            <th className={header.index} key={header.id}>
              {header.name}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableHeader;
