import * as React from 'react';
import { default as BaseCarousel } from 'react-material-ui-carousel'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Container, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Carousel = ({title, slidesData}) => {
    const slides = slidesData.allFile.edges.map((item) => {
        return {
            image: getImage(item.node.childImageSharp.gatsbyImageData),
            id: parseInt(item.node.childImageSharp.fluid.originalName)
        }
    });

    // сотртируем по числовому порядку 
    slides.sort((a, b) => a.id - b.id);

    return <Container id='concept' maxWidth='lg'>
            <Typography variant='h3' textAlign='center'>{title}</Typography>
            <BaseCarousel
                autoPlay={false}
                animation='slide'
                navButtonsAlwaysVisible={true}
                indicators={false}
                NextIcon={<NavigateNextIcon />}
                PrevIcon={<NavigateBeforeIcon />}>
                {
                    slides.map((item, i) =>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <GatsbyImage 
                        image={item.image} 
                        key={i} 
                        alt=''
                    />
                    </div>
                    )
                }
            </BaseCarousel>
    </Container>
}

export default Carousel;
