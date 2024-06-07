
import { Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Errowleft from "../../assets/single blog page/errowleft.svg";
import Errowright from "../../assets/single blog page/errowright.svg";
import Facebook from "../../assets/single blog page/facebook.svg";
import Twitter from "../../assets/single blog page/twitter.svg";
import Pintrest from "../../assets/single blog page/pintrest.svg";
import Linkdin from "../../assets/single blog page/linkdin.svg";
import Blckt from "../../assets/single blog page/blact.svg";
import Youtuve from "../../assets/single blog page/youtuve.svg";
import Wordpress from "../../assets/single blog page/wordpress.svg";
import { useLocation, useParams } from 'react-router';
import Categories_name from './Categories_name';

const SingleLatest = ({ Api_url }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true); 
  const params = useParams();
  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
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
  }, []);

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
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'} >
                  <img height={30} src={Errowleft} alt="" />
                  <Typography id='pregraph' margin={1}>Previous</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} >
                  <Typography id='pregraph' margin={1}>Next</Typography>
                  <img height={30} src={Errowright} alt="" />
                </Box>
              </Box>
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

export default SingleLatest;
