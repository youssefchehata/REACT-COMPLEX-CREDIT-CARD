import React from 'react';
import Prototype from './prototype.jsx'

const Input=(props)=>{
    return(
        props.input.map((el,i)=><Prototype item ={el}  key={i} />

        )
    )
}


export default Input;






