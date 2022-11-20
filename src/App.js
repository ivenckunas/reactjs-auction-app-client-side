import MainContext from './context/MainContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './reset.css';
import { useEffect, useState } from 'react';
import AuctionPage from './pages/AuctionPage';
import AuthPage from './pages/AuthPage';
import { io } from 'socket.io-client';
import axios from 'axios'


const socket = io.connect('http://localhost:4000');

function App() {

  const [registerMsg, setRegisterMsg] = useState('')
  const [loginMsg, setLoginMsg] = useState('')
  const [auctionItems, setAuctionItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modal, setModal] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [time, setTime] = useState([])
  const [currentItem, setCurrentItem] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  const states = {
    socket,
    registerMsg,
    setRegisterMsg,
    loginMsg,
    setLoginMsg,
    auctionItems,
    setAuctionItems,
    showModal,
    setShowModal,
    modal,
    setModal,
    userLoggedIn,
    setUserLoggedIn,
    time,
    setTime,
    currentItem,
    setCurrentItem,
    setCurrentUser,
    currentUser,
  }

  useEffect(() => {
    const getData = () => {
      axios.get('http://localhost:4000/all-items')
        .then(function (response) {
          setAuctionItems(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    const interval = setInterval(() => {
      getData()
    }, 500);

    return () => clearInterval(interval)
  }, [])

  return (
    <div>

      <MainContext.Provider value={states}>

        <BrowserRouter>

          <Routes>

            <Route path='/' element={<AuctionPage />} />
            <Route path='/register-login' element={<AuthPage />} />


          </Routes>

        </BrowserRouter>


      </MainContext.Provider>

    </div>
  );
}

export default App;
