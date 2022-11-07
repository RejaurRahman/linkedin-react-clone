import React from 'react';
import './Post.css';
import InputOption from '../InputOption/InputOption';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar />

        <div className='post__info'>
          <h2>
            {name}
          </h2>

          <p>
            {description}
          </p>
        </div>
      </div>

      <div className='post__body'>
        <p>
          {message}
        </p>
      </div>

      <div className='post__buttons'>
        <InputOption
          title='Like'
          Icon={ThumbUpIcon}
          color='686a6c'
        />

        <InputOption
          title='Comment'
          Icon={CommentIcon}
          color='686a6c'
        />

        <InputOption
          title='Share'
          Icon={ShareIcon}
          color='686a6c'
        />

        <InputOption
          title='Send'
          Icon={SendIcon}
          color='686a6c'
        />
      </div>
    </div>
  )
}

export default Post;
