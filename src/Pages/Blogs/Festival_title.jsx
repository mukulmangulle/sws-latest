
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Festival from './Festival';

const Festival_title = ({ Api_url }) => {
  const [blogData, setBlogData] = useState(null); // State to store fetched blog data
  const params = useParams(); // Get URL parameters
  const location = useLocation()
    const { name } = location.state || {};

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`https://sohamsolution.com/wp-json/wp/v2/categories`, {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const data = await response.json();
        setBlogData(data); // Set fetched blog data to state
      } catch (error) {
        console.error('Error fetching data:', error); // Log error if fetching fails
      }
    };

    fetchBlogData(); // Fetch blog data when component mounts
  }, [params.CategoriesId]); // Refetch blog data if CategoriesId changes
  console.log(blogData)

  return (
    <>
      <Box id="about-background">
        <Typography id='Heading-h2' variant='h2' paddingTop={10} paddingBottom={5}>
        {/* {blogData && blogData.filter(blog => blog.id === Number(params.CategoriesId))[0]?.name} */}
          {name}
         
         {/* {blogData && blogData.find(blog => blog.id === Number(params.CategoriesId))?.name}  */}
        </Typography>
      </Box>
      <Festival Api_url={Api_url} />
    </>
  );
}

export default Festival_title;
