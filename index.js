import React from 'react'
import { render as RenderDom } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'


import reducer from './controllers/reducer'
import App from './components/app'

const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger))

document.addEventListener('DOMContentLoaded', () => {
  RenderDom(
  	<Provider store={store}>
	  	<App />
	  </Provider>,
    document.querySelector('main')
  )
})
