import React, {useState, useEffect} from 'react'
import commentApi from '../api/CommentApi'
import {Link} from 'react-router-dom'

function CommentList() {
    
    const [comment_list, setCommentList] = useState([])

    const getListofComments = () => {
        commentApi.getAllComments()
            .then(response => {
                //Set our component's `comment_list` array to the results of the API call
                // which would be 'response.data' object
                setCommentList(response.data) 
            }) 
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getListofComments()

    }, [])
    return (
        <div className="container">
            <h4> List of comments</h4>
            {comment_list && comment_list.map(comment => (
     
                    <p key={comment.id}> 
                    <Link to ={`/commentDetails/${comment.id}`}>
                        {comment.username}
                    </Link>
                </p>
            ))}

        </div>
    )
}

export default CommentList