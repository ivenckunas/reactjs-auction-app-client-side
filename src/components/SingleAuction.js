/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import MainContext from "../context/MainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import Countdown from "react-countdown";
import dateFormat from "dateformat";
import { FaRegWindowClose } from "react-icons/fa";
const now = new Date();

function SingleAuction() {

  const { modal, setShowModal, userLoggedIn, auctionItems, currentItem, currentUser, setBidHistory, bidHistory, auctionOver } = useContext(MainContext);

  const dateNow = dateFormat(now, "isoDateTime");
  const compareDate = dateNow > modal.date;

  const bidRef = useRef();
  const nav = useNavigate();
  const auctionWinner = bidHistory[bidHistory.length - 1];
  const Completionist = () => {
    <p className="timeLeft">Auction ended.</p>
  };

  const bid = () => {
    const bidData = {
      itemId: auctionItems[currentItem],
      bid: bidRef.current.value,
      bidder: currentUser,
    };
    axios.post("http://localhost:4000/update", bidData);
    axios.post("http://localhost:4000/update-bid-history", bidData);
  };

  const validateBid = () => {
    if (bidRef.current.value > modal.bid && bidRef.current.value > modal.price) return bid();
    alert("bid must be higher than current highest bid or price");
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/all-items")
      .then(function (response) {
        setBidHistory(response.data.data[currentItem].bidHistory);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [bid, setBidHistory, currentItem]);

  return (
    <div className="singleAuction">
      <div className="singleAuctionItem">
        <img src={modal.image} alt="auction" />
        <div className="singleItemInfo">
          <h3>{modal.title}</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sed cupiditate blanditiis, id aliquam quae praesentium deserunt quos tenetur inventore ab magnam maxime illum? Voluptate sit tempore doloremque accusantium commodi!</p>
          <br />
          <p>Starting price: {modal.price}eur.</p>
          <p>Time left: {auctionOver && 'Auction finished'}</p>
          <Countdown className="timeLeft" date={modal.date}>
            {<Completionist /> && (
              <div>
                <Completionist />
                {auctionWinner && <p className="winner"> Winner: {auctionWinner.bidder} </p>}
              </div>
            )}
          </Countdown>
        </div>
        {userLoggedIn ? (
          <div className={compareDate ? 'hide' : 'bid'} >
            <input ref={bidRef} type="number" placeholder="place your bid" />
            <button onClick={validateBid}>bid</button>
          </div>
        ) : (
          <div>
            <p className="loginMsg">Login/sign up to place a bid</p>
            <button
              onClick={() => {
                nav("/register-login");
              }}>
              Login/sign up
            </button>
          </div>
        )}
        <FaRegWindowClose
          className="closeIcon"
          onClick={() => {
            setShowModal(false);
          }}
        />
        <h4>Bid history:</h4>
        <ScrollToBottom className="bidHistoryWrapper">
          {bidHistory.map((bid, i) => (
            <p key={i} className="bidHistory">
              {bid.bidder}: {bid.bid}eur
            </p>
          ))}
        </ScrollToBottom>
      </div>
    </div >
  );
}

export default SingleAuction;
