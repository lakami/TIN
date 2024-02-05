import React, {Fragment} from "react";
import Typography from "@mui/material/Typography";

const About = () => {

    return(
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
                    O NAS
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
                        Witaj w naszym sklepie zoologicznym!
                        Nasza pasja do zwierząt sprawia, że chcemy dostarczać najwyższej jakości produkty i usługi dla Twoich pupili. Jesteśmy tutaj, by zadbać o wszystkie potrzeby Twojego zwierzaka.
                </Typography>

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
                        marginTop: 4,
                    }}
                >
                    Nasza misja
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
                    Naszą główną misją jest zapewnienie, że każde zwierzę jest szczęśliwe i zdrowe. Dlatego oferujemy szeroki wybór produktów, które pomogą Ci zatroszczyć się o dobrostan swojego zwierzaka. Nasza oferta obejmuje wysokiej jakości karmę, akcesoria, zabawki i wiele innych artykułów zoologicznych.
                </Typography>

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
                        marginTop: 4,
                    }}
                >
                    Dlaczego nasz sklep?
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

                    Eksperci: Nasz zespół to pasjonaci zwierząt, którzy chętnie dzielą się wiedzą i pomagają Ci wybrać odpowiednie produkty.
                    Wysoka Jakość: Dbamy o jakość naszych produktów, dlatego oferujemy tylko to, co sami byśmy wybrali dla naszych zwierząt.
                    Wsparcie dla Adopcji: Jesteśmy dumni z naszej współpracy z lokalnymi schroniskami i organizacjami pomagającymi bezdomnym zwierzętom.
                    Różnorodność: Oferujemy szeroki wybór produktów, abyś mógł znaleźć wszystko, czego potrzebuje Twój zwierzak.

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
                    marginTop: 4,
                }}
            >
                Dziękujemy za odwiedzenie naszego sklepu zoologicznego. Jesteśmy przekonani, że razem stworzymy wyjątkowe i zdrowe życie dla Twojego pupila. Jeśli masz pytania lub potrzebujesz pomocy, nie wahaj się skontaktować z nami. Razem dbamy o dobrostan zwierząt!
            </Typography>
        </Fragment>

    )
}

export default About;