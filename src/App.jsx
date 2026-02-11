//import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AutocompleteComp from './components/inputs/AutocompleteComp';
import ButtonComp from './components/inputs/ButtonComp';
import CheckboxComp from './components/inputs/CheckboxComp';
import RadioGroupComp from './components/inputs/RadioGroupComp';
import RatingComp from './components/inputs/Rating';
import SelectComp from './components/inputs/Select';
import SkeletonComp from './components/feedback/Skeleton';
import { createTheme, ThemeProvider } from '@mui/material';
import SliderComp from './components/inputs/SliderComp';
//import ThemeProvider from '@mui/material/styles/ThemeProvider'

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps : {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: '1rem',
        }
      }
    }
  },

  palette: {
    primary: {
      main : '#17c8dfff'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AutocompleteComp/>
      <ButtonComp/>
      <CheckboxComp/>
      <RadioGroupComp/>
      <RatingComp/>
      <SelectComp/>
      <SkeletonComp/>
      <SliderComp/>
    </ThemeProvider>
  )
}

export default App