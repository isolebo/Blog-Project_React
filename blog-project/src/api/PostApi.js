
import Axios from './BaseApi'

class PostApi{
    
    static getAllPosts(){//gets all the posts from the API
        return Axios.get(`/posts/`)
    }

    static getPost(post_id){
        return Axios.get(`/posts/${post_id}`)
    }

    static getCommentforPost(post_url){
        return Axios.get(`/posts/post_url/comments`)
    }

    static newPost(new_post_object){
        return Axios.post(`posts`,new_post_object)
    }

    static updatePost(post_url, updated_post){
        return Axios.put(`/post/post_url`,updated_post)
    }

    static patchPost(post_url, updated_fields){//updates a part of the post API
        return Axios.patch(`/posts/post_url`,updated_fields)
    }

    static deletePost(post_url){//deletes a post in the API
        return Axios.delete(`/posts/post_url`)
    }

    
}

export default PostApi