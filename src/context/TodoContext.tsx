import React, { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface Todo {
  id: number | string;
  text: string;
  done: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number | string) => void;
  removeTodo: (id: number | string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };

    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number | string) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: number | string) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodos must be used within TodoProvider");
  return context;
};
