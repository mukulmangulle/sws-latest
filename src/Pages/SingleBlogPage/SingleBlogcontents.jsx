import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Blog1 from "../../assets/single blog page/blog1.png"
import Blog2 from "../../assets/single blog page/blog2.png"
import Blog4 from "../../assets/single blog page/blog4.png"
import Blog5 from "../../assets/single blog page/blog5.png"
import Month from "../../assets/single blog page/Month.svg"
import Errowleft from "../../assets/single blog page/errowleft.svg"
import Errowright from "../../assets/single blog page/errowright.svg"
import BLOGMAN from "../../assets/single blog page/BLOGMAN.png"
import Facebook from "../../assets/single blog page/facebook.svg"
import Twitter from "../../assets/single blog page/twitter.svg"
import Pintrest from "../../assets/single blog page/pintrest.svg"
import Linkdin from "../../assets/single blog page/linkdin.svg"
import Blckt from "../../assets/single blog page/blact.svg"
import Youtuve from "../../assets/single blog page/youtuve.svg"
import Wordpress from "../../assets/single blog page/wordpress.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchblogcontents } from '../../features/blog/blogsSlice'



const SingleBlogcontents = () => {

  const dispatch = useDispatch()
  const { blogcontents } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchblogcontents())
  }, [dispatch]);



  return (
    <>
      <Box maxWidth={"1920px"} margin={'auto'} className="flex-center" marginY={5} >
        <Box className="singleblogpage-man" width={"85%"} display={"flex"} alignItems={"start"} justifyContent={"start"} flexWrap={'wrap'}  >
          <Box className="singleblogpage-man1" width={"720px"} paddingX={5} marginTop={3}>
            <Typography id="unlocking">Blog Heading</Typography>
            <Box className="singleblogpage-man11">
              <Box marginY={1} color={"#053480"} display={'flex'} height={500} alignItems={"start"} justifyContent={'space-evenly'} flexDirection={"column"}>

                <Typography fontWeight={700} fontSize={22}> Categrories</Typography>
                <Typography id='pregraph'>Fastivals </Typography>
                <Typography id='pregraph'>Laravel</Typography>
                <Typography id='pregraph'>PHP</Typography>
                <Typography id='pregraph'>React</Typography>
                <Typography id='pregraph'>Shopify</Typography>
                <Typography id='pregraph'>Web Development</Typography>
                <Typography id='pregraph'>Woo Commerce </Typography>
                <Typography id='pregraph' >Wordpress </Typography>
                <Typography id='pregraph'>Wordpress Plagins</Typography>

              </Box>

              <Box className="unlocking" width={450} marginY={5} >
                {/* 1 */}
                <Box className="unlocking-child" display={'flex'} marginY={3} >
                  <img src={Blog1} alt="" height={110} />
                  <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                    <Typography lineHeight={1.1} id='pregraph'>Unlocking the Potential:  <br /> Add Me to Search Strategies</Typography>
                    <Box display={"flex"} marginTop={1.2} >
                      <img src={Month} alt="" height={25} />
                      <Typography color={"#053480"} marginLeft={1}>
                        27-04-2024
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* 2 */}
                <Box className="unlocking-child" display={'flex'} marginY={3}>
                  <img src={Blog2} alt="" height={110} />
                  <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                    <Typography fontWeight={600} color={"#053480"} lineHeight={1.1} id='pregraph'>Unlocking the Potential:
                      <br />Add Me to Search Strategies</Typography>
                    <Box display={"flex"} marginTop={1.2} >
                      <img src={Month} alt="" height={25} />
                      <Typography color={"#053480"} marginLeft={1}>
                        27-04-2024
                      </Typography>
                    </Box>
                  </Box>
                </Box>


                {/* 3 */}
                <Box className="unlocking-child" display={'flex'} marginY={3} >
                  <img src={Blog4} alt="" height={110} />
                  <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                    <Typography fontWeight={600} color={"#053480"} lineHeight={1.1} id='pregraph'>Unlocking the Potential: <br /> Add Me to Search Strategies</Typography>
                    <Box display={"flex"} marginTop={1.2} >
                      <img src={Month} alt="" height={25} />
                      <Typography color={"#053480"} marginLeft={1}>
                        27-04-2024
                      </Typography>
                    </Box>
                  </Box>
                </Box>


                {/* 4 */}
                <Box className="unlocking-child" display={'flex'} marginY={3}>
                  <img src={Blog5} alt="" height={110} />
                  <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                    <Typography fontWeight={600} color={"#053480"} lineHeight={1.1} id='pregraph'>Unlocking the Potential: <br /> Add Me to Search Strategies</Typography>
                    <Box display={"flex"} marginTop={1.2} >
                      <img src={Month} alt="" height={25} />
                      <Typography className='calander' color={"#053480"} marginLeft={1}>
                        27-04-2024
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box></Box>
          </Box>

          <Box className="singleblogpage-man2" width={"815px"} display={"flex"} alignItems={'START'} padding={3} flexDirection={'COLUMN'} >
            <img className='singleblogpage-img' src={BLOGMAN} alt="" />

            <Box className="singlepage-section2" width={"100%"}>
              <Typography id="unlocking" marginY={3} marginTop={6} lineHeight={1} variant='h4' fontSize={32} fontWeight={600} color={'#053480'}>   
                {blogcontents[0] && blogcontents[0].title && blogcontents[0].title.rendered}
   
              </Typography>


              <Typography flexWrap={'wrap'} id='pregraph' marginY={3} style={{ lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: blogcontents[0] && blogcontents[0].content && blogcontents[0].content.rendered} }
              />


{/* 
              <Typography id='pregraph' marginY={4} lineHeight={1.8}>dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the ‘Add Me to Search‘ process”
                offering insights and practical tipsto elevate your online visibility game.
                Table Of Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create Your Google People Card?Where is my…</Typography> */}


              {/* <Typography id="unlocking" marginY={3} marginTop={6} lineHeight={1} variant='h5' fontSize={26} fontWeight={600} color={'#053480'}>Unlocking the Potential: Add Me to Search Strategies</Typography> */}

              {/* <Typography id='pregraph' marginY={3} lineHeight={1.8}>Introduction: In the dynamic digital landscape standing out is crucial. This comprehensive  guide Demystifying the ‘Add Me to Search‘ process”
                offering insights and practical tipsto elevate your online visibility game.
                Table Of Contents Introduction:What is add me on Google?Understanding the Significanceof "Add Me to Search"How To Create Your Google People Card?Where is my… </Typography> */}

              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'} >
                  <img height={30} src={Errowleft} alt="" />
                  <Typography id='pregraph' margin={1}>Previous</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} >
                  <Typography id='pregraph' fontSize={22} margin={1}>Next</Typography>
                  <img height={30} src={Errowright} alt="" />
                </Box>
              </Box>

              <Box className="logo" width={280} display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={4}>
                <img height={30} src={Facebook} alt="" />
                <img height={30} src={Twitter} alt="" />
                <img height={30} src={Pintrest} alt="" />
                <img height={30} src={Linkdin} alt="" />
                <img height={30} src={Blckt} alt="" />
                <img height={30} src={Youtuve} alt="" />
                <img height={30} src={Wordpress} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SingleBlogcontents
