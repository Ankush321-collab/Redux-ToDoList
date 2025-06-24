import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updatetodoss } from '../redux-toolkit/TodoSlice';

const ShowTodoRedux = () => {
  const todos = useSelector((state) => state.todo.todo) || [];
  const filteredtodo = Array.isArray(todos) ? todos.filter((t) => t.title) : [];
  const dispatch = useDispatch();

  const handlecomplete = (id) => {
    const updatetodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(updatetodoss(updatetodos));
  };

  return (
    <div className='flex flex-col justify-center items-center max-w-4xl mt-3'>
      <p className='text-xl text-shadow-black font-bold'>All Todos</p>
      {filteredtodo.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-2 my-2 rounded border-gray-200 bg-gray-200"
        >
          <span className="text-gray-700 w-md">
            {item.completed ? <strike>{item.title}</strike> : item.title}
          </span>
          <button
            className={
              item.completed
                ? "bg-green-200 text-green-800 px-3 py-1 rounded"
                : "bg-green-100 text-green-700 px-3 py-1 rounded"
            }
            onClick={() => handlecomplete(item.id)}
          >
            {item.completed ? "undo" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowTodoRedux;