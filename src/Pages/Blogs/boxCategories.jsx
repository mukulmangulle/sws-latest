
import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchcategories } from '../../features/Categories/categoriesSlice';

const BoxCategories = ({ Api_url }) => {
  const dispatch = useDispatch();
  const { categoriescontents, isLoading } = useSelector((state) => state.categorie);


  useEffect(() => {
    dispatch(fetchcategories());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
        <Box width={"85%"}  >
          <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >All Categories</Typography>
          
          <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>


            {categoriescontents?.slice(0, 4).map((categoriescontent) => (
              <Box className="categories-box"  >
                <Link
                  key={categoriescontent?.id}
                  to={`/${process.env.SLUG_URL}/categories/${categoriescontent?.slug}/`}
                  state={{ id: categoriescontent?.id, name: categoriescontent?.name }}
                  style={{ textDecoration: "none" }}
                >
                  <Typography id='card-heading'>
                    {categoriescontent.name}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box >
        </Box>
      </Box>
    </>
  )
}
export default BoxCategories