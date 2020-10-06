import React from 'react';

import './Dots.styles.css';

const Dots = ({active}) => {
    let activeItem = null;
    if(active) { 
        activeItem = 'active' 
    }
    return (
        <div className = {`dots ${activeItem}`}>
        </div>
    )
}

export default Dots;