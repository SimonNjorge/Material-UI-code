import { Box, Select, InputLabel, MenuItem, FormControl } from "@mui/material"
import { useState } from "react"

const SelectComp = () => {
    const [age, setAge] = useState([])
    const handleChange = (e) => {
        setAge(prev => [...prev, e.target.value])
        console.log(age)
    }
  return (
    <Box>
        <FormControl fullWidth sx={{margin: '6 0'}}>
            <InputLabel id="select">Age</InputLabel>
            <Select labelId="select" value={[...age]} label="Age" error multiple onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectComp