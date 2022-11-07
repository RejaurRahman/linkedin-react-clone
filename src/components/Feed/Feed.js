import React from 'react';
import './Feed.css';
import InputOption from '../InputOption/InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />

          <form>
            <input type='text' />
            <button type='submit'>send</button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption
            title='Photo'
            Icon={ImageIcon}
            color='70b5f9'
          />

          <InputOption
            title='Video'
            Icon={SubscriptionsIcon}
            color='e7a33e'
          />

          <InputOption
            title='Event'
            Icon={EventNoteIcon}
            color='c0cbcd'
          />

          <InputOption
            title='Write Article'
            Icon={CalendarViewDayIcon}
            color='7fc15e'
          />
        </div>
      </div>

      <Post
        name='Ronny Rahman'
        description='This is a test'
        message='This worked ... yes'
      />
    </div>
  )
}

export default Feed;
