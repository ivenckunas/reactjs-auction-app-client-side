import React, { useRef, useState } from 'react'
import axios from 'axios'


function Main() {

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
      bid: 0
    }

    console.log('newItemObj ===', newItemObj);

    axios.post('http://localhost:4000/post-item', newItemObj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className="addItem main">
      <h3>Add item to auction</h3>
      <input ref={imageRef} type="text" placeholder='image' />
      <input ref={titleRef} type="text" placeholder='title' />
      <input ref={priceRef} type="number" placeholder='start price' />
      <label htmlFor="">Auction end date</label>
      <input ref={dateRef} type="date" />
      <button onClick={upload}>Upload</button>
    </div>
  )
}

export default Main