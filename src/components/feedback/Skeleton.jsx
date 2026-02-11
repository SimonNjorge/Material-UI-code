import React, { useState } from 'react'
import { Skeleton, Stack, Box } from '@mui/material'
import pre from '../../assets/images/pre.png'
import prescr from '../../assets/images/precripto-admin.png'
import pres from '../../assets/images/prescripto.png'

//you can import a color object and use the variants using color.[number]
//import { grey } from '@mui/material/colors'

/*Displays a placeholder preview before actual data is loaded
to help reduce load time frustration.
Variants include: text, rectangular, circular and rounded
*/

const SkeletonComp = () => {
    const [loading, setLoading] = useState(true)
    const load = () => {
        setTimeout(()=>{
            setLoading(false)
        }, 5000)
    }
    load()
  return (
    <Stack gap={2}>
        {
            loading ?
            <>
                <Skeleton sx={{bgcolor: 'grey.900'}} variant="rounded" width={210} height={60}/>
                <Skeleton sx={{bgcolor: 'grey.900'}} variant="rectangular" width={210} height={60}/>
                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                    <Skeleton sx={{bgcolor: 'grey.900'}} variant="circular" width={40} height={40}/>
                    <Skeleton variant="text" sx={{fontSize: '3rem', width: 170, bgcolor: 'grey.900'}}/>
                </Box>
            </>
            : <>
                <img src={pre} sx={{bgcolor: 'grey.900'}}  width={210} height={60}/>
                <img src={pres} sx={{bgcolor: 'grey.900'}}  width={210} height={60}/>
                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                    <img src={prescr} sx={{bgcolor: 'grey.900'}} variant="circular" width={40} height={40}/>
                    <p>Loading implementation</p>
                </Box>
            </>
        }
        <Skeleton sx={{bgcolor: 'grey.900'}} variant="rounded" width={210} height={60}/>
    </Stack>
  )
}

export default SkeletonComp