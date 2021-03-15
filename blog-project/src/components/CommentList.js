import React, {useState, useEffect} from 'react'
import CommentApi from '../api/CommentApi'
import {Link} from 'react-router-dom'

function CommentList() {
    
    const [comment_list, setCommentList] = useState([])

    const getListComments = () => {
        CommentApi.getAllComments()
            .then(response => {
                //Set our component's `comment_list` array to the results of the API call
                // which would be 'response.data' object
                
                setCommentList(response.data) 
                console.log(response)
            }) 
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getListComments()

    }, [])
    return (
        <div className="container">
            <h4> List of comments</h4>
            {comment_list && comment_list.map(comment => (
     
                    <p key={comment.id}> 
                    <Link to ={`/commentDetails/${comment.id}`}>
                        {comment.id}
                        {comment.name}
                        {comment.body}

                    </Link>
                </p>
            ))}

        </div>
    )
}

export default CommentList