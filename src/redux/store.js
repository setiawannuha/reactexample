import { createStore, applyMiddleware } from 'redux'
import root from './reducers/root'
import reduxLogger from 'redux-logger'
import reduxPromiseMiddleware from 'redux-promise-middleware'

const middleware = applyMiddleware(
  reduxPromiseMiddleware,
  reduxLogger
)

const store = createStore(
  root, middleware
)

export default store