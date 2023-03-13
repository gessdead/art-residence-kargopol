import * as React from 'react';
import { default as BaseCarousel } from 'react-material-ui-carousel'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Carousel = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query carouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "mainCarousel"}}) {
            edges {
            node {
                childImageSharp {
                gatsbyImageData
                }
            }
            }
        }
    }`);

    const slides = IMAGES_DATA.allFile.edges.map((item, i) => {
        return {
            image: getImage(item.node.childImageSharp.gatsbyImageData)
        }
    });

    return <Container maxWidth='lg'>
            <BaseCarousel 
                navButtonsAlwaysVisible={true}
                NextIcon={<NavigateNextIcon />}
                PrevIcon={<NavigateBeforeIcon />}>
                {
                    slides.map((item, i) => <GatsbyImage image={item.image} key={i} alt='' />)
                }
            </BaseCarousel>
    </Container>
}

export default Carousel;