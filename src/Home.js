import React, { useState, useEffect } from 'react';
// import logo from './react.svg';
import './Home.css';
import axios from "axios";



const Post = ({ list }) => {
  return (
    <div> 
      {/* <h4>{ list.title }</h4> */}
      <p>body</p>
      <button>Edit</button>
    </div>
  )
}

function Home() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
    ])
      .then(axios.spread((post) => {
        setPosts(post.data);
        console.log(post.data)
      }));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default Home;
