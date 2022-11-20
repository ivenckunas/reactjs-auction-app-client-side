import React, { useContext } from 'react'
import Auction from '../components/Auction'
import UploadItem from '../components/UploadItem'
import Navbar from '../components/Navbar'
import SingleAuction from '../components/SingleAuction'
import MainContext from '../context/MainContext'
import Header from '../components/Header'

function MainPage() {

  const { showModal, userLoggedIn } = useContext(MainContext)

  return (
    <div className='container'>
      {showModal && <SingleAuction />}
      <Navbar />
      <Header />
      <div className="mainPageContainer">
        {userLoggedIn && <UploadItem />}
        <Auction />
      </div>

    </div>
  )
}

export default MainPage