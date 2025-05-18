import React from "react";
import styles from "./RecentJobItem.module.css";
import { IconDeviceFloppy } from "@tabler/icons-react";

const RecentJobItem = (props) => {
  const jobs = props.jobs;
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
                <button
                  style={{ margin: "10px 10px" }}
                  className={styles.applyButton}
                >
                  <IconDeviceFloppy size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentJobItem;
