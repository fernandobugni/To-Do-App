import { ITodo } from '../../interfaces/todo.interface';
import styles from './Todo.module.css';

interface TodoProps {
  todo: ITodo;
  onDelete?: () => void;
}

export function Todo(props: TodoProps) {
  return (
    <div className={`${styles.container} box`}>
  
      <div className={styles.mainContent}>
        <div className={styles.title}>
          {props.todo.text}
        </div>
        <div>
          <span className={styles.authorName}> </span>
        </div>
      </div>
      {
        props.onDelete && (
          <div className={styles.deletion}>
            <button onClick={props.onDelete} className="btn btnSmall">X</button>
          </div>
        )
      }
      <button>Translate</button>
    </div>
  )
}