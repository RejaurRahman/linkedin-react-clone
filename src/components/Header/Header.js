import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from '../HeaderOption/HeaderOption';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://img.icons8.com/external-justicon-flat-justicon/100/000000/external-linkedin-social-media-justicon-flat-justicon.png'
          alt='Linkedin Icon'
        />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
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
          avatar='https://media-exp1.licdn.com/dms/image/C4D03AQGRdw2cZmz0FA/profile-displayphoto-shrink_100_100/0/1625271689587?e=1673481600&v=beta&t=oBBASaE4qtiOTg4Ctqndizl8RkEi0LR1Fapv9zEbUrk'
          title='Ronny'
        />
      </div>
    </div>
  )
}

export default Header;
