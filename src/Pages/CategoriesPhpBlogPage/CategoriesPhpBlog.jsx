import { Box, Typography } from '@mui/material'
import React from 'react'
import PhpBlog from './PhpBlog'
import PhpCategories from './PhpCategories'

const CategoriesPhpBlog = () => {
  return (
    <>
      <Box id="about-background" >
        <Typography  id='Heading-h2' variant='h2' padding={7}>Categories : PHP</Typography>
      </Box>

       <PhpBlog/>
       <PhpCategories/>
    </>
  )
}

export default CategoriesPhpBlog
