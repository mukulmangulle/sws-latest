import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Carditem from './Carditem';
import { fetchblogcontents } from '../../features/blog/blogsSlice';
import AllPagination2 from './AllPagination2';

const AllBlogs = ({ Api_url }) => {
    const dispatch = useDispatch();
    const { blogcontents, isLoading } = useSelector((state) => state.blogs);
    const [showPagination, setShowPagination] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchblogcontents());
        };
        fetchData();

        const timeoutId = setTimeout(() => {
            setShowPagination(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [dispatch, isLoading]);

    return (
        <>
            <Typography variant='h2' id='Heading-h2' paddingTop={"5rem"}>
                All Blogs
            </Typography>
            <Box sx={{ maxWidth: 1920, margin: 'auto' }} className="padding-top-bottom" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Box id="blog480-center" width={"84%"} display={'flex'} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                    {blogcontents.map((blogcontent) => (
                        <Carditem key={blogcontent?.id} blogcontent={blogcontent} />
                    ))}
                    {showPagination && <AllPagination2 Api_url={Api_url} />}
                </Box>
            </Box>
        </>
    );
};

export default AllBlogs;

