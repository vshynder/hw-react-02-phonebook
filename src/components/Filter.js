import React from "react";

const Filter = (props) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        id="filter"
        onChange={props.filterChange}
        value={props.filterVal}
      />
    </div>
  );
};

export default Filter;
