import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Paginations from './components/paginations/Paginations';
import PostManager from './components/posts/PostManager';


function App() {
  /////////states:
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [postPerPage, setPostPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)


  const lastOfIndex = currentPage * postPerPage  ////// first index in current page
  const firstOfIndex = lastOfIndex - postPerPage ///// last index in current page
  const currentPosts = posts.slice(firstOfIndex, lastOfIndex)  ///////// posts in current pages
  ////////// conect to api in use effect :
  useEffect(() => {
    const fetchCourse = async () => {

      setLoading(true)
      console.log(loading)
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(data);  ////get data and set it in posts
      setLoading(false)
      console.log(loading)

    }
    fetchCourse();
  }, [])
  /////////////onclick on paginats//////////

  const paginate = pageNumber => setCurrentPage(pageNumber);


  console.log(posts)
  if (loading) {
    return <h2>.....loading.......</h2>
  }
  return (
    <div className="App">

      {/* ////// post manager manage posts  */}
      <PostManager
        posts={currentPosts}

      />

      {/* nav paginate: */}
      <Paginations
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsLength={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
