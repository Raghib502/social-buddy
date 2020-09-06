import React from 'react';
import { Container } from '@material-ui/core';
  
const Comment = (props) => {
    
    const {name, email, body} = props.comment;
    const commentStyle = {
        color:'black',
        marginBottom: '10px',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px #061d29',
        backgroundImage: 'linear-gradient(90deg, #424283, #7c46a2)',
        padding: '5px'
    }
    const textStyle = {
        color:'#21f5e4',
        fontFamily : 'Arial, Helvetica, sans-serif',
        position:'relative',
        left:'20px',
    }
    const valueStyle ={
        fontFamily : '"Lucida Console", Courier, monospace',
        position : 'relative',
        left :'20px'
    }
    return (
        
        
            <div>
               
                <Container style={commentStyle}>
                    <h2 style={textStyle}>Name</h2>
                    <h2 style={valueStyle}>{name}</h2>
                    <h5 style={textStyle}>Email</h5>
                    <h5 style={valueStyle}>{email}</h5>
                    <h3 style={textStyle}>Comment</h3>
                    <h3 style={valueStyle}>{body}</h3>
                    
                </Container>
                
         </div>   
    );
};

export default Comment;