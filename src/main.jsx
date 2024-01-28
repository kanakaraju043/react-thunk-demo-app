import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import galleryReducer from './gallerySlice.js'

const store = configureStore({
  reducer: {
    gallery: galleryReducer 
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={store}>

  <App />
  </Provider>
)
