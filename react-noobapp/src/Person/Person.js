import React from 'react';

const person=(props)=>{
    return (  
        <div>
            <p>Hey, I am {props.name} and i'm {props.age} years old</p>
            <p>{props.children}</p>    
        </div>
    )
};
export default person; 