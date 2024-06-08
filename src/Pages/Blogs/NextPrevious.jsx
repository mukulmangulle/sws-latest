
// import { Box, Button, CircularProgress, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import Errowleft from "../../assets/single blog page/errowleft.svg";
// import Errowright from "../../assets/single blog page/errowright.svg";
// import { Link, useLocation, useParams } from 'react-router-dom';

// const NextPrevious = ({ Api_url }) => {
//     const [blog, setBlog] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const params = useParams();
//     const location = useLocation();
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         fetch(`${Api_url}posts/`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setBlog(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             });
//     }, [Api_url]);

//     useEffect(() => {
//         if (location.state && location.state.slug) {
//             const index = blog.findIndex(item => item.slug === location.state.slug);
//             if (index !== -1) {
//                 setCurrentIndex(index);
//             }
//         }
//     }, [location, blog]);

//     const handleNext = () => {
//         if (currentIndex < blog.length - 1) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     const currentBlog = blog[currentIndex];

//     return (
//         <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
//             <Box display={'flex'} alignItems={'center'} >
//                 {currentIndex > 0 && (
//                     <Link to={`/${process.env.SLUG_URL}/${blog[currentIndex - 1].slug}/`}>
//                         <Button onClick={handlePrevious}>
//                             <img height={30} src={Errowleft} alt="" />
//                         </Button>
//                     </Link>
//                 )}
//                 <Typography id='pregraph' margin={1}>Previous</Typography>
//             </Box>
//             <Box display={'flex'} alignItems={'center'} >
//                 <Typography id='pregraph' margin={1}>Next</Typography>
//                 {currentIndex < blog.length - 1 && (
//                     <Link to={`/${process.env.SLUG_URL}/${blog[currentIndex + 1].slug}/`}>
//                         <Button onClick={handleNext}>
//                             <img height={30} src={Errowright} alt="" />
//                         </Button>
//                     </Link>
//                 )}
//             </Box>
//         </Box>
//     );
// };

// export default NextPrevious;



import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Errowleft from "../../assets/single blog page/errowleft.svg";
import Errowright from "../../assets/single blog page/errowright.svg";
import { Link, useLocation, useParams } from 'react-router-dom';

const NextPrevious = ({ Api_url }) => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0); // Initialize currentIndex state

    useEffect(() => {
        fetch(`${Api_url}posts/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}`);
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
    }, [Api_url]);

    useEffect(() => {
        if (location.state && location.state.slug) {
            const index = blog.findIndex(item => item.slug === location.state.slug);
            if (index !== -1) {
                setCurrentIndex(index);
            }
        }
    }, [location, blog]);

    const handleNext = () => {
        if (currentIndex < blog.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
                <CircularProgress />
            </Box>
        );
    }

    const currentBlog = blog[currentIndex];

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} >
                {currentIndex > 0 && (
                    <Link to={`/${process.env.SLUG_URL}/${blog[currentIndex - 1].slug}/`}>
                        <Button onClick={handlePrevious}>
                            <img height={30} src={Errowleft} alt="" />
                        </Button>
                    </Link>
                )}
                <Typography id='pregraph' margin={1}>Previous</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} >
                <Typography id='pregraph' margin={1}>Next</Typography>
                {currentIndex < blog.length - 1 && (
                    <Link to={`/${process.env.SLUG_URL}/${blog[currentIndex + 1].slug}/`} state={{ id: blog[currentIndex + 1].id }}>
                        <Button onClick={handleNext}>
                            <img height={30} src={Errowright} alt="" />
                        </Button>
                    </Link>
                )}
            </Box>
        </Box>
    );
};

export default NextPrevious;
