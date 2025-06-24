import React, { useState } from 'react'
import AddToDo from './AddToDo'
import ShowTodo from './ShowTodo'

const ToDoList = () => {
    const [todo,settodo]=useState([
        {id:0,title:null,completed:false},
    ])
  return (
    <div>
    <section className='flex justify-center items-center flex-col h-full w-full bg-red-400'>
     <h1 className='text-3xl font-semibold flex'>To Do List</h1>
     <p className='flex'>
      this todo  WILL HELP YOU MANAGE YOUR DAILY TASKS
     </p>
     <AddToDo todo={todo} settodo={settodo}/>
    
    </section>
     <ShowTodo todo={todo} settodo={settodo}/>
     </div>
 
        
  )
}

export default ToDoList