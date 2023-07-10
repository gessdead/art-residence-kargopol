import * as React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'gatsby';

const HeadBlock = ({
    title, 
    descr, 
    image, 
    url = null, 
    height = '100vh', 
    fontColor = 'white'
}) => {
    return <Box className='Promo'
        style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: height,
            position: 'relative',
            backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            color: fontColor,
            overflow: 'hidden',
            backgroundImage: `url(${image})`
        }}>
        <div style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            width: '100%',
            height: '100%',
            zIndex: 1,
        }}></div>
        <Container 
            maxWidth='lg' 
            className='Promo__Wrapper'
            >
            <Typography 
                variant='h4'
                mb={6} 
                fontFamily='var(--font-sans)'
                fontWeight='bold'
                marginBottom='20px'
                textAlign='center'>
                {title}
            </Typography>

            <Typography 
                variant='h5' 
                fontWeight='lighter' 
                fontSize='20px'
                fontFamily='var(--font-sans)' 
                textAlign='center'
                >
                {descr}
            </Typography>

            
            {url && 
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button style={{
                marginTop: '40px',
                background: 'white',
                borderRadius: '26px',
                width: 'auto',
                padding: '10px 50px'
            }}>
                <Link
                    to={url} 
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '700',
                        textTransform: 'lowercase',
                        textDecoration: 'none'
                    }}>
                    Подробнее
                </Link>
            </Button>
            </div>
            }
            
        </Container>
    </Box>
}

export default HeadBlock;