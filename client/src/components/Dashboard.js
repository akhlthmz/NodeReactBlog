import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/posts";
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

function Dashboard({ getPosts, postsSorted }) {
  useEffect(() => {
    getPosts();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Form />

          {postsSorted.map((post) => (
            <Card post={post} key={post.articleId} />
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

export default connect(mapStateToProps, { getPosts })(Dashboard);
