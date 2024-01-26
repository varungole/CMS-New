const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Blog = require('../backend/Schema');
require('dotenv').config

const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(" ", {

})
  .then(() => console.log("Connected to Database"))
  .catch(console.error);


const getAllBlogs = async(req , res) => {
  const blogs = await Blog.find({}).sort({createdAt: -1})
  res.status(200).json(blogs)
}

const createBlog = async(req , res) => {
    const {title , description , actualBlog, author} = req.body

    try{
        const blog = await Blog.create({title, description, actualBlog, author})
        res.status(200).json(blog)
    }
    catch(error) {
        res.status(200).json({error : error.message})
    }
}

app.get('/blogs' , getAllBlogs);
app.post('/blogs' , createBlog);

app.listen(4050 , () => {
    console.log('Listening on Port' , 4050);
})
