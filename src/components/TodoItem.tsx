import { useTodos, type Todo } from "../context/TodoContext";

export default ({ id, text, done }: Todo) => {
  const { toggleTodo, removeTodo } = useTodos();
  return (
    <li className="flex justify-between items-center bg-white">
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
        className="text-red-500 hover:text-red-700 ml-4"
      >
        حذف
      </button>
    </li>
  );
};
