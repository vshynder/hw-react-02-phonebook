import React from "react";

import PropTypes from "prop-types";

const Filter = (props) => {
  return (
    <div className="filter">
      <p className="filter__title">Find contacts by name</p>
      <input
        className="filter__input"
        id="filter"
        onChange={props.filterChange}
        value={props.filterVal}
      />
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func,
  filterVal: PropTypes.string,
};

export default Filter;
