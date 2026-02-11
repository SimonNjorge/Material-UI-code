import { Rating, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";

//when you encounter a case where you need to use
//ratings you can refer to the documentation for customisation reference

const labels = {
    0.5: 'useless',
    1: 'useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excelllent+'
}

function getLabelTxt (value){
    return `${value} star${value == 1 ? ''  : 's'} ${labels[value]}`
}

const RatingComp = () => {
    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);

  return (
    <Stack direction={'row'} spacing={2}>
        <Rating value={3.5} precision={0.5}/>
        <Rating defaultValue={3.5} precision={0.5} readOnly/>
        <Box display={'flex'}>
            {/*when you are hovering on the rating, the onchangeactive will fire and set the hover value to the currently hovered rating*/}
            <Rating
                value={value}
                precision={0.5}
                getLabelText={()=>getLabelTxt(value)}
                onChange={(event, newValue) => setValue(newValue)}
                onChangeActive={(event, newHover) => setHover(newHover)}
            />
            {value !== null && (
                <Typography>{labels[hover !== -1 ? hover : value]}</Typography>
            )}
        </Box>
    </Stack>
    
  )
}

export default RatingComp