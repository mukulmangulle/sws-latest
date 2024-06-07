
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import BoxCategories from './boxCategories';

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
    </>
  );
}

export default Festival_title;
