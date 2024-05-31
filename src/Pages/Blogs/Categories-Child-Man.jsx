import { Box, Card, Typography } from '@mui/material'
import CategoriesChild from './CategoriesChild'
import { useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const CategoriesChildMan = ({ Api_url, slug }) => {
  const [blogData, setBlogData] = useState(null);
  const params = useParams();
  const location = useLocation()
  const { id } = location.state

  useEffect(() => {
    const fetchBlogData = async () => {
      try {

        const response = await fetch(`https://sohamsolution.com/wp-json/wp/v2/categories`, {
          method: 'GET'
        });
        // console.log('new', response)
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
          console.log(response)
        }
        const data = await response.json();
        // console.log('Fetched data:', data); // Log the fetched data
        setBlogData(data);
      } catch (error) {
        // console.error('Error fetching data:', error); // Log any errors
      }
    };

    if (params.CategoriesId) {
      fetchBlogData();
    }
  }, []);

  return (
    <>
      <Box id="about-background" >
          <Typography id='Heading-h2' variant='h2' paddingTop={10} >
           
          {blogData && blogData.find(category => category.id === Number(id))?.name}
          </Typography>
       


      </Box>

      <CategoriesChild slug={slug} Api_url={Api_url} />
      {/* <PhpCategories /> */}
    </>
  )
}

export default CategoriesChildMan
