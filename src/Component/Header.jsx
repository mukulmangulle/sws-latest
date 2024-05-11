import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Call from "../assets/call1.svg"
import Whatsapp from "../assets/whatsapp1.svg"
import Email from "../assets/email1.svg"
import Month from "../assets/Month1.svg"

const Header = () => {
    return (
        <Box sx={{ maxWidth: 1920, margin: 'auto' }} className='header'>
            <AppBar position="static">
                <Box className="flex-center">
                    <Box width={"85%"} >
                        <Box id="header" className="flex-between">

                            <Box className="flex-center" >
                                <Box className="flex-center">
                                    <img src={Call} alt="" />
                                    <Typography color={'#FFFFFF'} fontSize={14} marginLeft={1} className='Typography1'>+91 9009758263</Typography>
                                </Box>
                                <Box margin={2}>|</Box>
                                <Box className="flex-center" >
                                    <img src={Email} alt="" />
                                    <Typography color={'#FFFFFF'} fontSize={14} marginLeft={1}>sohamwebsolution@gmail.com</Typography>
                                </Box>
                                <Box margin={2}>|</Box>
                                <Box className="flex-center">
                                    <img src={Whatsapp} alt="" />
                                    <Typography color={'#FFFFFF'} fontSize={14} marginLeft={1}>Whatsapp</Typography>
                                </Box>
                            </Box>

                            <Box className="flex-between">
                                <Typography fontSize={14} marginRight={1.5} color={'#FFFFFF'}>Hire us on work</Typography>
                                <img src={Month} alt="" />
                                <Typography marginLeft={0.8} fontSize={14} color={'#FFFFFF'}> Schedule Meeting</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}

export default Header;
