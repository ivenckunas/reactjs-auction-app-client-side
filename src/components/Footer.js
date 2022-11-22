import React from 'react'
import { VscAccount, VscGithub, VscHome } from 'react-icons/vsc'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerIcons">
        <VscAccount />
        <VscGithub />
        <VscHome />
      </div>
      <div className="footerLinks">
        <a href="#">Home</a>
        <a href="#">Auction</a>
        <a href="#">Contact</a>
      </div>
      <p>&#169; 2022</p>
    </div>
  )
}

export default Footer