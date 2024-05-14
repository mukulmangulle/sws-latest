import { Box, Typography } from '@mui/material'
import React from 'react'

const   PhpCategories = () => {
    return (
        <>
            <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
                <Box width={"85%"}  >
                    <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >Categories</Typography>
                    <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>
                        <Box className="categories-box">
                            PHP
                        </Box>
                        <Box className="categories-box" >
                            Laraval
                        </Box>
                        <Box className="categories-box">
                            Shopify
                        </Box>
                        <Box className="categories-box" >
                            Wordpress
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default PhpCategories;
