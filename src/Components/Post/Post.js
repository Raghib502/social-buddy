import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      borderStyle: 'outset',
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });
const Post = (props) => {
    
    const classes = useStyles();
    const {title , id} = props.post ;
    return (
        <Container maxWidth="sm">
            <Card className={classes.root}  style={{backgroundColor :'#489cc6'}}>
            <CardContent>

                    <Typography variant="body2" component="p">
                        {title}
                    </Typography>

            </CardContent>
            <CardActions>

                <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}> 
                    <Button variant="contained" color="secondary" size="small" >Read</Button>
                </Link>
                       
            </CardActions>
                <br/>
            </Card>
        </Container>
    );
};

export default Post;