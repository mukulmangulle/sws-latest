import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const AboutSection1 = () => {

  const dispatch = useDispatch()
  const { contents, isLoading, isError } = useSelector((state) => state.content);


  useEffect(() => {
      dispatch(fetchcontents())
  }, [dispatch]);

  const textStyle = {
   
    padding: 2,
    width: "71%",
    paddingBottom: 7,
    '@media (max-width: 768px)': {
      width: '90%', 
    },};
  return (
    <>
      <Box id="about-background" >
        <Typography  id='Heading-h2' variant='h2' paddingY={7} >
          {contents.aboutData.heading}</Typography>
      </Box>

      <Box   display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'}>
        <Typography id="about-soham" variant='h3' fontSize={40} fontWeight={'600'} color={"#053480"} textAlign={'center'} paddingTop={5} paddingX={3} > {contents.aboutData.subheading}</Typography>
        <Typography sx={textStyle}  id="Typography-black" width={"71%"} > 
        {contents.aboutData.text}
       </Typography>

      </Box>

    </>
  )
}

export default AboutSection1
