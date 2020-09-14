import React, { useContext } from "react";
import JobItem from "./JobItem";
// import JobContext from "../context/JobContext";

const JobList = ({ jobList, filtredJobs, addFilter }) => {
  let filterArr;
  if (jobList) {
    return (
      <ul>
        {console.log(jobList)}
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
                return <JobItem job={job} key={job.id} addFilter={addFilter} />;
              }
            })}
      </ul>
    );
  } else return null;
};

export default JobList;
