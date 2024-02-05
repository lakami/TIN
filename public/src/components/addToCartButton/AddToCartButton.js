import React from "react";
import {useCartContext} from "../../context/CartContext";
import Button from "@mui/material/Button";

const AddToCartButton = ({product_id}) => {
    const {increaseItemQuantity} = useCartContext();
    return (
        <Button variant="contained" onClick={() => increaseItemQuantity(product_id)}>
            Dodaj do koszyka
        </Button>
    );
}
export default AddToCartButton;