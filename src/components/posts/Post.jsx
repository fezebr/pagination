import React from 'react'
const Post = ({ title, body,posts }) => {
    
     return (
          <div className="post">
               <h5>{title}</h5>
               <p>{body}</p>
          </div>
     );
}

export default Post;