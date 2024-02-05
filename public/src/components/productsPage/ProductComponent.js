import React, {Fragment, useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import ProductContainer from "../productContainer/ProductContainer";
import Box from "@mui/material/Box";
import axios from "axios";
import {useParams} from "react-router-dom";

const ProductComponent = () => {

    const {category_id} = useParams();
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/server/products/category/' + category_id)
            .then(res => {
                var products = res.data.map(product => {
                    return {
                        product_id: product.product_id,
                        name: product.name,
                        price: product.price,
                        weight: product.weight,
                        image: product.image_id,
                    }
                })
                setProducts(products);
            }).catch(err => {
            console.log(err);
        })

       axios.get('/server/category/' + category_id)
            .then(res => {
                setCategory(res.data.name);
            }).catch(err => {
            console.log(err);
       })

    }, [category_id])

    return (
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
                    textTransform:'uppercase',
                }}
            >
                {category}

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
                    <ProductContainer key={product.product_id} name={product.name} price={product.price} weight={product.weight} image={product.image} product_id={product.product_id}/>
                ))}
            </Box>

        </Fragment>
    );
}

export default ProductComponent;