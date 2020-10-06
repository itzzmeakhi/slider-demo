import React from 'react';

import './Slide.styles.css';

const Slide = (props) => {
    return(
        <div className = 'slide'>
            <img src = {require(`./../../images/${props.file}`)} alt = {props.name} />
        </div>
    )
}

export default Slide;