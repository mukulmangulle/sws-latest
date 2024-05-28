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

    const { blogcontents } = useSelector((state) => state.blogs);
    const { categoriescontents, isLoading } = useSelector((state) => state.categorie)


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

                    <Box id="unlocking"   >
                        {/* 1 */}

                        {
                            blogcontents.slice(1, 5).map((blogcontent) => (
                                <Box id="unlocking-child" display={'flex'}  marginY={3} >
                                    <img className=''
                                     src={blogcontent.jetpack_featured_media_url} alt="" width={"60%"}  />
                                    <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                                        <Typography id='date-title'>
                                            {
                                                blogcontent.title.rendered
                                            }
                                            </Typography>
                                        <Box display={"flex"} marginTop={1.2} >
                                            <img src={Month} alt="" height={25} />
                                            
                                            <Typography color={"#053480"} marginLeft={1}>
                                                {blogcontent.modified}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }






                    </Box></Box>
            </Box>
        </>
    )
}

export default Blogcontent2
