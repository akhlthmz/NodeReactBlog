import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store/actions/auth'
import {getPosts} from '../store/actions/posts'
import {Button,makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    btn:{
        float:"right",
        marginRight:"2rem",
        marginTop:"2rem"
    }
    }))

function Dashboard({logout,getPosts,posts}) {
    useEffect(() => {
        getPosts();
      }, [getPosts]);

    const classes = useStyles();
    const onClick = () => logout()

    return (
        <div>
            <Button onClick={onClick} variant="contained" className = {classes.btn} color="primary"  >
                <strong>Logout</strong>
            </Button>
            
        </div>
    )
}

function mapStateToProps(state) {
    const { posts } = state
    return {
      posts
    };
  }

export default connect(mapStateToProps,{logout,getPosts})(Dashboard)
