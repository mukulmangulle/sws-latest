import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import Careertoggle1 from './CareerTogglepage/Careertoggle1'
import Careertoggle2 from './CareerTogglepage/Careertoggle2'
import Careertoggle3 from './CareerTogglepage/Careertoggle3'
import Careertoggle4 from './CareerTogglepage/Careertoggle4'
import Careertoggle5 from './CareerTogglepage/Careertoggle5'


const CareerOpeningTeam = () => {
    return (
        <>
      
           <Box maxWidth={"1920px"} margin={"auto"} bgcolor={"#E6EBF3"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                <Typography id='Heading-h2' variant='h2' marginY={5}   >Current opnings in Team</Typography>


                <Box    marginBottom={5}  width={"85%"} >
                    
                <Careertoggle1 />
                <Careertoggle2/>
                <Careertoggle3/>
                <Careertoggle4/>
                <Careertoggle5/>
                </Box>
            </Box>
          
        </>
    )
}

export default CareerOpeningTeam
