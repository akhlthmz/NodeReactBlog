import React from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/auth";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
} from "@material-ui/core";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    color: "white",
    marginLeft: "auto",
  },

  tab: {
    fontColor: "secondary",
    fontWeight: 700,
    minWidth: 100,
    marginLeft: "25px",
    marginLeft: "auto",
  },
  myblog: {
    fontFamily: "lobster two",
    color: "#ff4081",
  },
}));

function Navbar({ logout, isAuthenticated, loading }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <div>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1 className={classes.myblog}>My Blog</h1>
            </Link>
            <Tabs
              className={classes.tabContainer}
              value={value}
              indicatorColor="secondary"
              onChange={handleChange}
            >
              {!loading && isAuthenticated && (
                <Tab
                  onClick={() => {
                    logout();
                    setValue(0);
                  }}
                  className={classes.tab}
                  label="Logout"
                />
              )}
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}

function mapStateToProps(state) {
  const { isAuthenticated, loading } = state.auth;
  return {
    isAuthenticated,
    loading,
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
