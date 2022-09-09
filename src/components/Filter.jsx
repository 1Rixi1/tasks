import React from 'react'

import { Tabs, Tab } from '@mui/material';


import { useDispatch, useSelector } from 'react-redux'

import { clickTab } from '../redux/actions/filter'

export const Filter = () => {

  const dispatch = useDispatch()

  const filterBy = useSelector(state => state.filter.filterBy)

  const filterIndex = ['all', 'active', 'completed']

  const handleClickTab = (_, i) => {
    const status = filterIndex[i]

    dispatch(clickTab(status))
  }


  return (
    <Tabs onChange={handleClickTab} value={filterIndex.findIndex(i => i === filterBy)}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершённые" />
    </Tabs>
  )
}
