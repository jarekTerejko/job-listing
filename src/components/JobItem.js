import React from "react";
import manage from "../images/manage.svg";
import FilterButton from "./FilterButton";

const JobItem = ({ job, addFilter }) => {
  if (!job) return null;

  if (job) {
    console.log(job);
    const roleLevelLang = [job.role, job.level, ...job.languages, ...job.tools];

    const filters = roleLevelLang.map((filterBtn) => {
      return <FilterButton filterBtn={filterBtn} key={filterBtn} addFilter={addFilter} />;
    });

    return (
      <li
        className={
          job.featured
            ? "jobs__job-item jobs__job-item--featured"
            : "jobs__job-item"
        }
      >
        <img src={manage} alt={`${job.company} Logo`} />
        <img src={`./.${job.logo}`} alt={`${job.company} Logo`} />
        <div className="job__details">
          <p>
            <span className="jobs__company">{job.company}</span>
            {job.featured && <span className="jobs__featured">featured</span>}
          </p>
          <h3 className="jobs__position">{job.position}</h3>
          <p className="jobs__info">
            <span className="jobs__info-item">{job.postedAt}</span>
            <span className="jobs__info-item">{job.contract}</span>
            <span className="jobs__info-item">{job.location}</span>
          </p>
        </div>
        <div className="job__details">
          {filters}
        </div>
      </li>
    );
  }
};

export default JobItem;
