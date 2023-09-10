import * as React from 'react';

import HGallery from "./HGallery";
import Carousel from "./Carousel";


const GalleryWrapper = ({isDesktop, children}) => 
    isDesktop ? 
        <Carousel>{children}</Carousel> : 
        <HGallery>{children}</HGallery>;

export default GalleryWrapper;