import React, { useEffect , useState } from 'react'
import Blog from './Blog'

function WorldHistory() {
  const[data , setData] = useState([]);


 useEffect(() => {
  const url = "http://localhost:4050/blogs";

  const fetchData = async() => {
    try{
      const response = await fetch(url);
      const json = await response.json();
     setData(json);
    }catch(error) {
      console.log("error" , error);
    }
  };

  fetchData();
 } , []);

 console.log(data.title);

  return (
    <div className='main-page'>
      <h1 className='contribution'>Want to create your own blog? <a href='/contribute'>Contribute here!</a></h1>

   <div className='world-history-blogs'>
   {data.map((obj, index) => (
        <Blog title={obj.title} description={obj.description} />
      ))}
  
   </div>
   </div>
  )
}

export default WorldHistory