import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}> {props.name} </p>
        </div>
    )
}

export default userOutput;