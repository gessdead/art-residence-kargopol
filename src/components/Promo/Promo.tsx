import * as React from 'react';

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

    return <section className='Promo'
        style={{
        backgroundImage: `url(../../images/main/leha.jpg)`
    }}>
        <div className='Promo__Cover'></div>
        <div className='Promo__Wrapper'>
            <span className='Promo__Title'>
                Арт-резиденция
                <br/>
                «Архитектурная мозаика Каргополя»
            </span>

            <span className='Promo__Descr'>
                Переосмысляем ценности деревянной городской архитектуры Каргополя и
                <br/>
                вовлекаем творческих профессионалов
            </span>
            <div className='Promo__Arrow'>
                <IconButton onClick={scrollPage}>
                    <KeyboardArrowDownOutlinedIcon color="action" fontSize="large" />
                </IconButton>
            </div>
        </div>
    </section>
}

export default Promo;