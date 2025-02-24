import React, { useContext, useEffect, useState } from 'react'
import { services } from '../services/Service'
import { Contextapi } from '../context/Context'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Gettask.module.css'

const Gettask = () => {
  let [state, setState] = useState([])
  let { globalstate, setGlobalstate } = useContext(Contextapi)
  let navigate=useNavigate()

  let handlecreate=()=>{
    setGlobalstate(globalstate)
    navigate('/createtask')
  }

  useEffect(() => {
    ;(async () => {
      let data = await services.gettask(globalstate)
      setState(data)
      console.log(data)
    })()
  }, [state.length])

  let handledeletetask=(id)=>{
    let data = services.deletetask(id)
    setState(state.filter((val)=>{
      val.id!=data.id
    }))
  }

  let handlelogout=()=>{
    sessionStorage.removeItem("Token")
    navigate('/login')
  }

  return (
    <>
    <main>
      <div className={styles.title}>
      <h1>TASKS</h1>
      <button className={styles.button1} onClick={handlecreate}>➕ CREATE TASK</button>
      <button className={styles.button1} onClick={handlelogout}>LOGOUT</button>
      </div>
      <div className={styles.mainContainer}>
        {state.length > 0
          ? state.map(val => {
              return (
                <div className={styles.card} key={val.id}>
                  <h3>{val.title}</h3>
                  <h4>{val.content}</h4>
                  <button className={styles.button}><Link to={'/updatetask'} state={{...val}}>update</Link></button>
                  <button className={styles.button} onClick={()=>{handledeletetask(val.id)}}>DELETE</button>
                </div>
              )
            })
          : 'Loading....'}
      </div>
      </main>
    </>
  )
}

export default Gettask
