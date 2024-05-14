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


const SameOurWork2 = () => {
    const dispatch = useDispatch()
    const { contents } = useSelector((state) => state.content);


    useEffect(() => {
        dispatch(fetchcontents())
    }, [dispatch]);

    return (
        <Box sx={{ maxWidth: 1920, margin: 'auto' }}  paddingBottom={5} className="work flex-center-coulmn" >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} paddingTop={5}>
                <Typography variant='h2' id="Heading-h2"   >
                    {contents.SomeourWorks.heading}
                </Typography>
                <Typography width={"100%"} id="Typography-black" paddingBottom={5} paddingTop={2}>
                    {contents.SomeourWorks.contant}
                </Typography>
            </Box>

            <Box width={"80%"} id="mancard" className="flex-center" flexWrap={'wrap'} >

            
                    <Box id="card" textAlign={'center'} margin={3} width={420} padding={4} className="flex-center" flexDirection={'column'}  >
                        <Box id="work-margin" margin={3}>
                            <Box className="work-background flex-center" width={100} height={100} >
                                <img src={Work1} alt="" />
                            </Box>
                        </Box>

                        <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography className='card-heading' color="#053480" fontSize={24} fontWeight={800}>
                                {contents.SomeourWorks.card.title1}
                            </Typography>
                            <Typography className='card-pregraph' id='ludo-earn-p' alignItems={'center'} fontSize={14} padding={4} color={"#053480"} textAlign={'center'}>
                                {contents.SomeourWorks.card.description1}

                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
              

                    
                        <Box id="card" textAlign={'center'} margin={3} width={420} padding={4} className="flex-center" flexDirection={'column'}  >
                            <Box id="work-margin" margin={3}>
                                <Box className="work-background flex-center" width={100} height={100} >
                                    <img src={Work2} alt="" />
                                </Box>
                            </Box>

                            <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                                <Typography className='card-heading' color="#053480" fontSize={24} fontWeight={800}>
                                    {contents.SomeourWorks.card.title2}
                                </Typography>
                                <Typography id='ludo-earn-p' alignItems={'center'} fontSize={14} padding={4} color={"#053480"} textAlign={'center'}>
                                    {contents.SomeourWorks.card.description2}

                                </Typography>
                            </Box>
                            <CardActions>
                                <Button id='view-work' padding={3} >View Work</Button>
                            </CardActions>
                        </Box>
                   

            
                    <Box id="card" textAlign={'center'} margin={3} width={420} padding={4} className="flex-center" flexDirection={'column'}  >
                        <Box id="work-margin" margin={3}>
                            <Box className="work-background flex-center" width={100} height={100} >
                                <img src={Work3} alt="" />
                            </Box>
                        </Box>

                        <Box display={'flex'} variant="h6" className="flex-center" flexDirection={'column'} paddingTop={1}>
                            <Typography className='card-heading' color="#053480" fontSize={24} fontWeight={800}>
                                {contents.SomeourWorks.card.title3}
                            </Typography>
                            <Typography id='ludo-earn-p' alignItems={'center'} fontSize={14} padding={4} color={"#053480"} textAlign={'center'}>
                                {contents.SomeourWorks.card.description3}
                            </Typography>
                        </Box>
                        <CardActions>
                            <Button id='view-work' padding={3} >View Work</Button>
                        </CardActions>
                    </Box>
               
            </Box>
        </Box>
    )
}

export default SameOurWork2
