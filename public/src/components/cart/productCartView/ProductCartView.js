import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCartView = ({
                             product,
                             increaseItemQuantity,
                             decreaseItemQuantity,
                             deleteItem,
                             getItemQuantity,
                             goToSummary,
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

               <IconButton onClick={() => increaseItemQuantity(product.product_id)}>
                   <AddIcon/>
               </IconButton>

                <IconButton onClick={() => decreaseItemQuantity(product.product_id)}>
                    <RemoveIcon/>
                </IconButton>

               <IconButton onClick={() => deleteItem(product.product_id)}>
                     <DeleteIcon/>
                </IconButton>

           </Box>
       </Box>
   )
}

export default ProductCartView;