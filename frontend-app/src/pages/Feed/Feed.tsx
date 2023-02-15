import React, { useEffect, useState } from "react";
import { ErrorBox, Todo } from "../../components";
import { ITodo } from "../../interfaces";
import { fetchTodos } from "../../requests";
import styles from './Feed.module.css';

export function Feed() {
  const [TodosLoaded, setTodosLoaded] = useState(false);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!TodosLoaded) {
      fetchTodos()
        .then(todos => {
          setTodos(todos);
          setTodosLoaded(true);
        })
        .catch(err => {
          console.log(err);
          setError(true);
        });
    }
  })

  return (
    <div className={styles.container}>
      {
        error && <ErrorBox />
      }
      {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
    </div>
  )
}