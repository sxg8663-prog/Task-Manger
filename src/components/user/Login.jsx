import axios from 'axios'
import React, { useContext, useState } from 'react'
import { services } from '../services/Service'
import { Contextapi } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  let [login, setLogin] = useState({
    email: '',
    password: ''
  })

  let navigate = useNavigate()
  let {globalstate, setGlobalstate } = useContext(Contextapi)

  let handleChange = e => {
    let { name, value } = e.target
    setLogin({
      ...login,
      [name]: value
    })
  }

  let handleSubmit = e => {
    e.preventDefault()
    let { email, password } = login
    let payload = { email, password };
    (async () => {
      let data = await services.loginUser(payload)
      console.log(data)
      setGlobalstate(data)
      data ? navigate('/gettask') : navigate('/login')
      sessionStorage.setItem("Token",globalstate.id)
    })();

  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>TO-DO LIST APPLICATION</h1>
      <h2 className={styles.subtitle}>LOGIN</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Login</button>
        </div>
      </form>
    </main>
  )
}

export default Login
