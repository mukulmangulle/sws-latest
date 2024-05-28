import { Box, Typography } from '@mui/material'
import CategoriesChild from './CategoriesChild'


const CategoriesChildMan = ({Api_url,slug}) => {
 


  return (
    <>
      <Box id="about-background" >
        <Typography id='Heading-h2'  variant='h2' paddingY={10}>Categories : PHP</Typography>
      </Box>

      <CategoriesChild slug={slug} Api_url={Api_url}/>
      {/* <PhpCategories /> */}
    </>
  )
}

export default CategoriesChildMan
