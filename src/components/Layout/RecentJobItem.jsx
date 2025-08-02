import styles from "./RecentJobItem.module.css";
import { IconDeviceFloppy } from "@tabler/icons-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import jobList from "../../data/jobs";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const RecentJobItem = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveJobHandler = (job) => {
    dispatch(
      cartActions.addItemToCart({
        id: job.id,
        title: job.title,
        salary: job.salary,
        company: job.company,
        type: job.type,
      })
    );
  };

  const jobs = jobList.slice(0, 4);

  const handleApplyJob = () => {
    if (!auth.isAuthenticated) {
      Swal.fire({
        title: "Authentication Required!",
        text: "To apply for jobs you have to get signed into your account.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Dismiss",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      Swal.fire({
        title: "This feature is under developement!",
        text: "The service is not available right now!",
        icon: "info",
      });
    }
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Type</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/jobs/${job.id}`}
                >
                  {job.title}
                </Link>
              </td>
              <td>{job.company}</td>
              <td>{job.type}</td>
              <td>${job.salary}</td>
              <td>
                <button onClick={handleApplyJob} className={styles.applyButton}>
                  Apply Now
                </button>
                {auth.isAuthenticated && (
                  <button
                    className={styles.applyButton}
                    style={{ margin: "10px 3px" }}
                    onClick={() => saveJobHandler(job)}
                  >
                    <IconDeviceFloppy size={15} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobItem;
