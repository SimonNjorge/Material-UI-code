import React from 'react'
import IconButton from '@mui/material/IconButton'
//import  { Delete, CartBadge } from '@mui/material/IconButton'
import { Fingerprint } from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CloudUpload, Favorite, Add, Edit, Navigation } from '@mui/icons-material'
/*check how to import a visually hidden input, used together with Button to create a cool fileupload area*/
//import VisuallyHiddenInput from '@mui/material/VisuallyHiddenInput'
import  { Tooltip, Button, Typography, ButtonGroup, Fab, Stack } from '@mui/material'
import { useState } from 'react'

const ButtonComp = () => {

    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);

  return (
    <>
      <IconButton aria-label='fingerprint' >
        <Fingerprint />
      </IconButton>
      <Tooltip title="click to see loading"  sx={{fontSize: '40px'}}>
        <IconButton aria-label=""  onClick={() => setLoading(true)} loading={loading} >
          <ShoppingCartIcon/>
        </IconButton>
      </Tooltip>
      <Button
        component="label"
        startIcon={<CloudUpload/>}
        variant="contained"
      >
        Upload Files
      </Button>
      <Button loading={loading} onClick={() => setLoading(true)}>
        <Typography>Loading</Typography>
      </Button>
      {/*props: size color orientation*/}
      <ButtonGroup variant='contained' size='small' orientation='vertical'>
        <Button>ONE</Button>
        <Button>TWO</Button>
        <Button>THREE</Button>
      </ButtonGroup>
      {/*
      A floating button is used mostly to show the most
       common action on a screen*. Displayed above all content*/}
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Fab  variant='extended' sx={{width: 150}}>
          <Add/> Edit
        </Fab>
        <Fab variant='extended' sx={{width: 150, marginY: 4}} >
          <Navigation/>
          Navigate
        </Fab>
        <Tooltip title={`${liked ? "unlike" : "Like"}`}>
          <Fab sx={{backgroundColor: "primary"}}>
            <Favorite sx={{color: `${liked ? 'red' : 'primary'}`}} onClick={()=>setLiked(prev => !prev)}/>
          </Fab>
        </Tooltip>
      </Stack>
    </>
  )
}

export default ButtonComp