import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import {Box, Typography, Container} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import './Promo.css';
import { StaticImage } from 'gatsby-plugin-image';

const Promo = () => {

    const bgImage = useStaticQuery(graphql`query getPromoImage {
        file(relativePath: {eq: "main/leha.jpg"}) {
            childImageSharp {
            original {
              src
            }
            }
        }
      }`)

    const scrollPage = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }

    return <Box className='Promo'
        style={{
        backgroundImage: `url(${bgImage.file.childImageSharp.original.src})`
    }}>
        <div className='Promo__Cover'></div>
        <Container 
            maxWidth='lg' 
            className='Promo__Wrapper'
            >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
            }}>
                <StaticImage
                    src="../../images/logo-white.png"
                    loading="eager"
                    layout="fullWidth"
                    style={{ 
                        width: '200px', 
                        height: '200px',
                    }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
        
            </div>
            
            <Typography 
                variant='h2'
                mb={6} 
                textTransform='uppercase' 
                fontFamily='var(--font-sans)'
                fontWeight='700'
                fontSize='38px'
                letterSpacing='0.1px'
                marginBottom='20px'
                textAlign='center'>
                Арт-резиденция
                <br/>
                «Архитектурная мозаика Каргополя»
            </Typography>


            <Typography 
                variant='h5' 
                fontWeight='lighter' 
                textTransform='uppercase' 
                fontSize='20px'
                fontFamily='var(--font-conqueror)' 
                textAlign='center'
                >
                Переосмысляем ценности деревянной городской архитектуры Каргополя и
                <br/>
                вовлекаем творческих профессионалов
            </Typography>
        </Container>
        <div className='Promo__Arrow'>
            <IconButton sx={{color: 'white', position: 'absolute', bottom: '30px', zIndex: 2 }}
                        onClick={scrollPage}>
                <KeyboardArrowDownOutlinedIcon fontSize="large" />
            </IconButton>
        </div>
    </Box>
}

export default Promo;