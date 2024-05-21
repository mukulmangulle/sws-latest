import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

import SingleBlogcontents from './SingleBlogcontents';


const AllBlogs = ({ blogcontent }) => {
    // console.log(blogcontent)
    return (
        <>
            <Card id='blog-card'  >
                {/* <img className='blogsimg' src={Blog1} alt="" /> */}
                <img className='blogsimg' src={blogcontent.jetpack_featured_media_url} alt="" />

                <CardContent  >
                    {/* to={`/singleblog/${singleblog.Id}` */}
                    <Link to={`/singleblog/${blogcontent.id}`} style={{ textDecoration: "none" }} >
                        <Typography className='card-heading'>
                            {blogcontent.title.rendered}
                        </Typography>
                    </Link>
                    <Typography className='card-typography'
                        dangerouslySetInnerHTML={{ __html: blogcontent.excerpt.rendered }}
                    />
                </CardContent>
            </Card>
        </>)
}
export default AllBlogs;
