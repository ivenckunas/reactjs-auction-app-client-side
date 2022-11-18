import MainContext from './context/MainContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import './reset.css';
import AuthPage from './pages/AuthPage';
import { useState } from 'react';
import MainPage from './pages/MainPage';

function App() {



  const [registerMsg, setRegisterMsg] = useState('')
  const [loginMsg, setLoginMsg] = useState('')
  const [auctionItems, setAuctionItems] = useState([])

  const states = {
    registerMsg,
    setRegisterMsg,
    loginMsg,
    setLoginMsg,
    auctionItems,
    setAuctionItems
  }

  return (
    <div>

      <MainContext.Provider value={states}>

        <BrowserRouter>

          <Routes>

            <Route path='/' element={<AuthPage />} />
            <Route path='/main' element={<MainPage />} />


          </Routes>

        </BrowserRouter>


      </MainContext.Provider>

    </div>
  );
}

export default App;
