import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Mnavbar() {
  return (
    <Box bgcolor={"lightsteelblue"} position={'sticky'} top={0} color={'white'} width={"100%"} display={'flex'} flexWrap={"wrap"} padding={3} alignItems={"center"} justifyContent={"space-evenly"}>
           <Link href="/">Home</Link>
           <Link href="/about">About</Link>
           <Link href="/blog"> blog</Link>
          
           <Link href="/singleblog"> single blog</Link>
           <Link href="/contact" >Contact</Link>
           <Link href="/categories">categories</Link>
           <Link href="/careermain">careermain</Link>
           <Link href="/PhpDevelopment">Php Development</Link>
           <Link href="/Service">Service</Link>
           <Link href="/phpdepartment">Php department</Link>
    </Box>
  );
}