import React, { useContext } from "react";
import { Trash2 } from "lucide-react";
import classes from "./SavedJobItem.module.css";
import CartContext from "../../store/cart-context";
import { Button } from "@mantine/core";

const SavedJobItem = (props) => {
  const cartCtx = useContext(CartContext);

  const jobRemoveHandler = (id) => {
    console.log(id);
    cartCtx.onDelete(id);
  };

  return (
    <>
      {props.jobs.length > 0 &&
        props.jobs.map((job) => (
          <div className={classes.jobList} key={job.id}>
            <div>
              <h3 className={classes.jobTitle}>{job.title}</h3>
              <p className={classes.jobCompany}>{job.company}</p>
              <p className={classes.jobDetails}>
                {job.type} | ${job.salary}
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button onClick={() => jobRemoveHandler(job.id)}>
                <Trash2 size={18} />
              </button>
              <Button onClick={props.onCloseCart} color="green">
                Details
              </Button>
            </div>
          </div>
        ))}
      {props.jobs.length === 0 && <p>No saved jobs yet!</p>}
    </>
  );
};

export default SavedJobItem;
