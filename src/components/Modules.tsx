import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Grid, Typography, Box } from '@mui/material';

const Modules = () => {
    const IMAGES_DATA = useStaticQuery(graphql`
        query moduleImagesQuery {
            allFile(filter: {relativeDirectory: {eq: "moduleIcons"}}) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }`);

    const MODULES_LIST = [{
        id: 'm1',
        image: getImage(IMAGES_DATA.allFile.edges[0].node.childImageSharp.gatsbyImageData),
        title: 'МОДУЛЬ 1',
        text: 'Создание концепции развития Арт-резиденции в доме купца А.П. Лёхова',
        period: 'октябрь 2022',
        link: '/first-module'
    }, {
        id: 'm2',
        image: getImage(IMAGES_DATA.allFile.edges[1].node.childImageSharp.gatsbyImageData),
        title: 'МОДУЛЬ 2',
        text: 'Выявление типологии деревянной застройки и особенностей города Каргополя',
        period: 'март 2023',
        link: '/second-module'
    }, {
        id: 'm3',
        image: getImage(IMAGES_DATA.allFile.edges[2].node.childImageSharp.gatsbyImageData),
        title: 'МОДУЛЬ 3',
        text: 'Возможности приспособления деревянных зданий (домов кластера «Фамилия») для современного использования',
        period: 'апрель-май 2023',
        link: '/third-module'
    }, {
        id: 'm4',
        image: getImage(IMAGES_DATA.allFile.edges[3].node.childImageSharp.gatsbyImageData),
        title: 'МОДУЛЬ 4',
        text: 'Создание архитектурно-исторического кода города Каргополя и применение его в благоустройстве (на территории домов кластера "Фамилия")"',
        period: 'июнь 2023',
        link: '/fourth-module'
    }];

    return (
        <Container maxWidth='xl' id='modules'>
            <Grid container
                spacing={4}
                justifyContent="center"
                alignItems="center"
                sx={{ padding: '25px 0', display: 'flex' }}>
                {MODULES_LIST.map(({ image, title, text, period, link, id }) => (
                    <Grid item key={id} xs={12} sm={6} md={3} sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
                        <Link to={link} style={{ display: 'flex', alignItems: 'center' }}>
                            <GatsbyImage
                                image={image}
                                alt=''
                                style={{ margin: '0 auto' }}
                            />
                        </Link>
                        <Box sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center' }}>
                            <Typography variant='button' fontWeight='bold' sx={{ textAlign: 'center' }}>
                                {title}
                            </Typography>
                            <Typography variant='body2' sx={{ textAlign: 'center' }}>
                                {text}
                            </Typography>
                            <Typography variant='caption' sx={{ textAlign: 'center' }}>
                                {period}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Modules;
