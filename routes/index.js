
const Router = require('express').Router()
const blogRoute =require('./blogRoutes')




Router.use('/blog',blogRoute)








module.exports=Router



