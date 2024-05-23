import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Blog1 from "../../assets/BlogPage/blog1.png"
import Blog2 from "../../assets/BlogPage/blog2.png"
import Blog3 from "../../assets/BlogPage/blog3.png"
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

var API = "https://sohamsolution.com/wp-json/wp/v2/posts?categories=38"

const CategoriesBlog = () => {    
 
    const [blogData, setBlogData] = useState(null);
    const params = useParams();
    const location = useLocation()
    const { id } = location.state
  
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
            <Typography variant='h2' id='Heading-h2' paddingTop={"5rem"}>
                All Blogs
            </Typography>
            {/* {blogs} */}


            <Box sx={{ maxWidth: 1920, margin: 'auto' }} className="padding-top-bottom" display={"flex"} alignItems={"center"} justifyContent={"center"} >

                <Box id="blog480-center" width={"84%"} display={'flex'} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    {blogData?.map((i) => (
                        <Card id='blog-card'  >
                            <img className='blogsimg' src={i?.jetpack_featured_media_url} alt="" />

                            <CardContent  >

                                <Link  to={`/Categoriessingle/${i.slug}`} state={{ id: i.id }} style={{ textDecoration: "none" }}  >
                                    <Typography id='card-heading'>

                                        {i?.title?.rendered}
                                    </Typography>
                                </Link>
                                <Typography id='card-typography'
                                    dangerouslySetInnerHTML={{ __html: i?.content?.rendered }} />
                            </CardContent>
                        </Card>
                    ))}



                </Box>
            </Box>
        </>
    )
}

export default CategoriesBlog;