import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Mnavbar() {
  return (
    <Box sx={{ maxWidth: 1920, margin: 'auto' }} bgcolor={"lightsteelblue"} position={'sticky'} top={0} color={'white'} width={"100%"} display={'flex'} flexWrap={"wrap"} padding={3} alignItems={"center"} justifyContent={"space-evenly"}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs"> blog</Link>
      <Link to="/contact" >Contact</Link>
      <Link to="/careermain">career</Link>
     
      <Link to="/PhpDevelopment">Php Development</Link>
      <Link to="/Service">Service</Link>
      <Link to="/phpdepartment">Php department</Link>
      <Link to="/Blog">All Blog</Link>


    </Box>
  );
}