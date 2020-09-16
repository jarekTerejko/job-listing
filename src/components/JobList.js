import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobList, filtredJobs, addFilter }) => {
  let filterArr;
  if (jobList) {
    return (
      <ul className="jobs">
        {filtredJobs.length === 0
          ? jobList.map((job) => {
              return <JobItem job={job} key={job.id} addFilter={addFilter} />;
            })
          : jobList.map((job) => {
              filterArr = [
                job.role,
                job.level,
                ...job.languages,
                ...job.tools,
              ].map((f) => f.toLowerCase());
              if (filtredJobs.every((f) => filterArr.includes(f))) {
                return (
                  <JobItem
                    job={job}
                    key={job.id}
                    addFilter={addFilter}
                    imgSrc={job.logo}
                  />
                );
              }
              return null;
            })}
      </ul>
    );
  } else return null;
};

export default JobList;
