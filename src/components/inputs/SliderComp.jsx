import  Box  from "@mui/material/Box"
import  Stack  from "@mui/material/Stack"
import  Slider  from "@mui/material/Slider"
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { useState, useEffect } from "react";

/*
    sliders allow users to make selections 
    from a range of values sliders are effective in adjusting settings l
    like brightness volume or applying image filters
*/

const SliderComp = () => {
    const [value, setValue] = useState(30);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    useEffect(()=>{
        console.log(value)
    }, [value])

  return (
    <Box sx={{width: 200}}>
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <VolumeDown color='primary'/>
            <Slider aria-label="active slider" value={value} onChange={handleChange} valueLabelDisplay="auto"/>
            <VolumeUp/>
        </Stack>
        <Slider disabled value={30} aria-label="disabled"/>
    </Box>
  )
}

export default SliderComp;