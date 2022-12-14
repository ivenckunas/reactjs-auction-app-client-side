import React, { useRef, useState } from 'react'
import axios from 'axios'


function Main() {

  const [errorUploadMessage, setErrorUploadMessage] = useState('')

  const imageRef = useRef()
  const titleRef = useRef()
  const dateRef = useRef()
  const priceRef = useRef()


  const upload = () => {

    const newItemObj = {
      image: imageRef.current.value,
      title: titleRef.current.value,
      date: dateRef.current.value,
      price: priceRef.current.value,
      bid: 0,
      bidder: 'none'
    }

    if (newItemObj.image && newItemObj.title && newItemObj.price && newItemObj.date) {
      axios.post('http://localhost:4000/post-item', newItemObj)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setErrorUploadMessage('Item added')
    } else {
      setErrorUploadMessage('Fill all the fields')
    }


  }

  return (
    <div className='mainPageSidebar'>
      <div className="addItem">
        <h3>Add item to auction</h3>
        <input ref={imageRef} type="text" placeholder='image' />
        <input ref={titleRef} type="text" placeholder='title' />
        <input ref={priceRef} type="number" placeholder='starting price' />
        <label htmlFor="">Auction end:</label>
        <input ref={dateRef} type="datetime-local" />
        <button onClick={upload}>Upload</button>
        <p>{errorUploadMessage}</p>
      </div>
      <div className="filler"></div>
    </div>
  )
}

export default Main