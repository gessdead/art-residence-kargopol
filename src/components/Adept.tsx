import * as React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { Typography } from '@mui/material';

const Adept = ({ photo }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start'
    }}>
        <GatsbyImage 
            image={photo}
            loading="eager"
            style={{
                 minWidth: '64px',
                 marginRight: '16px',
                 width: '64px',
                 height: '64px',
                 borderRadius: '50%'
                }}
            alt="Дом Лехова"
        />
        <div>
            <Typography variant='h5'>
                Дарья Мельник
            </Typography>
            <Typography variant='body1'>
                Куратор первого модуля
                <br/>
                Выпускница СПбГАСУ, архитектор-реставратор
            </Typography>
        </div>
    </div>
)

export default Adept;