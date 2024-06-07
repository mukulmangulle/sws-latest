
// import { Box, Typography } from '@mui/material'
// import React, { useEffect } from 'react'
// import Month from "../../assets/single blog page/Month.svg"
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchcategories } from '../../features/Categories/categoriesSlice'
// import { Link } from 'react-router-dom'
// import LatestBlog from './LatestBlog'

// const Categories_name = ({Api_url}) => {
//     const dispatch = useDispatch();
//     const { categoriescontents, isLoading } = useSelector((state) => state.categorie);


//     useEffect(() => {
//         dispatch(fetchcategories());
//     }, [dispatch]);

//       if (isLoading) {
//         return (
//             <Typography variant='h5' id="Heading-h2" textAlign={'center'}>Loading......</Typography>
//         )
//     }
//     return (
//         <>
//             <Box className="singleblogpage-man1">
//                 <Box className="singleblogpage-man11">
//                     <Typography id='blog-heading'>Blog Heading</Typography>
//                     <Box className="sigleblog-second">
//                         <Box className="categories">
//                             <Typography id='categorie-heading'>Categories</Typography>

//                             {categoriescontents.map((categoriescontent) => (
//                                 <Link
//                                 key={categoriescontent?.id}
//                                 to={`/${process.env.SLUG_URL}/categories/${categoriescontent.slug}/`}
//                                 state={{ id:categoriescontent.id , name:categoriescontent.name }}
//                                 style={{ textDecoration: "none" }}
//                                 >
//                                     <Typography id='card-heading'>
//                                         {categoriescontent.name}
//                                     </Typography>
//                                 </Link>
//                             ))}
//                         </Box>

//                      {/* <LatestBlog Api_url={Api_url}/> */}
//                     </Box>
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default Categories_name;





// import { Box, Typography } from '@mui/material';
// import React, { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchcategories } from '../../features/Categories/categoriesSlice';
// import { Link } from 'react-router-dom';


// const Categories_name = () => {
//     const dispatch = useDispatch();
//     const { categoriescontents, isLoading } = useSelector((state) => state.categorie);
//     const imageListRef = useRef(null);

//     useEffect(() => {
//         dispatch(fetchcategories());
//         initSlider();
//     }, [dispatch]);

//     const initSlider = () => {
//         const imageList = imageListRef.current;
//         const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

//         const handleResize = () => {
//             const thumbPosition = (imageList.scrollLeft / maxScrollLeft) * (imageList.clientWidth);
//             // Adjust scrollbar thumb position
//         };

//         const handleScroll = () => {
//             const thumbPosition = (imageList.scrollLeft / maxScrollLeft) * (imageList.clientWidth);
//             // Adjust scrollbar thumb position
//         };

//         imageList.addEventListener("scroll", handleScroll);
//         window.addEventListener("resize", handleResize);

//         handleResize();
//     };  

//     if (isLoading) {
//         return (
//             <Typography variant='h5' id="Heading-h2" textAlign={'center'}>Loading......</Typography>
//         )
//     }

//     return (
//         <>
//             <Box className="container" style={{ textAlign: 'center' }}>
//                 <Box className='title-gallery'></Box>
//                 <Box className="slider-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <button id="prev-slide" className="slide-button material-symbols-rounded">
//                     </button>
//                     <ul className="image-list" ref={imageListRef} style={{ listStyle: 'none', padding: 0 }}>
//                         {categoriescontents.map((categoriescontent, index) => (
//                             <Box key={index} className="image-item">
//                                 <Link
//                                     to={`/${process.env.SLUG_URL}/categories/${categoriescontent.slug}/`}
//                                     state={{ id: categoriescontent.id, name: categoriescontent.name }}
//                                     style={{ textDecoration: "none" }}
//                                 >
//                                     <Typography id='card-heading'>
//                                         {categoriescontent.name}
//                                     </Typography>
//                                 </Link>
//                             </Box>
//                         ))}
//                     </ul>
//                     <button id="next-slide" className="slide-button material-symbols-rounded">
//                     </button>
//                 </Box>
//                 <Box className="slider-scrollbar">
//                     <Box className="scrollbar-track">
//                         <Box className="scrollbar-thumb"></Box>
//                     </Box>
//                 </Box>
//             </Box>
//         </>
//     );
// }

// export default Categories_name;


import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategories } from '../../features/Categories/categoriesSlice';
import { Link } from 'react-router-dom';


const Categories_name = () => {
    const dispatch = useDispatch();
    const { categoriescontents, isLoading } = useSelector((state) => state.categorie);
    const imageListRef = useRef(null);

    useEffect(() => {
        dispatch(fetchcategories());
        initSlider();
    }, [dispatch]);

    const initSlider = () => {
        const imageList = imageListRef.current;
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        let scrollPosition = 0;

        const autoScroll = () => {
            const scrollAmount = imageList.clientWidth / 2; // Adjust the scroll amount as needed
            if (scrollPosition >= maxScrollLeft) {
                scrollPosition = 0;
            } else {
                scrollPosition += scrollAmount;
            }
            imageList.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        };

        const autoScrollInterval = setInterval(autoScroll, 5000); // Adjust the interval time as needed

        return () => clearInterval(autoScrollInterval);
    };  

    if (isLoading) {
        return (
            <Typography variant='h5' id="Heading-h2" textAlign={'center'}>Loading......</Typography>
        )
    }

    return (
        <>
            <Box className="container" style={{ textAlign: 'center' }}>
                <Box className='title-gallery'></Box>
                <Box className="slider-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button id="prev-slide" className="slide-button material-symbols-rounded">
                    </button>
                    <ul className="image-list" ref={imageListRef} style={{ listStyle: 'none', padding: 0 }}>
                        {categoriescontents.map((categoriescontent, index) => (
                            <Box key={index} className="image-item">
                                <Link
                                    to={`/${process.env.SLUG_URL}/categories/${categoriescontent.slug}/`}
                                    state={{ id: categoriescontent.id, name: categoriescontent.name }}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography id='card-heading'>
                                        {categoriescontent.name}
                                    </Typography>
                                </Link>
                            </Box>
                        ))}
                    </ul>
                    <button id="next-slide" className="slide-button material-symbols-rounded">
                    </button>
                </Box>
                <Box className="slider-scrollbar">
                    <Box className="scrollbar-track">
                        <Box className="scrollbar-thumb"></Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Categories_name;
