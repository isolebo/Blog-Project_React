import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import CommentApi from '../api/CommentApi'
import PostLists from './PostLists'
import CommentList from './CommentList'

const CommentDetails = ({comment}) => {
    

    
    return ( 
        <div className='Comment-details'>
<<<<<<< Updated upstream
            
            <h5> {comment.userName} </h5>
=======
>>>>>>> Stashed changes
            <p>
                {comment.postId}
            </p>
            
         
        </div>
     );
}
 
export default CommentDetails;