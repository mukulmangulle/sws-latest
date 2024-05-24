import { Box, Typography } from '@mui/material'
import CategoriesBlog from './CategoriesBlog'


const CategoriesPhpBlog = ({Api_url}) => {
 


  return (
    <>
      <Box id="about-background" >
        <Typography id='Heading-h2'  variant='h2' paddingY={10}>Categories : PHP</Typography>
      </Box>

      <CategoriesBlog Api_url={Api_url}/>
      {/* <PhpCategories /> */}
    </>
  )
}

export default CategoriesPhpBlog
