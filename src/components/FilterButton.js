import React from "react";

const FilterButton = ({ filterBtn, addFilter }) => {
  return (
    <button className="jobs__filter-btn" onClick={(e) => addFilter(e)}>
      {filterBtn}
    </button>
  );
};

export default FilterButton;
