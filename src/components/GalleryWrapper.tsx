import * as React from 'react';
import { useMediaQuery } from "../utils/useMediaQuery";

import HGallery from "./HGallery";
import Carousel from "./Carousel";


const GalleryWrapper = ({children}) => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    return isDesktop ? <Carousel>{children}</Carousel> : <GalleryWrapper>{children}</GalleryWrapper>
}

export default GalleryWrapper;