import { Box, Typography } from '@mui/material'
import React from 'react'
import LatestBlog from './LatestBlog'

const Blog = () => {
    return (
        <>

            <Box id="about-background" >
                <Typography  id='Heading-h2' variant='h2' padding={7} >Blog</Typography>
            </Box>


            <LatestBlog />
     
        </>
    )
}

export default Blog
