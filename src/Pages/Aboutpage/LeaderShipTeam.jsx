import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Laravel from "../../assets/AboutSection1/laravel.svg"
import Codeignetor from "../../assets/AboutSection1/codeignetor.svg"
import Sql from "../../assets/AboutSection1/sql.svg"
import co1 from "../../assets/AboutSection1/neeraj malakar.svg"
import co2 from "../../assets/AboutSection1/anil meena.svg"
import co3 from "../../assets/AboutSection1/ravi yadav.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../../features/content/contentSlice'
const LeaderShipTeam = () => {

    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <>
            <Box padding={5} width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"center"} textAlign={'center'} flexDirection={'column'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <Typography paddingY={1} id='Heading-h2' variant='h2' >
                        {contents.Leadership.heading}
                    </Typography>

                    <Typography id="Typography-black" fontWeight={700} padding={1}   >
                        {contents.Leadership.content}
                    </Typography>
                </Box>


                <Box id="team" padding={3} width={'90%'} display={'flex'} alignItems={'center'} justifyContent={"space-evenly"} flexWrap={'wrap'}>
                    <Box className="flex-center-column" margin={2}>
                        <img className='sir' src={co1} alt="" />
                        <Typography margin={1.5} fontSize={22} color={'#053480'} fontWeight={700}>Neeraj Malakar</Typography>
                        <Typography fontSize={20} color={'#053480'}>Founder & CEO</Typography>
                    </Box>
                    <Box className="flex-center-column" margin={2}>
                        <img className='sir' src={co2} alt=""  />
                        <Typography margin={1.5} fontSize={22} color={'#053480'} fontWeight={700}>Anil Meena</Typography>
                        <Typography fontSize={20} color={'#053480'}>CTO & COO</Typography>
                    </Box>
                    <Box className="flex-center-column" margin={2}>
                        <img className='sir' src={co3} alt=""  />
                        <Typography margin={1.5} fontSize={22} color={'#053480'} fontWeight={700}>Ravi Yadav</Typography>
                        <Typography fontSize={20} color={'#053480'}>Founder & CEO</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LeaderShipTeam
