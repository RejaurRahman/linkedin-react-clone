import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HeaderOption from '../HeaderOption/HeaderOption'
import LinkedinIcon from '../../assets/linkedin-icon.png'
import { logout } from '../../features/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../services/firebase'

const Header = () => {
  const dispatch = useDispatch()

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src={LinkedinIcon}
          alt='Linkedin Icon'
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption
          Icon={HomeIcon}
          title='Home'
        />

        <HeaderOption
          Icon={SupervisorAccountIcon}
          title='My Network'
        />

        <HeaderOption
          Icon={BusinessCenterIcon}
          title='Jobs'
        />

        <HeaderOption
          Icon={ChatIcon}
          title='Messages'
        />

        <HeaderOption
          Icon={NotificationsIcon}
          title='Notifications'
        />

        <HeaderOption
          avatar={true}
          title='Ronny'
          onClick={logoutApp}
        />
      </div>
    </div>
  )
}

export default Header
