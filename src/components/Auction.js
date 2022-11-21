import React, { useContext, useEffect } from "react";
import MainContext from "../context/MainContext";
import Countdown from "react-countdown";
import { CiSquareMore } from "react-icons/ci";
import axios from "axios";

function Auction() {
  const { auctionItems, showModal, setShowModal, setModal, setCurrentItem } = useContext(MainContext);

  const Completionist = () => <p className="timeLeft">auction ended</p>;

  return (
    <div className="auction">
      <div className="auctionItems">
        {auctionItems.map((item, i) => (
          <div
            onClick={() => {
              if (showModal) setShowModal(false);
              setShowModal(true);
              setModal(item);
              setCurrentItem(i);
            }}
            className="singleItem"
            key={i}
          >
            <img src={item.image} alt="auction item" />
            <div className="singleItemInfo">
              <h3>{item.title}</h3>
              <p>auction ends in: </p>
              <Countdown className="timeLeft" date={item.date}>
                <Completionist />
              </Countdown>
              <p>Starting price: {item.price}eur.</p>
              {item.bid > 0 && (
                <p>
                  Current highest bid: {item.bidder} {item.bid}eur.
                </p>
              )}
              <CiSquareMore className="moreInfo" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Auction;
