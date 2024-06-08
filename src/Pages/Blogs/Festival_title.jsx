
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './boxCategories';
import Categories_name from './Categories_name';

const Festival_title = ({ Api_url }) => {
  const location = useLocation()
  const { name } = location.state || {};

  return (
    <>
      <Box id="about-background">
        <Typography id='Heading-h2' variant='h2' paddingTop={10} paddingBottom={5}>
          {name}
        </Typography>
      </Box>
      <BoxCategories Api_url={Api_url} />
      {/* <Categories_name/> */}

    </>
  );
}

export default Festival_title;
