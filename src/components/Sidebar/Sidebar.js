import React, { useState } from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import StickyBox from 'react-sticky-box'

const Sidebar = () => {
  let [moreSidebar, setMoreSidebar] = useState(true)
  const user = useSelector(selectUser)

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  const mobileVisibilityHandler = () => {
    return setMoreSidebar(!moreSidebar)
  }

  return (
    <StickyBox offsetTop={80} className='sidebar'>
      <div className={`sidebar__top ${moreSidebar ? 'sidebar__topLess' : ''}`}>
        <img
          src='https://i.pinimg.com/736x/dc/55/c2/dc55c27ccd37988dd63e5db558dca3d7.jpg' alt='Background Banner'
        />
        <Avatar
          src={user.photoUrl}
          className='sidebar__avatar'
        >
          {user.email[0]}
        </Avatar>

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={`sidebar__stats ${!moreSidebar ? 'sidebar__more' : 'sidebar__less'}`}>
        <div className='sidebar__stat'>
          <p>who viewed you</p>
          <p className='sidebar__statNumber'>2,554</p>
        </div>

        <div className='sidebar__stat'>
          <p>views on post</p>
          <p className='sidebar__statNumber'>2,236</p>
        </div>
      </div>

      <div className={`sidebar__bottom ${!moreSidebar ? 'sidebar__more' : 'sidebar__less'}`}>
        <h4>recent</h4>

        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('ui')}
        {recentItem('developer')}
        {recentItem('design')}
      </div>

      <div
        className={`sidebar__visibility ${!moreSidebar ? 'sidebar__iconMore' : 'sidebar__iconLess'}`}
        onClick={mobileVisibilityHandler}
      >
        {
          !moreSidebar ? 'Show more' : 'Show less'
        }

        <ExpandMoreIcon />
      </div>
    </StickyBox>
  )
}

export default Sidebar
