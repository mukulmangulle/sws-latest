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
        <Box className="home" display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Box  width={"100%"} height={"100%"} paddingTop={5} paddingBottom={5} flexWrap={"wrap"}
                display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexGrow={1}>
                <Box padding={3} margin={1} width={540} >
                    <Typography id="home-h1" variant='h1' lineHeight={1.1} fontSize={60} fontWeight={600} color="#FFFFFF">
                        {contents.homeData.heading}
                    </Typography>

                    <Typography variant='h6' fontSize={20} color="#FFFFFF" paddingTop={2.5} >
                        {contents.homeData.subheading}
                    </Typography>

                    <Box paddingTop={2} display={"flex"} alignItems={"center"} paddingBottom={4} >
                        <Typography marginRight={2} fontSize={20} color="#FFFFFF" variant='h6' fontWeight={500}>Schadule Meeting </Typography>
                        <img src={Arrow} width={25} alt="" />

                    </Box>
                </Box>

                <Box margin={1} width={680} padding={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <img className='home-img' src={Homeimg} alt="" width={"100%"} height={'100%'} />
                </Box>
            </Box>


            <Box id="home-lastSection" width={'86%'} display={"flex"} alignItems={"center"} justifyContent={"space-between"} paddingBottom={3} flexWrap={"wrap"}  >
                <Box display={'flex'} alignItems={"center"} >
                    <img src={Call} alt="" />
                    <Typography fontSize={12} marginLeft={1} color="#FFFFFF" className='Typography1' >
                        {contents.homeData.contactInfo.number}
                    </Typography>
                </Box>

                <Box display={'flex'} alignItems={"center"}  >
                    <img src={Email} alt="" />
                    <Typography fontSize={12} marginLeft={1} color="#FFFFFF">
                        {contents.homeData.contactInfo.email}
                    </Typography>
                </Box>


                <Box display={'flex'} alignItems={"center"}    >
                    <img src={Whatsapp} alt="" />
                    <Typography fontSize={12} marginLeft={1} color="#FFFFFF">
                        {contents.homeData.contactInfo.link}
                    </Typography>
                </Box>

                <Box width={140} display={'flex'} alignItems={"center"} justifyContent={'space-between'} >
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
