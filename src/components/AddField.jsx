import React from 'react'

import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({ addTask }) => {

  const [value, setValue] = React.useState('')

  const [isCompleted, setIsCompleted] = React.useState(false)


  const handleClickBtn = () => {
    addTask(value, isCompleted)

    setValue('')
    setIsCompleted(false)
  }

  return (
    <div className="field">
      <Checkbox
        checked={isCompleted}
        onChange={e => setIsCompleted(e.target.checked)}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField value={value} onChange={e => setValue(e.target.value)} placeholder="Введите текст задачи..." variant="standard" fullWidth />
      <Button onClick={handleClickBtn}>
        <AddIcon />
      </Button>
    </div>
  );
};
