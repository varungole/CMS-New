import React from 'react'

function Blog({title , description}) {
  return (
    <div className='main-frame'>
    <div className='blog-frame'>
      <h2 className='blog-title'>{title}</h2>
      <p className='blog-brief-description'>{description}</p>
    </div>
  </div>
  )
}

export default Blog