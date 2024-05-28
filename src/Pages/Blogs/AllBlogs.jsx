import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



const AllBlogs = ({ blogcontent ,slug}) => {
    const dispatch = useDispatch();
    return (
        <>
            <Card id='blog-card'  >
                <img className='blogsimg'
                    src={blogcontent.jetpack_featured_media_url} alt=""
                />

                <CardContent  >

                    <Link to={`/${slug}/${blogcontent.slug}`} state={{ id: blogcontent.id }} style={{ textDecoration: "none" }} >
                        <Typography id='card-heading'>
                            {blogcontent.title.rendered}
                           
                        </Typography>
                    </Link>
                    <Typography id='card-typography'
                        dangerouslySetInnerHTML={{ __html: blogcontent.excerpt.rendered }} />
                </CardContent>
            </Card>
        </>)
}
export default AllBlogs;
