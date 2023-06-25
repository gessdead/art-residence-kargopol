import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Grid } from '@mui/material';

const Footer = () => (
    <Container maxWidth='xl'>
        <Grid container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{ display: 'flex' }}>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                <StaticImage
                    src="../images/footer/leha.jpg"
                    loading="lazy"
                    layout="fullWidth"
                    style={{ width: '100%', height: '100%' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                <StaticImage
                    src="../images/footer/nko.png"
                    loading="lazy"
                    layout="fullWidth"
                    style={{ width: '100%', height: '100%' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                <StaticImage
                    src="../images/footer/museum.png"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '100%', height: '100%' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                <StaticImage
                    src="../images/footer/fond.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '100%', height: '100%' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </Grid>
        </Grid>
        © {new Date().getFullYear()}

    </Container>
)

export default Footer;