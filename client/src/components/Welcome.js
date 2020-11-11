import React from "react";
import { Link } from "react-router-dom";
import welcome from "../images/welcome.svg";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  image: {
    marginTop: "5rem",
    height: "30em",
    width: "30em",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      height: "20rem",
    },
  },
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <div className="welcome-container">
      <img src={welcome} alt="welcome" className={classes.image} />
      <div className={classes.root}>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" className={classes.btn} color="primary">
            <strong>Sign in</strong>
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button variant="contained" className={classes.btn} color="primary">
            <strong>Sign up</strong>
          </Button>
        </Link>
      </div>
    </div>
  );
}
