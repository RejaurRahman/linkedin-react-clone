import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
      <h1>header component</h1>

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

      </div>
    </div>
  )
}

export default Header;
