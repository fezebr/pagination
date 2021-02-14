import React from 'react'
import Post from './Post';

const PostManager = ({posts}) => {
     return (
          posts.map(post =>(
              <Post
              key={post.id}
              title={post.title}
              body={post.body}
             
              />
         ))
     );
}
 
export default PostManager;