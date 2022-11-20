import React, { useContext, useRef, useState } from 'react'
import MainContext from '../context/MainContext'
import { FaRegWindowClose } from 'react-icons/fa';
import axios from 'axios';

function SingleAuction() {

  const { modal, setShowModal, userLoggedIn, auctionItems, currentItem, currentUser } = useContext(MainContext)

  console.log('currentUser ===', currentUser);

  const bidRef = useRef()

  const bid = () => {

    const bidData = {
      itemId: auctionItems[currentItem],
      bid: bidRef.current.value,
      bidder: currentUser
    }

    axios.post('http://localhost:4000/update', bidData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setShowModal(false)
  }

  return (
    <div className='singleAuction'>
      <div className="singleAuctionItem">
        <img src={modal.image} alt="single auction" />
        <div className="singleItemInfo">
          <h3>{modal.title}</h3>
          <p>Starting price: {modal.price}eur.</p>
          <p>Current highest bidder: {modal.bidder} {modal.bid}eur. </p>
        </div>
        {userLoggedIn && <div className="bid">
          <input ref={bidRef} type="number" placeholder='place your bid' />
          <button onClick={() => {
            if (bidRef.current.value > modal.bid && bidRef.current.value > modal.price) return bid()
            alert('bid must be higher than current highest bid or price')
          }}>bid</button>
        </div>}
      </div>
      <FaRegWindowClose className='closeIcon' onClick={() => {
        setShowModal(false)
      }} />
    </div >
  )
}

export default SingleAuction