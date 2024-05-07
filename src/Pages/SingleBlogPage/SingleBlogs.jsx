import { Box, Typography } from '@mui/material'
import React from 'react'
import SingleBlogcontents from './SingleBlogcontents'


const SingleBlogs = () => {
  return (
    <>
     <Box id="about-background" >
        <Typography  id='Heading-h2' variant='h2' padding={7} >Single Blog</Typography>
      </Box>

      <SingleBlogcontents/>
    </>
  )
}

export default SingleBlogs
