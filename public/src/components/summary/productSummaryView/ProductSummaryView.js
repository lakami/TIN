import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const ProductSummaryView = ({
                             product,
                             getItemQuantity,
                         }) => {
    return(
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Typography sx={{
                marginRight: 'auto',
            }}>
                {product.name}
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>

                <Typography>
                    {getItemQuantity(product.product_id) + " x " + product.price + " zł = " + (getItemQuantity(product.product_id) * product.price).toFixed(2) + " zł"}
                </Typography>

            </Box>
        </Box>
    )
}

export default ProductSummaryView;