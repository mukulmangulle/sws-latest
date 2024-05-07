import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Call from "../assets/call1.svg"
import Whatsapp from "../assets/whatsapp1.svg"
import Email from "../assets/email1.svg"
import Month from "../assets/Month1.svg"

const Header = () => {
    return (

        <Box className='header' display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <AppBar position="static" >

                <Box display={'flex'} alignItems={'center'} justifyContent={'center'}  >
                    <Box width={"85.5%"}>

                        <Box id="header" display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                            <Box display={'flex'} alignItems={'center'}>
                                <Box display={'flex'} alignItems={'center'} >
                                    <img src={Call} alt="" height={14} />
                                    <Typography color={'#FFFFFF'} fontSize={11} marginLeft={1} className='Typography1' >+91 9009758263</Typography>
                                </Box>
                                <Box margin={2}>
                                    |
                                </Box>
                                <Box display={'flex'} alignItems={'center'} >
                                    <img src={Email} alt="" height={13} />
                                    <Typography color={'#FFFFFF'} fontSize={11} marginLeft={1}>sohamwebsolution@gmail.com</Typography>
                                </Box>

                                <Box margin={2}>
                                    |
                                </Box>

                                <Box display={'flex'} alignItems={'center'} >
                                    <img src={Whatsapp} alt="" height={13} />
                                    <Typography color={'#FFFFFF'} fontSize={11} marginLeft={1}>Whatsapp</Typography>
                                </Box>

                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between' >

                                <Typography fontSize={11} marginRight={1.5} color={'#FFFFFF'} >Hire us on work</Typography>

                                <img src={Month} alt="" height={14} />

                                <Typography marginLeft={0.8} fontSize={11} color={'#FFFFFF'}> Schedule Meeting</Typography>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Header
