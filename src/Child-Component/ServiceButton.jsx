import { Box, Button } from '@mui/material'
import React from 'react'

const ServiceButton = (props) => {
  const { children, style ,onClick} = props
  return (
    <> <Box display={"flex"} alignItems={'center'} justifyContent={"start"} marginTop={3}>
      <Button type="submit" className='apply-now' onClick={onClick} props={props}>
      Read More
      </Button>
    </Box>
    </>
  )
}

export default ServiceButton
