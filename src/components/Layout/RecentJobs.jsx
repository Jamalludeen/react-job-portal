import RecentJobItem from "./RecentJobItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const RecentJobs = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2 className="text-center my-3">Most Recent Jobs</h2>
        <RecentJobItem />
      </div>
    </div>
  );
};

export default RecentJobs;
