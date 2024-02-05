import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {alpha, InputBase, Link, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import HoverFocusMenu from "./hoverFocusMenu/HoverFocusMenu";
import axios from "axios";
import {
    usePopupState,
    bindTrigger,
    bindMenu,
} from 'material-ui-popup-state/hooks'
import {useCartContext} from "../../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge} from "@mui/base";


const Header = () => {

    const {openCart, getCartSize} = useCartContext();
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

    const pages = [
        {
            text: 'Strona główna',
            url: '/',
            id: 'main-page',
        },
        {
            text: 'Produkty',
            url: '/products',
            id: 'products-page',
        },
        {
            text: 'Zwierzęta',
            url: '/categoryAnimal',
            id: 'categoryAnimal-page',
        },
        {
            text: 'O Nas',
            url: '/about',
            id: 'about-page',
        },
        {
            text: 'Kontakt',
            url: '/contact',
            id: 'contact-page',
        },
        {
            text: 'Zamówienia',
            url: '/orders',
            id: 'orders-page',
        }
    ];
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('/server/category')
            .then(res => {
                var categories = res.data.map(category => {
                    return {
                        text: category.name,
                        url: '/products/' + category.category_id,
                    }
                });
                setCategories(categories);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        axios.get('/server/categoryAnimal')
            .then(res => {
                var animals = res.data.map(animal => {
                    return {
                        text: animal.name,
                        url: '/animals/' + animal.category_id,
                    }
                });
                setAnimals(animals);
            }).catch(err => {
            console.log(err);
        })
    }, []);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return(
        <Container>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                            <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                SKLEP ZOOLOGICZNY
                            </Typography>

                        <Box sx={{
                            display: 'flex',
                            alignIteams: 'center',
                            }
                        }>
                            {getCartSize()>0 && <Badge badgeContent={getCartSize()} color="error">
                                <IconButton
                                    onClick={openCart}
                                >
                                    <ShoppingCartIcon sx={{
                                        color: 'white',
                                    }}/>
                                </IconButton>
                            </Badge>}

                        </Box>

                    </Toolbar>
                </Container>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            <Button
                                href={pages[0].url}
                                id={pages[0].id}
                                variant="contained"
                            >
                                {pages[0].text}
                            </Button>

                            <HoverFocusMenu
                                text={pages[1].text}
                                url={pages[1].url}
                                id={pages[1].id}
                                items={categories}
                            />

                            <HoverFocusMenu
                                text={pages[2].text}
                                url={pages[2].url}
                                id={pages[2].id}
                                items={animals}
                            />

                            <Button
                                href={pages[3].url}
                                id={pages[3].id}
                                variant="contained"
                            >
                                {pages[3].text}
                            </Button>

                            <Button
                                href={pages[4].url}
                                id={pages[4].id}
                                variant="contained"
                            >
                                {pages[4].text}
                            </Button>

                            <Button
                                href={pages[5].url}
                                id={pages[5].id}
                                variant="contained"
                            >
                                {pages[5].text}
                            </Button>

                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </Container>
    );
}

export default Header;