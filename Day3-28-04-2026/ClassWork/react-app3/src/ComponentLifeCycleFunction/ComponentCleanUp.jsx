import React from "react";
import { useEffect } from "react";

const ComponentCleanUp = () =>{
    useEffect(()=>{
        return()=>{
            console.log("clean up function")
        }
    },[])
    return(
        <div style={{backgroundColor:'navy' , color:"white"}}>
            <h1>this is component with cleanup function</h1>
        </div>
    )
}
export default ComponentCleanUp