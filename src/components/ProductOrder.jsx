import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@material-ui/core/styles";

import CheckboxesGroup from './CheckBoxes';
import Counter from './Counter';

function ProductOrder() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff1c3"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff1c3"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#fff1c3"
      },
      "& .MuiOutlinedInput-input": {
        color: "#fff1c3"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#fff1c3"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#fff1c3"
      },
      "& .MuiInputLabel-outlined": {
        color: "#fff1c3"
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#fff1c3"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#fff1c3"
      },
       "& .MuiInputBase-colorPrimary":{
        color: "#fff1c3"
      },
    }
  });
  
  const classes = useStyles();

  return (
    <>
      <CheckboxesGroup />
      <Counter />
      <TextField
        id="outlined-multiline-flexible"
        className={classes.root}
        variant="outlined"
        margin="normal"
        label="Observações"
        multiline
        fullWidth
        maxRows={5}
        value={value}
        onChange={handleChange}
        placeholder="Quer nos enviar uma mensagem?"
      />
    </>
  )
}

export default ProductOrder;