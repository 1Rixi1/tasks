import React from 'react'

import { Tabs, Tab } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import { sortArr } from '../redux/actions/filter'


const sort = {
  'all': 0,
  'active': 1,
  'completed': 2,
}



export const Filter = () => {

  const dispatch = useDispatch()

  const filterBy = useSelector(store => store.filter.filterBy)



  const handleClickSort = (index) => {

    const status = Object.keys(sort)[index]

    dispatch(sortArr(status))

  }


  return (
    <Tabs onChange={(_, index) => handleClickSort(index)} value={sort[filterBy]}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершённые" />
    </Tabs>
  )
}
