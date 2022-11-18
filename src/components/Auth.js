import React, { useContext, useRef } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { useNavigate } from 'react-router-dom'

function Auth() {


  const { setRegisterMsg, registerMsg, loginMsg, setLoginMsg } = useContext(MainContext)

  const emailRef = useRef()
  const pswRef = useRef()
  const pswRepeatRef = useRef()
  const loginEmailRef = useRef()
  const loginPswRef = useRef()

  const nav = useNavigate()

  const register = () => {

    const userObj = {
      email: emailRef.current.value,
      password: pswRef.current.value,
      paswordRepeat: pswRepeatRef.current.value,
    }

    axios.post('http://localhost:4000/register', userObj)
      .then(function (response) {
        console.log('response ===', response.data);
        if (response.data.error === true) {
          setRegisterMsg(response.data.message);
          return
        } else {
          setRegisterMsg(response.data.message);
          setTimeout(() => {
            nav('/main')
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const login = () => {

    const userObj = {
      email: loginEmailRef.current.value,
      password: loginPswRef.current.value,
    }

    axios.post('http://localhost:4000/login', userObj)
      .then(function (response) {
        if (response.data.error === true) {
          setLoginMsg(response.data.message);
          return
        } else {
          setLoginMsg(response.data.message);
          setTimeout(() => {
            nav('/main')
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className=" authContainer">
      <div className='register'>
        <h2>Register</h2>
        <input ref={emailRef} type="text" placeholder='email' />
        <input ref={pswRef} type="password" placeholder="password" required />
        <input ref={pswRepeatRef} type="password" placeholder="repeat password" required />
        <button onClick={register}>Register</button>
        <p>{registerMsg}</p>
      </div>
      <div className='login'>
        <h2>Login</h2>
        <input ref={loginEmailRef} type="email" placeholder="user email" required />
        <input ref={loginPswRef} type="password" placeholder="password" required />
        <button onClick={login}>Login</button>
        <p>{loginMsg}</p>
      </div>
    </div >
  )
}

export default Auth