import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

const LazyImage = (props) => {
    return (
        <LazyLoadImage
            effect="blur" 
            {...props}
        />
    );
}

export default LazyImage;