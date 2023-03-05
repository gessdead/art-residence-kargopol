import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Grid, Typography, Box } from '@mui/material';

const ModulesList = [{
    image: '../moduleIcons/first.jpg',
    title: 'МОДУЛЬ 1',
    text: 'Создание концепции развития Арт-резиденции в доме купца А.П. Лёхова',
    period: 'октябрь 2022'
}, {
    image: '../moduleIcons/second.jpg',
    title: 'МОДУЛЬ 2',
    text: 'Выявление типологии деревянной застройки и особенностей города Каргополя',
    period: 'март 2023'
}, {
    image: '../moduleIcons/third.jpg',
    title: 'МОДУЛЬ 3',
    text: 'Возможности приспособления деревянных зданий (домов кластера «Фамилия») для современного использования',
    period: 'апрель-май 2023'
}, {
    image: '../moduleIcons/fourth.jpg',
    title: 'МОДУЛЬ 4',
    text: 'Создание концепции развития Арт-резиденции в доме купца А.П. Лёхова',
    period: 'июнь 2022'
}];

const Modules = () => (
    <Container maxWidth='xl'>
        <Grid container
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{ padding: '25px 0', display: 'flex' }}>
            {ModulesList.map(({image, title, text, period}) => (
                <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
                    <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            src={image}
                            loading="eager"
                            width={150}
                            alt=""
                            style={{ margin: '0 auto' }}
                        />
                    </Link>
                    <Box sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center'}}>
                        <Typography variant='button' fontWeight='bold' sx={{ textAlign: 'center'}}>
                           {title}
                        </Typography>
                        <Typography variant='body2' sx={{ textAlign: 'center'}}>
                            {text}
                        </Typography>
                        <Typography variant='caption' sx={{ textAlign: 'center'}}>
                            {period}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Container>
)

export default Modules;