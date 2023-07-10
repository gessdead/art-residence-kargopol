import * as React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'gatsby';

const HeadBlock = ({title, descr, image, url}) => {
    return <Box className='Promo'
        style={{
        backgroundImage: `url(${image})`
    }}>
        <div className='Promo__Cover'></div>
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