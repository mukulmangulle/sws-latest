import { Box, Typography } from '@mui/material'
import React from 'react'
import Rightclick from "../../assets/php-department/rightclick.svg"

const Phpsectiondepartment2 = () => {
    return (
        <>
            <Box className="service"maxWidth={"1920px"} margin={'auto'} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={7}>
                <Box width={"95%"} marginY={12}  >
                    <Typography textAlign={'center'} variant='h3' color={"white"} fontWeight={600} marginBottom={7} >Service</Typography>
                 <Box display={"flex"} alignItems={"center"} justifyContent={'center'}>
                 <Box width={"89%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>
                        <Box width={{xl:"330px", xs: "100%", sm: "300px" }} marginY={2} height={80} borderRadius={2} bgcolor={"white"} display={"flex"} fontWeight={600} fontSize={{ xs: 18, sm: 20, md: 22 }} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                          <img src={Rightclick} alt="" />
                          Website Development
                        </Box>
                        <Box width={{ xl:"330px",xs: "100%", sm: "300px"}}  marginY={2} height={80} borderRadius={2} bgcolor={"white"} display={"flex"} fontWeight={600} fontSize={{ xs: 18, sm: 20, md: 22 }} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                          <img src={Rightclick} alt="" />
                          CMS Development
                        </Box>
                        <Box width={{xl:"330px", xs: "100%", sm: "300px" }}   marginY={2} height={80} borderRadius={2} bgcolor={"white"} display={"flex"} fontWeight={600} fontSize={{ xs: 18, sm: 20, md: 22 }} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                          <img src={Rightclick} alt="" />
                          Ecommerce Development                      
                        </Box>
                        <Box width={{xl:"330px", xs: "100%", sm: "300px"}}  marginY={2} padding={3} height={80} borderRadius={2} bgcolor={"white"} display={"flex"} fontWeight={600} fontSize={{ xs: 18, sm: 20, md: 22 }} color={"#053480"} alignItems={'center'} justifyContent={"center"}>
                          <img src={Rightclick} alt="" />
                          Custom Framework Development
                        </Box>
                    </Box>
                 </Box>
                </Box>
            </Box>
        </>
    )
}

export default Phpsectiondepartment2;
