
import React from 'react'
import Careerhome from "../../assets/career/careerhome.svg"
import { Box, Link, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

const WeHiring = () => {
    return (
      
        <Box maxWidth="1920px" margin={"auto"} display="flex" alignItems="center" justifyContent="center">
    <Box className="we-man" width={{ xs: '100%', sm: '90%', md: '88%' }} display="flex" alignItems="center" justifyContent="space-between" flexDirection={{ xs: 'column', sm: 'row' }} paddingY={5}>
        <Box width={{ xs: '100%', sm: '55%', md: '45%' }} marginBottom={{ xs: 4, sm: 0 }}>
            <img className='we-img' src={Careerhome} alt="" height="100%" width="100%" />
        </Box>
        <Box paddingX={2} width={{ xs: '100%', sm: '80%', md: '45%', lg: '47%' }}>
            <Typography variant="h3" fontSize={{ xs: 30, sm: 40 }} fontWeight={600} color="#053480" marginBottom={2} textAlign={{ xs: 'center', sm: 'left' }}>
                We Are Hiring!
            </Typography>
            <Typography marginY={2}  fontSize={{ xs: 15, sm: 22 , md:20 }} textAlign={{ xs: 'center', sm: 'left' }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
            <Link sx={{ textDecoration: "none", fontSize: { xs: 18, sm: 23 }, display: 'block', marginTop: 2 }} href="mailto:career@sohamwebsolution.com">
                career@sohamwebsolution.com
            </Link>
        </Box>
    </Box>
</Box>

    )
}

export default WeHiring
