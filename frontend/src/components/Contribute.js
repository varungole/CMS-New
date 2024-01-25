import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Contribute() {

  const[blogName , setBlogName] = useState('');
  const[blogDescription , setBlogDescription] = useState('');
  const[blogActual , setblogActual] = useState('');
  const[blogAuthor , setBlogAuthor] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4050/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: blogName,
        description: blogDescription,
        actualBlog: blogActual,
        author: blogAuthor,
      }),
    });

    if (response.ok) {
      navigate("/success");
    } else {
      console.log('Not successful');
    }

    setBlogName('')
    setBlogDescription('')
    setblogActual('')
    setBlogAuthor('')
  };

  return (
    <div className='main-contribution'>
        <div className='blog-info'>
            <form className='input-form' onSubmit={handleSubmit}>
            <h2 className='blog-name' required>Please enter the name of your blog</h2>
            <input className='blog-name-input' value={blogName} onChange={(e) => setBlogName(e.target.value)}></input>
            <h2 className='blog-description'>Describe your blog!</h2>
            <input className='blog-description-input'  value={blogDescription} onChange={(e) => setBlogDescription(e.target.value)}required></input>
            <h2 className='blog-actual'>Enter the blog!</h2>
            <input type='text' className='blog-actual-input'  value={blogActual} onChange={(e) => setblogActual(e.target.value)}required></input>
            <h2 className='blog-author'>Enter name of the author</h2>
            <input className='blog-author-input'  value={blogAuthor} onChange={(e) => setBlogAuthor(e.target.value)}required></input>
            <button className='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contribute