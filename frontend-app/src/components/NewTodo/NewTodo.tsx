import React, { useState } from "react";
import { INewTodo } from "../../interfaces";

import styles from './NewTodo.module.css';

interface NewTodoProps {
  onCreate: (story: INewTodo) => void;
}

export function NewTodo(props: NewTodoProps) {
  const [text, setTitle] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Clear form
    setTitle('');
    
    props.onCreate({ text });
  }

  return (
    <div>
      <h1>Add a todo</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={text} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}