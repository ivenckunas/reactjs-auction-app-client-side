import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../context/MainContext'

function Navbar() {

  const { currentUser } = useContext(MainContext)

  const logout = () => {
    window.location.reload()
  }

  return (
    <div className='navbar'>
      <img src="https://cdn3.iconfinder.com/data/icons/stock-market-color/64/auction-tender-competition-bid-offer-512.png" alt="bidding auction" />
      <div className="regLog">
        {currentUser ?
          <div className='loginOut'>
            <p>Logged in as: {currentUser}</p>
            <button onClick={logout}>Logout</button>
          </div>
          :
          <Link to='/register-login'>Sign up/Sign in</Link>}
      </div>
    </div>
  )
}

export default Navbar