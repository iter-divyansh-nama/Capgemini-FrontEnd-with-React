// npm i axios json-server

// npx json-server ./src/backend/db.json --watch --port 3000
//-->npx json-server pathOfFile --watch --port 3000

//How to create endpoints for json server
// ? {"EndpointName" : [array for the objects]}

import axios from "axios"

let axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 5000,
    headers:{
        "Content-Type": "application/json"
    }
})

export let postProduct=async()=>{
    let res = await axiosInstance.post("/products", {name:"J", friend:"V"})
    console.log(res);

    console.log(res.data);
    
    
}

export let patchProduct=async(id,data)=>{
    let res= await axiosInstance.patch(`/products/${id}`,data)
    console.log(res.data);
    
}

export let getProducts=async()=>{
    let resa = await axiosInstance.get("/products")
    console.log(resa);
    console.log(resa.data);
    
    
}