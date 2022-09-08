import React from 'react'

import { Tabs, Tab } from '@mui/material';


import { useDispatch, useSelector } from 'react-redux'

export const Filter = () => {

  const dispatch = useDispatch()

  const filterBy = useSelector(state => state.filterBy)

  const handleClickTab = (_, i) => {
    const status = filterIndex[i]

    dispatch({
      type: 'SET_FILTER',
      payload: status
    })
  }

  const filterIndex = ['all', 'active', 'completed']

  return (
    <Tabs onChange={handleClickTab} value={filterIndex.findIndex(i => i === filterBy)}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершённые" />
    </Tabs>
  )
}
