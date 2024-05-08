import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Work1 from '../../assets/work/work1.png'
import Work2 from "../../assets/work/work2.png"
import Work3 from "../../assets/work/work3.png"
import { useDispatch, useSelector } from 'react-redux';
import { fetchcontents } from '../../features/content/contentSlice';

const Someourwork2 = () => {
   
    const dispatch = useDispatch()
    const { contents, isLoading, isError } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <Box id="work" paddingBottom={5} display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={'column'} >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} paddingTop={5}>
                <Typography  id='Heading-h2' variant='h2'>
                   {contents.SomeourWorksection2.heading}
                </Typography>
                <Typography  id="Typography-black" paddingBottom={5}  paddingTop={2}>
                {contents.SomeourWorksection2.contant}
                </Typography>
            </Box>

            <Box id="mancard" display={'flex'} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} >
                <Box >
                    <Box id="cardnew"  textAlign={'center'} bgcolor={'white'} margin={1.5} width={370} padding={3} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}  >
                        <Box padding={2}>
                            <Box width={85} height={85} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img src={Work1} alt="" height={50} />
                            </Box>
                        </Box>

                        <Box display={'flex'} fontSize={30} alignItems={'center'} justifyItems={'center'} justifyContent={'center'} flexDirection={'column'} paddingTop={1}>
                            <Typography color="#053480" fontSize={18} fontWeight={800}>
                            {contents.SomeourWorksection2.card.title1}
                            </Typography>
                            <Typography alignItems={'center'} fontSize={12} padding={3} color={"#053480"} textAlign={'center'}>
                            {contents.SomeourWorksection2.card.description1}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
                </Box>

                <Box >
                    <Box id="cardnew" bgcolor={'white'} textAlign={'center'} margin={1.5} width={370} padding={3} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}  >
                        <Box padding={2}>
                            <Box width={85} height={85} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img src={Work2} alt="" height={50} />
                            </Box>
                        </Box>

                        <Box  display={'flex'} fontSize={30} alignItems={'center'} justifyItems={'center'} justifyContent={'center'} flexDirection={'column'} paddingTop={1}>
                            <Typography color="#053480" fontSize={18} fontWeight={800}>
                            {contents.SomeourWorksection2.card.title2}
                            </Typography>
                            <Typography alignItems={'center'} fontSize={12} padding={3} color={"#053480"} textAlign={'center'}>
                            {contents.SomeourWorksection2.card.description2}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>

                </Box>

                <Box >
                    <Box id="cardnew" bgcolor={'white'} textAlign={'center'} margin={1.5} width={370} padding={3} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}  >
                        <Box padding={2}>
                            <Box width={85} height={85} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <img src={Work3} alt="" height={50} />
                            </Box>
                        </Box>

                        <Box  display={'flex'} fontSize={30} alignItems={'center'} justifyItems={'center'} justifyContent={'center'} flexDirection={'column'} paddingTop={1}>
                            <Typography color="#053480" fontSize={18} fontWeight={800}>
                            {contents.SomeourWorksection2.card.title3}
                            </Typography>
                            <Typography alignItems={'center'} fontSize={12} padding={3} color={"#053480"} textAlign={'center'}>
                            {contents.SomeourWorksection2.card.description3}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' className="hover-button" padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Someourwork2
