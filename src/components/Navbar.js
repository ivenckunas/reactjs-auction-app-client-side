import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../context/MainContext'
import axios from 'axios'


function Navbar() {

  const { currentUser } = useContext(MainContext)

  return (
    <div className='navbar'>
      <img src="https://goauctionsandbox2.blob.core.windows.net/main/GoAuction-Full-Transparent.png" alt="bidding auction" />
      <div className="regLog">
        {currentUser ?
          <div>
            <p>logged in as: {currentUser}</p>
          </div>
          :
          <Link to='/register-login'>Sign up/Sign in</Link>}
      </div>
    </div>
  )
}

export default Navbar