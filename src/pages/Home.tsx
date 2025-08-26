import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default () => {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-4"
    >
      <h1 className="text-2xl font-bold mb-6 text-blue-800">📝 Todo App</h1>

      <div className="w-full max-w-md">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};
