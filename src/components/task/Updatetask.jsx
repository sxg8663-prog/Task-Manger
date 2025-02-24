import React, { useContext, useState } from 'react';
import { Contextapi } from '../context/Context';
import styles from './Updatetask.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { services } from '../services/Service';

const Updatetask = () => {
  let navigate =useNavigate()
  let { globalstate, setGlobalstate } = useContext(Contextapi);
  // console.log(globalstate)
  let {state} =useLocation()
  // console.log(state)

  let [data,setData]=useState({
      title:state.title,
      content:state.content
  })

  let handlechange=(e)=>{
    let {name,value}=e.target
    setData({
      ...data,
      [name]: value
    });


  }
  let handlesubmit=(e)=>{
    e.preventDefault()
    let payload={title:data.title,content:data.content,userid:state.userid,id:state.id};
    console.log(payload);
    (async() => {
      await services.updatetask(payload.id,payload)
    })();
    navigate('/gettask')
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Update Task</h1>
      <form className={styles.form} onSubmit={handlesubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input type="text" id="title" name="title" value={data.title} className={styles.input}  onChange={handlechange}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>Content</label>
          <textarea id="content" rows={10} cols={20} value={data.content} name="content" className={styles.textarea} onChange={handlechange}></textarea>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} >Update Task</button>
        </div>
      </form>
    </main>
  );
};

export default Updatetask;
