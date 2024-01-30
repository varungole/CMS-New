const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Blog = require('../backend/Schema');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log("Connected to Database"))
  .catch(console.error);

const getAllBlogs = async(req , res) => {
  const blogs = await Blog.find({}).sort({createdAt: -1})
  res.status(200).json(blogs)
}

const createBlog = async(req , res) => {
    const {title , description , actualBlog, author , genre} = req.body

    try{
        const blog = await Blog.create({title, description, actualBlog, author , genre})
        res.status(200).json(blog)
    }
    catch(error) {
        res.status(200).json({error : error.message})
    }
}

const deleteBlog = async (req, res) => {
  const { _id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: 'No such Blog' });
  }

  try {
    const blog = await Blog.findByIdAndDelete({ _id: _id });

    if (!blog) {
      return res.status(404).json({ error: 'No such Blog' });
    }

    res.status(200).json(blog);
  } catch (error) {
    // Handle other errors (e.g., database error)
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

app.get('/blogs' , getAllBlogs);
app.post('/blogs' , createBlog);
app.delete('/blogs' , deleteBlog)

app.listen(process.env.PORT , () => {
    console.log('Listening on Port' , process.env.PORT);
})
