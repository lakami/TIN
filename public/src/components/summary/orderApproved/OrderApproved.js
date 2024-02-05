import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const OrderApproved = () => {

    const {order_id} = useParams();

    return(
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
            Twoje zamówienie o numarze {order_id} zostało złożone
        </Typography>
    )
}

export default OrderApproved;