import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import CommentApi from '../api/CommentApi'
import PostLists from './PostLists'
import CommentList from './CommentList'
import UserApi from '../api/UserApi'
import UsersList from './UsersList'

const CommentDetails = ({comment}) => {
    const { id } = useParams()
    const [commentUser,setCommentUser]= useState({})
    
    const getUserForComment = () => {
        UserApi.getUser()
            .then(response => {
                setCommentUser(response.data)
                console.log(response.data)
            
            })
            .catch(error => {
                console.log(error.message)
            })
    }
        useEffect(() => {
            //function call to retrieve the post
            getUserForComment()

        }, [])
    
    
    return ( 
        <div className='Comment-details'>
            
            <ul className="list-group">
                <li className="list-group-item active"> Post ID: {commentUser.id}</li>
                <li className="list-group-item">User Id: {commentUser.firstName}</li>
                <li className="list-group-item">Title: {commentUser.lastName}</li>
                <p className="list-group-item">Body: {comment.body}</p>
            </ul>
            <UsersList />
            
        </div>
     );
}
 
export default CommentDetails;