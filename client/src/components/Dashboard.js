import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/posts";
import { loadUser } from "../store/actions/auth";
import Card from "./Card";
import Form from "./Form";
import { makeStyles, CssBaseline, Container, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    paddingBottom: "2rem",
  },
}));

function Dashboard({ getPosts, loadUser, postsSorted }) {
  useEffect(() => {
    loadUser();
    getPosts();
  }, [loadUser, getPosts]);

  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Form />

          {postsSorted.map((post, index) => (
            <Card post={post} key={index} />
          ))}
        </Paper>
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  const { posts } = state.posts;
  const postsSorted = posts.reverse();
  return {
    postsSorted,
  };
}

export default connect(mapStateToProps, { getPosts, loadUser })(Dashboard);
