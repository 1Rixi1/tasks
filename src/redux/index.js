import { createStore } from 'redux'


const reducer = (state, action) => {

  if (action.type === 'ADD_TASK') {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: state.length + 1,
          text: action.payload.text,
          completed: action.payload.completed
        }
      ]
    }
  }

  if (action.type === 'REMOVE_TASK') {
    return {
      ...state,
      tasks: state.tasks.filter(obj => obj.id !== action.payload)
    }
  }

  if (action.type === 'ALL_REMOVE') {
    return {
      ...state,
      tasks: []
    }
  }

  if (action.type === 'TOGGLE_COMPLETED') {
    return {
      ...state,
      tasks: state.tasks.map(obj => {
        if (obj.id === action.payload) {

          return {
            ...obj,
            completed: !obj.completed
          }

        }
        return obj
      })
    }
  }

  if (action.type === 'ALL_COMPLETED') {
    return {
      ...state,
      tasks: state.tasks.map(obj => {
        return {
          ...obj,
          completed: true
        }
      })
    }
  }

  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      filterBy: action.payload
    }
  }

  return state

}

const store = createStore(reducer, {
  filterBy: 'all',
  tasks: [
    {
      id: 1,
      text: 'Hello1',
      completed: false
    },
  ]
}
)


export default store;