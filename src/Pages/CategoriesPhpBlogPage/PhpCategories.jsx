import { Box, Typography } from '@mui/material'
import React from 'react'

const   PhpCategories = () => {
    return (
        <>
            <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
                <Box width={"85%"}  >
                    <Typography variant='h3' color={'#053480'} fontWeight={600} marginBottom={3} >Categories</Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>
                        <Box width={380} marginY={2} height={350} border={5} borderColor={"#053480"} display={"flex"} fontWeight={600} fontSize={35} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                            PHP
                        </Box>
                        <Box width={380} marginY={2} height={350} border={5} borderColor={"#053480"} display={"flex"} fontWeight={600} fontSize={35} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                            Laraval
                        </Box>
                        <Box width={380} marginY={2} height={350} border={5} borderColor={"#053480"} display={"flex"} fontWeight={600} fontSize={35} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                            Shopify
                        </Box>
                        <Box width={380} marginY={2} height={350} border={5} borderColor={"#053480"} display={"flex"} fontWeight={600} fontSize={35} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                            Wordpress
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default PhpCategories;
