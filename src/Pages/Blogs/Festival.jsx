import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PhpCategories from './boxCategories';
import { Key } from '@mui/icons-material';


const Festival = ({url_slug }) => {

  const [blogData, setBlogData] = useState(null);
  const params = useParams();
  const location = useLocation()
  const { id } = location.state
  // console.log('CAT',url_slug)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
          
        const response = await fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`, {
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



      <Box sx={{ maxWidth: 1920, margin: 'auto' }} className="padding-top-bottom" display={"flex"} alignItems={"center"} justifyContent={"center"} >

        <Box id="blog480-center" width={"84%"} display={'flex'} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
          {blogData?.map((item) => (
            <Card id='blog-card' key={item?.id} >
              <img className='blogsimg' src={item?.jetpack_featured_media_url} alt="" />

              <CardContent  >

                <Link to={`/${process.env.SLUG_URL}/categories/${item.slug}/`} state={{ id: item.id ,slug:url_slug }} style={{ textDecoration: "none" }}  >
                  <Typography id='card-heading'>

                    {item?.title?.rendered}
                  </Typography>
                </Link>
                <Typography id='card-typography'
                  dangerouslySetInnerHTML={{ __html: item?.content?.rendered }} />
              </CardContent>
            </Card>

          ))}



        </Box>
      </Box>
      <PhpCategories />
    </>
  )
}

export default Festival;