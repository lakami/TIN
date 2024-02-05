import React, {Fragment, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import ProductSummaryView from "../summary/productSummaryView/ProductSummaryView";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import OrderSummaryView from "./OrderSummaryView/OrderSummaryView";
import axios from "axios";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/server/orders')
            .then(res => {
                var orders1 = res.data.map(order => {
                    console.log(order.date)
                    return {
                        id: order.order_id,
                        email: order.email,
                        date: order.date,
                    }
                })
                setOrders(orders1);
                console.log(orders1)
            })
    }, []);

    return(
        <Fragment>
            <Typography
                variant="h6"
                noWrap
                component="h2"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    textTransform:'uppercase',
                    marginBottom: 2,
                }}
            >
                WSZYSTKIE ZAMÓWIENIA
            </Typography>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
            }}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID ZAMÓWIENIA</TableCell>
                                <TableCell align="left">EMAIL</TableCell>
                                <TableCell align="right">DATA ZAMÓWIENIA</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                orders.map((order) => (
                                    <OrderSummaryView
                                        key={order.id}
                                        order={order}
                                    />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>

        </Fragment>
    )
}

export default Orders;