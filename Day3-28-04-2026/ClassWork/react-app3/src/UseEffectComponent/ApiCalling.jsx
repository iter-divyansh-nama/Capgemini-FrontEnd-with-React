import React, { useEffect } from "react"
import { Fragment } from "react"
import { useState } from "react"

const ApiCalling=()=>{
   
    let [apiData, setApiData]=useState([])
    useEffect(
        ()=>{
            (async ()=>{
                let res = await fetch("https://api.github.com/users");
                console.log(res);

                let data = await res.json();
                console.log(data);
                setApiData(data);
            })()
        },[]
    )

    return(
        <div style = {{display:"flex", flexWrap: "wrap" , gap: "20px"}}>
            {apiData.map(v=>(

                <Fragment key={v.id}>
                    <div>
                         <p><b>{v.id}</b> <b> {v.login} </b></p>
                    <img src={`${v.avatar_url}`} height="200px"  />
                    </div>
                   

                </Fragment>


            ))}
        </div>
    )
}

export default ApiCalling