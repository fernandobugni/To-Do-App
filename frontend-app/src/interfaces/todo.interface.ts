export interface ITodo {
  id: number;
  text: string;
  author: {
    id: number;
    name: string;
  };
}