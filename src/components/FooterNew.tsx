import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Grid } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const bgImage = useStaticQuery(graphql`query getSeparator {
        file(relativePath: {eq: "footer/separator16.png"}) {
            childImageSharp {
                original {
                src
                }
            }
        }
      }`)

    return (
        <div>
            <div style={{
                margin: '20px 0'
            }}>
                <StaticImage
                    src="../images/separator-arrow.png"
                    loading="eager"
                    layout="fullWidth"
                    style={{ maxWidth: '400px', margin: '0 auto' }}
                    quality={100}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </div>
            <Container maxWidth='xl'>
                <Grid container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: 'flex' }}>
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
                            src="../images/footer/leha_small.png"
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
                            src="../images/footer/mus_small.png"
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
        </div>
    )
}

export default Footer;