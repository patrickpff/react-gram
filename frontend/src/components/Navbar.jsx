import './Navbar.css'

// Components
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill } from 'react-icons/bs'

// Hooks
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const { auth } = useAuth()
  const { user } = useSelector((state) => state.auth)

  return (
    <nav id="nav">
      <Link to="/">ReactGram</Link>
      <form id='search-form'>
        <BsSearch />
        <input type="text" placeholder='Pesquisar...' />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="profile">
                <BsFillPersonFill />
              </NavLink>
            </li>
            <li>
              <span>Logout</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar