export const addTask = (text, completed) => {
  return {
    type: 'ADD_TASK',
    payload: {
      text,
      completed
    }
  }
}

export const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    payload: id
  }
}

export const allRemove = () => {
  return {
    type: 'ALL_REMOVE'
  }
}

export const toggleCompleted = (id) => {
  return {
    type: 'TOGGLE_COMPLETED',
    payload: id
  }
}

export const allComplited = () => {
  return {
    type: 'ALL_COMPLETED'
  }
}