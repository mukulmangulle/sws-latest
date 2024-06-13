
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Php from "../../assets/Service/php.svg"
import BlogButton from '../../Child-Component/ServiceButton'
import Service from './Service'
import Form  from "./Form"

const Ecommerce = () => {
    return (
        <>
            <Box className="padding-top-bottom" maxWidth={"1920px"} margin={'auto'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box width={"84%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap"  >
                        <Box width={617} id="devlopment-text">
                            <Typography variant='h4' id="typo-fray-hrading" >Ecommerce Development</Typography>
                            <Typography id="Typo-gray-start">PHP development services focus on implementing secure
                                and powerful server-sides web applications. Our company
                                deliver robust CMSs, and web-based solutions, we manage
                                complex databases</Typography>
                            <BlogButton onClick={() => { alert("button click new") }} />
                        </Box>
                        <Box className="img-container" display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Php} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            
            <Service />
            <Form />

        </>
    )
}

export default Ecommerce