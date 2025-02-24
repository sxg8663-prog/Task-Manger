import React, { useContext, useState } from 'react';
import { Contextapi } from '../context/Context';
import { services } from '../services/Service';
import styles from './Creation.module.css';
import { useNavigate } from 'react-router-dom';


const Creation = () => {

  let navigate=useNavigate()

  let { globalstate, setGlobalstate } = useContext(Contextapi);
  let [state, setState] = useState({
    title: '',
    content: ''
  });

  let { title, content } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = { title, content, userid: globalstate.id };
    services.createTask(payload);
  };
  let handleclick=()=>{
    navigate('/gettask')
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Create Task</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>Content</label>
          <textarea
            name="content"
            cols={20}
            rows={10}
            onChange={handleChange}
            value={content}
            id="content"
            className={styles.textarea}
          ></textarea>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleclick}>Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Creation;
