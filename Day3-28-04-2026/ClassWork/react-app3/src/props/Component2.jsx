import React from "react";
import Component3 from "./Component3";

const Component2 =(props1)=>{
    console.log(props1);

    let {num,setNum}=props1;

    console.log(Object.isFrozen(props1));
    return (
        <div>
        <h1>Component 2 count {num.count} </h1>
        <button onClick={()=>{
            setNum(prev=>({
                ...prev, count:num.count+1
            }))
        }} > Increment </button>
        
        </div>
        
    )
}

export default Component2