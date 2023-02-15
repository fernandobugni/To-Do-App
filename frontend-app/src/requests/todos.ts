import axios from 'axios';
import { ITodo } from '../interfaces/todo.interface';
import { INewTodo } from '../interfaces/new-todo.interface';

export async function fetchTodos(authorId?: number): Promise<ITodo[]> {
  const response = await axios.get<ITodo[]>('/api/todos', {
    params: { authorId }
  });
  return response.data;
}

export async function createTodo(todo: INewTodo): Promise<void> {
  await axios.post('/api/todos', todo);
}

export async function deleteTodo(todoId: number): Promise<void> {
  await axios.delete(`/api/todos/${todoId}`);
}