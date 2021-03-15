
import Axios from './BaseApi'

class CommentApi{
    
    static getAllComments(){//gets all the comments from the API
        return Axios.get(`/comments/`)
    }

    static getComment(comment_url){
        return Axios.get(`/comments/`,comment_url)
    }

    static getCommentforPost(post_id){
        return Axios.get(`/comments?postId=post_id`)
    }

    static newComment(new_comment_object){
        return Axios.post(`comments`,new_comment_object)
    }

    static updateComment(comment_url, updated_comment){
        return Axios.put(`/comment/comment_url`,updated_comment)
    }

    static patchComment(comment_url, updated_fields){//updates a part of the comment API
        return Axios.patch(`/comments/comment_url`,updated_fields)
    }

    static deleteComment(comment_url){//deletes a comment in the API
        return Axios.delete(`/comments/comment_url`)
    }

    
}

export default CommentApi