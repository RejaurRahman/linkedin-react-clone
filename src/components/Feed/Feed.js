import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from '../InputOption/InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/Post';
import { db } from '../../services/firebase';
import {
  collection,
  onSnapshot,
  doc,
  setDoc,
  serverTimestamp,
  orderBy,
  query,
} from 'firebase/firestore';

const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      onSnapshot(
        query(
          collection(db, 'posts'),
          orderBy('timestamp', 'desc')
        ),

        (snapshot) => {
          setPosts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    await setDoc(doc(db, 'posts', input), {
      name: 'ronny rahman',
      description: 'this is the test',
      message: input,
      photoUrl: '',
      timestamp: serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />

          <form>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              onClick={sendPost}
              type='submit'
            >
              send
            </button>
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

      {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed;
