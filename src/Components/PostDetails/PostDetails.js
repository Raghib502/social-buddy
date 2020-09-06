import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Comment from '../Comment/Comment';


const PostDetails = () => {
    const {postId} = useParams();
    const[posts , setPost] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])

    const [comment , setComment] = useState([]);
    useEffect(() => {
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url2)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])

    
    return (
        <div style={{backgroundColor:'black'}}>
                
                <Container fixed style={{backgroundColor:''}}>
                    
                    <Box component="div" style={{backgroundColor :'black',color:'white',}}>
                                <Box display="" p={4} bgcolor="#2087b9" borderRadius='10px' marginTop='' marginLeft='' >
                                    <h2>Post</h2>
                                    <br/>
                                    <h3>{posts.body}</h3>
                               </Box>
                         
                         <div style={{ width: '100%',marginBottom:'',marginTop:'10px' }}>
                            <Box display="flex" p={0} marginBottom='' marginTop ='15px' bgcolor="black" borderRadius='10px' marginRight='900px' >
                                <h3 >{comment.length} Comments.</h3>
                            </Box>
                         </div>
                         {
                            comment.map(comment => <Comment comment={comment}></Comment>)
                         }
                    </Box>   
                   
                </Container>
                
             
         </div>
        
    );
};

export default PostDetails;