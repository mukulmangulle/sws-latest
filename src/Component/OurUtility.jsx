
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Email from "../assets/whatsapp1.svg"
import Our1 from "../assets/our service/our1.svg"
import Our2 from "../assets/our service/our2.svg"
import Our3 from "../assets/our service/our3.svg"
import Our4 from "../assets/our service/our4.svg"
import Our5 from "../assets/our service/our5.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcontents } from '../features/content/contentSlice'
import React, { useEffect } from 'react'

const OurUtility = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);


    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={"center"} flexDirection={'column'}  >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} paddingTop={7}>
                <Typography variant='h2' id='Heading-h2'>
                    {contents.ourutility.heading}
                </Typography>
                <Typography id="Typography-gray" width={'70%'} paddingTop={2} >
                    {contents.ourutility.contant}
                </Typography>
            </Box>

            <Box id='web-devlopment' width={'67%'} display={"flex"} alignItems={'start'} justifyContent={'space-evenly'} flexWrap={'wrap'} paddingTop={5} paddingBottom={5}>
                <Box id='web-devlopment-child' display={"flex"} alignItems={'center'} margin={2}>
                    <img id='web-devlopment-img' src={Our1} alt="" height={40} />
                    <Typography id='web-devlopment-typo' width={100} fontSize={14} margin={1} lineHeight={1}>   {contents.ourutility.order.text1}</Typography>
                </Box>

                <Box id='web-devlopment-child' display={"flex"} alignItems={'center'} margin={2}>
                    <img id='web-devlopment-img' src={Our2} alt="" height={40} />
                    <Typography id='web-devlopment-typo' width={40} fontSize={14} margin={1} lineHeight={1}> {contents.ourutility.order.text2}</Typography>
                </Box>

                <Box id='web-devlopment-child' display={"flex"} alignItems={'center'} margin={2}>
                    <img id='web-devlopment-img' src={Our3} alt="" height={40} />
                    <Typography id='web-devlopment-typo' width={40} fontSize={14} margin={1} lineHeight={1}>  {contents.ourutility.order.text3}</Typography>
                </Box>

                <Box id='web-devlopment-child' display={"flex"} alignItems={'center'} margin={2}>
                    <img id='web-devlopment-img' src={Our4} alt="" height={40} />
                    <Typography id='web-devlopment-typo' width={80} fontSize={14} margin={1} lineHeight={1}>{contents.ourutility.order.text4}</Typography>
                </Box>

                <Box id='web-devlopment-child' display={"flex"} alignItems={'center'} margin={2} >
                    <img id='web-devlopment-img' src={Our5} alt="" height={40} />
                    <Typography id='web-devlopment-typo' width={40} fontSize={14} margin={1} lineHeight={1}  >  {contents.ourutility.order.text5}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OurUtility
