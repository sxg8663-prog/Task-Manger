import React, { useState } from 'react'
import { services } from '../services/Service'
import styles from './Register.module.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  let [state, setState] = useState({
    email: '',
    password: ''
  })

  let handleState = e => {
    let { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  let handleSubmit = e => {
    try {
      e.preventDefault()
      let { email, password } = state
      let payload = { email, password }

      ;(async () => {
        services.registerUser(payload)
        alert('Registration Successful')
      })()
    } catch (error) {
      console.log(error)
    }
    navigate('/login')
  }

  let handlelogin=()=>{
    navigate('/login')
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>TO-DO LIST APPLICATION</h1>
      <h2 className={styles.subtitle}>REGISTER</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            type='email'
            id='email'
            onChange={handleState}
            name='email'
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <input
            type='password'
            id='password'
            onChange={handleState}
            name='password'
            className={styles.input}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Register</button>
        </div>
      </form>
      <br />
      <div>
      Already register user ?
      <br />
        <br />
        <button className={styles.button} onClick={handlelogin}>Login</button>
      </div>
    </main>
  )
}

export default Register
