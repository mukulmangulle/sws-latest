import React, { useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Homeimg from "../assets/home.svg"
import Arrow from "../assets/arrow.svg"
import Call from "../assets/call1.svg"
import Whatsapp from "../assets/whatsapp1.svg"
import Email from "../assets/email1.svg"
import Facebook from "../assets/media/facebook.svg"
import X from "../assets/media/x.svg"
import Linkdin from "../assets/media/linkdin.svg"
import Insta from "../assets/media/insta.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../features/content/contentSlice';


const Home = () => {

    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    // if (isLoading) {
    //     return (
    //         <Typography variant='h3' textAlign={'center'}>Loading......</Typography>
    //     )
    // }
    // if (isError) {
    //     return (
    //         <Typography variant='h3' textAlign={'center'}>Error......</Typography>
    //     )
    // }

    return (
        <Box  className="home flex-center" flexDirection={'column'}>
            <Box  className="home-continer flex-between" width={"84.5%"}  paddingTop={8}  
                >
                <Box  marginY={1} width={590} >
                    <Typography id="home-h1" variant='h1' lineHeight={1.1}>
                        {contents.homeData.heading}
                    </Typography>

                    <Typography className='home-p1' variant='h6' color="#FFFFFF" paddingTop={2.5}>
                        {contents.homeData.subheading}
                    </Typography>

                    <Box className="schadule-meeting" paddingTop={2} display={"flex"} paddingBottom={4} >
                        <Typography  id='home-p2' marginRight={2} fontSize={22} color="#FFFFFF" variant='h6' fontWeight={500}>Schadule Meeting </Typography>
                        <img src={Arrow} width={25} alt="" />

                    </Box>
                </Box>

                <Box marginY={2}>
                    <img className='home-img' src={Homeimg} alt="" />
                </Box>
            </Box>


            <Box className="home-lastSection flex-between" width={'84.5%'} paddingY={3} flexWrap={"wrap"}  >
                <Box display={'flex'} alignItems={"center"} >
                    <img src={Call} alt="" />
                    <Typography fontSize={14} marginLeft={1} color="#FFFFFF" className='Typography1' >
                        {contents.homeData.contactInfo.number}
                    </Typography>
                </Box>

                <Box display={'flex'} alignItems={"center"}  >
                    <img src={Email} alt="" />
                    <Typography fontSize={14} marginLeft={1} color="#FFFFFF">
                        {contents.homeData.contactInfo.email}
                    </Typography>
                </Box>


                <Box display={'flex'} alignItems={"center"}    >
                    <img src={Whatsapp} alt="" />
                    <Typography fontSize={14} marginLeft={1} color="#FFFFFF">
                        {contents.homeData.contactInfo.link}
                    </Typography>
                </Box>

                <Box width={140} className="flex-between" >
                    <img src={Facebook} alt="" />
                    <img src={X} alt="" />
                    <img src={Linkdin} alt="" />
                    <img src={Insta} alt="" />
                </Box>
            </Box>

    </Box>
    )
}

export default Home;
