import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import CommentApi from '../api/CommentApi'
import PostLists from '../components/PostLists'
import CommentList from './CommentList'

const CommentDetails = ({comment}) => {
    

    
    return ( 
        <div className='Comment-details'>
            
            
            <p>
                {comment.body}
            </p>
            
         
        </div>
     );
}
 
export default CommentDetails;