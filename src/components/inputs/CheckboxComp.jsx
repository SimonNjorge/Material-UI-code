//import React, { useState } from 'react'
import { CheckBox } from '@mui/icons-material'
import { FormControlLabel, FormGroup, Stack } from '@mui/material'

/*
You can use checkbox normally or wrapp them inside the FormGroup wrapper
by wrapping checkboxes in a formcontrollabel you can add more accessibility by adding things like labels
*/

const CheckboxComp = () => {

    //const [checked, setChecked] = useState(false);

  return (
    <>
      <FormGroup>
          <FormControlLabel control={<CheckBox defaultChecked/>} label="Label"/>
          <FormControlLabel control={<CheckBox defaultChecked/>} required label="required" />
      </FormGroup>
    </>
  )
}

export default CheckboxComp