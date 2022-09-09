const initialState = [

  {
    id: 1,
    text: 'Hello1',
    completed: false
  },

]


export const tasksReducer = (state = initialState, action) => {


  switch (action.type) {

    case 'ADD_TASK':
      return [
        ...state,

        {
          id: state.length + 1,
          text: action.payload.text,
          completed: action.payload.completed
        }

      ]

    case 'REMOVE_TASK':
      return state.filter(obj => obj.id !== action.payload)


    case 'ALL_REMOVE':
      return []

    case 'TOGGLE_COMPLETED':
      return state.map(obj => {
        if (obj.id === action.payload) {

          return {
            ...obj,
            completed: !obj.completed
          }

        }
        return obj
      })


    case 'ALL_COMPLETED':
      return state.map(obj => {
        return {
          ...obj,
          completed: true
        }
      })


    default:
      return state
  }

}