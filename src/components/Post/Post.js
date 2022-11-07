import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar />

        <div className="post__info">
          <h2>
            Ronny Rahman
          </h2>
          <p>
            This is a test
          </p>
        </div>

        <div className="post__body">
          <p>
            This worked ... yes
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post;
