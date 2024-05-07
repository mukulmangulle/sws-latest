import { Box, Typography } from '@mui/material'
import React from 'react'
import LatestBlog from './LatestBlog'
import LaravalBlog from './LaravalBlog'
import FastivalBlog from './FastivalBlog'
import WordpressBlog from './WordpressBlog'
import PhpBlog from './PhpBlog'
import ReactBlog from './ReactBlog'
import ShopifyBlog from './ShopifyBlog'
import WebDevelopmentBlog from './WebDevelopmentBlog'
import WooCommerceBlog from './WooCommerceBlog'
import WordpressPluginsBlog from './WordpressPluginsBlog'
import Allpage from './Allpage'

const Blog = () => {
    return (
        <>

            <Box id="about-background" >
                <Typography  id='Heading-h2' variant='h2' padding={7} >Blog</Typography>
            </Box>


            <LatestBlog />
            <LaravalBlog />
            <FastivalBlog />
            <WordpressBlog />
            <PhpBlog />
            <ReactBlog />
            <ShopifyBlog />
            <WebDevelopmentBlog />
            <WooCommerceBlog />
            <WordpressPluginsBlog />
            <Allpage />
        </>
    )
}

export default Blog
