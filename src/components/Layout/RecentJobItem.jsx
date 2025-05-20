import React, { useContext } from "react";
import styles from "./RecentJobItem.module.css";
import { IconDeviceFloppy } from "@tabler/icons-react";
import CartContext from "../../store/cart-context";
import AuthContext from "../../store/auth-context";

const RecentJobItem = (props) => {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const saveJobHandler = (job) => {
    cartCtx.addItem(job);
  };
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Gender</th>
            <th>Type</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.jobs.map((job) => (
            <tr>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.gender}</td>
              <td>{job.type}</td>
              <td>${job.salary}</td>
              <td>
                <button className={styles.applyButton}>Apply Now</button>
                {authCtx.isLoggedIn && (
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
