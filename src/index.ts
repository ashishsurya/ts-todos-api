import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import Todo from './types/Todo';
const app = express();

app.use(bodyParser.json());

var todos: Array<Todo> = [];

function addTodo(todo: Todo) {
  todos.push(todo);
}

function deleteTodo(id: string) {
  todos.filter((todo) => todo.id !== id);
}

app.get('/v1/todos', (req: Request, res: Response): void => {
  // TODO
});

app.post('/v1/todos', (req: Request, res: Response) => {
  // TODO
});

app.get('/v1/todos/:id', (req: Request, res: Response) => {
  // TODO
});

app.listen(3000, () => {
  console.log('Server Running \n http://localhost:3000/');
});
