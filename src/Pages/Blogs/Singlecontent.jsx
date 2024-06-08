import { Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Facebook from "../../assets/single blog page/facebook.svg";
import Twitter from "../../assets/single blog page/twitter.svg";
import Pintrest from "../../assets/single blog page/pintrest.svg";
import Linkdin from "../../assets/single blog page/linkdin.svg";
import Blckt from "../../assets/single blog page/blact.svg";
import Youtuve from "../../assets/single blog page/youtuve.svg";
import Wordpress from "../../assets/single blog page/wordpress.svg";
import { useLocation, useParams } from 'react-router';
import Categories_name from './Categories_name';
import NextPrevious from './NextPrevious';

const Singlecontent = ({ Api_url }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const location = useLocation();
  const id = location.state ? location.state.id : null; // Ensure location.state exists before destructure

  useEffect(() => {
    if (!id) {
      // Handle case where id is not available
      console.error('No id found in location state');
      return;
    }

    fetch(`${Api_url}posts/${id}`)
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
  }, [id, Api_url]); // Include id and Api_url in dependencies array

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Box maxWidth={"1920px"} margin={'auto'} className="flex-center" marginY={5} flexDirection={"column"}>
        <Box id="about-background">
          <Typography id="heading-1" variant='h2'>
            {blog?.title?.rendered}
          </Typography>
        </Box>
        <Box className="singleblogpage-man">
          <Box className="all-pg420">
            <img className='singleblogpage-img' src={blog?.jetpack_featured_media_url} alt="" />
            <Box className="singlepage-section2">
              <Typography flexWrap={'wrap'} id='pregraph' marginY={3} dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />
              
                     
                            <NextPrevious currentId={id}  Api_url={Api_url} />
                  

              <Box className="logo" width={280} display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={4} >
                <img height={36} src={Facebook} alt="" />
                <img height={30} src={Twitter} alt="" />
                <img height={30} src={Pintrest} alt="" />
                <img height={30} src={Linkdin} alt="" />
                <img height={30} src={Blckt} alt="" />
                <img height={30} src={Youtuve} alt="" />
                <img height={30} src={Wordpress} alt="" />
              </Box>
            </Box>
          </Box>
          <Categories_name Api_url={Api_url} />
        </Box>
      </Box>
    </>
  )
}
export default Singlecontent;




// import { Box, Typography, CircularProgress, Button } from '@mui/material';
// import React, { useEffect, useState } from 'react';

// import Errowleft from "../../assets/single blog page/errowleft.svg";
// import Errowright from "../../assets/single blog page/errowright.svg";
// import Facebook from "../../assets/single blog page/facebook.svg";
// import Twitter from "../../assets/single blog page/twitter.svg";
// import Pintrest from "../../assets/single blog page/pintrest.svg";
// import Linkdin from "../../assets/single blog page/linkdin.svg";
// import Blckt from "../../assets/single blog page/blact.svg";
// import Youtuve from "../../assets/single blog page/youtuve.svg";
// import Wordpress from "../../assets/single blog page/wordpress.svg";
// import Categories_name from './Categories_name';
// import { useLocation, useParams } from 'react-router';
// import { Link } from 'react-router-dom';

// const Singlecontent = ({ Api_url }) => {
//   const [blog, setBlog] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const params = useParams();
//   const location = useLocation();
//   const { id } = location.state || {};

//   useEffect(() => {
//     fetch(`${Api_url}posts/${id}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         setBlog(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   const handleNavigation = (id) => {
//     window.location.href = `${window.location.origin}/singlecontent/${id}`;
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <>
//       <Box maxWidth={"1920px"} margin={'auto'} className="flex-center" marginY={5} flexDirection={"column"}>
//         <Box id="about-background">
//           <Typography id="heading-1" variant='h2'>
//             {blog?.title?.rendered}
//           </Typography>
//         </Box>
//         <Box className="singleblogpage-man">
//           <Box className="all-pg420">
//             <img className='singleblogpage-img' src={blog?.jetpack_featured_media_url} alt="" />
//             <Box className="singlepage-section2">
//               <Typography flexWrap={'wrap'} id='pregraph' marginY={3} dangerouslySetInnerHTML={{ __html: blog?.content?.rendered }} />
//               <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
//                 <Box display={'flex'} alignItems={'center'} >
//                   <Button onClick={() => handleNavigation(blog.previousId)}>
//                     <img height={30} src={Errowleft} alt="" />
//                   </Button>
//                   <Typography id='pregraph' margin={1}>Previous</Typography>
//                 </Box>
//                 <Box display={'flex'} alignItems={'center'} >
//                   <Typography id='pregraph' margin={1}>Next</Typography>
//                   <Link to={`/singlecontent/${id}`}>
//       <Button>
//         <img height={30} src={Errowright} alt="" />
//       </Button>
//     </Link>
//                 </Box>
//               </Box>
//               <Box className="logo" width={280} display={'flex'} alignItems={'center'} justifyContent={'space-between'} marginTop={4} >
//                 <img height={36} src={Facebook} alt="" />
//                 <img height={30} src={Twitter} alt="" />
//                 <img height={30} src={Pintrest} alt="" />
//                 <img height={30} src={Linkdin} alt="" />
//                 <img height={30} src={Blckt} alt="" />
//                 <img height={30} src={Youtuve} alt="" />
//                 <img height={30} src={Wordpress} alt="" />
//               </Box>
//             </Box>
//           </Box>
//           <Categories_name Api_url={Api_url} />
//         </Box>
//       </Box>
//     </>
//   )
// }

// export default Singlecontent;
