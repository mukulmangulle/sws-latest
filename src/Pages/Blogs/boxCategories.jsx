// import { Box, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useLocation, useParams } from 'react-router'
// import { Link } from 'react-router-dom'

// const BoxCategories = ({Api_url}) => {
//     const [blog, setBlog] = useState([]);
//     const params = useParams();
//     const location = useLocation()
//     const { id } = location.state
  
//     useEffect(() => {
//       fetch(`https://sohamsolution.com/wp-json/wp/v2/categories`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           // console.log('Fetched data:', data); // Check the fetched data
//           setBlog(data);
//         })
//         .catch(error => {
//           // console.error('Error fetching data:', error);
//         });
//     }, []);
  
//     // console.log('State:', blog);
//     return (
//         <>
//             <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
//                 <Box width={"85%"}  >
//                     <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >All Categories</Typography>
//                     <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>


//                         {blog?.slice(3, 7).map((blog) => (
//                             <Box className="categories-box"  >
                                
//                                  <Link id="categories-box-typo"
//                                  key={blog?.id}
//                                  to={`/${process.env.SLUG_URL}/single/${blog.slug}/`}
//                                  state={{ id: blog.id }}
                              
//                                  style={{ textDecoration: "none" }}
//                                  >
//                                     {blog.name}
                                    
//                                 </Link>
//                             </Box>
//                         ))}
//                     </Box >
//                 </Box>
//             </Box>
//         </>
//     )
// }
// export default BoxCategories
import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchcategories } from '../../features/Categories/categoriesSlice'

const BoxCategories = ({Api_url}) => {
  const dispatch = useDispatch();
  const { categoriescontents, isLoading } = useSelector((state) => state.categorie);

  
  useEffect(() => {
      dispatch(fetchcategories());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }
   
    return (
        <>
            <Box maxWidth={'1920px'} margin={"auto"} display={'flex'} alignItems={'center'} justifyContent={"center"} marginY={6}>
                <Box width={"85%"}  >
                    <Typography variant='h3' id='Heading-h2' color={'#053480'} fontWeight={600} marginBottom={3}   >All Categories</Typography>
                    <Box id="categories" display={'flex'} alignItems={'center'} justifyContent={"space-between"} flexWrap={'wrap'}>


                    {categoriescontents?.slice(0,4).map((categoriescontent) => (
                       <Box className="categories-box"  >
                                <Link
                                key={categoriescontent?.id}
                                to={`/${process.env.SLUG_URL}/cat/${categoriescontent.slug}/`}
                                state={{ id:categoriescontent.id , name:categoriescontent.name }}
                                style={{ textDecoration: "none" }}
                                >
                                    <Typography id='card-heading'>
                                        {categoriescontent.name}
                                    </Typography>
                                </Link>
                                </Box>
                            ))}                                                               
                    </Box >
                </Box>
            </Box>
        </>
    )
}
export default BoxCategories

