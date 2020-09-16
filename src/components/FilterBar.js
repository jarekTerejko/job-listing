import React from "react";
import ButtonDelete from "./ButtonDelete";

const FilterBar = ({ filtredJobs, deleteFilter, clearFilter }) => {
  if (filtredJobs.length) {
    return (
      <div className="filter-bar">
        <div>
          {filtredJobs.map((job) => {
            return (
              <ButtonDelete job={job} key={job} deleteFilter={deleteFilter} />
            );
          })}
        </div>
        <button className="filter-bar__clear-btn" onClick={clearFilter}>
          Clear
        </button>
      </div>
    );
  } else return null;
};

export default FilterBar;
