import React, { useEffect, useState } from 'react';
import Carditem from './Carditem';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useLocation, useParams } from 'react-router';
import BoxCategories from './boxCategories';

const Festival = ({ Api_url, category }) => {

  
  const [blogContentForPageTwo, setBlogContentForPageTwo] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const params = useParams();
  const location = useLocation();

  const { id } = location.state || {};

  useEffect(() => {
    fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.slug}`);
        }
        return response.json();
      })
      .then(data => {
        setBlogContentForPageTwo(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box id="blog480-center" width={"84%"} display={'flex'} alignItems={"center"}  flexWrap={"wrap"} margin={"auto"}>
        {Array.isArray(blogContentForPageTwo) ? (
          blogContentForPageTwo.map((blog) => (
            <Carditem key={blog.id} blogcontent={blog} />
          ))
        ) : (
          <Box>Data is not an array</Box>
        )}
      </Box>
     
      <BoxCategories Api_url={Api_url} />
    </>
  );
};

export default Festival;
