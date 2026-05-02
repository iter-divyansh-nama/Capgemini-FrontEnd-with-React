import { useState } from "react"
import Component1 from "./props/Component1"
import ApiCalling from "./UseEffectComponent/ApiCalling"
import { useEffect } from "react";
import ConditionalRendering from "../../../Day2-27thApril/ClassWork/react-appSecond/src/ConditionalRendering";
import ComponentConstructor from "./ComponentLifeCycleFunction/ComponentConstructor";

function App(){
  let [count, setCount]= useState(0);

  useEffect(()=>{
    console.log("use effect this is")
  } , [])

  console.log("Hi There")


  return (
  <div>

    <h1>app working</h1>
    {/* <Component1 /> */}
    {/* <ApiCalling /> */}
    <ComponentConstructor />
  </div>
  )
}
export default App