import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import {
    usePopupState,
    bindDialog,
} from 'material-ui-popup-state/hooks'
import {useEffect, useState} from "react";
import {useCartContext} from "../../context/CartContext";
import axios from "axios";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ProductCartView from "./productCartView/ProductCartView";

const Cart = ({isOpen}) => {
    const popupState = usePopupState({
        variant: 'dialog',
    })

    const {
        closeCart,
        cartItems,
        getCartSize,
        increaseItemQuantity,
        decreaseItemQuantity,
        deleteItem,
        getItemQuantity,
        goToSummary,
    } = useCartContext();

    useEffect(() => {
        if (isOpen) {
            popupState.open()
        } else {
            popupState.close()
        }
    }, [isOpen]);

    const [products, setProducts] = useState([]);

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
        <React.Fragment>
            <Dialog
                fullWidth
                maxWidth="md"
                {...bindDialog(popupState)}
                onClose={() => closeCart()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"MÓJ KOSZYK"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ZAWARTOŚĆ MOJEGO KOSZYKA:
                    </DialogContentText>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                    }}>
                        {
                            cartItems.map((cartItem) => (
                                typeof products.find(product => product.product_id == cartItem.id) !== 'undefined'
                                    && <ProductCartView
                                            key={cartItem.id}
                                            product={products.find(product => product.product_id == cartItem.id)}
                                            increaseItemQuantity={increaseItemQuantity}
                                            decreaseItemQuantity={decreaseItemQuantity}
                                            deleteItem={deleteItem}
                                            getItemQuantity={getItemQuantity}
                                            goToSummary={goToSummary}
                                        />
                            ))
                        }

                        <Typography
                            sx={{
                                fontWeight: 700,
                                color: 'primary.main',
                                fontStyle: 'italic',
                                paddingTop: 2,
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
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeCart}>
                        Wyjdź
                    </Button>
                    <Button onClick={goToSummary} autoFocus>
                        Przejdź do podsumowania
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default Cart