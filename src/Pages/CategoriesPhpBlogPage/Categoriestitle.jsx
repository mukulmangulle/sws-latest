import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';

// categoriescontent

const Categoriestitle = ({categoriescontent}) => {
    // console.log(categoriescontent.id)
    return (
        <>
              <Link to={`/categories/${categoriescontent.slug}`} state={{ id: categoriescontent.id }} style={{ textDecoration: "none" }} >
                
                <Typography id='card-heading'>
                {categoriescontent.name}
           
                </Typography>
            </Link>
        </>)
}
export default Categoriestitle;
