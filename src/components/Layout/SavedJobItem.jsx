import { Trash2 } from "lucide-react";
import classes from "./SavedJobItem.module.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const SavedJobItem = (props) => {
  const dispatch = useDispatch();

  const removeJobHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  }

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
              <button onClick={() => removeJobHandler(job.id)}>
                <Trash2 size={18} />
              </button>
              <Button
                component={Link}
                to={`/jobs/${job.id}`}
                onClick={props.onCloseCart}
                color="green"
              >
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
