import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import jobsData from "./data.json";
import FilterBar from "./components/FilterBar";

const App = () => {
  const [jobList, setJobList] = useState([]);
  const [filtredJobs, setFiltredJobs] = useState([]);

  useEffect(() => {
    setJobList(jobsData);
  }, []);

  const addFilter = (e) => {
    if (!filtredJobs.includes(e.target.innerText.toLowerCase())) {
      setFiltredJobs([...filtredJobs, e.target.innerText.toLowerCase()]);
    }
  };

  const deleteFilter = (btn) => {
    const newFilters = filtredJobs.filter((job) => {
      return job !== btn;
    });
    setFiltredJobs(newFilters);
  };

  const clearFilter = () => {
    setFiltredJobs([]);
  };

  return (
    <>
      {console.log(filtredJobs)}
      <Header />
      <div className="container">
        <FilterBar
          filtredJobs={filtredJobs}
          deleteFilter={deleteFilter}
          clearFilter={clearFilter}
        />
        <JobList
          jobList={jobList}
          filtredJobs={filtredJobs}
          addFilter={addFilter}
        />
      </div>
    </>
  );
};

export default App;
