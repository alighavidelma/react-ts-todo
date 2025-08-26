import { useTodos, type Todo } from "../context/TodoContext";

export default ({ id, text, done }: Todo) => {
  const { toggleTodo, removeTodo } = useTodos();
  return (
    <li className="p-1 flex justify-between items-center bg-white text-blue-950 border-b-2">
      <span
        onClick={() => toggleTodo(id)}
        className={`cursor-pointer flex-1 ${
          done ? "line-through text-gray-400" : ""
        }`}
      >
        {text}
      </span>
      <button
        onClick={() => removeTodo(id)}
        className="text-red-500 hover:text-red-700 "
      >
        حذف
      </button>
    </li>
  );
};
