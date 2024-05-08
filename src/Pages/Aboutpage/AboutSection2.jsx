import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AboutSectionimg from "../../assets/AboutSection1/aboutsection1.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const AboutSection2 = () => {

  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);


  useEffect(() => {
      dispatch(fetchcontents())
  }, [dispatch]);
return (
    <>

      <Box padding={12} className='aboutsectiocolor' width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} >

        <img id='aboutsectionimg' width={"490px"} height={450} src={AboutSectionimg} alt="" />

        <Box id='aboutsectiontypo' padding={5} width={"55%"} display={'flex'} alignItems={'start'} justifyContent={'center'} flexDirection={'column'}>
          <Typography id="a bout-soham" variant='h3' fontSize={40} fontWeight={'600'} textAlign={'center'} paddingBottom={3} color={'white'}>{contents.aboutSectionData.heading}</Typography>
          <Typography id="typography">  {contents.aboutSectionData.text}</Typography>

        </Box>
      </Box>
    </>
  )
}

export default AboutSection2
