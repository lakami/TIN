import React  from "react";
import {Container, Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const ProductContainer = ({name, price, weight, image, product_id}) => {
    return (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Link href={"/product/" + product_id} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom:1,
                        marginTop:1,
                        '& > img': { m: 1, width: '22ch' },
                    }}>
                        <img src={"http://localhost:3001/" + image} alt={name} />
                        <Box sx={{
                            m: 1,
                            minHeight: '8ch' ,
                            maxWidth: '22ch',
                            textAlign: 'center',
                        }}>
                            <Typography variant="overline" display="block" gutterBottom>
                                {name}
                            </Typography>
                        </Box>

                        <Typography variant="overline" display="block" gutterBottom>
                            {price} zł
                        </Typography>

                        <Typography variant="overline" display="block" gutterBottom>
                            {(price/weight*1000).toFixed(2)} zł/kg
                        </Typography>

                    </Link>
                    <AddToCartButton product_id={product_id}/>
                </Box>
    )
}

export default ProductContainer;