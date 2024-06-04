import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'

const BoxCategories = ({Api_url}) => {
    const [blog, setBlog] = useState([]);
    const params = useParams();
    const location = useLocation()
    const { id } = location.state
  
    useEffect(() => {
      fetch(`https://sohamsolution.com/wp-json/wp/v2/categories`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // console.log('Fetched data:', data); // Check the fetched data
          setBlog(data);
        })
        .catch(error => {
          // console.error('Error fetching data:', error);
        });
    }, []);
  
    // console.log('State:', blog);
    return (
        <>
            <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
                <Box width={"85%"}  >
                    <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >All Categories</Typography>
                    <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>


                        {blog?.slice(3, 7).map((blog) => (
                            <Box className="categories-box"  >
                                <Typography id="categories-box-typo" >
                                    {blog.name}
                                    
                                </Typography>
                            </Box>
                        ))}
                    </Box >
                </Box>
            </Box>
        </>
    )
}



export default BoxCategories
