import React from "react";

const Component3=(props)=>{
    console.log("===props of Component3===");
    let {num, setNum} = props.currentNum
    // console.log(props.info.info.class)
    return(
        <div>
            {/* <h1>Component3</h1> */}
            <h2>thi is  Comonent 3 Count {num.count} </h2>
            <button onClick={()=>{
                setNum({count:num.count-1})
            }}> Decrement </button>
        </div>
    );
};

export default Component3