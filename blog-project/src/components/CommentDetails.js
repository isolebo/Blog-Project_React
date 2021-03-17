import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import CommentApi from '../api/CommentApi'
import PostLists from '../components/PostLists'

const CommentDetails = ({comment}) => {
    

    
        

    return ( 
        <div className='Comment-details'>
            <h5>{comment.title}</h5>
            <p>
                {comment.body}
            </p>
         
        </div>
     );
}
 
export default CommentDetails;