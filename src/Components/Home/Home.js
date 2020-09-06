import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Home = () => {
    const classes = useStyles();

    const [posts , setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
      <div  style={{backgroundColor :'black'}}>
        <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hello Buddy
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

            {
                posts.map(post => <Post post ={post}></Post>)
            }
           
        </div>
        </div>
    );
};

export default Home;