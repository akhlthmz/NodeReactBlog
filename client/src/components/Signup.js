import React from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { registerUser } from "../store/actions/auth";
import {
  Paper,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  makeStyles,
  Container,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem",
    paddingBottom: "10rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup({ registerUser, isAuthenticated }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const handleOnSubmit = async (data) => {
    const { username, password } = data;
    const payload = { userName: username, password };
    registerUser(payload);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper elevation={3} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
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
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            {errors.username && (
              <p style={{ color: "crimson" }}>Please enter a Username</p>
            )}

            <TextField
              inputRef={register({
                required: true,
                minLength: 6,
                validate: (value) => {
                  return !!value.trim();
                },
              })}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            {errors.password && (
              <p style={{ color: "crimson" }}>
                Password should be at least 6 characters
              </p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#1976d2", color: "white" }}
              className={classes.submit}
            >
              Sign Up
            </Button>

            <Grid container>
              <Grid item xs>
                <p style={{ color: "#1976d2", margin: 0 }} variant="body2">
                  {"Already have an account? "}
                </p>
              </Grid>
              <Grid item>
                <Link
                  style={{ textDecoration: "none", color: "#1976d2" }}
                  to="/login"
                  variant="body2"
                >
                  {"Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
function mapStateToProps(state) {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps, { registerUser })(Signup);
