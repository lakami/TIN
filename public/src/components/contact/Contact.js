import React, {Fragment} from 'react';
import Typography from "@mui/material/Typography";

const Contact = () => {

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
                KONTAKT
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'monospace',
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    textAlign: 'justify',
                }}
            >
                Adres: ul. Karmelicka 26, 31-128 Kraków
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'monospace',
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    textAlign: 'justify',
                }}
            >
                Telefon: +48 333 300 300
            </Typography>

            <Typography
                sx={{
                    fontFamily: 'monospace',
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    textAlign: 'justify',
                }}
            >
                E-mail: sklep@sklep.pl
            </Typography>
        </Fragment>

    );
}

export default Contact;