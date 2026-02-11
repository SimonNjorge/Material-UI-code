//import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

//The autocomplete is a normal text input enhanced
//by a panel of suggested options

const AutocompleteComp = () => {

  const films = [
    {
      label: "Master mind",
      year: 2000
    }, {
      label: "Mistress",
      year: 2004
    },{
      label: "Meg",
      year: 2004
    },{
      label: "Kin in Paris",
      year: 2004
    }
  ]

  //const films2 = ['mistress', 'Long wait', 'ko 101']
 
  const timeSlots = ["1:00", "2:00", "3:00", "4:00"]

  /*
    Possible attributes to customise the Autocomplete
    component:
    disableCloseOnSelect,
    openOnFocus,
    disabled, 
    readOnly,
    blurOnselect, 
    clearOnBlur,
    disablePortal
  */

  return (
    <>
      <Autocomplete
        freeSolo
        options={films}
        renderInput={(params) => <TextField {...params} label="Movie"/>}
      />
      <Autocomplete
        sx={{marginTop: 1}}
        freeSolo
        options={timeSlots}
        getOptionDisabled={(Option) => 
          Option === timeSlots[1]
        }
        renderInput={(params) => <TextField {...params} label="Time Slots"/>}
      />
    </>
  )
}

export default AutocompleteComp