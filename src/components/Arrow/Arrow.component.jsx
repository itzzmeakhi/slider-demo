import React from 'react';

import './Arrow.styles.css';

const Arrow = ({direction, click, ...props}) => {
    return (
        <React.Fragment>
            {direction === 'right' ? (
                <button
                    {...props}
                    type = 'button'
                    onClick = {click}>
                        {`${'>'}`}
                </button>
            ) : (
                <button
                    {...props}
                    type = 'button'
                    onClick = {click}>
                        {`${'<'}`}
                </button>
            )}
        </React.Fragment>
    )
}

export default Arrow;