import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Greeting from './Greeting'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Greeting/>} /> 
        </Routes> 
      </BrowserRouter>
    </Provider>
  )
}
