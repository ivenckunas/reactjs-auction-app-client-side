import React from 'react'
import Auction from '../components/Auction'
import Main from '../components/Main'

function MainPage() {
  return (
    <div className='container'>
      <div className="mainPageContainer">
        <Main />
        <Auction />
      </div>
    </div>
  )
}

export default MainPage