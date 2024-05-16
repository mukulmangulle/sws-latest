import React, { useEffect } from 'react'
import { Box, Typography, keyframes } from '@mui/material'
import { useSelector } from 'react-redux';
import AllBlogs from './AllBlogs';




const Blogsmain = () => {

    const { blogcontents } = useSelector((state) => state.blogs);


    return (
        <>
            <Typography variant='h2' id='Heading-h2' paddingTop={"5rem"}>
                All Blogs
            </Typography>
            <ul>
                {
                    blogcontents.map((blogcontent) => (
                        <AllBlogs key={blogcontent._id} blogcontent={blogcontent} />
                    ))
                }
            </ul>

     
        </>
    )
}

export default Blogsmain
