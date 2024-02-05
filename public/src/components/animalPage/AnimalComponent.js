import React, {Fragment, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductContainer from "../productContainer/ProductContainer";

const AnimalComponent = () => {

    const {animalCategory_id} = useParams();
    const [animalCategory, setAnimalCategory] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/server/products/categoryAnimal/' + animalCategory_id)
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

        axios.get('/server/categoryAnimal/' + animalCategory_id)
            .then(res => {
                setAnimalCategory(res.data.name);
                console.log(res.data)
            }).catch(err => {
            console.log(err);
        })

    }, [animalCategory_id])

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
                {animalCategory}

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

export default AnimalComponent;