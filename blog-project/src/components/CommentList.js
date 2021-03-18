import React, {useState, useEffect} from 'react'
import CommentApi from '../api/CommentApi'
import { Link } from 'react-router-dom'
import CommentDetails from './CommentDetails'

function CommentList() {
    
    const [comment_list, setCommentList] = useState([])

    const getListofComments = () => {
        CommentApi.getAllComments()
            .then(response => {
                //Set our component's `Commnent_list` array to the results of the API call
                // which would be 'response.data' object
                setCommentList(response.data)
                console.log(response)
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
            <h4> List of Comments</h4>
            {comment_list && comment_list.map(comment => (
                <p key={comment.id}>
                    <Link to={`/CommentDetails/${comment.id}`}>
                    </Link>
                                                        <CommentDetails key={comment.id} comment={comment}/>

                </p>
                
            ))}

            
        
        </div>
    )
}
    


export default CommentList

