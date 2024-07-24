import { Request, Response } from "express";
import { Todo } from "../models/todo";

let todos: Todo[] = [];
let nextId = 1;

export const createTodo = (req: Request, res: Response): void => {
  const { title, description } = req.body;

  if (!title) {
    res.status(400).json({ error: "Title is required" });
    return;
  }

  const newTodo: Todo = {
    id: nextId++,
    title,
    description,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const getTodos = (req: Request, res: Response): void => {
  res.json(todos);
};

export const getTodoById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  res.json(todo);
};

export const updateTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todo = todos.find((todo) => todo.id === parseInt(id));

  if (!todo) {
    res.status(404).json({ error: "Todo not found" });
    return;
  }

  todo.title = title ?? todo.title;
  todo.description = description ?? todo.description;
  todo.completed = completed ?? todo.completed;

  res.json(todo);
};

export const deleteTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id));

  res.status(204).send();
};
