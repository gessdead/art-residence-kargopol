import * as React from 'react';

import {Box, Typography, Container} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import './Promo.css';

const Promo = () => {

    const scrollPage = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }

    return <Box className='Promo'
        style={{
        backgroundImage: `url(../../images/main/leha.jpg)`
    }}>
        <div className='Promo__Cover'></div>
        <Container maxWidth='lg' className='Promo__Wrapper'>
            <Typography variant='h2' mb={6} fontWeight='bold' textAlign='center'>
                Арт-резиденция
                <br/>
                «Архитектурная мозаика Каргополя»
            </Typography>


            <Typography variant='h5' fontWeight='lighter' textAlign='center'>
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