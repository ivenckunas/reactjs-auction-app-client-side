import React, { useRef, useState } from 'react'
import axios from 'axios'


function Main() {

  const imageRef = useRef()
  const titleRef = useRef()
  const timeRef = useRef()
  const priceRef = useRef()

  const upload = () => {

    const newItemObj = {
      image: imageRef.current.value,
      title: titleRef.current.value,
      time: timeRef.current.value,
      price: priceRef.current.value
    }

    axios.post('http://localhost:4000/postItem', newItemObj)
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
      <input ref={timeRef} type="number" placeholder='time' />
      <input ref={priceRef} type="number" placeholder='start price' />
      <button onClick={upload}>Upload</button>
    </div>
  )
}

export default Main