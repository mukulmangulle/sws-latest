
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'

const PhpdepartmentContent1 = () => {
    return (
        <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box width={"85%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box className="man-reverce1" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}  >
                    <Box width={500} className="devlopment-text" >
                        <Typography variant='h4' id="typo-fray-hrading" >PHP Development</Typography>
                        <Typography id="Typo-gray-start">PHP development services focus on implementing secure
                            and powerful server-sides web applications. Our company
                            deliver robust CMSs, and web-based solutions, we manage
                            complex databases</Typography>
                        <BlogButton onClick={() => { alert("button click new") }} />                  
                          </Box>
                    <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                        <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                            <img src={Php} alt="" height={300} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PhpdepartmentContent1
