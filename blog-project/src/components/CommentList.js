import React, {useState, useEffect} from 'react'
import CommentApi from '../api/CommentApi'
import { Link } from 'react-router-dom'
import CommentDetails from './CommentDetails'
import PostDetail from './PostDetail'


function CommentList({ post_id }) {


    const [comment_list, setCommentList] = useState([])

    const getListofComments = (post_id) => {
        CommentApi.getCommentsForPost(post_id)
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
            <h4>Comments</h4>
            {comment_list && comment_list.map(comment => (
                <p>
                    <CommentDetails key={comment.id} comment={comment}/> 
                </p>
            ))}
        </div>
    )
            }


export default CommentList






