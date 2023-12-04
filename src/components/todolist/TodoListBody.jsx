import React, { useState } from "react";

export const TodoListBody = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].checked = !newTodos[id].checked;
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="flex mb-5 space-x-3 md:mt-6">
        <label className="relative block w-full overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800">
          <input
            type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Nouvelle tâche"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
          />

          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs dark:text-gray-200">
            Nouvelle tâche
          </span>
        </label>
        <button onClick={handleAddTodo} className="flex-shrink-0 bg-transparent custom-button">Ajouter</button>
      </div>

      {todos.length !== 0 ? (
        <ul className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700 px-10">
          {todos.map((todo, id) => (
            <li key={id} className="flex items-center space-x-3 py-2">
              <input type="checkbox" checked={todo.checked} onChange={() => handleToggleTodo(id)} className="h-10" />
              <span className={`flex-1 text-gray-700 dark:text-gray-200 ${todo.checked ? 'checked-task' : ''}`}>{todo.text}</span>
              <button onClick={() => handleDeleteTodo(todo.id)} className="flex-shrink-0 bg-transparent custom-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

      ) : (
        <p className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700">Chill, vous n'avez aucune tâche !</p>
      )}
    </div>
  )
};