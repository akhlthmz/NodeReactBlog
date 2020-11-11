import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addPost } from "../store/actions/posts";

import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
  Container,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    paddingBottom: "1rem",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },

  margin: {
    margin: theme.spacing(3),
  },
}));

const Form = ({ addPost }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const handleOnSubmit = (data, e) => {
    e.target.reset();
    const { title, content } = data;
    const payload = {
      title,
      content,
    };
    addPost(payload);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper elevation={0} className={classes.paper}>
        <Typography component="h1" variant="h5">
          New post
        </Typography>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className={classes.form}
          noValidate
        >
          <TextField
            inputRef={register({
              required: true,
              minLength: 3,
              validate: (value) => {
                return !!value.trim();
              },
            })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoFocus
          />
          {errors.title && (
            <p style={{ color: "crimson" }}>
              Title should be at least 3 characters
            </p>
          )}
          <TextField
            inputRef={register({
              required: true,
              minLength: 3,
              validate: (value) => {
                return !!value.trim();
              },
            })}
            variant="outlined"
            margin="normal"
            required
            multiline
            fullWidth
            rows={3}
            id="content"
            label="content"
            name="content"
          />
          {errors.content && (
            <p style={{ color: "crimson" }}>Please enter some content</p>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "green", color: "white" }}
            className={classes.submit}
          >
            create
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default connect(null, { addPost })(Form);
