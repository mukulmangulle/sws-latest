import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import Parent1 from "../assets/parent/Parent1.svg";
import Parent2 from "../assets/parent/Parent2.svg";
import Parent3 from "../assets/parent/parent3.svg";
import Parent4 from "../assets/parent/Parent4.svg";
import Parent5 from "../assets/parent/parent5.svg";
import Parent6 from "../assets/parent/parent6.svg";
import { useSelector } from 'react-redux';

function Partner() {
    const { contents } = useSelector((state) => state.content);
    return (
        <>
            <Box marginTop={5}>
                <Box display={'flex'} alignItems={'center'} flexDirection={'column'} flexWrap={'nowrap'}  >
                    <Typography id='Heading-h2' variant='h2' >
                   {contents.ourPartner.heading}
                    </Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} paddingBottom={20} >
                    <Box marginTop={2} width={"85%"} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} flexDirection={'coulmn'} flexWrap={'wrap'}>
                        <img id='size-img' src={Parent1} alt="Parent 1" />

                        <img id='size-img' src={Parent2} alt="Parent 2" />

                        <img id='size-img' src={Parent3} alt="Parent 3" />

                        <img id='size-img' src={Parent4} alt="Parent 4" />

                        <img id='size-img' src={Parent5} alt="Parent 5" />

                        <img id='size-img' src={Parent6} alt="Parent 6" />
                    </Box>
                </Box>
            </Box>
            <Box width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'}  >

                <Box id='want' paddingLeft={5} paddingRight={5} width={"82%"} height={220}
                    borderRadius={10} display={'flex'} alignItems={'center'}
                    flexWrap={'wrap'} position={'absolute'}>

                    <Box flex={1}>
                        <Typography fontSize={"30px"} color={"#FFFFFF"} > {contents.ourPartner.childBox.content}</Typography>
                    </Box>
                    <Box id="life-soham">
                        <Button sx={{ padding: "10px", width: "220px", height: "57px", border: "1px solid white", color: "05180", fontSize: "25px", fontWeight: 700, background: "white" }}>Life@Soham</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Partner;




