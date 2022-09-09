import { createStore, combineReducers } from 'redux'

import { tasksReducer } from './reducers/tasks'
import { filterReducer } from './reducers/filter'

const rootReducers = combineReducers({

  tasks: tasksReducer,
  filter: filterReducer

})


const store = createStore(rootReducers)


export default store;