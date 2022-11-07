import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img
          src='https://i.pinimg.com/736x/dc/55/c2/dc55c27ccd37988dd63e5db558dca3d7.jpg' alt='Background Banner'
        />
        <Avatar
          className='sidebar__avatar'
        />

        <h2>ronny rahman</h2>
        <h4>rejaur.ronny.rahman@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>who viewed you</p>
          <p className='sidebar__statNumber'>2,554</p>
        </div>

        <div className='sidebar__stat'>
          <p>views on post</p>
          <p className='sidebar__statNumber'>2,236</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <h4>recent</h4>

        { recentItem('reactjs') }
        { recentItem('programming') }
        { recentItem('ui') }
        { recentItem('developer') }
        { recentItem('design') }
      </div>
    </div>
  )
}

export default Sidebar;
