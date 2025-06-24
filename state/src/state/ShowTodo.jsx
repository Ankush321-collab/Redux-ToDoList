import React from 'react';

const ShowTodo = ({ todo, settodo }) => {
  const realtodo = todo.filter((todos) => todos.title);

  const filteredtodo=todos.filter((t)=>t.title);

  return (
    <div className='flex flex-col justify-center items-center max-w-4xl mt-3'>
      <p className='text-xl text-shadow-black font-bold'>All Todos</p>

      {realtodo.map((item, index) => (
        <div key={item.id} className='flex items-center gap-2 my-2'>
          <input
            type='checkbox'
            className='size-4 text-indigo-600'
            onChange={(e) =>
              settodo((prevtodo) =>
                prevtodo.map((t) =>
                  t.id === item.id ? { ...t, completed: e.target.checked } : t
                )
              )
            }
            checked={item.completed}
          />
          <p className='text-red-500'>
            {item.completed ? <strike>{item.title}</strike> : item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowTodo;
