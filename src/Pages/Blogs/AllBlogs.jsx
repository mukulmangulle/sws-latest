import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Carditem from './Carditem';
import { fetchblogcontents } from '../../features/blog/blogsSlice';

const AllBlogs = () => {
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

    // if (isLoading) {
    //     return (
    //         <Typography variant='h3' id="Heading-h2" textAlign={'center'}>Loading......</Typography>
    //     )
    // }

    return (
        <>
            <Typography variant='h2' id='Heading-h2' paddingTop={"5rem"}>
                All Blogs
            </Typography>
            <Box sx={{ maxWidth: 1920, margin: 'auto' }} className="padding-top-bottom" display={"flex"} alignItems={"center"} justifyContent={"center"} >

                <Box id="blog480-center" width={"84%"} display={'flex'} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>

                    {
                        blogcontents.map((blogcontent) => (
                            <Carditem key={blogcontent?.id} blogcontent={blogcontent} />))
                    }
                </Box>

            </Box>
        </>)
}
export default AllBlogs;
