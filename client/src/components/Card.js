import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Button,
  ButtonBase,
  CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 650,
    marginTop: "10px",
    marginBottom: "20px",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto ",
    marginTop: "30px",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function QuestionCard({ post }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={2}>
        <h2
          style={{
            backgroundColor: "rgb(217, 226, 226)",
            margin: 0,
            padding: "0.5em",
            marginBottom: "10px",
          }}
        >
          {post.title}
        </h2>

        <Grid container spacing={2}>
          <Grid
            item
            style={{
              borderRightColor: "solid black 1px",
            }}
          ></Grid>
          <CssBaseline />
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                {" "}
                <h3 style={{ fontFamily: "Helvetica", color: "#616161" }}>
                  {post.content}
                </h3>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
