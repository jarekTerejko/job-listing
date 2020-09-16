import React from "react";
import iconX from "./../images/icon-remove.svg";

const ButtonDelete = ({ job, deleteFilter }) => {
  return (
    <button className="filter-bar__delete-btn">
      <span>{job}</span>
      <img src={iconX} alt="Remove icon" onClick={() => deleteFilter(job)} />
    </button>
  );
};

export default ButtonDelete;
