import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
)

export default store
