    
import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Month from "../../assets/single blog page/Month.svg"
import { useDispatch, useSelector } from 'react-redux'
import { fetchcategories } from '../../features/Categories/categoriesSlice'
import { Link } from 'react-router-dom'
import LatestBlog from './LatestBlog'

const Categories_name = ({Api_url}) => {
    const dispatch = useDispatch();
    const { categoriescontents, isLoading } = useSelector((state) => state.categorie);

    
    useEffect(() => {
        dispatch(fetchcategories());
    }, [dispatch]);

    return (
        <>
            <Box className="singleblogpage-man1">
                <Box className="singleblogpage-man11">
                    <Typography id='blog-heading'>Blog Heading</Typography>
                    <Box className="sigleblog-second">
                        <Box className="categories">
                            <Typography id='categorie-heading'>Categories</Typography>
                           
                            {categoriescontents.map((categoriescontent) => (
                                <Link
                                key={categoriescontent?.id}
                                to={`/${process.env.SLUG_URL}/categories/${categoriescontent.slug}/`}
                                state={{ id:categoriescontent.id , name:categoriescontent.name }}
                                style={{ textDecoration: "none" }}
                                >
                                    <Typography id='card-heading'>
                                        {categoriescontent.name}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>

                     <LatestBlog Api_url={Api_url}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Categories_name;