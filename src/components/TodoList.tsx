import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default () => {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <p className="text-center text-gray-500">تسکی وجود ندارد.</p>;
  }

  return (
    <ul className="w-full">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
