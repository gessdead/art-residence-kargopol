import * as React from 'react';
import Draggable from 'react-draggable';

const HGallery = ({children}) => {

    return (
        <div className="hided_scrollbar" style={{
            width: '100%',
            overflowX: 'scroll',
            height: '560px',
            margin: '20px 0',
            position: 'relative'
        }}>
            <div style={{
               display: 'flex',
               height: '100%',
               width: 'max-content'
            }}>          
                {children}
            </div>
        </div>
    )
}

export default HGallery;