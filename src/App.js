import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './components/Login/Login'
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Widgets from './components/Widgets/Widgets'

const App = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className={`app ${!user ? 'screen' : ''}`}>
      <Header />

      {
        !user ? (
          <Login />
        ) : (
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )
      }
    </div>
  )
}

export default App
