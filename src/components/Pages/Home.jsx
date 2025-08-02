import React from "react";
import classes from "./Home.module.css";
import RecentJobs from "../Layout/RecentJobs";
import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <section className={classes.hero}>
        <div className={classes.overlay}>
          <div className={classes.content}>
            <h1>Find Your Dream Job</h1>
            <p>Explore thousands of job opportunities with just one click.</p>

            <div className={classes.searchBar}>
              <input
                type="text"
                placeholder="Search for job titles or companies..."
              />
              <button>Search</button>
            </div>

            <div className={classes.actions}>
              <Link
                style={{ textDecoration: "none" }}
                to="/jobs"
                className={classes.primary}
              >
                Browse Jobs
              </Link>
              <button className={classes.secondary}>Post a Job</button>
            </div>
          </div>
        </div>
      </section>
      <RecentJobs />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
