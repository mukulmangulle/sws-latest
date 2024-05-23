import { Box, Typography } from '@mui/material'

import PhpCategories from './PhpCategories'
import CategoriesBlog from './CategoriesBlog'


const CategoriesPhpBlog = () => {
 


  return (
    <>
      <Box id="about-background" >
        <Typography id='Heading-h2' variant='h2' padding={7}>Categories : PHP</Typography>
      </Box>

      <CategoriesBlog />
      <PhpCategories />
    </>
  )
}

export default CategoriesPhpBlog
