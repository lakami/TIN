import React, {Fragment, useEffect, useState} from "react";
import {useCartContext} from "../../context/CartContext";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProductSummaryView from "./productSummaryView/ProductSummaryView";
import {TextField} from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";

const Summary = () => {

    const navigate = useNavigate();

    const {
        cartItems,
        getCartSize,
        getItemQuantity,
        clearCart,
    } = useCartContext();

    const [products, setProducts] = useState([]);

    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(true);

    const goToOrderApprovedPage= (order_id) => {
        console.log(order_id)
        navigate("/order-approved/" + order_id)
    }

    const gotoErrorPage = () => {
        navigate("/404")
    };

    const approveOrder = () => {
        axios.post('/server/orders', {
            email: email,
            products: cartItems.map(item => {
                return {
                    product_id: item.id,
                    quantity: item.quantity,
                }
            })
        }).then(res => {
            clearCart();
            goToOrderApprovedPage(res.data.order_id);
        }).catch(err => {
            gotoErrorPage();
        })
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
        setInvalidEmail(!validateEmail(e.target.value));
    }

    useEffect(() => {

        let join = cartItems.map(item => item.id).join(',');
        console.log(join)
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
            })

    }, [cartItems]);

    return (
        <Fragment>
            {cartItems.length == 0
                ? (
                    <Navigate to={"/"}/>
                )
                : (
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
                        PODSUMOWANIE ZAMÓWIENIA
                    </Typography>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        paddingLeft: '24px',
                        paddingRight: '24px',
                    }}>
                        {
                            cartItems.map((cartItem) => (
                                typeof products.find(product => product.product_id == cartItem.id) !== 'undefined'
                                && <ProductSummaryView
                                    key={cartItem.id}
                                    product={products.find(product => product.product_id == cartItem.id)}
                                    getItemQuantity={getItemQuantity}
                                />
                            ))
                        }

                        <Typography
                            sx={{
                                fontWeight: 700,
                                color: 'primary.main',
                                fontStyle: 'italic',
                                marginTop: 2,
                            }}
                        >
                            ŁĄCZNIE: {getCartSize()} szt.
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                color: 'primary.main',
                                fontStyle: 'italic',
                            }}
                        >
                            SUMA: {cartItems.map((cartItem) => {
                                var prod = products.find(product => product.product_id == cartItem.id)
                                return (prod ? prod.price : 0) * cartItem.quantity
                            }).reduce((acc, itemSum) => acc + itemSum, 0).toFixed(2)} zł
                        </Typography>

                        <TextField
                            label="Email"
                            placeholder={"Podaj swój adres email"}
                            type={"email"}
                            error={invalidEmail}
                            onChange={onEmailChange}
                            value={email}
                        />

                        <Button variant="contained"
                            onClick={approveOrder}
                            autoFocus
                            disabled={invalidEmail}
                        >
                            ZŁÓŻ ZAMÓWIENIE
                        </Button>

                    </Box>

                </Fragment>)
            }
        </Fragment>

    )
}

export default Summary;