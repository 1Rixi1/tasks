import React from 'react'

import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';


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

}


function App() {


  const [state, dispatch] = React.useReducer(reducer,

    {
      filterBy: 'all',
      tasks: [
        {
          id: 1,
          text: 'Hello1',
          completed: false
        },
        {
          id: 2,
          text: 'World2',
          completed: true
        },
        {
          id: 3,
          text: 'World3',
          completed: false
        },
        {
          id: 4,
          text: 'World4',
          completed: true
        },
      ]
    }

  )


  const handleClickTask = (text, completed) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        text,
        completed
      }
    })
  }


  const removeTask = (id) => {
    if (window.confirm(`Вы хотите удалить таску ${id} ?`)) {

      dispatch({
        type: 'REMOVE_TASK',
        payload: id
      })

    }
  }

  const allRemove = () => {
    dispatch({
      type: 'ALL_REMOVE'
    })
  }


  const toggleCompleted = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id
    })
  }

  const allCompleted = () => {
    dispatch({
      type: 'ALL_COMPLETED'
    })
  }

  const filterIndex = ['all', 'active', 'completed']

  const handleClickTab = (_, i) => {
    const status = filterIndex[i]

    dispatch({
      type: 'SET_FILTER',
      payload: status
    })
  }


  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={handleClickTask} />
        <Divider />
        <Tabs onChange={handleClickTab} value={filterIndex.findIndex(i => i === state.filterBy)}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>

          {
            state.tasks.filter(obj => {

              if (state.filterBy === 'all') {
                return true
              }

              if (state.filterBy === 'active') {
                return !obj.completed
              }

              if (state.filterBy === 'completed') {
                return obj.completed
              }



            }).map(obj => <Item
              key={obj.id}
              text={obj.text}
              completed={obj.completed}
              removeTask={() => removeTask(obj.id)}
              toggleCompleted={() => toggleCompleted(obj.id)}
            />
            )
          }


        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={allCompleted}>Отметить всё</Button>
          <Button onClick={allRemove}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
