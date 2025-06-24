import React from 'react'

import { AddToDoRedux } from './AddToDoRedux'
import ShowTodoRedux from './ShowTodoRedux'


const ToDoListReducer = () => {
  return (
    <div>
    <section className='flex justify-center items-center flex-col h-full w-full bg-red-400'>
     <h1 className='text-3xl font-semibold flex'>To Do List with Redux</h1>
     <p className='flex'>
      this todo  WILL HELP YOU MANAGE YOUR DAILY TASKS
     </p>
     <AddToDoRedux/>
    
    </section>
     <ShowTodoRedux />
     </div>
  )
}

export default ToDoListReducer