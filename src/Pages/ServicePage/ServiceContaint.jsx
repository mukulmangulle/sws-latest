import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Php from "../../assets/Service/php.svg"
import Wordpress from "../../assets/Service/wordpress.svg"
import Shopify from "../../assets/Service/shopify.svg"
import Webdesigner from "../../assets/Service/webdesigner.svg"
import Graphic from "../../assets/Service/graphic.svg"
import Ecommerce from "../../assets/Service/ecoomerce.svg"
import ServiceButton from '../../Child-Component/ServiceButton'
import ProjectRequirement from './ProjectRequirement'



const ServiceContaint = () => {
    return (
        <>
            <Box maxWidth={"1920px"} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Box className="service-man" width={"84%"} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                    {/* 1 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap"  >
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">PHP Development</Typography>
                            <Typography id="Typo-gray-start" >PHP development services focus on implementing secure and powerful server-sides web applications. Our compan deliver robust CMSs, and web-based solutions, we manage complex databases
                            </Typography>
                            <ServiceButton onClick={() => { alert("button click new") }} />
                        </Box>
                        <Box className="img-container"   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Php} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 2 */}
                    <Box id="man-reverce2" width={"100%"} className="flex-between-wrap"  >
                        <Box className="img-container"   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Wordpress} alt="" />
                            </Box>
                        </Box>
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">PHP Development</Typography>
                            <Typography id="Typo-gray-start" >PHP development services focus on implementing secure and powerful server-sides web applications.
                            </Typography>
                            <ServiceButton onClick={() => { alert("button click new") }} />
                        </Box>

                    </Box>

                    {/* 3 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap" >
                        <Box width={617} id="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">Shopify Development</Typography>
                            <Typography id="Typo-gray-start" >Shopify web development service will help you with responsive, user-friendly and interactive Shopify themes for your store.
                            </Typography>
                            <ServiceButton />
                        </Box>
                        <Box className="img-container" >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Shopify} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 4 */}
                    <Box id="man-reverce2" width={"100%"} className="flex-between-wrap" >

                        <Box className="img-container"   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Webdesigner} alt="" />
                            </Box>
                        </Box>

                        <Box width={617} id="devlopment-text"  >
                            <Typography variant='h4' id="typo-fray-hrading">Web Designing</Typography>
                            <Typography id="Typo-gray-start" >Designing services are professional services that involve the creation, development, and maintenance of websites.
                            </Typography>
                            <ServiceButton />
                        </Box>
                    </Box>

                    {/* 5 */}
                    <Box id="man-reverce1" width={"100%"} className="flex-between-wrap" >
                        <Box width={617} id="devlopment-text">
                            <Typography variant='h4' id="typo-fray-hrading">Graphic Designing</Typography>
                            <Typography id="Typo-gray-start" >Our team of experienced graphic designers is here to help you stand out in your industry and drive business growth
                            </Typography>
                            <ServiceButton />                        </Box>
                        <Box className="img-container" >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Graphic} alt="" />
                            </Box>
                        </Box>
                    </Box>


                    {/* 6 */}
                    <Box id="man-reverce2" width={"100%"} className="flex-between-wrap"  >
                        <Box id="img-container"    >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Ecommerce} alt="" />
                            </Box>
                        </Box>
                        <Box width={617} id="devlopment-text">
                            <Typography variant='h4' id="typo-fray-hrading">Ecommerce Development</Typography>
                            <Typography id="Typo-gray-start">Our E-commerce services development includes custom e-commerce website design and shoppi cart development.
                            </Typography>
                            <ServiceButton />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}

export default ServiceContaint;

