import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import { fetchblogcontents } from '../../features/blog/blogsSlice';
import { useDispatch, useSelector } from 'react-redux';


const boxCategories = ({ blogcontent }) => {

    // const [blogData, setBlogData] = useState(null);
    // const params = useParams();
    // const location = useLocation()
    // const { id } = location.state

    // useEffect(() => {
    //     const fetchBlogData = async () => {
    //         try {
    //             // const response = await fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`, {
    //             const response = await fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`, {
    //                 method: 'GET'
    //             });
    //             // console.log('new', response)
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch blog data');
    //                 console.log(response)
    //             }
    //             const data = await response.json();
    //             // console.log('Fetched data:', data); // Log the fetched data
    //             setBlogData(data);
    //         } catch (error) {
    //             // console.error('Error fetching data:', error); // Log any errors
    //         }
    //     };

    //     if (params.CategoriesId) {
    //         fetchBlogData();
    //     }
    // }, []);

    const dispatch = useDispatch();
    const { blogcontents, isLoading } = useSelector((state) => state.blogs);
    // const blogs = [];

    // for (let i = 0; i < blogcontents.length; i++) {
    //     const blogcontent = blogcontents[i];
    //     blogs.push(<AllBlogs key={blogcontent._id} blogcontent={blogcontent} />);
    // }

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchblogcontents());

        };
        fetchData();

        // const interval = setInterval(() => {
        //     if (isLoading) {
        //         fetchData();
        //     }
        // }, 5000);
        return () => clearInterval();
    }, [dispatch, isLoading]);
    return (
        <>
            <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
                <Box width={"85%"}  >
                    <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >All Categories</Typography>
                    <Box id="categories"  display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>

                        
                            {blogcontents?.slice(0, 4 ).map((item) => (
                                <Box className="categories-box"  >
                                <img className='box-image' src={item?.jetpack_featured_media_url} alt="" />
                                </Box>
                            ))}
                        </Box >
                    

                </Box>
            </Box>
        </>
    )
}

export default boxCategories;
