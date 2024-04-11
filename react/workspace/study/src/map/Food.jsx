import React from 'react';

const Food = ({food}) => {
    const {id, name} = food;
    return (
        <div>
            {/* <li key={props.i} style={props.style}>{props.food.name}, {props.food.id}</li> */}
            {id}, {name}
        </div>
        
    );
};

export default Food;