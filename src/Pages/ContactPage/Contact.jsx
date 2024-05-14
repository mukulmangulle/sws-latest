import { Box, Typography } from '@mui/material'
import React from 'react'
import ContactUsSohamweb from './ContactUsSohamweb'



const Contact = () => {
  return (
    <Box maxWidth={"1920px"} margin={'auto'}>
      <Box  id="about-background" >
        <Typography  id='Heading-h2' variant='h2' padding={7} >Contact Us</Typography>
      </Box>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} textAlign={'center'}>
        <Typography id="about-soham" variant='h3' fontSize={40} fontWeight={'600'} color={"#053480"} textAlign={'center'} paddingTop={5} paddingX={3} > Contact Us Soham Web</Typography>
        <Typography id="Typography-black" paddingY={2} width={"71%"} paddingBottom={7}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
          as a placeholder before the final copy is available.
        </Typography>

      </Box>
      <ContactUsSohamweb />

    </Box>
  )
}

export default Contact
