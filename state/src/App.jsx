import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ToDoList from './state/ToDoList'

function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {
      path:'/',
      element:<>Homepage</>
    },
    {
      path:"/todo",
      element:<ToDoList/>

    }

  ])

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
