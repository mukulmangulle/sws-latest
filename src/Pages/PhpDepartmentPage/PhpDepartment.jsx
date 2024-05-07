import { Box, Typography } from '@mui/material'
import React from 'react'
import PhpdepartmentContent1 from './PhpdepartmentContent1'
import Phpdepartmentform from './Phpdepartmentform'
import Phpsectiondepartment2 from './Phpsectiondepartment2'


const PhpDepartment = () => {
    return (
        <>
            <Box>
                <Box id="about-background" >
                    <Typography id='Heading-h2' variant='h2' paddingY={7} >Php Department</Typography>
                </Box>
            </Box>


            <PhpdepartmentContent1 />
            <Phpsectiondepartment2 />
            <Phpdepartmentform />
        </>
    )
}

export default PhpDepartment
