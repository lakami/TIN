import React from 'react';
import {Container, Typography} from "@mui/material";

const NotFoundElement = () => {
    return (
           <Typography
               variant="overline"
               sx={{
                   fontFamily: 'monospace',
                   fontWeight: 700,
                   fontSize: '1.3rem',
                   letterSpacing: '.3rem',
                   color: 'inherit',
                   textDecoration: 'none',
                   paddingLeft: '24px',
                   paddingRight: '24px',
               }}
           >
                Page not found 404
           </Typography>
    );
}

export default NotFoundElement;