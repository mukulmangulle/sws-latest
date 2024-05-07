import { Box, Typography } from '@mui/material'
import React from 'react'
import Laravel from "../../assets/AboutSection1/laravel.svg"
import Codeignetor from "../../assets/AboutSection1/codeignetor.svg"
import Sql from "../../assets/AboutSection1/sql.svg"
import co1 from "../../assets/AboutSection1/neeraj malakar.svg"
import co2 from "../../assets/AboutSection1/anil meena.svg"
import co3 from "../../assets/AboutSection1/ravi yadav.svg"
import { useSelector } from 'react-redux'
const LeaderShipTeam = () => {
    const { contents } = useSelector((state) => state.content);
    return (
        <>
            <Box  padding={5} width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"center"} textAlign={'center'} flexDirection={'column'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <Typography   paddingY={1}  id='Heading-h2' variant='h2' >
                    Our Leadership Team
                    </Typography>

                    <Typography id="Typography-black" fontWeight={700}  padding={1}   >
                        Driving the Organzation by strength and wisdom, Believing to set clear expecations
                        always diliver, and never breack trust.

                    </Typography>
                </Box>


                <Box id="team" padding={3}  width={'100%'} display={'flex'} alignItems={'center'} justifyContent={"space-evenly"} flexWrap={'wrap'}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} margin={2}>
                        <img id='sir' src={co1} alt="" width={330} />
                        <Typography margin={1.5} fontSize={18} color={'#053480'} fontWeight={700}>Neeraj Malakar</Typography>
                        <Typography  color={'#053480'}>Founder & CEO</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} margin={2}>
                        <img id='sir' src={co2} alt="" width={330} />
                        <Typography margin={1.5} fontSize={18} color={'#053480'} fontWeight={700}>Anil Meena</Typography>
                        <Typography   color={'#053480'}>CTO & COO</Typography>
                    </Box>
                    <Box  display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} margin={2}>
                        <img id='sir' src={co3} alt="" width={330} />
                        <Typography margin={1.5} fontSize={18} color={'#053480'} fontWeight={700}>Ravi Yadav</Typography>
                        <Typography   color={'#053480'}>Founder & CEO</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LeaderShipTeam
