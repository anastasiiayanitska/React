import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';


export default function App() {


  return(
    <div>
      <ThemeProvider theme={light}>
        <Button variant="text">Clik</Button>
      </ThemeProvider>
    </div>
  )
 
}


