import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './CheckBoxes.css'

export default function CheckboxesGroup() {
  const [state, setState] = useState({
    ReactJS: true,
    Vue: false,
    Angular: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { ReactJS, Vue, Angular } = state;

  return (
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <label className="check-box-label">Escolha os adesivos:</label>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
                size="small" 
                checked={ReactJS} 
                onChange={handleChange} 
                name="ReactJS" 
                color="default"
                className="box"
              />
            }
            label="ReactJS"
          />
          <FormControlLabel
            control={
              <Checkbox 
                size="small" 
                checked={Vue} 
                onChange={handleChange} 
                name="Vue" 
                color="default"
                className="box"
              />
            }
            label="Vue"
          />
          <FormControlLabel
            control={
              <Checkbox 
                size="small" 
                checked={Angular} 
                onChange={handleChange} 
                name="Angular" 
                color="default"
                className="box"
              />
            }
            label="Angular"
          />
        </FormGroup>
      </FormControl>
  );
}
