import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const AllBlogs = ({ blogcontent }) => {

    return (
        <>
            <Card id='blog-card'  >
                {/* <img className='blogsimg' src={Blog1} alt="" /> */}
                <img className='blogsimg' src={blogcontent.jetpack_featured_media_url} alt="" />

                <CardContent  >
                    <Typography   gutterBottom variant="h6" className='card-heading'>
                        {blogcontent.title.rendered}
                    </Typography>
                    <Typography className='card-typography' >
                        {blogcontent.excerpt.rendered}
                    </Typography>
                </CardContent>
            </Card>
        </>)
}
export default AllBlogs;
