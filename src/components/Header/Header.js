import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import HeaderOption from '../HeaderOption/HeaderOption'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import LinkedinIcon from '../../assets/linkedin-icon.png'
import { logout, selectUser } from '../../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../services/firebase'

const Header = () => {
  const user = useSelector(selectUser)
  const [showDropdown, setShowDropdown] = useState(false)
  const dispatch = useDispatch()

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__left'>
          <img
            src={LinkedinIcon}
            alt='Linkedin Icon'
          />

          {
            user && (
              <div
              className='header__search'
              >
                <SearchIcon />
                <input placeholder='Search' type='text' />
              </div>
            )
          }
        </div>

        {
          user && (
            <div className='header__right'>
              <HeaderOption
                Icon={HomeIcon}
                title='Home'
              />

              <div
                className='header__avatar'
                onClick={()=>setShowDropdown(!showDropdown)}
              >
                <HeaderOption
                  avatar={true}
                  title='me'
                />
                <ArrowDropDownIcon />
              </div>

              {
                showDropdown ? (
                  <div className='header__dropdown'>
                    <ul className='header__dropdownList'>
                      <li onClick={logoutApp}>
                        sign out
                      </li>
                    </ul>
                  </div>
                ) : null
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header
