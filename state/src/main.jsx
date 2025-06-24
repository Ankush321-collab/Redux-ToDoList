import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoreducer from './redux/reducer.jsx'
import rtk from './redux-toolkit/TodoSlice.jsx'
import { configureStore } from '@reduxjs/toolkit'


const storeRTK=configureStore({
  reducer:{
    todo:rtk,
  }
})



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={storeRTK}>
    <App />
    </Provider>
  </StrictMode>,
)
