import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import CommentApi from '../api/CommentApi'

const CommentsDetails = () => {
    const { id } = useParams()//passes id to the API request
    const [commentDetail,setCommentDetail]= useState([])

    //function to request data from API to get details of each Comment
    const getTheComment = () => {
        CommentApi.getCommentForPost({ params: { id } })
            .then(response => {
                setCommentDetail(response.data)//gets data from API and sets it to the response
                console.log(response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        getTheComment()

    },[])

    return ( 
        <div className='Comment-details'>
         <h2>Comment Details - {id}</h2>
           {commentDetail.map(comments => (
            <div key={comments.id}>
                <ul className="list-group">
                       <li className="list-group-item active">Name: {comments.id}</li>
                  <li className="list-group-item">User Name: {comments.name}</li>
                  <li className="list-group-item">Body: {comments.body}</li>
                </ul>
            </div>
            ))}
        </div>
     );
}
 
export default CommentsDetails;