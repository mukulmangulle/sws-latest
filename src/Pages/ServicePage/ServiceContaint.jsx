import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Php from "../../assets/Service/php.svg"
import Wordpress from "../../assets/Service/wordpress.svg"
import Shopify from "../../assets/Service/shopify.svg"
import Webdesigner from "../../assets/Service/webdesigner.svg"
import Graphic from "../../assets/Service/graphic.svg"
import Ecommerce from "../../assets/Service/ecoomerce.svg"
import ServiceButton from '../../Child-Component/ServiceButton'

    

const ServiceContaint =() => {
    return (
        <>
            <Box width={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                <Box className="service-man" width={"85%"} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} >

                    {/* 1 */}
                    <Box className="man-reverce1" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}  >
                        <Box width={500} className="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">PHP Development</Typography>
                            <Typography id="Typo-gray-start" >PHP development services focus on implementing secure and powerful server-sides web applications. Our compan deliver robust CMSs, and web-based solutions, we manage complex databases
                            </Typography>
                            <ServiceButton  onClick={() => { alert("button click new") }}/>                        </Box>
                        <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Php} alt="" height={300} />
                            </Box>
                        </Box>
                    </Box>


                    {/* 2 */}
                    <Box className="man-reverce2" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'} >

                        <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Wordpress} alt="" height={280} />
                            </Box>
                        </Box>
                        <Box width={500} className="devlopment-text"  >
                            <Typography variant='h4' id="typo-fray-hrading">WordPress Development</Typography>
                            <Typography id="Typo-gray-start">PHP development services focus on implementing secure
                                and powerful server-sides web applications. Our company
                                deliver robust CMSs, and web-based solutions, we manage
                                complex databases</Typography>
                            {/* <Button className='apply-now'>Read More</Button> */}
                            <ServiceButton />
                        </Box>
                    </Box>


                    {/* 3 */}
                    <Box className="man-reverce1" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'} >
                        <Box width={500} className="devlopment-text"  >
                            <Typography variant='h4' id="typo-fray-hrading">Shopify Development</Typography>
                            <Typography id="Typo-gray-start">Shopify web development service will help you with
                                responsive, user-friendly and interactive Shopify themes
                                for your store.</Typography>
                                <ServiceButton />                        </Box>
                        <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Shopify} alt="" height={280} />
                            </Box>
                        </Box>
                    </Box>


                    {/* 4 */}
                    <Box className="man-reverce2" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'} >

                        <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Webdesigner} alt="" height={260} />
                            </Box>
                        </Box>

                        <Box width={500} className="devlopment-text"  >
                            <Typography variant='h4' id="typo-fray-hrading">Web Designing</Typography>
                            <Typography id="Typo-gray-start">Designing services are professional services that involve
                                the creation, development, and maintenance of websites.</Typography>
                                <ServiceButton  />                        </Box>
                    </Box>

                    {/* 5 */}
                    <Box className="man-reverce1" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'} >
                        <Box width={500} className="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">Graphic Designing</Typography>
                            <Typography id="Typo-gray-start">Our team of experienced graphic designers is here to
                                help you stand out in your industry and drive business
                                growth</Typography>
                                <ServiceButton  />                        </Box>
                        <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Graphic} alt="" height={250} />
                            </Box>
                        </Box>
                    </Box>


                    {/* 6 */}
                    <Box className="man-reverce2" width={"100%"} display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={"wrap"} >

                        <Box className="img-container" width={"540px"} height={600} display={'flex'} alignItems={'center'} justifyContent={"center"}   >
                            <Box className="background-service" display={'flex'} alignItems={'center'} justifyContent={"center"} >
                                <img src={Ecommerce} alt="" height={300} />
                            </Box>
                        </Box>
                        <Box width={500} className="devlopment-text" >
                            <Typography variant='h4' id="typo-fray-hrading">Ecommerce Development</Typography>
                            <Typography id="Typo-gray-start">Our E-commerce services development includes custom
                                e-commerce website design and shopping cart
                                development.</Typography>
                                <ServiceButton />                        </Box>
                    </Box>
                </Box>

            </Box>


           
        </>
    )
}

export default ServiceContaint;
