import { Box, Typography } from "@mui/material"
import Soham from "../assets/footer/soham.svg"
import Facebook from "../assets/footer/facebook.svg"
import Insta from "../assets/footer/insta.svg"
import Twitter from "../assets/footer/twitter.svg"
import Youtube from "../assets/footer/youtube.svg"
import Wordpress from "../assets/footer/wordpress.svg"
import call from "../assets/footer/call.svg"
import Phone from "../assets/footer/phone.svg"
import Email from "../assets/footer/email.svg"
import Location from "../assets/footer/location.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchcontents } from "../features/content/contentSlice"

const Footer = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    return (
        <>
            <Box width={'100%'} color={"#FFFFFF"} display={'flex'} alignItems={'center'} justifyContent={'center'} bgcolor={"#053480"} >
                <Box width={'87%'} paddingTop={20} display={'flex'} alignItems={'start'} justifyContent={"space-between"} flexWrap={'wrap'}>
                    <Box width={290} margin={1} >
                        <img src={Soham} alt="" />
                        <Typography color={'#FFFFFF'} marginTop={2.5} fontSize={14}>
                            {contents.footerData.aboutText}
                        </Typography>

                        <Box width={210} marginTop={3} display={'flex'} alignItems={'center'} justifyContent={'space-between'}  >
                            <img src={Facebook} alt="" />
                            <img src={Insta} alt="" />
                            <img src={Twitter} alt="" />
                            <img src={Youtube} alt="" />
                            <img src={Wordpress} alt="" />
                        </Box>
                    </Box>

                    <Box width={200} margin={1} >
                        <Typography color={'#FFFFFF'} variant="h3" fontSize={'30px'} fontWeight={600} marginBottom={1} > {contents.footerData.quickLinks.heading}</Typography>
                        <Box marginTop={2}>
                            <Typography margin={0.5} fontSize={18} color={'#FFFFFF'}>About</Typography>
                            <Typography id="typography">{contents.footerData.quickLinks.text1}</Typography>
                            <Typography id="typography">{contents.footerData.quickLinks.text2}</Typography>
                            <Typography id="typography">{contents.footerData.quickLinks.text3}</Typography>
                            <Typography id="typography">{contents.footerData.quickLinks.text4}</Typography>
                        </Box>
                    </Box>

                    <Box width={290} margin={1} >
                        <Typography color={'#FFFFFF'} variant="h3" fontSize={"30px"} fontWeight={600} marginBottom={1}>{contents.footerData.policyLinks.heading}</Typography>
                        <Box marginTop={2} fontSize={50} >
                            <Typography id="typography">{contents.footerData.policyLinks.text1}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text2}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text3}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text4}</Typography>
                            <Typography id="typography">{contents.footerData.policyLinks.text5}</Typography>
                        </Box>

                    </Box>

                    <Box width={350} margin={1} >
                        <Typography color={'#FFFFFF'} fontSize={'30px'} variant="h3" fontWeight={600} marginBottom={1} width={'100%'} >{contents.footerData.contactDetails.heading}</Typography>
                        <Box marginTop={2}>
                            <Box display={'flex'} margin={0.5}  >
                                <img src={call} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text1}</Typography>
                            </Box>

                            <Box display={'flex'} margin={0.5}   >
                                <img src={Phone} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text2}</Typography>
                            </Box>

                            <Box display={'flex'} margin={0.5} >
                                <img src={Phone} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text3}</Typography>
                            </Box>

                            <Box display={'flex'} margin={0.5}  >
                                <img src={Email} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text4}</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'start'} margin={0.5} >
                                <img id="logo-margin" src={Location} alt="" />
                                <Typography id="typography" paddingLeft={1}>{contents.footerData.contactDetails.text5}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box bgcolor={"#053480"} padding={4} >
                <Typography fontSize={14} textAlign={'CENTER'} color='#FFFFFF'>
                    {contents.footerData.copyrightText}

                </Typography>
            </Box>
        </>
    )
}
export default Footer;

