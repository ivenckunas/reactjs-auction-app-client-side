import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'

function Auction() {

  const { auctionItems, setAuctionItems } = useContext(MainContext)

  useEffect(() => {
    const getData = () => {
      axios.get('http://localhost:4000/allItems')
        .then(function (response) {
          setAuctionItems(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    const interval = setInterval(() => {
      getData()
    }, 2000);

    return () => clearInterval(interval)
  }, [])


  return (
    <div className='auction'>
      <div className="auctionItems">
        {auctionItems.map((item, i) => (
          <div className='singleItem' key={i}>
            <img src={item.image} alt="auction item image" />
            <h3>{item.title}</h3>
            <p>{item.time}</p>
            <p>{item.price}eur.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Auction