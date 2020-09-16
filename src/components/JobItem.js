import React from "react";
import FilterButton from "./FilterButton";

const JobItem = ({ job, addFilter }) => {
  if (!job) return null;

  if (job) {
    const roleLevelLang = [job.role, job.level, ...job.languages, ...job.tools];

    const filters = roleLevelLang.map((filterBtn) => {
      return (
        <FilterButton
          filterBtn={filterBtn}
          key={filterBtn}
          addFilter={addFilter}
        />
      );
    });

    return (
      <li
        className={
          job.featured
            ? "jobs__job-item jobs__job-item--featured"
            : "jobs__job-item"
        }
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/${job.logo}`}
          alt={`${job.company} Logo`}
          className="jobs__logo"
        />
        <div className="jobs__details">
          <p>
            <span className="jobs__company">{job.company}</span>
            {job.new && (
              <span className="jobs__special jobs__special--new">new</span>
            )}
            {job.featured && (
              <span className="jobs__special jobs__special--featured">
                featured
              </span>
            )}
          </p>
          <a href="noopener" className="jobs__position">
            {job.position}
          </a>
          <p className="jobs__info">
            <span className="jobs__info-item">{job.postedAt}</span>
            <span className="jobs__info-item">{job.contract}</span>
            <span className="jobs__info-item">{job.location}</span>
          </p>
        </div>
        <div className="jobs__details jobs__details--filters">{filters}</div>
      </li>
    );
  }
};

export default JobItem;
