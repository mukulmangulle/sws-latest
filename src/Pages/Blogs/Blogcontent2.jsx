import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Blog1 from "../../assets/single blog page/blog1.png"
import Blog2 from "../../assets/single blog page/blog2.png"
import Blog4 from "../../assets/single blog page/blog4.png"
import Blog5 from "../../assets/single blog page/blog5.png"
import Month from "../../assets/single blog page/Month.svg"
import { useDispatch, useSelector, } from 'react-redux'
import { fetchcategories } from '../../features/Categories/categoriesSlice'
import Categoriestitle from '../CategoriesPhpBlogPage/Categoriestitle'


const Blogcontent2 = () => {
    const dispatch = useDispatch();
    const {categoriescontents, isLoading}=useSelector((state)=> state.categorie)
    // console.log(fetchcategories)

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchcategories());
        };
        fetchData();
        return () => clearInterval();
    }, [dispatch, isLoading]);
    return (
        <>
            <Box className="singleblogpage-man1"  >

                <Box className="singleblogpage-man11" >
                    <Box className="categories">
                        <Typography id="unlocking">Blog Heading</Typography>
                        <Typography fontWeight={700} fontSize={22}>categories</Typography>
                        {
                            categoriescontents.map((categoriescontent) => (
                                <Categoriestitle key={categoriescontent.id} categoriescontent={categoriescontent} />))
                        }

                    </Box>

                    <Box className="unlocking"   >
                        {/* 1 */}
                        <Box className="unlocking-child" display={'flex'} marginY={3} >
                            <img src={Blog1} alt="" width={"30%"} />
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
                            <img src={Blog2} alt="" width={"30%"} />
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
                            <img src={Blog4} alt="" width={"30%"} />
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
                            <img src={Blog5} alt="" width={"30%"} />
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
        </>
    )
}

export default Blogcontent2
