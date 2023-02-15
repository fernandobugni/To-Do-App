import React, { useEffect, useState } from "react";
import { ErrorBox, NewTodo, Todo } from "../../components";
import { INewTodo, ITodo, IUser } from "../../interfaces";
import { createTodo, deleteTodo, fetchTodos } from "../../requests";

import styles from "./Profile.module.css";

interface ProfileProps {
  currentUser: IUser;
  onProfileChange: (user: IUser) => void;
}

export function Profile(props: ProfileProps) {
  const [todosLoaded, settodosLoaded] = useState(false);
  const [todos, settodos] = useState<ITodo[]>([]);
  const [error, setError] = useState(false);

  function refreshtodos() {
    fetchTodos(props.currentUser.id)
      .then(todos => {
        settodos(todos);
        settodosLoaded(true);
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  }

  useEffect(() => {
    if (!todosLoaded) {
      refreshtodos();
    }
  })

  async function createtodoAndRefresh(todo: INewTodo) {
    try {
      await createTodo(todo);
      await refreshtodos();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }


  async function deletetodoAndRefresh(todo: ITodo) {
    try {
      await deleteTodo(todo.id);
      await refreshtodos();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <div className={styles.container}>
      {
        error && <ErrorBox />
      }
      <div>
        <h1>Your todos</h1>
        {todos.map(todo => <Todo todo={todo} key={todo.id} onDelete={() => deletetodoAndRefresh(todo)} />)}
      </div>
      <NewTodo onCreate={createtodoAndRefresh}/>
    </div>
  );
}