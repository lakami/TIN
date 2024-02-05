import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const OrderDetails = () => {
    const {order_id} = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/server/orders/${order_id}`)
            .then(res => {
                console.log(res.data);
                setCartItems(res.data);
                const join = res.data.map(item => item.product_id).join(',');
                axios.get('/server/products?product_ids=' + join)
                    .then(res => {
                        var products1 = res.data.map(product => {
                            return {
                                product_id: product.product_id,
                                name: product.name,
                                price: product.price,
                                weight: product.weight,
                                image: product.image_id,
                            }
                        })
                        setProducts(products1);
                        console.log(products1)
                    }).catch(err => {
                        console.log(err);
                    })
            }).catch(err => {
                console.log(err);
            })
    }, [order_id]);

    return (
        <Fragment>
            <Typography variant="h6"
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
                        }}>
                Szczegóły zamówienia o id: {order_id}
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID PRODUKTU</TableCell>
                            <TableCell align="left">NAZWA PRODUKTU</TableCell>
                            <TableCell align="left">ILOŚĆ</TableCell>
                            <TableCell align="left">CENA JEDNOSTKOWA</TableCell>
                            <TableCell align="right">CENA ŁĄCZNIE</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            products.length > 0 && cartItems.length > 0 && products.map(product => {
                                const cartItem = cartItems.find(item => item.product_id === product.product_id);
                                return (
                                    <TableRow
                                        key={product.product_id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {product.product_id}
                                        </TableCell>
                                        <TableCell align="left">{product.name}</TableCell>
                                        <TableCell align="left">{cartItem.quantity}</TableCell>
                                        <TableCell align="left">{product.price} zł</TableCell>
                                        <TableCell align="right">{(product.price * cartItem.quantity).toFixed(2)} zł</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        <TableRow>
                            <TableCell colSpan={4}>ŁĄCZNA KWOTA</TableCell>
                            <TableCell align="right">
                                {
                                    cartItems.map(item => {
                                        var prod = products.find(product => product.product_id == item.product_id)
                                        return (prod ? prod.price : 0) * item.quantity
                                    }).reduce((a, b) => a + b, 0).toFixed(2)
                                } zł
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default OrderDetails;