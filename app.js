const express = require('express')
const data  = require('./jsonData')
const route = require('./routes')
const cors = require('cors')


const app =express()

app.use(express.json())

app.use(cors({
    // origin:[
    //     "http://localhost:3000",
    //     "http://localhost:8000",
    //     "http://localhost:4000",
    //     "http://google.com"
    // ],
    origin:'*'
}))




app.use('/api',route)





module.exports=app