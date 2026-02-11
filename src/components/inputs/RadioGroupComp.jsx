import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box } from "@mui/material";
import { useEffect, useState } from "react";

const RadioGroupComp = () => {

    const [value, setValue] = useState('female');
    const [selected, setSelected] = useState('a')

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    useEffect(()=>{
        console.log(value)
    },[value])

  return (
    <>
        <FormControl>
            <FormLabel id="demo-radio-btns">
                Gender
            </FormLabel>
            <RadioGroup aria-labelledby="demo-radio-btns" value={value} onChange={(e) => setValue(e.target.value)} name="radio-btns-group" row color="secondary">
                <FormControlLabel labelPlacement="left" value="male" control={<Radio />} label="Male" color="secondary"/>
                <FormControlLabel value="female" control={<Radio />} label="Female"/>
                <FormControlLabel value="other" control={<Radio />} label="Other"/>
            </RadioGroup>
        </FormControl>
        <Box>
            <FormLabel id="opt-1">opt 1</FormLabel>
            <Radio value={'a'} 
                checked={selected == 'a'}
                onChange={handleChange}
                name="radio-btns"
                aria-labelledby="opt-1"
            />
            <FormLabel id="opt-2">opt 2</FormLabel>
            <Radio value={'b'} 
                checked={selected == 'b'}
                onChange={handleChange}
                name="radio-btns"
                aria-labelledby="opt-2"
            />
        </Box>
    </>
  )
}

export default RadioGroupComp