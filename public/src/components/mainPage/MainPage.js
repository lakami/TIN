import React, {Fragment, useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ProductContainer from "../productContainer/ProductContainer";
import Box from "@mui/material/Box";
import axios from "axios";
import reklama from './reklama.jpg';

const MainPage = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/server/products')
            .then(res => {
                var products = res.data.map(product => {
                    return {
                        name: product.name,
                        price: product.price,
                        weight: product.weight,
                        image: product.image_id,
                        product_id: product.product_id,
                    }
                })
                setProducts(products);
            }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
            <Fragment>
                <img src={reklama} width="100%" height="270px" style={{objectFit: "cover"}}/>
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
                        textTransform:'uppercase',
                    }}
                >
                    POLECANE PRODUKTY
                </Typography>

                <Box sx={{
                    display:"flex",
                    alignItems:"flex-start",
                    justifyContent:"space-between",
                    marginBottom:1,
                    marginTop:1,
                    flexWrap: "wrap",
                }}>
                    {products.map((product) => (
                        <ProductContainer name={product.name} price={product.price} weight={product.weight} image={product.image} product_id={product.product_id}/>
                    ))}
                </Box>
            </Fragment>
    );
}
export default MainPage;