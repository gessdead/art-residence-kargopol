import * as React from 'react';
import { default as BaseCarousel } from 'react-material-ui-carousel'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const SecondCarousel = ({title}) => {
    const IMAGES_DATA = useStaticQuery(graphql`query secondCarouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "2ndCarousel"}}) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }`);

    const slides = IMAGES_DATA.allFile.edges.map((item) => {
        return {
            image: getImage(item.node.childImageSharp.gatsbyImageData)
        }
    });

    return <Container id='concept' maxWidth='lg'>
            <Typography variant='h3' textAlign='center'>{title}</Typography>
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

export default SecondCarousel;
