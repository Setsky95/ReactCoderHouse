import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LogoNav = () => {
  return (
    <Link to="/" >
<Typography sx={{fontFamily:"times",fontWeight:"bold", color:"white"}} variant='h4'>D</Typography>
    </Link>  )
}

export default LogoNav