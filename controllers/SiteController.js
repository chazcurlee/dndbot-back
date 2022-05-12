const { Comments, Posts, User } = require('../models')


////////////////// GET CONTROLLERS /////////////////


///////////////// GET ALL CONTROLLERS //////////////

const GetAllUsers = async (req, res) => {

    try{

        const allUsers = await User.findAll({})
        res.json(allUsers)

    }catch(error){throw error}
}

const GetAllPosts = async (req, res) => {

    try{

        const allPosts = await Posts.findAll({})
        res.json(allPosts)

    }catch(error){throw error}
}

const GetAllComments = async (req, res) => {

    try{

        const allComments = await Comments.findAll({})
        res.json(allComments)

    }catch(error){throw error}
}

///////////////// GET SPEC CONTROLLERS /////////////

const GetSpecUser = async (req, res) => {

    try{

        const specUser = await User.findByPk(parseInt(req.params.user_id))
        res.json(specUser)
        
    }catch(error){throw error}
}

const GetSpecPost = async (req, res) => {

    try{

        const specPost = await Posts.findByPk(parseInt(req.params.post_id))
        res.json(specPost)

    }catch(error){throw error}
}

const GetUserPosts = async (req, res) => {

    try{

        const userPosts = await Posts.findAll({
            where: {user_id: parseInt(req.params.user_id)}
        })
        res.json(userPosts)

    }catch(error){throw error}
}

const GetPostComments = async (req, res) => {

    try{

        const postComments = await Comments.findAll({
            where: {post_id: parseInt(req.params.post_id)}
        })
        res.json(postComments)


    }catch(error){throw error}
}

///////////////// CREATE CONTROLLERS //////////////

const CreatePost = async (req, res) => {

    try{

        const user_id = parseInt(req.params.user_id)
        let postBody = {
            user_id,
            ...req.body
        }
        const newPost = await Posts.create(postBody)
        res.json(newPost)

    }catch(error){throw error}
}

const CreateComment = async (req, res) => {

    try{

        const user_id = parseInt(req.params.user_id)
        const post_id = parseInt(req.params.post_id)

        let commentBody = {
            user_id,
            post_id,
            ...req.body
        }
        const newComment = await Comments.create(commentBody)
        res.json(newComment)

    }catch(error){throw error}
}


///////////////// UPDATE CONTROLLERS /////////////

const UpdateUser = async (req, res) => {

    try{

        const userId = parseInt(req.params.user_id)
        const updatedUser = await User.update(req.body, {
            where: {id: userId},
            returning: true
        })
        res.json(updatedUser)


    }catch(error){throw error}
}

const UpdatePost = async (req, res) => {

    try{

        const postId = parseInt(req.params.post_id)
        const updatedPost = await Posts.update(req.body, {
            where: {id: postId},
            returning: true
        })
        res.json(updatedPost)

    }catch(error){throw error}
}

const UpdateComment = async (req, res) => {
   
    try{

        const commentId = parseInt(req.params.comment_id)
        const updatedComment = await Comments.update(req.body, {
            where: {id: commentId},
            returning: true
        })
        res.json(updatedComment)

    }catch(error){throw error}
}

//////////////// DELETE CONTROLLERS //////////////

const DeletePost = async (req, res) => {

    try{

        const postId = parseInt(req.params.post_id)
        const deletedPost = await Posts.destroy({where: {id: postId}})
        res.send({msg: `Deleted post with id of ${postId}`})

    }catch(error){throw error}
}

const DeleteComment = async (req, res) => {

    try{

        const commentId = parseInt(req.params.comment_id)
        const deletedComment = await Comments.destroy({where: {id: commentId}})
        res.send({msg: `Deleted comment with id of ${commentId}`})

    }catch(error){throw error}
}



module.exports = {
    GetAllUsers,
    GetAllPosts,
    GetAllComments,
    GetSpecUser,
    GetSpecPost,
    GetUserPosts,
    GetPostComments,
    CreatePost,
    CreateComment,
    UpdateUser,
    UpdatePost,
    UpdateComment,
    DeletePost,
    DeleteComment
}