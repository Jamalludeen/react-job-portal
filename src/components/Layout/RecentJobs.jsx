import React from "react";
import RecentJobItem from "./RecentJobItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DUMMY_RECENT_JOBS = [
  {
    id: 1,
    title: "Web Developer",
    company: "Amazon",
    gender: "Male/Female",
    type: "Full Time",
    salary: 1200,
  },
  {
    id: 2,
    title: "Guard",
    company: "Company",
    gender: "Male",
    type: "Part Time",
    salary: 400,
  },
  {
    id: 3,
    title: "Data Entry Officer",
    company: "Amazon",
    gender: "Male/Female",
    type: "Full Time",
    salary: 600,
  },
];

const RecentJobs = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center my-3">Most Recent Jobs</h2>
        <RecentJobItem jobs={DUMMY_RECENT_JOBS} />
      </div>
    </div>
  );
};

export default RecentJobs;
