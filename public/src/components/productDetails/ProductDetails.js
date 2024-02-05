import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import AddToCartButton from "../addToCartButton/AddToCartButton";
import Comment from "../comment/Comment";

const ProductDetails = () => {

    const {product_id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [user, setUser] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] =useState(false);
    const [refreshSignal, setRefreshSignal] = useState(false);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
        if (event.target.value.length > 0 && event.target.value.length < 255
        && user.length > 0 && user.length < 255) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }

    const handleUserChange = (event) => {
        setUser(event.target.value);
        if (event.target.value.length > 0 && event.target.value.length < 255
        && comment.length > 0 && comment.length < 255) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }

    const sendComment = () => {
        setLoading(true);
        axios.post('/server/comments', {
            product_id: product_id,
            user: user,
            info: comment
        }).then(res => {
            console.log(res.data);
            setComment('');
            setUser('');
            setButtonDisabled(true);
            refresh();
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    const refresh = () => {
        setRefreshSignal(!refreshSignal);
    }

    useEffect(() => {
        axios.get('/server/products/' + product_id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            }).catch(err => {
                console.log(err);
                navigate('/404')
        })

    }, [product_id]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom:1,
                marginTop:1,
                '& > img': { m: 1, width: '80ch' },
            }}
        >
            <img src={"http://localhost:3001/" + product.image_id} alt={product.name} />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                marginLeft:1,
                marginBottom: 'auto',

            }}>

                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '1.3rem',
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {product.name}
                </Typography>

                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{
                        textAlign:"justify",
                        marginBottom:2,
                    }}
                >
                    {product.description}
                </Typography>

                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                >
                    {product.price} zł
                </Typography>

                <Typography
                    variant="overline"
                    display="block"
                    gutterBottom
                    sx={{
                        marginBottom:2,
                    }}
                >
                    {(product.price/product.weight*1000).toFixed(2)} zł/kg
                </Typography>

                <AddToCartButton product_id={product_id}/>
                <Box sx={{
                    my:1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}>
                    <TextField label={"Wpisz komentarz"} value={comment} onChange={handleCommentChange}/>
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                    }}>
                        <TextField fullWidth label={"Wpisz nazwę użytkownika"} value={user} onChange={handleUserChange}/>
                        <Button onClick={sendComment} variant="contained" disabled={buttonDisabled || loading}>Dodaj komentarz</Button>
                    </Box>
                </Box>
                <Comment procuct_id={product_id} refreshSignal={refreshSignal} refresh={refresh}/>

            </Box>
        </Box>
    )
}

export default ProductDetails;