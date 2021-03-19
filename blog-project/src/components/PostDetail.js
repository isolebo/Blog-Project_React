import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import PostApi from '../api/PostApi'
import CommentList from './CommentList'

const PostDetails = () => {

    const { id } = useParams()//passes an id to the get the id of the post
    const [postDetail, setPostDetail] = useState([])
    
    //function that uses axios to get the details for each post
    const getThePost = () => {
        PostApi.getPost(id)
            .then(response => {
                setPostDetail(response.data)
            
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        //function call to retrieve the post
        getThePost()

    },[])
    
    return ( 
        <div className='post-details'>
            <h2>Post Details</h2>
           {postDetail.map(posts => (
            <div key={posts.id}>{/*outputs the return of each post details */}
                <ul className="list-group">
                  <li className="list-group-item active"> Post ID: {posts.id}</li>
                       <li className="list-group-item">User Id: {posts.userId}</li>
                    <li className="list-group-item">Title: {posts.title}</li>
                    <p className="list-group-item">Body: {posts.body}</p>
                   </ul>
                   <CommentList postId={id}/>
               </div>
               
            ))}
        </div>
     );
}
 
export default PostDetails;