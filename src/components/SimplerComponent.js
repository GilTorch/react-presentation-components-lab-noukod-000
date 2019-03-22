import React from 'react';

const SimplerComponent=({ mood,handleClick })=>{
    return(<div onClick={ handleClick }>I am just happy</div>)
}

export default SimplerComponent;