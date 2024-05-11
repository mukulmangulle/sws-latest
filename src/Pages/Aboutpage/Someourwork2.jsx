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


const SameOurWork = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <Box sx={{ maxWidth: 1920, margin: 'auto' }} id="work" paddingBottom={5}className="flex-center-coulmn" >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} paddingTop={5}>
                <Typography variant='h2' id="Heading-h2"   >
                    {contents.SomeourWorks.heading}
                </Typography>
                <Typography width={"70%"} id="Typography-black" paddingBottom={5} paddingTop={2}>
                    {contents.SomeourWorks.contant}
                </Typography>
            </Box>

            <Box id="mancard" className="flex-center" flexWrap={'wrap'} >

                <Box >
                    <Box id="card" textAlign={'center'} margin={3} width={450} padding={3} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}  >
                        <Box id="work-margin" margin={3}>
                            <Box className="flex-center">
                                <img src={Work1} alt="" />
                            </Box>
                        </Box>

                        <Box variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography color="#053480" fontSize={22} fontWeight={800}>
                                Allan Flowers Market                             </Typography>
                            <Typography id='ludo-earn-p' alignItems={'center'} fontSize={12} padding={4} color={"#053480"} textAlign={'center'}>
                                {contents.SomeourWorks.card.description2}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
                </Box>

                <Box >
                    <Box id="card" textAlign={'center'} margin={3} width={450} padding={3} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}  >
                        <Box id="work-margin" margin={3}>
                            <Box  className="flex-center">
                                <img src={Work2} alt="" />
                            </Box>
                        </Box>

                        <Box variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography color="#053480" fontSize={22} fontWeight={800}>
                                Bright Square
                            </Typography>
                            <Typography id='ludo-earn-p' alignItems={'center'} fontSize={12} padding={4} color={"#053480"} textAlign={'center'}>
                                {contents.SomeourWorks.card.description2}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
                </Box>

                <Box >
                    <Box id="card" textAlign={'center'} margin={3} width={450} padding={4} className="flex-center" flexDirection={'column'}  >
                        <Box id="work-margin" margin={3}>
                            <Box className="flex-center">
                                <img src={Work1} alt="" />
                            </Box>
                        </Box>

                        <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography color="#053480" fontSize={22} fontWeight={800}>
                                {contents.SomeourWorks.card.title3}
                            </Typography>
                            <Typography id='ludo-earn-p' alignItems={'center'} fontSize={12} padding={4} color={"#053480"} textAlign={'center'}>
                                {contents.SomeourWorks.card.description1}

                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SameOurWork
