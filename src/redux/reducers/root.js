import { combineReducers } from 'redux'
import count from './count'
import users from './users'

const root = combineReducers({
  countReducer: count,
  users
})

export default root