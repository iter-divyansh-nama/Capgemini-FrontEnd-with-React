import React from "react";
import { useEffect } from "react";

const ComponentConstructor =() =>{
    useEffect(()=>{
        console.log("this is from useEffect")
    },[])

    return(
        <div>ComponentConstructor</div>
    )
}

export default ComponentConstructor