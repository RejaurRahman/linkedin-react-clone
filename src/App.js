import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import { selectUser } from './features/userSlice';

const App = () => {
  const user =useSelector(selectUser);

  return (
    <div className='app'>
      <Header />

      {
        !user ? (
          <Login />
        ) : (
          <div className='app__body'>
            <Sidebar />
            <Feed />
          </div>
        )
      }
    </div>
  );
}

export default App;
