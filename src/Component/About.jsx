
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import Ab0 from "../assets/About/devendra.svg"
import Ab1 from "../assets/About/ab1.svg"
import Ab2 from "../assets/About/ab2.svg"
import Ab3 from "../assets/About/ab3.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';

function OurCustomer() {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);



    return (
        <Box paddingBottom={5} paddingTop={5} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={'column'}>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} textAlign={'center'}>
                <Typography id='Heading-h2' variant='h2' >
                    {contents.aboutus.heading}
                </Typography>
                <Typography width={'67%'} paddingTop={4} paddingBottom={8}>
                    {contents.aboutus.contant}
                </Typography>
            </Box>

            <Box height={'450px'} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                <Box id="dev" borderRadius={50} width={350} height={350} bgcolor={"#053480"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} >

                </Box>

                <Box id="dev" display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} >

                    {/* 1 */}
                    <Box id="blank1" textAlign={"center"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <img src={Ab0} alt="" />
                        <Box>
                            <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer1.name}</Typography>
                            <Typography color={'white'}>
                                {contents.aboutus.childContainer1.designation}</Typography>
                        </Box>
                        <Box margin={1} fontSize={12} width={220} >
                            {contents.aboutus.childContainer1.testimonial}
                        </Box>
                    </Box>

                    {/* 2 */}
                    <Box id="blank" textAlign={"center"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <Box>
                            <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer2.name}
                            </Typography>
                            <Typography color={'white'}>         {contents.aboutus.childContainer2.designation}</Typography>
                        </Box>
                        <Box margin={1} fontSize={12} width={220}>
                            {contents.aboutus.childContainer2.testimonial}
                        </Box>
                        <img src={Ab1} alt="" />
                    </Box>

                    {/* 3*/}
                    <Box textAlign={"center"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <img src={Ab3} alt="" />
                        <Box>
                            <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer3.name}</Typography>
                            <Typography color={'white'}>         {contents.aboutus.childContainer3.designation}</Typography>
                        </Box>
                        <Box fontSize={12} margin={1} width={220}>
                            {contents.aboutus.childContainer3.testimonial}
                        </Box>
                    </Box>

                    {/* 4 */}
                    <Box id="blank" textAlign={"center"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <Box>
                            <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer4.name}</Typography>
                            <Typography color={'white'}>         {contents.aboutus.childContainer4.designation}</Typography>
                        </Box>
                        <Box fontSize={12} margin={1} width={220}>
                            {contents.aboutus.childContainer4.testimonial}
                        </Box>
                        <img src={Ab3} alt="" />
                    </Box>

                    {/* 5 */}
                    <Box id="blank1" textAlign={"center"} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                        <img src={Ab2} alt="" />
                        <Box>
                            <Typography fontSize={18} fontWeight={700} color={'white'}>{contents.aboutus.childContainer5.name}</Typography>
                            <Typography color={'white'}>         {contents.aboutus.childContainer5.designation}</Typography>
                        </Box>
                        <Box fontSize={12} margin={1} width={220}>
                            {contents.aboutus.childContainer5.testimonial}
                        </Box>

                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default OurCustomer;






























