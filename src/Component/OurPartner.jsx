import React, { useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import Parent1 from "../assets/parent/Parent1.svg";
import Parent2 from "../assets/parent/Parent2.svg";
import Parent3 from "../assets/parent/parent3.svg";
import Parent4 from "../assets/parent/Parent4.svg";
import Parent5 from "../assets/parent/parent5.svg";
import Parent6 from "../assets/parent/parent6.svg";
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';

function Partner() {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
            <Box sx={{ maxWidth: 1920, margin: 'auto' }} >
                <Box className="flex-center" flexDirection={'column'} flexWrap={'nowrap'}  >
                    <Typography id='Heading-h2' variant='h2' paddingTop={5} >
                        {contents.ourPartner.heading}
                    </Typography>
                </Box>
                <Box className="flex-center" paddingBottom={25} >
                    <Box marginTop={2} width={"82%"} className="flex-center" flexDirection={'coulmn'} flexWrap={'wrap'}>
                        <img id='size-img' src={Parent1} alt="Parent 1" />

                        <img id='size-img' src={Parent2} alt="Parent 2" />

                        <img id='size-img' src={Parent3} alt="Parent 3" />

                        <img id='size-img' src={Parent4} alt="Parent 4" />

                        <img id='size-img' src={Parent5} alt="Parent 5" />

                        <img id='size-img' src={Parent6} alt="Parent 6" />
                    </Box>
                </Box>

                <Box className="flex-center" >
                    <Box id='want' paddingX={5} width={"85%"} height={250}
                        borderRadius={10} className="flex-center"
                        flexWrap={'wrap'} position={'absolute'}>

                        <Box flex={1}>
                            <Typography fontSize={"30px"} color={"#FFFFFF"} > {contents.ourPartner.childBox.content}</Typography>
                        </Box>
                        <Box id="life-soham">
                            <Button sx={{ padding: "10px", width: "220px", height: "57px", border: "1px solid white", color: "05180", fontSize: "25px", fontWeight: 700, background: "white" }}>Life@Soham</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Partner;




