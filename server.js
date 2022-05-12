//////// IMPORT ////////////
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const middleware = require('./middleware')

/////////// MIDDLEWARE //////////
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


/////////// CONTROLLER IMPORT ////////////
const controllerS = require('./controllers/SiteController')
const controllerA = require('./controllers/AuthController')


//////////// ROUTES ////////////////


app.get('/users', controllerS.GetAllUsers)
app.get('/posts', controllerS.GetAllPosts)
app.get('/comments', controllerS.GetAllComments)

app.get('/users/:user_id', controllerS.GetSpecUser)
app.get('/posts/:post_id', controllerS.GetSpecPost)
app.get('/posts/:user_id', controllerS.GetUserPosts)
app.get('/comments/:post_id', controllerS.GetPostComments)

app.post('/posts/:user_id', controllerS.CreatePost)
app.post('/comments/:user_id/:post_id', controllerS.CreateComment)

app.put('/users/:user_id', controllerS.UpdateUser)
app.put('/posts/:post_id', controllerS.UpdatePost)
app.put('/comments/:comment_id', controllerS.UpdateComment)

app.delete('/posts/:post_id', controllerS.DeletePost)
app.delete('/comments/:comment_id', controllerS.DeleteComment)


/////////// EXPRESS SERVER LISTEN TO PORT ///////////////
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))