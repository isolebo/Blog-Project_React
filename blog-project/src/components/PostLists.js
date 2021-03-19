import React, {useState, useEffect} from 'react'
import PostApi from '../api/PostApi'
import {Link} from 'react-router-dom'

function PostLists() {
    
    const [post_list, setPostList] = useState([])

    const getListofPosts = () => {
        PostApi.getAllPosts()
            .then(response => {
                //Set our component's `post_list` array to the results of the API call
                // which would be 'response.data' object
                setPostList(response.data) 
                                console.log(response)

            }) 
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getListofPosts()

    }, [])
    return (
        <div className="container">
            <h4> List of Posts</h4>
            {post_list && post_list.map(post => (
     
                    <p key={post.id}> 
                    <Link to ={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </p>
            ))}

        </div>
    )
}

export default PostLists