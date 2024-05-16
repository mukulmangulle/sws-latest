import { Box, Container, Typography } from '@mui/material'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Blog1 from "../../assets/BlogPage/blog1.png"




const AllBlogs = ({ blogcontent }) => {

    //   if(isLoading){
    //     return(
    //         <Container sx={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
    //             <Typography variant="h4"  sx={{color:"gray"}}>
    //                     Loading..........
    //             </Typography>
    //         </Container>
    //     )
    //   }

    return (
        <>
            <Box maxWidth={"1920px"} margin={"auto"} display={"flex"} alignItems={"center"} justifyContent={"center"} >

                <Box width={"84%"} className="padding-top-bottom">
                    

                    <Box display={"flex"} alignItems={'start'} justifyContent={"space-between"} flexWrap={'wrap'} >
                        {/* 1 */}
                        <Card id='blog-card'>
                            <img className='blogsimg' src={Blog1} alt="" />

                            <CardContent  >
                                <Typography gutterBottom variant="h6" className='card-heading'>
                             {blogcontent.title}
                                </Typography>
                                <Typography className='card-typography' >
                                    Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the
                                    ‘Add Me to Search‘ process”offering insights and practical tipsto elevate your online visibility game.Table Of
                                    Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create
                                    Your Google People Card?Where is my…
                                </Typography>
                            </CardContent>
                        </Card>

                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default AllBlogs;
