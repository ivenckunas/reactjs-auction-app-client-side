import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

  const nav = useNavigate()

  return (
    <div className='header'>
      <div className="headerText">
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Excepturi soluta nulla? Quam, magnam!</h2>
        <h3>Register/login to start bidding</h3>
      </div>
      <button onClick={() => {
        nav('/register-login')
      }
      }>Register/login</button>
    </div>
  )
}

export default Header