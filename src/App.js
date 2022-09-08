import React from 'react'

import { Paper, Divider, Button, List } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';


import { useDispatch, useSelector } from 'react-redux'
import { Filter } from './components/Filter';


function App() {

  const dispatch = useDispatch()

  const state = useSelector(state => state)


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





  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField addTask={handleClickTask} />
        <Divider />

        <Filter />

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
