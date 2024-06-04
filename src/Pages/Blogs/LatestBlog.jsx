import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Month from "../../assets/single blog page/Month.svg"

const LatestBlog = ({Api_url}) => {
     const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`${Api_url}posts/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // console.log('Fetched data:', data); 
                setBlog(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);





    return (
        <>
            <Box id="unlocking">
                <Typography id='categorie-heading'>Latest Blogs</Typography>

                {blog.slice(1, 4).map((blog) => (
                    <Box key={blog?.id} id="unlocking-child" display={'flex'} marginY={3}>
                        <img id='unlocking-img' src={blog.jetpack_featured_media_url} alt="" />
                        <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                            <Typography id='date-title'>
                                {blog.title.rendered}
                            </Typography>
                            <Box display={"flex"} marginTop={1.2}>
                                <img src={Month} alt="" height={25} />
                                <Typography color={"#053480"} marginLeft={1}>
                                    {blog.modified}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

        </>
    )
}

export default LatestBlog
