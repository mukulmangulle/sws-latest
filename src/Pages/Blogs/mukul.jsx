import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Month from "../../assets/single blog page/Month.svg";
import { Link, useParams } from 'react-router-dom';

const LatestBlo = ({ Api_url }) => {

    
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
   

    const { id } = useParams();
    useEffect(() => {
        fetch(`${Api_url}posts/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setBlog(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);
// console.log(process.env.SLUG_URL)
    return (
        <>
            <Box id="unlocking">
                <Typography id='categorie-heading'>Latest Blogs</Typography>

                {loading ? (
                    <CircularProgress />
                ) : (
                    blog.slice(1, 4).map((blog) => (
                        <Box key={blog?.id} id="unlocking-child" display={'flex'} marginY={3}>
                            <img id='unlocking-img' src={blog.jetpack_featured_media_url} alt="" />
                            <Box padding={1} display={"flex"} alignItems={"start"} justifyContent={"center"} flexDirection={"column"}>
                                <Link
                                    to={`/${process.env.SLUG_URL}/${blog?.slug}/`}
                                    state={{ id: blog?.id }}

                                    style={{ textDecoration: "none" }}
                                    id='date-title'>
                                    {blog.title.rendered}
                                </Link>
                              
                                <Box display={"flex"} marginTop={1.2}>
                                    <img src={Month} alt="" height={25} />
                                    <Typography color={"#053480"} marginLeft={1}>
                                        {blog.modified}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    ))
                )}
            </Box>
        </>
    )
}
export default LatestBlo;





import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchcategories } from '../../features/Categories/categoriesSlice';
import Carditem from './Carditem';
import LatestBlog from './LatestBlog';

const BoxCategorie = ({ Api_url }) => {
  const dispatch = useDispatch();
  const { categoriescontents, isLoading } = useSelector((state) => state.categorie);
  const [loading, setLoading] = useState(true);
  
  const [blogContentForPageTwo, setBlogContentForPageTwo] = useState([]);

  useEffect(() => {
    dispatch(fetchcategories());
  }, [dispatch]);

  const params = useParams();
  const location = useLocation();

  const { id } = location.state || {};

  useEffect(() => {
    if (id) {
      fetch(`https://sohamsolution.com/wp-json/wp/v2/posts?categories=${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.slug}`);
          }
          return response.json();
        })
        .then(data => {
          setBlogContentForPageTwo(data);
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false); 
        });
    }
  }, [id]);

  if (isLoading || loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6} flexDirection={"column"}>
        <Box id="blog480-center" width={"85%"} display={'flex'} alignItems={"center"}  flexWrap={"wrap"} margin={"auto"}>
          {Array.isArray(blogContentForPageTwo) ? (
            blogContentForPageTwo.map((blog) => (
              <Carditem key={blog.id} blogcontent={blog} />
            ))
          ) : (
            <Box>Data is not an array</Box>
          )}
        </Box>

        <Box width={"85%"}  >
          <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginY={6}   >All Categories</Typography>
          
          <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>
            {categoriescontents?.slice(0, 4).map((categoriescontent) => (
              <Box className="categories-box" key={categoriescontent?.id}>
                <Link
                  to={`/${process.env.SLUG_URL}/categories/${categoriescontent?.slug}/`}
                  state={{ id: categoriescontent?.id, name: categoriescontent?.name }}
                  style={{ textDecoration: "none" }}
                >
                  <Typography id='card-heading'>
                    {categoriescontent.name}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BoxCategorie;



