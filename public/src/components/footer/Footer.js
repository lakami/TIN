import React  from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
    <Container>
            <Container maxWidth="xl" sx={{
                backgroundColor: 'primary.main',
                height: '5vh',
                display: 'flex',
                justifyContent: 'center',
            }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="h2"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',

                        }}
                    >
                        ©2024
                    </Typography>
            </Container>
    </Container>

    );
}

export default Footer;