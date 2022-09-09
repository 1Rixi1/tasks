import React from 'react'

import { Paper, Divider, Button, List } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';


import { useDispatch, useSelector } from 'react-redux'
import { Filter } from './components/Filter';

import { addTask, removeTask, allRemove, toggleCompleted, allComplited } from './redux/actions/tasks'

function App() {

  const dispatch = useDispatch()

  const state = useSelector(state => state)


  const handleClickTask = (text, completed) => {
    dispatch(addTask(text, completed))
  }

  const handleRemoveTask = (id) => {
    if (window.confirm(`Вы хотите удалить таску ${id} ?`)) {

      dispatch(removeTask(id))

    }
  }

  const handleAllRemove = () => {
    dispatch(allRemove())
  }

  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id))
  }

  const handleAllCompleted = () => {
    dispatch(allComplited())
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

              if (state.filter.filterBy === 'all') {
                return true
              }

              if (state.filter.filterBy === 'active') {
                return !obj.completed
              }

              if (state.filter.filterBy === 'completed') {
                return obj.completed
              }



            }).map(obj => <Item
              key={obj.id}
              text={obj.text}
              completed={obj.completed}
              removeTask={() => handleRemoveTask(obj.id)}
              toggleCompleted={() => handleToggleCompleted(obj.id)}
            />
            )
          }


        </List>
        <Divider />
        <div className="check-buttons">
          <Button onClick={handleAllCompleted}>Отметить всё</Button>
          <Button onClick={handleAllRemove}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
