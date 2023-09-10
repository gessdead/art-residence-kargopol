import * as React from 'react';
import { default as BaseCarousel } from 'react-material-ui-carousel';
import { Container } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Carousel = ({children}) => {

    return <Container maxWidth='lg' style={{margin: '20px auto'}}>
            <BaseCarousel
                autoPlay={false}
                animation='slide'
                navButtonsAlwaysVisible={true}
                indicators={false}
                NextIcon={<NavigateNextIcon />}
                PrevIcon={<NavigateBeforeIcon />}>
                    {children}
            </BaseCarousel>
    </Container>
}

export default Carousel;
